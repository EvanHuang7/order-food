import express from "express";
import { getPayment, getPayments } from "../controllers/paymentControllers";

const router = express.Router();

router.get("/:paymentId", getPayment);
router.get("/", getPayments);

export default router;
