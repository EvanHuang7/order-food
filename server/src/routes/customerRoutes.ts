import express from "express";
import {
  getCustomer,
  createCustomer,
  updateCustomer,
} from "../controllers/customerControllers";

const router = express.Router();

router.get("/:cognitoId", getCustomer);
router.post("/", createCustomer);
router.put("/:cognitoId", updateCustomer);

export default router;
