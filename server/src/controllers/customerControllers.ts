import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const getCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const customer = await prisma.customer.findUnique({
      where: { cognitoId },
      include: {
        location: true,
        favoriteRests: {
          // Best Practice: In real-industry scenarios, we will only return
          // a list of favorite restaurantIds instead of detail restaurant data.
          include: {
            restaurant: true,
          },
        },
        notificationSetting: true,
        paymentInfo: true,
      },
    });

    if (customer) {
      res.json(customer);
      return;
    } else {
      res.status(404).json({ message: "Customer not found" });
      return;
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving customer: ${error.message}` });
    return;
  }
};

export const createCustomer = async (
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
    const existing = await prisma.customer.findFirst({
      where: {
        OR: [{ cognitoId }, { email }],
      },
    });
    if (existing) {
      res.status(409).json({ message: "Customer already exists" });
      return;
    }

    // Create customer
    const customer = await prisma.customer.create({
      data: {
        cognitoId,
        name,
        email,
        phoneNumber: "",
        profileImgUrl: "",
      },
    });

    res.status(201).json(customer);
    return;
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error creating customer: ${error.message}` });
    return;
  }
};

export const updateCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { cognitoId } = req.params;
    const { name, phoneNumber, address, city, province, postalCode, country } =
      req.body;

    // Check if customer has a location or not
    const existingCustomer = await prisma.customer.findUnique({
      where: { cognitoId },
      include: { location: true },
    });
    if (!existingCustomer) {
      res.status(404).json({ message: "Customer not found" });
      return;
    }

    // Do write actions in one transaction
    const { customer, locationUpdated } = await prisma.$transaction(
      async (tx) => {
        let locationId = existingCustomer.locationId;
        const locationFields = [address, city, province, postalCode, country];
        const hasCompleteLocation = locationFields.every((field) => !!field);

        let locationWasUpdated = false;

        // Only update and create when having complete location
        if (hasCompleteLocation) {
          locationWasUpdated = true;
          // If location doesn't exist yet, create it
          if (!locationId) {
            const newLocation = await tx.location.create({
              data: { address, city, province, postalCode, country },
            });
            locationId = newLocation.id;
          } else {
            // Otherwise, update existing location
            await tx.location.update({
              where: { id: locationId },
              data: { address, city, province, postalCode, country },
            });
          }
        }

        // Update customer info
        const customer = await tx.customer.update({
          where: { cognitoId },
          data: {
            name,
            phoneNumber,
            locationId,
          },
          include: { location: true },
        });

        return { customer, locationUpdated: locationWasUpdated };
      }
    );

    res.json({ customer, locationUpdated });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error updating customer: ${error.message}` });
  }
};
