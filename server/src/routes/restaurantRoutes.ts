import express from "express";
import {
  getRestaurant,
  createRestaurant,
  updateRestaurant,
} from "../controllers/restaurantControllers";

const router = express.Router();

router.get("/:cognitoId", getRestaurant);
router.post("/", createRestaurant);
router.put("/:cognitoId", updateRestaurant);

export default router;
