import express from "express";
import {
  upsertMenuItemRatings,
  getMenuItemRatings,
  upsertRestaurantRating,
  getRestaurantRatings,
} from "../controllers/rateControllers";

const router = express.Router();

// Bulk upsert ratings and comments for multiple menu items by a customer
// Expects body: [{ menuItemId, rating, comment }]
router.post("/menuItemRating/:customerId", upsertMenuItemRatings);

// Fetch ratings and comments for multiple menu items by a customer
// Expects query params: ?menuItemIds=1,2,3
router.get("/menuItemRating/:customerId", getMenuItemRatings);

// Upsert a single restaurant rating + comment by a customer
// Expects body: { restaurantId, rating, comment }
router.post("/restaurantRating/:customerId", upsertRestaurantRating);

// Fetch ratings and comments for multiple restaurants by a customer
// Expects query params: ?restaurantIds=1,2,3
router.get("/restaurantRating/:customerId", getRestaurantRatings);

export default router;
