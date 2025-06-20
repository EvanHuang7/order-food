"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import {
  addItemToShoppingCart,
  removeItemFromShoppingCart,
  clearItemFromShoppingCart,
  clearShoppingCart,
} from "@/state";
import { useGetAuthUserQuery, useCreateOrdersMutation } from "@/state/api";
import {
  ShoppingCart,
  Minus,
  Plus,
  Trash2,
  Loader2,
  CircleAlert,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ShoppingCartSheet = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const [createOrders] = useCreateOrdersMutation();
  const shoppingCart = useAppSelector((state) => state.global.shoppingCart);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const groupedByRestaurant = useMemo(() => {
    const grouped: Record<string, typeof shoppingCart> = {};
    for (const item of shoppingCart as any) {
      if (!grouped[item.restaurantId]) {
        grouped[item.restaurantId] = [];
      }
      grouped[item.restaurantId].push(item);
    }
    return grouped;
  }, [shoppingCart]);

  const totalItems = shoppingCart.reduce(
    (sum: any, item: any) => sum + item.quantity,
    0
  );
  const totalPrice = shoppingCart.reduce(
    (sum: any, item: any) => sum + item.price * item.quantity,
    0
  );
  const isEmpty = totalItems === 0;

  const [open, setOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [imgSrc, setImgSrc] = useState(() => {
    const randomIndex = Math.floor(Math.random() * 9) + 1;
    return `/food/food${randomIndex}.jpg`;
  });

  const handlePlaceOrder = async () => {
    try {
      // Show spinner
      setIsProcessing(true);
      // Wait for 3 seconds before actual request
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Use ".unwrap()" to get result.data directly insteead
      // of getting an {data, error} object.
      // But we don't need to use result data here.
      const result = await createOrders({
        customerId: authUser?.userInfo.id || "",
        items: shoppingCart,
      }).unwrap();

      // Clear shoppingCart, close shoppingCart sheet
      // and redirect customer to orders page
      dispatch(clearShoppingCart());
      setOpen(false);
      router.push("/customer/orders");
    } catch (error) {
      console.error("Failed to place order", error);
    } finally {
      setIsProcessing(false); // Reset processing state
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
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
          <SheetDescription>Review your selected menu items</SheetDescription>
        </SheetHeader>

        <ScrollArea className="mt-4 h-[calc(100vh-240px)] pr-2">
          {isEmpty ? (
            <p className="text-gray-500 text-center mt-10">
              Your cart is empty 🛒
            </p>
          ) : (
            Object.entries(groupedByRestaurant).map(([restaurantId, items]) => {
              const subtotal = items.reduce(
                (sum, item: any) => sum + item.price * item.quantity,
                0
              );
              return (
                <div key={restaurantId} className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {items[0].restaurantName}
                  </h3>
                  <div className="space-y-4">
                    {items.map((item: any) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 border p-2 rounded-md"
                      >
                        {/* Item Image */}
                        <Image
                          src={item?.photoUrl || imgSrc}
                          alt={item.name}
                          width={56}
                          height={56}
                          className="rounded object-cover"
                          style={{ width: "56px", height: "56px" }}
                          onError={() => setImgSrc("/food/food5.jpg")}
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
                              dispatch(
                                addItemToShoppingCart({ menuItem: item })
                              )
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

        <div className="flex items-center mt-4 gap-2">
          <Button
            className="flex-1 bg-primary-700 text-white hover:bg-primary-600"
            disabled={isEmpty || isProcessing || !authUser?.userInfo?.location}
            variant={isEmpty ? "secondary" : "default"}
            onClick={handlePlaceOrder}
          >
            {isProcessing ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin text-white" />
                <span>Processing Payment...</span>
              </div>
            ) : (
              "Pay & Place Order Now"
            )}
          </Button>

          {!authUser?.userInfo?.location && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex-shrink-0">
                    <CircleAlert className="w-5 h-5 cursor-pointer" />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-white border border-gray-200 text-sm text-gray-800 shadow-md rounded-md px-3 py-2 max-w-[200px]"
                >
                  Set your location to place an order. No payment info 💳 needed
                  in this demo.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartSheet;
