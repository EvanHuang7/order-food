import express from "express";
import {
  getRestaurant,
  getRestaurants,
  createRestaurant,
  updateRestaurant,
} from "../controllers/restaurantControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", getRestaurants);
router.get("/:cognitoId", authMiddleware(["restaurant"]), getRestaurant);
router.post("/", authMiddleware(["restaurant"]), createRestaurant);
router.put("/:cognitoId", authMiddleware(["restaurant"]), updateRestaurant);

export default router;
