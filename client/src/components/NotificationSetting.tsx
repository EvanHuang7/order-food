"use client";

import Loading from "./Loading";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Switch } from "./ui/switch";
import { useState } from "react";
import {
  useGetAuthUserQuery,
  useToggleNotificationMutation,
} from "@/state/api";
import { Bell } from "lucide-react";

const NotificationSetting = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const notificationSetting = authUser?.userInfo?.notificationSetting;
  const [toggleOnNotification] = useToggleNotificationMutation();

  const [settings, setSettings] = useState({
    foodDelivered: false,
    newMenuItemInFavoriteRest: false,
    subscribeApp: false,
  });

  const handleToggle = async (key: keyof typeof settings, value: boolean) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
    try {
      await toggleOnNotification({
        customerId: authUser?.userInfo.id || "",
        type: key,
        value,
      });
    } catch (error) {
      console.error(`Failed to toggle ${key}`, error);
    }
  };

  // Make sure authUser load before call setSettings below
  if (isLoading || !authUser) return <Loading />;

  // Initialize state from authUser if not already set
  if (
    notificationSetting &&
    settings.foodDelivered === false &&
    settings.newMenuItemInFavoriteRest === false &&
    settings.subscribeApp === false
  ) {
    setSettings({
      foodDelivered: notificationSetting.foodDelivered,
      newMenuItemInFavoriteRest: notificationSetting.newMenuItemInFavoriteRest,
      subscribeApp: notificationSetting.subscribeApp,
    });
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative cursor-pointer hover:opacity-80 transition">
          <Bell className="w-6 h-6 text-primary-200 hover:text-primary-400" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-64 bg-white shadow-lg rounded-lg p-4 space-y-4">
        <div className="text-lg font-semibold text-foreground text-primary-700">
          Email Notification
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-primary-700">Food Delivered</span>
          <Switch
            checked={settings.foodDelivered}
            onCheckedChange={(val) => handleToggle("foodDelivered", val)}
            className="focus-visible:ring-0 focus-visible:outline-none"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-primary-700">
            New Menu in Favorites
          </span>
          <Switch
            checked={settings.newMenuItemInFavoriteRest}
            onCheckedChange={(val) =>
              handleToggle("newMenuItemInFavoriteRest", val)
            }
            className="focus-visible:ring-0 focus-visible:outline-none"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-primary-700">Subscribe to App</span>
          <Switch
            checked={settings.subscribeApp}
            onCheckedChange={(val) => handleToggle("subscribeApp", val)}
            className="focus-visible:ring-0 focus-visible:outline-none"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationSetting;
