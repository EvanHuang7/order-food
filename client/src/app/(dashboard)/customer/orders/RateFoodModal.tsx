"use client";

import Loading from "@/components/Loading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  useGetMenuItemRatingsQuery,
  useUpsertMenuItemRatingsMutation,
} from "@/state/api";
import { MenuItemRating, OrderItem } from "@/types/prismaTypes";
import { Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { skipToken } from "@reduxjs/toolkit/query";

const RateFoodModal = ({ open, onClose, order }: RateFoodModalProps) => {
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [comments, setComments] = useState<Record<number, string>>({});
  const {
    data: menuItemRatings,
    isLoading,
    isError,
  } = useGetMenuItemRatingsQuery(
    order
      ? {
          customerId: order.customerId,
          menuItemIds: order.items.map((item: OrderItem) =>
            String(item.menuItem.id)
          ),
        }
      : skipToken
  );
  const hasExistingRatings = menuItemRatings && menuItemRatings.length > 0;

  const [upsertMenuItemRatings] = useUpsertMenuItemRatingsMutation();

  const [imgSrc, setImgSrc] = useState(() => {
    const randomIndex = Math.floor(Math.random() * 9) + 1;
    return `/food/food${randomIndex}.jpg`;
  });

  // Populate existing ratings/comments when modal opens
  useEffect(() => {
    if (menuItemRatings) {
      const initialRatings: Record<number, number> = {};
      const initialComments: Record<number, string> = {};

      menuItemRatings.forEach((rating: MenuItemRating) => {
        initialRatings[rating.menuItemId] = rating.rating;
        initialComments[rating.menuItemId] = rating.comment ?? "";
      });

      setRatings(initialRatings);
      setComments(initialComments);
    }
  }, [menuItemRatings]);

  const handleRate = (itemId: number, rating: number) => {
    setRatings((prev) => ({ ...prev, [itemId]: rating }));
  };

  const handleCommentChange = (itemId: number, value: string) => {
    setComments((prev) => ({ ...prev, [itemId]: value }));
  };

  const handleSubmit = async () => {
    const ratingsArray = order.items.map((item: OrderItem) => ({
      menuItemId: item.menuItem.id,
      rating: ratings[item.menuItem.id] ?? 0,
      comment: comments[item.menuItem.id] ?? "",
    }));

    try {
      await upsertMenuItemRatings({
        customerId: order.customerId,
        ratings: ratingsArray,
      }).unwrap();
      onClose();
    } catch (err) {
      console.error("Failed to submit ratings", err);
    }
  };

  if (!order) return null;
  if (isLoading) return <Loading />;
  if (isError) return <div>Error fetching food ratings</div>;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="w-full max-w-md sm:max-w-2xl max-h-[70vh] overflow-y-auto sm:rounded-xl"
        style={{ overscrollBehavior: "contain" }}
      >
        <DialogHeader>
          <div className="border-b pb-3">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border">
                <Image
                  src="/userProfile/restaurant-profile-img.jpg"
                  alt="Restaurant"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <DialogTitle>Rate Food</DialogTitle>
                <DialogDescription className="sr-only sm:not-sr-only">
                  {order.restaurant.name}
                </DialogDescription>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <ul className="space-y-6">
            {order.items.map((item: OrderItem) => (
              <li key={item.id} className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 relative rounded border overflow-hidden">
                    <Image
                      src={item.menuItem?.photoUrl || imgSrc}
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
                          onClick={() => handleRate(item.menuItem.id, star)}
                          className={`w-5 h-5 cursor-pointer ${
                            (ratings[item.menuItem.id] || 0) >= star
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <textarea
                  placeholder="Leave a comment..."
                  className="w-full rounded border border-gray-300 p-2 text-sm resize-y focus:outline-none focus:ring-0 focus:border-gray-300"
                  rows={3}
                  value={comments[item.menuItem.id] || ""}
                  onChange={(e) =>
                    handleCommentChange(item.menuItem.id, e.target.value)
                  }
                />
              </li>
            ))}
          </ul>

          <div className="text-right mt-6">
            <button
              onClick={handleSubmit}
              className="bg-primary-700 text-white px-4 py-2 rounded"
            >
              {hasExistingRatings ? "Update Ratings" : "Submit Ratings"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RateFoodModal;
