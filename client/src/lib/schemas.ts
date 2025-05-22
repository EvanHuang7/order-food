import * as z from "zod";

export const settingsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().optional(),
  city: z.string().optional(),
  province: z.string().optional(),
  postalCode: z.string().optional(),
  country: z.string().optional(),
  openTime: z.string().optional(),
  closeTime: z.string().optional(),
  categories: z.array(z.string()).optional(),
  description: z.string().optional(),
  photoUrls: z.any().optional(),
});
export type SettingsFormData = z.infer<typeof settingsSchema>;

export const menuItemSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  price: z.coerce.number().positive().min(0),
  photoUrl: z.any().optional(),
});
export type MenuItemFormData = z.infer<typeof menuItemSchema>;

export const paymentCardSchema = z.object({
  cardNumber: z.string().min(12, "Card number must be at least 12 digits"),
  expiry: z.string().min(4, "Enter expiry date"),
  cvc: z.string().min(3, "CVC is too short"),
  name: z.string().min(1, "Name is required"),
});
export type PaymentCardFormData = z.infer<typeof paymentCardSchema>;
