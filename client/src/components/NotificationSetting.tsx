"use client";

import Loading from "./Loading";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Switch } from "./ui/switch";
import { useState, useEffect } from "react";
import {
  useGetAuthUserQuery,
  useToggleNotificationMutation,
} from "@/state/api";
import { Bell, CircleAlert } from "lucide-react";

const tooltipText = (
  <>
    This app is currently in <strong>AWS SES sandbox mode</strong>. Even if this
    setting is turned on, you will <strong>NOT</strong> receive email
    notifications. Please <strong>contact the app admin</strong> to get email
    notification access.
  </>
);

const InfoWithTooltip = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <CircleAlert className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-primary-400 transition-colors" />
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        sideOffset={6}
        className="text-sm bg-white text-gray-700 rounded-md shadow-md px-3 py-2 max-w-[220px]"
      >
        {tooltipText}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const NotificationSetting = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const notificationSetting = authUser?.userInfo?.notificationSetting;
  const [toggleOnNotification] = useToggleNotificationMutation();

  const [settings, setSettings] = useState({
    foodDelivered: false,
    newMenuItemInFavoriteRest: false,
    subscribeApp: false,
  });

  useEffect(() => {
    if (notificationSetting) {
      setSettings({
        foodDelivered: notificationSetting.foodDelivered,
        newMenuItemInFavoriteRest:
          notificationSetting.newMenuItemInFavoriteRest,
        subscribeApp: notificationSetting.subscribeApp,
      });
    }
  }, [notificationSetting]);

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

  if (isLoading || !authUser) return <Loading />;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative cursor-pointer hover:opacity-80 transition">
          <Bell className="w-6 h-6 text-primary-200 hover:text-primary-400" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-64 bg-white shadow-lg rounded-lg p-4 space-y-4">
        <h1 className="text-xl font-semibold">Email Notification</h1>

        {/* Food Delivered */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm">
            <span>Food Delivered</span>
            <InfoWithTooltip />
          </div>
          <Switch
            checked={settings.foodDelivered}
            onCheckedChange={(val) => handleToggle("foodDelivered", val)}
            className="focus-visible:ring-0 focus-visible:outline-none"
          />
        </div>

        {/* New Menu in Favorites */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm">
            <span>New Menu in Favorites</span>
            <InfoWithTooltip />
          </div>
          <Switch
            checked={settings.newMenuItemInFavoriteRest}
            onCheckedChange={(val) =>
              handleToggle("newMenuItemInFavoriteRest", val)
            }
            className="focus-visible:ring-0 focus-visible:outline-none"
          />
        </div>

        {/* Subscribe to App */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm">
            <span>Subscribe to App</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <CircleAlert className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-primary-400 transition-colors" />
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  sideOffset={6}
                  className="text-sm bg-white text-gray-700 rounded-md shadow-md px-3 py-2 max-w-[200px]"
                >
                  To complete your subscription, check your email and click the
                  confirmation link we send you.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
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
