import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
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
    const { name, phoneNumber, description, openTime, closeTime, categories } =
      req.body;

    // Upload photos to AWS S3 bucket
    const photoUrls: string[] = [];
    // TODO: enable it afer setting up S3 bucket
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

    const updateRestaurant = await prisma.restaurant.update({
      where: { cognitoId },
      data: {
        name,
        phoneNumber,
        description,
        photoUrls,
        openTime,
        closeTime,
        categories,
      },
    });

    res.json(updateRestaurant);
    return;
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error updating restaurant: ${error.message}` });
    return;
  }
};
