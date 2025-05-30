import express from "express";
import {
  createOrders,
  getAvailableOrdersForDriver,
  getOrder,
  getOrders,
  updateOrder,
  generateOrderItemsWithAi,
} from "../controllers/orderControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", authMiddleware(["customer"]), createOrders);
router.get(
  "/available-orders",
  authMiddleware(["driver"]),
  getAvailableOrdersForDriver
);
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
router.put(
  "/:orderId",
  authMiddleware(["customer", "restaurant", "driver"]),
  updateOrder
);
router.post(
  "/generateOrderItemsWithAi",
  authMiddleware(["customer"]),
  generateOrderItemsWithAi
);

export default router;
