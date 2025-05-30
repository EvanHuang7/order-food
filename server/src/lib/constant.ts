import * as z from "zod";

export const menuItemWithQuantitySchema = z.object({
  id: z.number(),
  restaurantId: z.number(),
  name: z.string(),
  price: z.number(),
  quantity: z.number().int().positive(),
});

export const orderSchema = z.array(menuItemWithQuantitySchema);
