import { Client } from "pg";

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

export async function startPgNotificationListener() {
  await client.connect();
  await client.query("LISTEN new_notification");

  console.log("📡 Listening for new_notification events from PostgreSQL");

  client.on("notification", (msg) => {
    if (msg.channel === "new_notification") {
      const payload = msg.payload ? JSON.parse(msg.payload) : null;
      console.log("🔔 New notification:", payload);

      // Your business logic here (e.g. send email, call SES, etc.)
    }
  });

  client.on("error", (err) => {
    console.error("❌ Postgres listener error:", err);
  });
}
