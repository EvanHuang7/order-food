import express from "express";
import {
  getCustomer,
  createCustomer,
  updateCustomer,
  getFavoriteRestaurants,
  addFavoriteRestaurant,
  removeFavoriteRestaurant,
  upsertPaymentInfo,
} from "../controllers/customerControllers";

const router = express.Router();

router.get("/:cognitoId", getCustomer);
router.post("/", createCustomer);
router.put("/:cognitoId", updateCustomer);

//TODO: seperate them to favoriteRestaurantscustomerRoutes
router.get("/:customerId/favorites", getFavoriteRestaurants);
router.post("/:customerId/favorites/:restaurantId", addFavoriteRestaurant);
router.delete("/:customerId/favorites/:restaurantId", removeFavoriteRestaurant);

//TODO: seperate them to paymentRoutes
router.post("/:customerId/paymentInfo", upsertPaymentInfo);

export default router;
