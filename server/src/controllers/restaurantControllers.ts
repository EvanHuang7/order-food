import { Request, Response } from "express";
import prisma from "../lib/prisma";
import { NotificationType, Prisma } from "@prisma/client";
import { s3Client } from "../lib/s3";
import { Upload } from "@aws-sdk/lib-storage";

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

    // Price range
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

    // Categories type
    if (categories && categories !== "any") {
      const categoriesArray = (categories as string)
        .split(",")
        .map((cat) => cat.trim())
        .filter(Boolean);

      // && (overlap) operator in PostgreSQL checks if the
      // arrays have any elements in common
      if (categoriesArray.length > 0) {
        whereConditions.push(
          Prisma.sql`r.categories && ${Prisma.join(
            [categoriesArray],
            ","
          )}::text[]`
        );
      }
    }

    // Best Practice: In real-industry scenarios, it's best to calculate the
    // average rating on the backend and return only the final number.
    // Detailed ratings data should be fetched in a separated API call.
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
        ) AS location,
        COALESCE(
          (
            SELECT json_agg(
              json_build_object(
                'id', rr.id,
                'customerId', rr."customerId",
                'restaurantId', rr."restaurantId",
                'rating', rr.rating,
                'comment', rr.comment,
                'createdAt', rr."createdAt",
                'updatedAt', rr."updatedAt",
                'customer', json_build_object(
                  'id', c.id,
                  'name', c.name,
                  'email', c.email,
                  'phoneNumber', c."phoneNumber",
                  'profileImgUrl', c."profileImgUrl",
                  'createdAt', c."createdAt",
                  'updatedAt', c."updatedAt"
                )
              )
            )
            FROM "RestaurantRating" rr
            JOIN "Customer" c ON rr."customerId" = c.id
            WHERE rr."restaurantId" = r.id
          ),
          '[]'
        ) AS ratings
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
    const {
      name,
      phoneNumber,
      profileImgUrl,
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
      files,
    } = req.body;

    // Check input
    if (!name || !phoneNumber) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    let uploadedProfileImgUrl = "";
    // Upload profileImgUrl to AWS S3 bucket if there is a file and
    // the file IS NOT an existing AWS S3 file (profileImgUrl
    // starts with "https://of-s3-images.s3.us-east-1.amazonaws.com/restaurant")
    if (
      profileImgUrl &&
      !profileImgUrl.startsWith(
        "https://of-s3-images.s3.us-east-1.amazonaws.com/restaurant"
      )
    ) {
      if (!profileImgUrl.startsWith("data:image/")) {
        res.status(400).json({ error: "Invalid profileImgUrl format" });
        return;
      }

      // Extract content type and base64 string
      const matches = profileImgUrl.match(/^data:(image\/\w+);base64,(.+)$/);
      if (!matches) {
        res.status(400).json({ error: "Malformed base64 image" });
        return;
      }

      const contentType = matches[1];
      const base64Data = matches[2];
      const buffer = Buffer.from(base64Data, "base64");

      // Generate a key
      const key = `restaurant/${Date.now()}-profile-image.${
        contentType.split("/")[1]
      }`;

      const uploadParams = {
        Bucket: process.env.S3_BUCKET_NAME!,
        Key: key,
        Body: buffer,
        ContentType: contentType,
      };

      const uploadResult = await new Upload({
        client: s3Client,
        params: uploadParams,
      }).done();

      uploadedProfileImgUrl = uploadResult.Location || "";
    }

    let photoUrls: string[] = [];
    // Upload photos to AWS S3 bucket if there is a file
    if (files && files.length > 0) {
      photoUrls = await Promise.all(
        files.map(async (file: string) => {
          if (!file.startsWith("data:image/")) {
            res.status(400).json({ error: "Invalid file format" });
            return;
          }

          // Extract content type and base64 string
          const matches = file.match(/^data:(image\/\w+);base64,(.+)$/);
          if (!matches) {
            res.status(400).json({ error: "Malformed base64 image" });
            return;
          }

          const contentType = matches[1];
          const base64Data = matches[2];
          const buffer = Buffer.from(base64Data, "base64");

          // Generate a key
          const key = `restaurant/${Date.now()}-image.${
            contentType.split("/")[1]
          }`;

          const uploadParams = {
            Bucket: process.env.S3_BUCKET_NAME!,
            Key: key,
            Body: buffer,
            ContentType: contentType,
          };

          const uploadResult = await new Upload({
            client: s3Client,
            params: uploadParams,
          }).done();

          return uploadResult.Location || "";
        })
      );
    }
    // Remove all empty string values in the list
    photoUrls = photoUrls.filter((str) => str !== "");

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
          description,
          locationId,
          categories,
          // Only include profileImgUrl field to update when
          // uploadedProfileImgUrl is not empty string
          ...(uploadedProfileImgUrl && {
            profileImgUrl: uploadedProfileImgUrl,
          }),
          // Only include photoUrls field to update when
          // input photoUrls has value
          ...(photoUrls.length > 0 && { photoUrls }),
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
