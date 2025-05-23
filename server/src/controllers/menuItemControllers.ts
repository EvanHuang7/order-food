import { Request, Response } from "express";
import prisma from "../lib/prisma";
import { snsClient } from "../lib/sns";
import { PublishCommand } from "@aws-sdk/client-sns";
import { NotificationType } from "@prisma/client";

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

export const createRestaurantMenuItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, description, price, restaurantId } = req.body;
    const file = req.file as Express.Multer.File;

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

    // Convert types explicitly
    const parsedPrice = parseFloat(price);
    const parsedRestaurantId = parseInt(restaurantId, 10);

    // Do write actions in one transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create menuItem
      const menuItem = await tx.menuItem.create({
        data: {
          name,
          description,
          price: parsedPrice,
          photoUrl,
          restaurantId: parsedRestaurantId,
        },
      });

      // Fetch restaurant name
      const restaurant = await tx.restaurant.findUnique({
        where: { id: parsedRestaurantId },
        select: { name: true },
      });
      if (!restaurant) {
        throw new Error("Restaurant not found");
      }

      // Get customers who favorited this restaurant and are subscribed to this notification type
      const customersToNotify = await tx.customer.findMany({
        where: {
          favoriteRests: {
            some: {
              restaurantId: parsedRestaurantId,
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

      const message = `A new menu item "${name}" has been added at your favorite restaurant "${restaurant.name}"!`;

      // Create notification records
      await tx.notification.createMany({
        data: customersToNotify.map((customer) => ({
          customerId: customer.id,
          type: NotificationType.NewMenuItemInFavoriteRest,
          message,
        })),
      });

      // Send email via SNS
      await Promise.all(
        customersToNotify.map((customer) =>
          snsClient.send(
            new PublishCommand({
              TopicArn: process.env.SNS_TOPIC_NEW_MENU_ITEM,
              Message: message,
              Subject: "New Menu Item Alert",
              MessageAttributes: {
                email: {
                  DataType: "String",
                  StringValue: customer.email,
                },
              },
            })
          )
        )
      );

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
    const { name, description, price } = req.body;
    const file = req.file as Express.Multer.File;

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
