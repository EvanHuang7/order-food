import { LucideIcon } from "lucide-react";
import { AuthUser } from "aws-amplify/auth";
import { Customer, Restaurant, Driver } from "./prismaTypes";
import { MotionProps as OriginalMotionProps } from "framer-motion";

declare module "framer-motion" {
  interface MotionProps extends OriginalMotionProps {
    className?: string;
  }
}

declare global {
  interface HeaderProps {
    title: string;
    subtitle: string;
  }

  interface NavbarProps {
    isDashboard: boolean;
  }

  interface AppSidebarProps {
    userType: "customer" | "restaurant" | "driver";
  }

  interface SettingsFormProps {
    initialData: SettingsFormData;
    onSubmit: (data: SettingsFormData) => Promise<void>;
    userType: "customer" | "restaurant" | "driver";
  }

  interface MenuItemCardProps {
    menuItem: MenuItem;
    selectedNumber: number;
    onMenuItemSelect: () => void;
    showSelectButton?: boolean;
  }

  interface MenuItemModalProps {
    isOpen: boolean;
    onClose: () => void;
    restaurantId: number;
  }

  interface User {
    cognitoInfo: AuthUser;
    userInfo: Customer | Restaurant | Driver;
    userRole: JsonObject | JsonPrimitive | JsonArray;
  }
}

export {};
