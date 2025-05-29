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
  interface User {
    cognitoInfo: AuthUser;
    userInfo: Customer | Restaurant | Driver;
    userRole: JsonObject | JsonPrimitive | JsonArray;
  }

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
    restaurantName: string;
    showSelectButton?: boolean;
    showEditButton?: boolean;
  }

  interface MenuItemModalProps {
    isOpen: boolean;
    onClose: () => void;
    restaurantId: number;
    menuItem?: MenuItem;
  }

  interface RestaurantCardProps {
    restaurant: Restaurant;
    isFavorite: boolean;
    onFavoriteToggle: () => void;
    showFavoriteButton?: boolean;
    restaurantLink?: string;
  }

  interface ImagePreviewsProps {
    images: string[];
  }

  interface AiCallWidgetProps {
    restaurantWithMenuItems: Restaurant;
  }

  interface OrderCardProps {
    order: Order;
    userType: "customer" | "restaurant" | "driver";
    children: React.ReactNode;
  }

  interface OrderDetailModalProps {
    open: boolean;
    onClose: () => void;
    order: Order;
  }

  interface RateFoodModalProps {
    open: boolean;
    onClose: () => void;
    order: any | null;
  }

  interface RateRestaurantModalProps {
    open: boolean;
    onClose: () => void;
    order: any | null;
  }

  interface PaymentCardModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
  }

  interface OrderStepperProps {
    currentStep: number;
  }

  interface CategoryMultiSelectProps {
    value: CategoryEnum[];
    onChange: (selected: CategoryEnum[]) => void;
    disabled?: boolean;
  }
}

export {};
