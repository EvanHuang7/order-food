import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const getPayment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { paymentId } = req.params;

    const payment = await prisma.payment.findUnique({
      where: { id: Number(paymentId) },
      include: {
        orders: true,
      },
    });

    if (!payment) {
      res.status(404).json({ message: "Payment not found" });
      return;
    }

    res.json(payment);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error fetching payment: ${error.message}` });
  }
};

export const getPayments = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { customerId } = req.query;

    // Get payments with customerId
    const payments = await prisma.payment.findMany({
      where: { customerId: Number(customerId) },
      include: {
        orders: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(payments);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error fetching payments: ${error.message}` });
  }
};

export const upsertPaymentInfo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { customerId } = req.params;

    const { last4, expiryMonth, expiryYear } = req.body;

    if (!last4 || !expiryMonth || !expiryYear) {
      res
        .status(400)
        .json({ message: "Missing required payment info fields." });
      return;
    }

    // Check if customer has a paymentInfo or not
    const existingCustomer = await prisma.customer.findUnique({
      where: { id: Number(customerId) },
      include: { paymentInfo: true },
    });
    if (!existingCustomer) {
      res.status(404).json({ message: "Customer not found" });
      return;
    }

    // Do write actions in one transaction
    await prisma.$transaction(async (tx) => {
      let paymentInfo = existingCustomer.paymentInfo;

      // If paymentInfo doesn't exist yet, create it
      if (!paymentInfo) {
        // Create new payment info
        paymentInfo = await tx.paymentInfo.create({
          data: {
            customerId: Number(customerId),
            provider: "Stripe",
            methodToken: "test-random-token",
            brand: "Visa",
            last4,
            expiryMonth,
            expiryYear,
          },
        });
      } else {
        // Update existing payment info
        paymentInfo = await tx.paymentInfo.update({
          where: { customerId: Number(customerId) },
          data: {
            provider: "Stripe",
            methodToken: "test-random-token",
            brand: "MasterCard",
            last4,
            expiryMonth,
            expiryYear,
          },
        });
      }
    });

    res.json({ message: "Updating customer payment info successfully" });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error upserting payment info: ${error.message}` });
  }
};
