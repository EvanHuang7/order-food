import express from "express";
import {
  getCustomer,
  createCustomer,
  updateCustomer,
  getFavoriteRestaurants,
  addFavoriteRestaurant,
  removeFavoriteRestaurant,
} from "../controllers/customerControllers";

const router = express.Router();

router.get("/:cognitoId", getCustomer);
router.post("/", createCustomer);
router.put("/:cognitoId", updateCustomer);
router.post("/:customerId/favorites", getFavoriteRestaurants);
router.post("/:customerId/favorites/:restaurantId", addFavoriteRestaurant);
router.delete("/:customerId/favorites/:restaurantId", removeFavoriteRestaurant);

export default router;
