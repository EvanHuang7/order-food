import { RestaurantRating } from "@/types/prismaTypes";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const RestaurantCard = ({
  restaurant,
  isFavorite,
  onFavoriteToggle,
  showFavoriteButton = true,
  restaurantLink,
}: RestaurantCardProps) => {
  const [imgSrc, setImgSrc] = useState(
    restaurant.photoUrls?.[0] || "/restaurant-placeholder.jpg"
  );

  const averageRating = restaurant.ratings.length
    ? restaurant.ratings.reduce(
        (sum: number, r: RestaurantRating) => sum + r.rating,
        0
      ) / restaurant.ratings.length
    : 0;
  const numberOfReviews = restaurant.ratings.length;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full mb-5">
      <div className="relative">
        <div className="w-full h-48 relative">
          <Image
            src={imgSrc}
            alt={restaurant.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgSrc("/restaurant-placeholder.jpg")}
          />
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-bold mb-1 truncate">
            {restaurantLink ? (
              <Link
                href={restaurantLink}
                className="hover:underline hover:text-blue-600"
                scroll={false}
              >
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

        <p className="text-gray-600 mb-2 truncate">
          {restaurant?.location?.address || "Unknown address"},{" "}
          {restaurant?.location?.city || "unknown city"},{" "}
          {restaurant?.location?.province || "unknown province"}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="font-semibold">{averageRating.toFixed(1)}</span>
            <span className="text-gray-600 ml-1">
              ({numberOfReviews} Reviews)
            </span>
          </div>
          <p className="text-lg font-bold mb-3">
            {restaurant?.pricePerPereson || "N/A"}{" "}
            <span className="text-gray-600 text-base font-normal">
              {" "}
              /person
            </span>
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default RestaurantCard;
