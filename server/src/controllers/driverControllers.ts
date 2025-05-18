import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";

const prisma = new PrismaClient();

export const getDriver = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { cognitoId } = req.params;
    const driver = await prisma.driver.findUnique({
      where: { cognitoId },
    });

    if (driver) {
      return res.json(driver);
    } else {
      return res.status(404).json({ message: "Driver not found" });
    }
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: `Error retrieving driver: ${error.message}` });
  }
};

export const createDriver = async (
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
    const existing = await prisma.driver.findFirst({
      where: {
        OR: [{ cognitoId }, { email }],
      },
    });
    if (existing) {
      return res.status(409).json({ message: "Drivier already exists" });
    }

    // Create driver
    const driver = await prisma.driver.create({
      data: {
        cognitoId,
        name,
        email,
        phoneNumber,
      },
    });

    return res.status(201).json(driver);
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: `Error creating driver: ${error.message}` });
  }
};

// Only allow to update name and phoneNumber
export const updateDriver = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { cognitoId } = req.params;
    const { name, phoneNumber } = req.body;

    const updateDriver = await prisma.driver.update({
      where: { cognitoId },
      data: {
        name,
        phoneNumber,
      },
    });

    return res.json(updateDriver);
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: `Error updating driver: ${error.message}` });
  }
};
