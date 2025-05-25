import { Request, Response } from "express";
import prisma from "../lib/prisma";

// POST /menuItemRating/:customerId
// Body: [{ menuItemId, rating, comment }]
export const upsertMenuItemRatings = async (req: Request, res: Response) => {
  const customerId = parseInt(req.params.customerId);
  const ratingsData: {
    menuItemId: number;
    rating: number;
    comment?: string;
  }[] = req.body;

  if (!Array.isArray(ratingsData) || ratingsData.length === 0) {
    return res.status(400).json({ error: "Invalid or empty ratings payload." });
  }

  try {
    const upserts = await prisma.$transaction(
      ratingsData.map((entry) =>
        prisma.menuItemRating.upsert({
          where: {
            customerId_menuItemId: {
              customerId,
              menuItemId: entry.menuItemId,
            },
          },
          update: {
            rating: entry.rating,
            comment: entry.comment ?? null,
          },
          create: {
            customerId,
            menuItemId: entry.menuItemId,
            rating: entry.rating,
            comment: entry.comment ?? null,
          },
        })
      )
    );

    res
      .status(200)
      .json({ message: "Ratings submitted successfully", data: upserts });
  } catch (error) {
    console.error("Error upserting menu item ratings:", error);
    res.status(500).json({ error: "Failed to submit ratings" });
  }
};
// Get ratings and comments for multiple menu items by a customer
export const getMenuItemRatings = async (req: Request, res: Response) => {
  try {
    const { customerId } = req.params;
    const { menuItemIds } = req.query;

    if (!menuItemIds || typeof menuItemIds !== "string") {
      return res
        .status(400)
        .json({ message: "menuItemIds query param is required" });
    }

    const ids = menuItemIds.split(",").map(Number);

    const ratings = await prisma.menuItemRating.findMany({
      where: {
        customerId: Number(customerId),
        menuItemId: { in: ids },
      },
      select: {
        menuItemId: true,
        rating: true,
        comment: true,
      },
    });

    res.json(ratings);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error fetching menu item ratings: ${error.message}` });
  }
};

// Upsert rating and comment for a restaurant by a customer
export const upsertRestaurantRating = async (req: Request, res: Response) => {
  try {
    const { customerId } = req.params;
    const { restaurantId, rating, comment } = req.body;

    if (!restaurantId || rating === undefined) {
      return res
        .status(400)
        .json({ message: "restaurantId and rating are required" });
    }

    const upserted = await prisma.restaurantRating.upsert({
      where: {
        customerId_restaurantId: {
          customerId: Number(customerId),
          restaurantId: Number(restaurantId),
        },
      },
      update: {
        rating,
        comment,
      },
      create: {
        customerId: Number(customerId),
        restaurantId: Number(restaurantId),
        rating,
        comment,
      },
    });

    res.json(upserted);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error upserting restaurant rating: ${error.message}` });
  }
};

// Get ratings and comments for multiple restaurants by a customer
export const getRestaurantRatings = async (req: Request, res: Response) => {
  try {
    const { customerId } = req.params;
    const { restaurantIds } = req.query;

    if (!restaurantIds || typeof restaurantIds !== "string") {
      return res
        .status(400)
        .json({ message: "restaurantIds query param is required" });
    }

    const ids = restaurantIds.split(",").map(Number);

    const ratings = await prisma.restaurantRating.findMany({
      where: {
        customerId: Number(customerId),
        restaurantId: { in: ids },
      },
      select: {
        restaurantId: true,
        rating: true,
        comment: true,
      },
    });

    res.json(ratings);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error fetching restaurant ratings: ${error.message}` });
  }
};
