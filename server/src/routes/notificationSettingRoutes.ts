import express from "express";
import {
  turnOnNotification,
  turnOffNotification,
} from "../controllers/notificationSettingControllers";

const router = express.Router();

router.post("/:customerId/:type", turnOnNotification);
router.delete("/:customerId/:type", turnOffNotification);

export default router;
