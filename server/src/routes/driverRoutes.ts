import express from "express";
import {
  getDriver,
  createDriver,
  updateDriver,
} from "../controllers/driverControllers";

const router = express.Router();

router.get("/:cognitoId", getDriver);
router.post("/", createDriver);
router.put("/:cognitoId", updateDriver);

export default router;
