import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { SNSClient } from "@aws-sdk/client-sns";

const prisma = new PrismaClient();
export const snsClient = new SNSClient({
  region: "us-east-1",
});

export const subscribeNotification = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { customerId, type } = req.params;

    // Get customer email
    const existingCustomer = await prisma.customer.findUnique({
      where: { id: Number(customerId) },
      include: { paymentInfo: true },
    });
    if (!existingCustomer) {
      res.status(404).json({ message: "Customer not found" });
      return;
    }

    res.json(payment);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error subscribeing notification: ${error.message}` });
  }
};

export const unsubscribeNotification = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { customerId, type } = req.params;

    res.json(payments);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error unsubscribeing notification: ${error.message}` });
  }
};
