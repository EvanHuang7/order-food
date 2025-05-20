import express from "express";
import {
  getPayment,
  getPayments,
  createPayment,
} from "../controllers/paymentControllers";

const router = express.Router();

router.get("/:paymentId", getPayment);
router.get("/", getPayments);
router.post("/", createPayment);

export default router;
