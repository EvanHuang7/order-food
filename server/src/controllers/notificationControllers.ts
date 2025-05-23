import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {
  SubscribeCommand,
  UnsubscribeCommand,
  ListSubscriptionsByTopicCommand,
} from "@aws-sdk/client-sns";
import { snsClient } from "../lib/sns";

const prisma = new PrismaClient();

const getTopicArnByType = (type: string): string | undefined => {
  if (type === "foodDelivered") return process.env.SNS_TOPIC_FOOD_DELIVERED;
  if (type === "newMenuItemInFavoriteRest")
    return process.env.SNS_TOPIC_NEW_MENU_ITEM;
  return undefined;
};

export const subscribeNotification = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { customerId, type } = req.params;
    const topicArn = getTopicArnByType(type);
    if (!topicArn) {
      res.status(400).json({ message: "Invalid notification type" });
      return;
    }

    // Get customer info
    const customer = await prisma.customer.findUnique({
      where: { id: Number(customerId) },
      include: { notificationSetting: true },
    });
    if (!customer) {
      res.status(404).json({ message: "Customer not found" });
      return;
    }

    // Do write actions in one transaction
    await prisma.$transaction(async (tx) => {
      let setting = customer.notificationSetting;

      if (!setting) {
        setting = await tx.notificationSetting.create({
          data: {
            customerId: customer.id,
            [type]: true,
          },
        });
      } else {
        await tx.notificationSetting.update({
          where: { id: setting.id },
          data: {
            [type]: true,
          },
        });
      }

      // Subscribe customer's email to the SNS topic
      await snsClient.send(
        new SubscribeCommand({
          Protocol: "email",
          TopicArn: topicArn,
          Endpoint: customer.email,
        })
      );
    });

    res.json({ message: "Subscribed to notification successfully" });
  } catch (error: any) {
    console.error("Subscribe error:", error);
    res.status(500).json({ message: `Error subscribing: ${error.message}` });
  }
};

export const unsubscribeNotification = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { customerId, type } = req.params;
    const topicArn = getTopicArnByType(type);
    if (!topicArn) {
      res.status(400).json({ message: "Invalid notification type" });
      return;
    }

    // Get customer info
    const customer = await prisma.customer.findUnique({
      where: { id: Number(customerId) },
      include: { notificationSetting: true },
    });
    if (!customer) {
      res.status(404).json({ message: "Customer not found" });
      return;
    }

    // Do write actions in one transaction
    await prisma.$transaction(async (tx) => {
      const setting = customer.notificationSetting;
      if (setting) {
        await tx.notificationSetting.update({
          where: { id: setting.id },
          data: {
            [type]: false,
          },
        });
      }

      // Find subscription ARN
      const listResult = await snsClient.send(
        new ListSubscriptionsByTopicCommand({ TopicArn: topicArn })
      );

      const subscription = listResult.Subscriptions?.find(
        (sub) => sub.Endpoint === customer.email
      );

      if (subscription && subscription.SubscriptionArn) {
        await snsClient.send(
          new UnsubscribeCommand({
            SubscriptionArn: subscription.SubscriptionArn,
          })
        );
      }
    });

    res.json({ message: "Unsubscribed from notification successfully" });
  } catch (error: any) {
    console.error("Unsubscribe error:", error);
    res.status(500).json({ message: `Error unsubscribing: ${error.message}` });
  }
};
