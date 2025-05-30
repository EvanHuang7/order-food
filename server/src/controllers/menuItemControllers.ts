import { Request, Response } from "express";
import prisma from "../lib/prisma";
import { NotificationType } from "@prisma/client";
import { s3Client } from "../lib/s3";
import { Upload } from "@aws-sdk/lib-storage";

export const getRestaurantMenuItems = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const restaurantId = parseInt(req.params.restaurantId, 10);
    if (isNaN(restaurantId)) {
      res.status(400).json({ message: "Invalid restaurant ID" });
      return;
    }

    const restaurantWithMenuItems = await prisma.restaurant.findUnique({
      where: { id: Number(restaurantId) },
      include: {
        location: true,
        menuItems: {
          // From old to new
          orderBy: {
            createdAt: "asc",
          },
          include: {
            // Best Practice: In real-industry scenarios, it's best to calculate the average
            // rating and popularity on the backend and return only the final number.
            // Detailed ratings data should be fetched in a separated API call.
            orderItems: true,
            ratings: {
              include: {
                customer: true,
              },
            },
          },
        },
      },
    });

    if (!restaurantWithMenuItems) {
      res.status(404).json({ message: "Restaurant not found" });
      return;
    }

    res.json(restaurantWithMenuItems);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error fetching menu items: ${error.message}` });
  }
};

export const createRestaurantMenuItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, description, price, restaurantId, file } = req.body;

    if (!name || !price || !restaurantId) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    let photoUrl = "";
    // Upload photos to AWS S3 bucket if there is a file and
    // the file IS NOT an existing AWS S3 file (file
    // starts with "https://of-s3-images.s3.us-east-1.amazonaws.com/menuItem")
    if (
      file &&
      !file.startsWith(
        "https://of-s3-images.s3.us-east-1.amazonaws.com/menuItem"
      )
    ) {
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
      const key = `restaurant/menuItem/${Date.now()}-item-image.${
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

      photoUrl = uploadResult.Location || "";
    }

    // Do write actions in one transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create menuItem
      const menuItem = await tx.menuItem.create({
        data: {
          name,
          description,
          price,
          photoUrl,
          restaurantId,
        },
      });

      // Get restaurant name
      const restaurant = await tx.restaurant.findUnique({
        where: { id: restaurantId },
        select: { name: true },
      });
      if (!restaurant) {
        throw new Error("Restaurant not found");
      }

      // Get customers who favorited this restaurant and are turned on for this notification type
      const customersToNotify = await tx.customer.findMany({
        where: {
          favoriteRests: {
            some: {
              restaurantId: restaurantId,
            },
          },
          notificationSetting: {
            newMenuItemInFavoriteRest: true,
          },
        },
        select: {
          id: true,
          email: true,
        },
      });

      // Create notification records for customers
      await tx.notification.createMany({
        data: customersToNotify.map((customer) => ({
          customerId: customer.id,
          type: NotificationType.NewMenuItemInFavoriteRest,
          message: `A new menu item "${name}" has been added at your favorite restaurant "${restaurant.name}"!`,
        })),
      });

      return menuItem;
    });

    res.status(201).json(result);
  } catch (error: any) {
    console.error("Error creating menu item:", error);
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
    const { name, description, price, file } = req.body;

    if (!name || !price) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    let photoUrl = "";
    // Upload photos to AWS S3 bucket if there is a file and
    // the file IS NOT an existing AWS S3 file (file
    // starts with "https://of-s3-images.s3.us-east-1.amazonaws.com/menuItem")
    if (
      file &&
      !file.startsWith(
        "https://of-s3-images.s3.us-east-1.amazonaws.com/menuItem"
      )
    ) {
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
      const key = `restaurant/menuItem/${Date.now()}-item-image.${
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

      photoUrl = uploadResult.Location || "";
    }

    const updatedMenuItem = await prisma.menuItem.update({
      where: { id: Number(menuItemId) },
      data: {
        name,
        description,
        price,
        // Only include photoUrl field to update when
        // input photoUrl has value
        ...(photoUrl && photoUrl.trim() !== "" && { photoUrl }),
      },
    });

    res.json(updatedMenuItem);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error updating menu item: ${error.message}` });
  }
};
