import express from "express";
import multer from "multer";
import {
  getRestaurant,
  getRestaurants,
  createRestaurant,
  updateRestaurant,
} from "../controllers/restaurantControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", getRestaurants);
router.get("/:cognitoId", authMiddleware(["restaurant"]), getRestaurant);
router.post("/", authMiddleware(["restaurant"]), createRestaurant);
router.put(
  "/:cognitoId",
  authMiddleware(["restaurant"]),
  upload.array("photos"),
  updateRestaurant
);

export default router;
