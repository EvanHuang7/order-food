import express from "express";
import {
  turnOnNotification,
  turnOffNotification,
} from "../controllers/notificationSettingControllers";

const router = express.Router();

router.post("/:customerId/:type/on", turnOnNotification);
router.post("/:customerId/:type/off", turnOffNotification);

export default router;
