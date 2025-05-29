import { Client } from "pg";
import { pgNotificationHandler } from "../services/pgNotificationHandler";

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

// NOTE: PG listener won't work in Prod because of requiring AWS RDS’s trusted root CA cert
export async function startPgNotificationListener() {
  await client.connect();
  // Listen to channel (one per event/trigger)
  await client.query("LISTEN new_notification_channel");
  console.log(
    "📡 Listening for new_notification_channel events from PostgreSQL"
  );

  // "notification" here is event name of pg client
  // instead of a table name.
  client.on("notification", (msg) => {
    // Check channel to find out what type of event/trigger it is
    if (msg.channel === "new_notification_channel" && !!msg.payload) {
      const payload = JSON.parse(msg.payload);
      console.log("🔔 New entry created in Notification table:", payload);
      pgNotificationHandler(payload);
    }
  });

  client.on("error", (err) => {
    console.error("❌ Postgres listener error:", err);
  });
}
