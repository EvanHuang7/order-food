-- AlterEnum
ALTER TYPE "NotificationType" ADD VALUE 'SubscribeApp';

-- AlterTable
ALTER TABLE "NotificationSetting" ADD COLUMN     "subscribeApp" BOOLEAN NOT NULL DEFAULT false;
