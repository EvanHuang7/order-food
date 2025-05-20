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
import { Fragment, useMemo } from "react";

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
  const isEmpty = totalItems === 0;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="relative">
          <ShoppingCart className="w-5 h-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[400px] sm:w-[450px]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>Review your selected menu items.</SheetDescription>
        </SheetHeader>

        <ScrollArea className="mt-4 h-[calc(100vh-200px)] pr-2">
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
                        className="flex items-center justify-between border p-2 rounded-md"
                      >
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            ${item.price} × {item.quantity}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
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

        <Button
          className="w-full mt-6"
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
