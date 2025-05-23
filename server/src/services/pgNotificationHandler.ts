import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "../lib/ses";

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
}) => {
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
