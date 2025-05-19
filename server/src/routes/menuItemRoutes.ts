import express from "express";
import {
  getRestaurantMenuItems,
  createRestaurantMenuItem,
  updateRestaurantMenuItem,
} from "../controllers/menuItemControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get(
  "/:restaurantId/menuItems",
  authMiddleware(["customer", "restaurant", "driver"]),
  getRestaurantMenuItems
);
router.post("/", authMiddleware(["restaurant"]), createRestaurantMenuItem);
router.put(
  "/:menuItemId",
  authMiddleware(["restaurant"]),
  updateRestaurantMenuItem
);

export default router;
