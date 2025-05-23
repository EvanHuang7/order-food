import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { authMiddleware } from "./middleware/authMiddleware";
/* ROUTE IMPORT */
import customerRoutes from "./routes/customerRoutes";
import restaurantRoutes from "./routes/restaurantRoutes";
import driverRoutes from "./routes/driverRoutes";
import menuItemRoutes from "./routes/menuItemRoutes";
import orderRoutes from "./routes/orderRoutes";
import paymentRoutes from "./routes/paymentRoutes";
import notificationSettingRoutes from "./routes/notificationSettingRoutes";
import { startPgNotificationListener } from "./lib/pg";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.get("/", (req, res) => {
  res.send("This is home route");
});

app.use("/customer", authMiddleware(["customer"]), customerRoutes);
app.use("/restaurant", restaurantRoutes);
app.use("/driver", authMiddleware(["driver"]), driverRoutes);
app.use("/menuItem", menuItemRoutes);
app.use("/order", orderRoutes);
app.use("/payment", authMiddleware(["customer"]), paymentRoutes);
app.use(
  "/notificationSetting",
  authMiddleware(["customer"]),
  notificationSettingRoutes
);

/* SERVER */
const port = Number(process.env.PORT) || 3002;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});

/* Set up Postgre event listener */
startPgNotificationListener().catch((err) => {
  console.error("Failed to start PG notification listener:", err);
});
