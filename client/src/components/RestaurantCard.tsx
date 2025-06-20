import { RestaurantRating } from "@/types/prismaTypes";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import RatingModal from "./RatingModal";

const RestaurantCard = ({
  restaurant,
  isFavorite,
  onFavoriteToggle,
  showFavoriteButton = true,
  restaurantLink,
}: RestaurantCardProps) => {
  const [imgSrc, setImgSrc] = useState(
    restaurant.profileImgUrl || "/userProfile/restaurant-profile-img.jpg"
  );
  const [showRatingsModal, setShowRatingsModal] = useState(false);

  const averageRating = restaurant.ratings.length
    ? restaurant.ratings.reduce(
        (sum: number, r: RestaurantRating) => sum + r.rating,
        0
      ) / restaurant.ratings.length
    : 0;
  const numberOfReviews = restaurant.ratings.length;

  return (
    <>
      <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full mb-5">
        {/* Restaurant Image */}
        <Link href={restaurantLink || "#"}>
          <div className="w-full h-48 relative">
            <Image
              src={imgSrc}
              alt={restaurant.name}
              fill
              className="object-cover cursor-pointer"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() =>
                setImgSrc("/userProfile/restaurant-profile-img.jpg")
              }
            />
          </div>
        </Link>

        {/* Restaurant name and favorite button */}
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold mb-1 truncate">
              {restaurantLink ? (
                <Link href={restaurantLink} className="hover:underline">
                  {restaurant.name}
                </Link>
              ) : (
                restaurant.name
              )}
            </h2>
            {showFavoriteButton && (
              <button
                className="bg-white rounded-full p-1"
                onClick={onFavoriteToggle}
              >
                <Heart
                  className={`w-5 h-5 ${
                    isFavorite ? "text-red-500 fill-red-500" : "text-gray-600"
                  }`}
                />
              </button>
            )}
          </div>

          {/* Restaurant location, reviews and price */}
          <p className="text-gray-600 mb-2 truncate">
            {restaurant?.location?.address || "Unknown address"},{" "}
            {restaurant?.location?.city || "unknown city"},{" "}
            {restaurant?.location?.province || "unknown province"}
          </p>

          <div className="flex justify-between items-center mb-2">
            <div
              className="flex items-center text-sm cursor-pointer hover:underline"
              onClick={() => setShowRatingsModal(true)}
            >
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span className="font-semibold">{averageRating.toFixed(1)}</span>
              <span className="text-gray-600 ml-1">
                ({numberOfReviews} reviews)
              </span>
            </div>
            <p className="text-lg font-bold">
              ${restaurant?.pricePerPereson || "N/A"}
              <span className="text-gray-600 text-base font-normal">
                {" "}
                /person
              </span>
            </p>
          </div>
          <hr />
        </div>
      </div>

      <RatingModal
        open={showRatingsModal}
        onClose={() => setShowRatingsModal(false)}
        ratings={restaurant.ratings}
        title={`Reviews for ${restaurant.name}`}
        imageUrl={imgSrc}
      />
    </>
  );
};

export default RestaurantCard;
