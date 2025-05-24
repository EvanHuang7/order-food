"use client";

import Loading from "./Loading";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Switch } from "./ui/switch";
import {
  useGetAuthUserQuery,
  useTurnOnNotificationMutation,
  useTurnOffNotificationMutation,
} from "@/state/api";
import { Bell } from "lucide-react";

const NotificationSetting = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const [turnOnNotification] = useTurnOnNotificationMutation();
  const [turnOffNotification] = useTurnOffNotificationMutation();

  const handleTurnOnNotification = async (type: string) => {
    try {
      const result = await turnOnNotification({
        customerId: authUser?.userInfo.id || "",
        type: type,
      }).unwrap();
    } catch (error) {
      console.error("Failed to trun on notification", error);
    }
  };

  const handleTurnOffNotification = async (type: string) => {
    try {
      const result = await turnOffNotification({
        customerId: authUser?.userInfo.id || "",
        type: type,
      }).unwrap();
    } catch (error) {
      console.error("Failed to trun off notification", error);
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
        <div className="text-sm font-medium text-primary-700">
          Notification Settings
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-primary-700">Order Updates</span>
          <Switch
            id="order-updates"
            className="focus-visible:ring-0 focus-visible:outline-none"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-primary-700">Promotions</span>
          <Switch
            id="promotions"
            className="focus-visible:ring-0 focus-visible:outline-none"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-primary-700">Delivery Status</span>
          <Switch
            id="delivery-status"
            className="focus-visible:ring-0 focus-visible:outline-none"
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationSetting;
