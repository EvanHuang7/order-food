import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";

const prisma = new PrismaClient();

export const getCustomer = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { cognitoId } = req.params;
    const customer = await prisma.customer.findUnique({
      where: { cognitoId },
      include: {
        location: true,
        favoriteRests: {
          include: {
            restaurant: true,
          },
        },
        paymentInfo: true,
        notifications: true,
      },
    });

    if (customer) {
      return res.json(customer);
    } else {
      return res.status(404).json({ message: "Customer not found" });
    }
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: `Error retrieving customer: ${error.message}` });
  }
};

export const createCustomer = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { cognitoId, name, email, phoneNumber } = req.body;

    // Check input
    if (!cognitoId || !name || !email || !phoneNumber) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Check if there is existing in db before create
    const existing = await prisma.customer.findFirst({
      where: {
        OR: [{ cognitoId }, { email }],
      },
    });
    if (existing) {
      return res.status(409).json({ message: "Customer already exists" });
    }

    // Create customer
    const customer = await prisma.customer.create({
      data: {
        cognitoId,
        name,
        email,
        phoneNumber,
      },
    });

    return res.status(201).json(customer);
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: `Error creating customer: ${error.message}` });
  }
};

// Only allow to update name and phoneNumber
export const updateCustomer = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { cognitoId } = req.params;
    const { name, phoneNumber } = req.body;

    const updateCustomer = await prisma.customer.update({
      where: { cognitoId },
      data: {
        name,
        phoneNumber,
      },
    });

    return res.json(updateCustomer);
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: `Error updating customer: ${error.message}` });
  }
};
