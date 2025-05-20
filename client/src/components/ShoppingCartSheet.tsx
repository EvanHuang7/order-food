"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import {
  addItemToShoppingCart,
  removeItemFromShoppingCart,
  clearItemFromShoppingCart,
} from "@/state";
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { useMemo } from "react";
import Image from "next/image";

const ShoppingCartSheet = () => {
  const shoppingCart = useAppSelector((state) => state.global.shoppingCart);
  const dispatch = useAppDispatch();

  const groupedByRestaurant = useMemo(() => {
    const grouped: Record<string, typeof shoppingCart> = {};
    for (const item of shoppingCart) {
      if (!grouped[item.restaurantId]) {
        grouped[item.restaurantId] = [];
      }
      grouped[item.restaurantId].push(item);
    }
    return grouped;
  }, [shoppingCart]);

  const totalItems = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = shoppingCart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const isEmpty = totalItems === 0;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative cursor-pointer hover:opacity-80 transition">
          <ShoppingCart className="w-6 h-6 text-primary-200 hover:text-primary-400" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
      </SheetTrigger>

      <SheetContent side="right" className="w-[400px] sm:w-[450px]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>Review your selected menu items.</SheetDescription>
        </SheetHeader>

        <ScrollArea className="mt-4 h-[calc(100vh-240px)] pr-2">
          {isEmpty ? (
            <p className="text-gray-500 text-center mt-10">
              Your cart is empty.
            </p>
          ) : (
            Object.entries(groupedByRestaurant).map(([restaurantId, items]) => {
              const subtotal = items.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
              );
              return (
                <div key={restaurantId} className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Restaurant #{restaurantId}
                  </h3>
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 border p-2 rounded-md"
                      >
                        {/* Item Image */}
                        <Image
                          src={item.image || "/food/food7.jpg"}
                          alt={item.name}
                          width={56}
                          height={56}
                          className="rounded object-cover"
                          style={{ width: "56px", height: "56px" }}
                        />

                        {/* Name, price and quantity */}
                        <div className="flex-1 min-w-0 max-w-[200px] break-words">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            ${item.price.toFixed(2)} × {item.quantity}
                          </p>
                        </div>

                        {/* Button controls */}
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() =>
                              dispatch(removeItemFromShoppingCart(item.id))
                            }
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="min-w-[20px] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() =>
                              dispatch(addItemToShoppingCart(item))
                            }
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="destructive"
                            onClick={() =>
                              dispatch(clearItemFromShoppingCart(item.id))
                            }
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-right mt-2 font-semibold">
                    Subtotal: ${subtotal.toFixed(2)}
                  </p>
                </div>
              );
            })
          )}
        </ScrollArea>

        {/* Total Price */}
        {!isEmpty && (
          <div className="mt-4 text-right font-semibold text-lg">
            Total: ${totalPrice.toFixed(2)}
          </div>
        )}

        <Button
          className="w-full mt-4 bg-primary-700 text-white hover:bg-primary-600"
          disabled={isEmpty}
          variant={isEmpty ? "secondary" : "default"}
        >
          Proceed to Checkout
        </Button>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartSheet;
