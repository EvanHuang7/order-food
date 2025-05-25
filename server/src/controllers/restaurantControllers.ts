import { Request, Response } from "express";
import prisma from "../lib/prisma";
// import s3Client from "../lib/s3";
import { NotificationType, Prisma } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";

export const getRestaurant = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const restaurant = await prisma.restaurant.findUnique({
      where: { cognitoId },
      include: {
        location: true,
        favoriteBy: {
          include: {
            customer: true,
          },
        },
      },
    });

    if (restaurant) {
      res.json(restaurant);
      return;
    } else {
      res.status(404).json({ message: "Restaurant not found" });
      return;
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving restaurant: ${error.message}` });
    return;
  }
};

export const getRestaurants = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { priceMin, priceMax, categories } = req.query;

    let whereConditions: Prisma.Sql[] = [];

    if (priceMin) {
      whereConditions.push(
        Prisma.sql`r."pricePerPereson" >= ${Number(priceMin)}`
      );
    }

    if (priceMax) {
      whereConditions.push(
        Prisma.sql`r."pricePerPereson" <= ${Number(priceMax)}`
      );
    }

    if (categories && categories !== "any") {
      const categoriesArray = (categories as string)
        .split(",")
        .map((cat) => cat.trim())
        .filter(Boolean);

      if (categoriesArray.length > 0) {
        whereConditions.push(
          Prisma.sql`r.categories @> ${Prisma.join(
            [categoriesArray],
            ","
          )}::text[]`
        );
      }
    }

    const completeQuery = Prisma.sql`
      SELECT 
        r.*,
        json_build_object(
          'id', l.id,
          'address', l.address,
          'city', l.city,
          'province', l.province,
          'country', l.country,
          'postalCode', l."postalCode"
        ) AS location
      FROM "Restaurant" r
      LEFT JOIN "Location" l ON r."locationId" = l.id
      ${
        whereConditions.length > 0
          ? Prisma.sql`WHERE ${Prisma.join(whereConditions, " AND ")}`
          : Prisma.empty
      }
    `;

    const restaurants = await prisma.$queryRaw(completeQuery);

    res.json(restaurants);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving restaurants: ${error.message}` });
  }
};

export const createRestaurant = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId, name, email } = req.body;

    // Check input
    if (!cognitoId || !name || !email) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    // Check if there is existing in db before create
    const existing = await prisma.restaurant.findFirst({
      where: {
        OR: [{ cognitoId }, { email }],
      },
    });
    if (existing) {
      res.status(409).json({ message: "Restaurant already exists" });
      return;
    }

    // Use one transaction for create restaurant + notification record
    const restaurant = await prisma.$transaction(async (tx) => {
      // Create restaurant
      const newRestaurant = await prisma.restaurant.create({
        data: {
          cognitoId,
          name,
          email,
          phoneNumber: "",
          profileImgUrl: "",
        },
      });

      // Create Notification record
      await tx.notification.create({
        data: {
          type: NotificationType.SubscribeApp,
          // TODO: add restaurant link.
          message:
            `Hi, dear OrderFood subscribers,\n\n` +
            `We're excited to announce that a new restaurant, ${name}, has just joined our platform! As part of our welcome promotion, you'll enjoy 10% off your first order at this restaurant. Don't miss out—place your first order today and enjoy delicious food at a discount!`,
        },
      });

      return newRestaurant;
    });

    res.status(201).json(restaurant);
    return;
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error creating restaurant: ${error.message}` });
    return;
  }
};

export const updateRestaurant = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const files = req.files as Express.Multer.File[];
    const {
      name,
      phoneNumber,
      address,
      city,
      province,
      postalCode,
      country,
      openTime,
      closeTime,
      pricePerPereson,
      categories,
      description,
    } = req.body;

    // Check input
    if (!name) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    // Upload photos to AWS S3 bucket
    const photoUrls: string[] = [];
    // TODO: enable it after setting up S3 bucket
    // const photoUrls = await Promise.all(
    //   files.map(async (file) => {
    //     const uploadParams = {
    //       Bucket: process.env.S3_BUCKET_NAME!,
    //       Key: `properties/${Date.now()}-${file.originalname}`,
    //       Body: file.buffer,
    //       ContentType: file.mimetype,
    //     };

    //     const uploadResult = await new Upload({
    //       client: s3Client,
    //       params: uploadParams,
    //     }).done();

    //     return uploadResult.Location;
    //   })
    // );

    // Check if restaurant has a location record or not
    const existingRestaurant = await prisma.restaurant.findUnique({
      where: { cognitoId },
      include: { location: true },
    });
    if (!existingRestaurant) {
      res.status(404).json({ message: "Restaurant not found" });
      return;
    }

    // Do write actions in one transaction
    const updatedRestaurantWithFlag = await prisma.$transaction(async (tx) => {
      let locationId = existingRestaurant.locationId;
      const locationFields = [address, city, province, postalCode, country];
      const hasCompleteLocation = locationFields.every((field) => !!field);
      let locationUpdated = false;

      // Only update and create when having complete location
      if (hasCompleteLocation) {
        locationUpdated = true;

        if (locationId) {
          // Update existing Location
          await tx.location.update({
            where: { id: locationId },
            data: {
              address,
              city,
              province,
              postalCode,
              country,
            },
          });
        } else {
          // Create new Location and link it
          const newLocation = await tx.location.create({
            data: {
              address,
              city,
              province,
              postalCode,
              country,
            },
          });

          locationId = newLocation.id;
        }
      }

      // Update Restaurant
      const restaurant = await tx.restaurant.update({
        where: { cognitoId },
        data: {
          name,
          phoneNumber,
          pricePerPereson: Number(pricePerPereson),
          openTime,
          closeTime,
          categories,
          description,
          // TODO: update photoUrls after enable S3 bucket
          // photoUrls,
          locationId,
        },
      });

      return { restaurant, locationUpdated };
    });

    res.json(updatedRestaurantWithFlag);
    return;
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error updating restaurant: ${error.message}` });
    return;
  }
};
