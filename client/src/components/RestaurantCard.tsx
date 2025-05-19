import { Bath, Bed, Heart, House, Star } from "lucide-react";
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
    restaurant.photoUrls?.[0] || "/placeholder.jpg"
  );

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
            onError={() => setImgSrc("/placeholder.jpg")}
          />
        </div>

        {showFavoriteButton && (
          <button
            className="absolute bottom-4 right-4 bg-white hover:bg-white/90 rounded-full p-2 cursor-pointer"
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
      <div className="p-4">
        <h2 className="text-xl font-bold mb-1">
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
        <p className="text-gray-600 mb-2">
          {restaurant?.location?.address}, {restaurant?.location?.city}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="font-semibold">rating</span>
            <span className="text-gray-600 ml-1">numberOfReviews</span>
          </div>
          <p className="text-lg font-bold mb-3">
            price{" "}
            <span className="text-gray-600 text-base font-normal"> /meal</span>
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default RestaurantCard;
