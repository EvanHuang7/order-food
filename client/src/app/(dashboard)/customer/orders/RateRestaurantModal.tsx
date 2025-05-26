"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  useGetRestaurantRatingsQuery,
  useUpsertRestaurantRatingMutation,
} from "@/state/api";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { skipToken } from "@reduxjs/toolkit/query";
import Image from "next/image";

const RateRestaurantModal = ({
  open,
  onClose,
  order,
}: RateRestaurantModalProps) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const {
    data: restaurantRatings,
    isLoading,
    isError,
  } = useGetRestaurantRatingsQuery(
    order
      ? {
          customerId: order.customerId,
          restaurantIds: [String(order.restaurantId)],
        }
      : skipToken
  );
  const [upsertRestaurantRating] = useUpsertRestaurantRatingMutation();
  const hasExistingRatings = restaurantRatings && restaurantRatings.length > 0;

  useEffect(() => {
    if (restaurantRatings && restaurantRatings.length > 0) {
      setRating(restaurantRatings[0].rating);
      setComment(restaurantRatings[0].comment ?? "");
    } else {
      setRating(0);
      setComment("");
    }
  }, [restaurantRatings]);

  const handleRate = (star: number) => {
    setRating(star);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = async () => {
    if (!order) return;

    try {
      await upsertRestaurantRating({
        customerId: order.customerId,
        rating: {
          restaurantId: order.restaurantId,
          rating,
          comment,
        },
      }).unwrap();
      onClose();
    } catch (err) {
      console.error("Failed to submit restaurant rating", err);
    }
  };

  if (!order) return null;
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching restaurant rating</div>;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="w-full max-w-md sm:max-w-2xl max-h-[70vh] overflow-y-auto sm:rounded-xl"
        style={{ overscrollBehavior: "contain" }}
      >
        <DialogHeader>
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border">
              <Image
                src="/userProfile/restaurant-profile-img-3.jpg"
                alt="Restaurant"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <DialogTitle>Rate Restaurant</DialogTitle>
              <DialogDescription>{order.restaurant.name}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                onClick={() => handleRate(star)}
                className={`w-8 h-8 cursor-pointer ${
                  rating >= star
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <textarea
            placeholder="Leave a comment..."
            className="w-full rounded border border-gray-300 p-2 text-sm resize-y focus:outline-none focus:ring-0 focus:border-gray-300"
            rows={4}
            value={comment}
            onChange={handleCommentChange}
          />

          <div className="text-right">
            <button
              onClick={handleSubmit}
              disabled={rating === 0}
              className="bg-primary-700 text-white px-4 py-2 rounded"
            >
              {hasExistingRatings ? "Update Rating" : "Submit Rating"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RateRestaurantModal;
