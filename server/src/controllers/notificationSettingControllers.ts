import { Request, Response } from "express";
import prisma from "../lib/prisma";
import {
  SubscribeCommand,
  UnsubscribeCommand,
  ListSubscriptionsByTopicCommand,
} from "@aws-sdk/client-sns";
import { snsClient } from "../lib/sns";

const allowedTypes = [
  "foodDelivered",
  "newMenuItemInFavoriteRest",
  "subscribeApp",
];

export const turnOnNotification = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { customerId, type } = req.params;

    if (!allowedTypes.includes(type)) {
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

      // Create or update notification setting
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
      if (type === "subscribeApp") {
        await snsClient.send(
          new SubscribeCommand({
            Protocol: "email",
            TopicArn: process.env.SNS_TOPIC_SUBSCRIBE_APP,
            Endpoint: customer.email,
          })
        );
      }
    });

    res.json({ message: "Subscribed to notification successfully" });
  } catch (error: any) {
    console.error("Subscribe error:", error);
    res.status(500).json({ message: `Error subscribing: ${error.message}` });
  }
};

export const turnOffNotification = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { customerId, type } = req.params;

    if (!allowedTypes.includes(type)) {
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
      // Update notification setting
      if (setting) {
        await tx.notificationSetting.update({
          where: { id: setting.id },
          data: {
            [type]: false,
          },
        });
      }

      // Unsubscribe customer's email from the SNS topic
      if (type === "subscribeApp") {
        // Find subscription ARN
        const listResult = await snsClient.send(
          new ListSubscriptionsByTopicCommand({
            TopicArn: process.env.SNS_TOPIC_SUBSCRIBE_APP,
          })
        );

        const subscription = listResult.Subscriptions?.find(
          (sub) => sub.Endpoint === customer.email
        );

        if (
          subscription &&
          subscription.SubscriptionArn &&
          subscription.SubscriptionArn !== "PendingConfirmation"
        ) {
          await snsClient.send(
            new UnsubscribeCommand({
              SubscriptionArn: subscription.SubscriptionArn,
            })
          );
        } else if (
          subscription &&
          subscription.SubscriptionArn &&
          subscription.SubscriptionArn === "PendingConfirmation"
        ) {
          throw new Error("PENDING_CONFIRMATION");
        }
      }
    });

    res.json({ message: "Unsubscribed from notification successfully" });
  } catch (error: any) {
    console.error("Unsubscribe error:", error);

    if (error.message === "PENDING_CONFIRMATION") {
      res.status(409).json({
        message:
          "Please confirm the subscription in your email before unsubscribing.",
        errorCode: "PENDING_CONFIRMATION",
      });
      return;
    }

    res.status(500).json({ message: `Error unsubscribing: ${error.message}` });
  }
};
