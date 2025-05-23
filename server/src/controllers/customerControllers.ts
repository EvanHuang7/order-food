import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";

const prisma = new PrismaClient();

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
          include: {
            restaurant: true,
          },
        },
        paymentInfo: true,
        notifications: true,
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
    const updatedCustomer = await prisma.$transaction(async (tx) => {
      let locationId = existingCustomer.locationId;

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

      // Update customer info
      return await tx.customer.update({
        where: { cognitoId },
        data: {
          name,
          phoneNumber,
          locationId,
        },
        include: { location: true },
      });
    });

    res.json(updatedCustomer);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error updating customer: ${error.message}` });
  }
};

export const getFavoriteRestaurants = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { customerId } = req.params;

  try {
    const favorites = await prisma.favoriteRestaurant.findMany({
      where: { customerId: Number(customerId) },
      include: {
        restaurant: true,
      },
    });

    const favoriteRestaurants = favorites.map((fav) => fav.restaurant);

    res.json(favoriteRestaurants);
  } catch (error) {
    console.error("Error fetching favorite restaurants:", error);
    res.status(500).json({ error: "Failed to fetch favorite restaurants." });
  }
};

export const addFavoriteRestaurant = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { customerId, restaurantId } = req.params;

  try {
    const existing = await prisma.favoriteRestaurant.findUnique({
      where: {
        customerId_restaurantId: {
          customerId: Number(customerId),
          restaurantId: Number(restaurantId),
        },
      },
    });

    if (existing) {
      res.status(200).json({ message: "Already favorited." });
      return;
    }

    const favorite = await prisma.favoriteRestaurant.create({
      data: {
        customerId: Number(customerId),
        restaurantId: Number(restaurantId),
      },
    });

    res.status(201).json(favorite);
  } catch (error) {
    console.error("Error adding favorite:", error);
    res.status(500).json({ error: "Failed to add favorite." });
  }
};

export const removeFavoriteRestaurant = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { customerId, restaurantId } = req.params;

  try {
    await prisma.favoriteRestaurant.delete({
      where: {
        customerId_restaurantId: {
          customerId: Number(customerId),
          restaurantId: Number(restaurantId),
        },
      },
    });

    res.status(200).json({ message: "Favorite removed." });
  } catch (error) {
    console.error("Error removing favorite:", error);
    res.status(500).json({ error: "Failed to remove favorite." });
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
