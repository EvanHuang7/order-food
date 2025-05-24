"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import Image from "next/image";

const OrderDetailModal = ({ open, onClose, order }: OrderDetailModalProps) => {
  const [imgSrc, setImgSrc] = useState(() => {
    const randomIndex = Math.floor(Math.random() * 9) + 1;
    return `/food/food${randomIndex}.jpg`;
  });

  if (!order) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="w-full max-w-md sm:max-w-2xl max-h-[90vh] overflow-y-auto sm:rounded-xl"
        style={{ overscrollBehavior: "contain" }}
      >
        <DialogHeader>
          <DialogTitle>Order #{order.id} Details</DialogTitle>
          <DialogDescription className="sr-only">
            Modal for showing order details.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="font-semibold">Items:</div>

          <ul className="space-y-4">
            {order.items.map((item: any) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-4"
              >
                {/* Image on the left */}
                <div className="w-16 h-16 flex-shrink-0 relative rounded overflow-hidden border">
                  <Image
                    src={imgSrc}
                    alt={item.menuItem.name}
                    className="object-cover"
                    sizes="w-16 h-16"
                    fill
                    onError={() => setImgSrc("/food/food5.jpg")}
                  />
                </div>

                {/* Item name & quantity */}
                <div className="flex-1">
                  <div className="font-medium">{item.menuItem.name}</div>
                  <div className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </div>
                </div>

                {/* Price */}
                <div className="text-right font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </li>
            ))}
          </ul>

          <hr />

          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>${order.totalPrice.toFixed(2)}</span>
          </div>

          <div className="mt-4 text-sm text-gray-600 space-y-1">
            <div>Status: {order.status}</div>
            <div>Placed: {new Date(order.createdAt).toLocaleString()}</div>
            <div>Updated: {new Date(order.updatedAt).toLocaleString()}</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailModal;
