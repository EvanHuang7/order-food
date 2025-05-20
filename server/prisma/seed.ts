import { PrismaClient, Prisma } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toPascalCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function toCamelCase(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

async function resetSequence(modelName: string) {
  const idFieldModels = [
    "Location",
    "Customer",
    "Driver",
    "Restaurant",
    "MenuItem",
    "Order",
    "Payment",
    "OrderItem",
    "Notification",
    "PaymentInfo",
  ];
  if (!idFieldModels.includes(modelName)) return;

  const quotedModelName = `"${toPascalCase(modelName)}"`;

  const maxIdResult = await (
    prisma[modelName as keyof PrismaClient] as any
  ).findMany({
    select: { id: true },
    orderBy: { id: "desc" },
    take: 1,
  });

  if (maxIdResult.length === 0) return;

  const nextId = maxIdResult[0].id + 1;
  await prisma.$executeRaw(
    Prisma.sql`
      SELECT setval(pg_get_serial_sequence(${quotedModelName}, 'id'), ${nextId}, false);
    `
  );
  console.log(`Reset sequence for ${modelName} to ${nextId}`);
}

async function deleteAllData(orderedFileNames: string[]) {
  const modelNames = orderedFileNames.map((fileName) =>
    toPascalCase(path.basename(fileName, path.extname(fileName)))
  );

  for (const modelName of modelNames.reverse()) {
    const modelNameCamel = toCamelCase(modelName);
    const model = (prisma as any)[modelNameCamel];
    if (!model) {
      console.error(`Model ${modelName} not found in Prisma client`);
      continue;
    }
    try {
      await model.deleteMany({});
      console.log(`Cleared data from ${modelName}`);
    } catch (error) {
      console.error(`Error clearing data from ${modelName}:`, error);
    }
  }
}

async function main() {
  const dataDirectory = path.join(__dirname, "seedData");

  const orderedFileNames = [
    "location.json", // Independent
    "customer.json", // Depends on location
    "driver.json", // Depends on location
    "restaurant.json", // Depends on location
    "menuItem.json", // Depends on restaurant
    "payment.json", // Depends on customer
    "order.json", // Depends on customer, restaurant, driver, payment
    "orderItem.json", // Depends on order, menuItem
    "notification.json", // Depends on customer
    "paymentInfo.json", // Depends on customer
    "favoriteRestaurant.json", // Depends on customer, restaurant
  ];

  // Delete all existing data
  await deleteAllData(orderedFileNames);

  // Seed data
  for (const fileName of orderedFileNames) {
    const filePath = path.join(dataDirectory, fileName);
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const modelName = toPascalCase(
      path.basename(fileName, path.extname(fileName))
    );
    const modelNameCamel = toCamelCase(modelName);

    const model = (prisma as any)[modelNameCamel];
    if (!model) {
      console.error(`Model ${modelName} not found in Prisma client`);
      continue;
    }

    try {
      for (const item of jsonData) {
        await model.create({ data: item });
      }
      console.log(`Seeded ${modelName} with data from ${fileName}`);
    } catch (error) {
      console.error(`Error seeding data for ${modelName}:`, error);
    }

    await resetSequence(modelName);
    await sleep(500);
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
