import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "../lib/ses";
import { PublishCommand } from "@aws-sdk/client-sns";
import { snsClient } from "../lib/sns";
import { NotificationType } from "@prisma/client";
import prisma from "../lib/prisma";

export const pgNotificationHandler = async (payload: {
  id: number;
  type: string;
  message: string;
  customerId?: number;
}): Promise<void> => {
  // Publish topic message in AWS SNS
  if (payload.type === NotificationType.SubscribeApp) {
    await publishTopicMessageInSns({
      subject: "New subscription message from Order Food App",
      message: payload.message,
    });
  }
  // Send email via AWS SES
  else {
    // Get customer email
    const customer = await prisma.customer.findUnique({
      where: { id: payload.customerId },
    });
    if (!customer) {
      return;
    }

    // Send email
    await sendEmailViaSes({
      to: customer.email,
      subject:
        payload.type === NotificationType.FoodDelivered
          ? `Your order status has been updated`
          : `A new menu item released in your favorite restaurant`,
      bodyHtml: `<p>Hi ${customer.name}, <strong>${payload.message}</strong>.</p>`,
      bodyText: `Hi ${customer.name}, ${payload.message}.`,
    });
  }
};

export const sendEmailViaSes = async ({
  to,
  subject,
  bodyHtml,
  bodyText,
}: {
  to: string;
  subject: string;
  bodyHtml: string;
  bodyText: string;
}): Promise<void> => {
  const emailParams = {
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Subject: {
        Data: subject,
      },
      Body: {
        Html: {
          Data: bodyHtml,
        },
        Text: {
          Data: bodyText,
        },
      },
    },
    Source: process.env.SES_VERIFIED_EMAIL!,
  };

  const command = new SendEmailCommand(emailParams);
  await sesClient.send(command);
};

export const publishTopicMessageInSns = async ({
  subject,
  message,
}: {
  subject: string;
  message: string;
}): Promise<void> => {
  const publishCmd = new PublishCommand({
    TopicArn: process.env.SNS_TOPIC_SUBSCRIBE_APP,
    Message: message,
    Subject: subject,
  });

  await snsClient.send(publishCmd);
};
