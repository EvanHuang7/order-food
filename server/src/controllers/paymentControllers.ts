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
