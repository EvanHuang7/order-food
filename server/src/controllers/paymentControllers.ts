import { Request, Response } from "express";
import { PrismaClient, PaymentStatus } from "@prisma/client";

const prisma = new PrismaClient();

// TODO: regenerate Prisma model and update Prisma db

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
    const cognitoId = req.user?.id;

    const customer = await prisma.customer.findUnique({
      where: { cognitoId },
    });

    if (!customer) {
      res.status(404).json({ message: "Customer not found" });
      return;
    }

    const payments = await prisma.payment.findMany({
      where: { customerId: customer.id },
      include: {
        orders: true,
      },
      orderBy: {
        paymentDate: "desc",
      },
    });

    res.json(payments);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error fetching payments: ${error.message}` });
  }
};

export const createPayment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const cognitoId = req.user?.id;
    const { amount } = req.body;

    if (!amount || isNaN(amount)) {
      res
        .status(400)
        .json({ message: "Amount is required and must be a number" });
      return;
    }

    const customer = await prisma.customer.findUnique({
      where: { cognitoId },
    });

    if (!customer) {
      res.status(404).json({ message: "Customer not found" });
      return;
    }

    const newPayment = await prisma.payment.create({
      data: {
        amount: parseFloat(amount),
        customerId: customer.id,
        status: PaymentStatus.Paid, // assume paid for now
        paymentDate: new Date(),
      },
    });

    res.status(201).json(newPayment);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error creating payment: ${error.message}` });
  }
};
