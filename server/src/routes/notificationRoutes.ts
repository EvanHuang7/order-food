import express from "express";
import {
  subscribeNotification,
  unsubscribeNotification,
} from "../controllers/notificationControllers";

const router = express.Router();

router.post("/:customerId/:type", subscribeNotification);
router.delete("/:customerId/:type", unsubscribeNotification);

export default router;
