"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const RateFoodModal = ({ open, onClose, order }: OrderDetailModalProps) => {
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [comments, setComments] = useState<Record<number, string>>({}); // new state for comments

  const handleRate = (itemId: number, rating: number) => {
    setRatings((prev) => ({ ...prev, [itemId]: rating }));
  };

  const handleCommentChange = (itemId: number, value: string) => {
    setComments((prev) => ({ ...prev, [itemId]: value }));
  };

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
          <DialogTitle>Rate Food</DialogTitle>
          <DialogDescription className="sr-only">
            Rate each item in your order.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="font-semibold">Items:</div>
          <ul className="space-y-6">
            {order.items.map((item: any) => (
              <li key={item.id} className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 relative rounded border overflow-hidden">
                    <Image
                      src={imgSrc}
                      alt={item.menuItem.name}
                      className="object-cover"
                      sizes="w-16 h-16"
                      fill
                      onError={() => setImgSrc("/food/food5.jpg")}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="font-medium">{item.menuItem.name}</div>
                    <div className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </div>
                    <div className="flex gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          onClick={() => handleRate(item.id, star)}
                          className={`w-5 h-5 cursor-pointer ${
                            (ratings[item.id] || 0) >= star
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Comment textarea per item */}
                <textarea
                  placeholder="Leave a comment..."
                  className="w-full rounded border p-2 text-sm resize-y"
                  rows={3}
                  value={comments[item.id] || ""}
                  onChange={(e) => handleCommentChange(item.id, e.target.value)}
                />
              </li>
            ))}
          </ul>

          <div className="text-right mt-6">
            <button
              onClick={() => {
                console.log("Submit Ratings", ratings);
                console.log("Submit Comments", comments);
                onClose();
              }}
              className="bg-primary-700 text-white px-4 py-2 rounded"
            >
              Submit Ratings
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RateFoodModal;
