-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_customerId_fkey";

-- AlterTable
ALTER TABLE "Notification" ALTER COLUMN "customerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
