import express from "express";
import {
  getFavoriteRestaurants,
  addFavoriteRestaurant,
  removeFavoriteRestaurant,
} from "../controllers/favoriteRestaurantsControllers";

const router = express.Router();

router.get("/:customerId/favorites", getFavoriteRestaurants);
router.post("/:customerId/favorites/:restaurantId", addFavoriteRestaurant);
router.delete("/:customerId/favorites/:restaurantId", removeFavoriteRestaurant);

export default router;
