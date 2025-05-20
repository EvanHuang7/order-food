import express from "express";
import {
  getOrder,
  getOrders,
  createOrders,
  updateOrder,
} from "../controllers/orderControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get(
  "/:orderId",
  authMiddleware(["customer", "restaurant", "driver"]),
  getOrder
);
router.get(
  "/",
  authMiddleware(["customer", "restaurant", "driver"]),
  getOrders
);
router.post("/", authMiddleware(["customer"]), createOrders);
router.put(
  "/:orderId",
  authMiddleware(["customer", "restaurant", "driver"]),
  updateOrder
);

export default router;
