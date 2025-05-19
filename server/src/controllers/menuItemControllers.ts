import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getRestaurantMenuItems = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { restaurantId } = req.params;

    const menuItems = await prisma.menuItem.findMany({
      where: {
        restaurantId: Number(restaurantId),
      },
      include: {
        orderItems: true,
      },
    });

    res.json(menuItems);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error fetching menu items: ${error.message}` });
  }
};

/**
 * Create a new menu item for a restaurant
 */
export const createRestaurantMenuItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, description, price, restaurantId } = req.body;
    const files = req.files as Express.Multer.File[];

    if (!name || !price || !restaurantId) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    // Upload photos to AWS S3 bucket
    const photoUrl = "";
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

    const menuItem = await prisma.menuItem.create({
      data: {
        name,
        description,
        price,
        photoUrl,
        restaurantId,
      },
    });

    res.status(201).json(menuItem);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error creating menu item: ${error.message}` });
  }
};

export const updateRestaurantMenuItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { menuItemId } = req.params;
    const { name, description, price } = req.body;
    const files = req.files as Express.Multer.File[];

    if (!name || !price) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    // Upload photos to AWS S3 bucket
    const photoUrl = "";
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

    const updatedMenuItem = await prisma.menuItem.update({
      where: { id: Number(menuItemId) },
      data: {
        name,
        description,
        price,
        photoUrl,
      },
    });

    res.json(updatedMenuItem);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error updating menu item: ${error.message}` });
  }
};
