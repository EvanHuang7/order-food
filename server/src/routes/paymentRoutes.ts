import express from "express";
import { getPayment, getPayments } from "../controllers/paymentControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/:paymentId", authMiddleware(["customer"]), getPayment);
// Get customerId from req.query because front-end pass it in queryParams
router.get("/", authMiddleware(["customer"]), getPayments);

export default router;
