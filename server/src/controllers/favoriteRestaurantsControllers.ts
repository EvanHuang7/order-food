import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const getFavoriteRestaurants = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { customerId } = req.params;

  try {
    const favorites = await prisma.favoriteRestaurant.findMany({
      where: { customerId: Number(customerId) },
      include: {
        restaurant: {
          include: {
            ratings: {
              include: {
                customer: true,
              },
            },
          },
        },
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
