import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";
import { S3Client } from "@aws-sdk/client-s3";

const prisma = new PrismaClient();

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
});

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
    // TODO: remove favoriteIds
    const { favoriteIds, priceMin, priceMax, categories } = req.query;

    let whereConditions: Prisma.Sql[] = [];

    if (favoriteIds) {
      const favoriteIdsArray = (favoriteIds as string)
        .split(",")
        .map((id) => parseInt(id.trim()))
        .filter(Boolean);

      if (favoriteIdsArray.length > 0) {
        whereConditions.push(
          Prisma.sql`r.id IN (${Prisma.join(favoriteIdsArray)})`
        );
      }
    }

    // TODO: store price range in restaurant

    // if (priceMin) {
    //   whereConditions.push(
    //     Prisma.sql`p."price" >= ${Number(priceMin)}`
    //   );
    // }

    // if (priceMax) {
    //   whereConditions.push(
    //     Prisma.sql`p."price" <= ${Number(priceMax)}`
    //   );
    // }

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
    const { cognitoId, name, email, phoneNumber } = req.body;

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

    // Create restaurant
    const restaurant = await prisma.restaurant.create({
      data: {
        cognitoId,
        name,
        email,
        phoneNumber,
      },
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
    const updatedRestaurant = await prisma.$transaction(async (tx) => {
      let locationId = existingRestaurant.locationId;

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

      // Update Restaurant
      return await tx.restaurant.update({
        where: { cognitoId },
        data: {
          name,
          phoneNumber,
          openTime,
          closeTime,
          categories,
          description,
          // TODO: update photoUrls after enable S3 bucket
          // photoUrls,
          locationId,
        },
      });
    });

    res.json(updatedRestaurant);
    return;
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error updating restaurant: ${error.message}` });
    return;
  }
};
