import express from "express";
import { getPayment, getPayments } from "../controllers/paymentControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/:paymentId", authMiddleware(["customer"]), getPayment);
router.get("/", authMiddleware(["customer"]), getPayments);

export default router;
