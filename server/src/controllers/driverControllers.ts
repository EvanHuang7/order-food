import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const getDriver = async (req: Request, res: Response): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const driver = await prisma.driver.findUnique({
      where: { cognitoId },
    });

    if (driver) {
      res.json(driver);
      return;
    } else {
      res.status(404).json({ message: "Driver not found" });
      return;
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving driver: ${error.message}` });
    return;
  }
};

export const createDriver = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId, name, email } = req.body;

    // Check input
    if (!cognitoId || !name || !email) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    // Check if there is existing in db before create
    const existing = await prisma.driver.findFirst({
      where: {
        OR: [{ cognitoId }, { email }],
      },
    });
    if (existing) {
      res.status(409).json({ message: "Drivier already exists" });
      return;
    }

    // Create driver
    const driver = await prisma.driver.create({
      data: {
        cognitoId,
        name,
        email,
        phoneNumber: "",
        profileImgUrl: "",
      },
    });

    res.status(201).json(driver);
    return;
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error creating driver: ${error.message}` });
    return;
  }
};

// Only allow to update name and phoneNumber
export const updateDriver = async (
  req: Request,
  res: Response
): Promise<void> => {
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

    res.json(updateDriver);
    return;
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error updating driver: ${error.message}` });
    return;
  }
};
