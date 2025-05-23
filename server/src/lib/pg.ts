import { Client } from "pg";
import { pgNotificationHandler } from "../services/pgNotificationHandler";

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

export async function startPgNotificationListener() {
  await client.connect();
  await client.query("LISTEN new_notification");

  console.log("📡 Listening for new_notification events from PostgreSQL");

  client.on("notification", (msg) => {
    if (msg.channel === "new_notification" && !!msg.payload) {
      const payload = JSON.parse(msg.payload);
      console.log("🔔 New notification:", payload);
      pgNotificationHandler(payload);
    }
  });

  client.on("error", (err) => {
    console.error("❌ Postgres listener error:", err);
  });
}
