import express from "express";
import multer from "multer";
import {
  getRestaurantMenuItems,
  createRestaurantMenuItem,
  updateRestaurantMenuItem,
} from "../controllers/menuItemControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.get("/:restaurantId/menuItems", getRestaurantMenuItems);
router.post(
  "/",
  authMiddleware(["restaurant"]),
  upload.single("photo"),
  createRestaurantMenuItem
);
router.put(
  "/:menuItemId",
  authMiddleware(["restaurant"]),
  updateRestaurantMenuItem
);

export default router;
