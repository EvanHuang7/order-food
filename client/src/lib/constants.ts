import {
  Wifi,
  Coffee,
  KnifeFork,
  Drink,
  Star,
  Calendar,
  Clock,
  DollarSign,
  LucideIcon,
} from "lucide-react";

export enum CategoryEnum {
  WiFi = "WiFi",
  Coffee = "Coffee",
  Food = "Food",
  Drinks = "Drinks",
  OutdoorSeating = "OutdoorSeating",
  Delivery = "Delivery",
  Takeout = "Takeout",
  HappyHour = "HappyHour",
  Reservation = "Reservation",
  PriceRange = "PriceRange",
}

export const CategoryEnumIcons: Record<CategoryEnum, LucideIcon> = {
  WiFi: Wifi,
  Coffee: Coffee,
  Food: KnifeFork,
  Drinks: Drink,
  OutdoorSeating: Star,
  Delivery: Calendar,
  Takeout: Clock,
  HappyHour: DollarSign,
  Reservation: Calendar,
  PriceRange: DollarSign,
};

// Add this constant at the end of the file
export const NAVBAR_HEIGHT = 52; // in pixels
