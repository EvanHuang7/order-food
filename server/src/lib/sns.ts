import { SNSClient } from "@aws-sdk/client-sns";

export const snsClient = new SNSClient({
  region: "us-east-1",
});
