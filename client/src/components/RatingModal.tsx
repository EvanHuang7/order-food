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
import { Customer } from "@/types/prismaTypes";

type Rating = {
  id: number;
  rating: number;
  comment?: string | null;
  updatedAt: Date;
  customer: Customer;
};

type RatingModalProps = {
  open: boolean;
  onClose: () => void;
  ratings: Rating[];
  title?: string;
  imageUrl?: string;
};

const RatingModal = ({
  open,
  onClose,
  ratings,
  title = "Customer Reviews",
  imageUrl,
}: RatingModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md sm:max-w-2xl max-h-[70vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4">
            {imageUrl && (
              <div className="relative w-12 h-12 rounded-full overflow-hidden border">
                <Image
                  src={imageUrl}
                  alt="RatingItem"
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription className="sr-only">
                All customer reviews for this rating
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {ratings.length === 0 ? (
            <p className="text-sm text-gray-500">No reviews yet ✍️</p>
          ) : (
            ratings.map((rating) => (
              <div
                key={rating.id}
                className="flex gap-4 items-start border-b pb-4"
              >
                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                  <Image
                    src={
                      rating.customer.profileImgUrl ||
                      "/userProfile/customer-profile-img.jpg"
                    }
                    alt={rating.customer.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{rating.customer.name}</span>
                    <span className="text-xs text-gray-500">
                      {new Date(rating.updatedAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          rating.rating >= star
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {rating.comment && (
                    <p className="text-sm text-gray-700 mt-2">
                      {rating.comment}
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RatingModal;
