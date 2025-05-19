import {
  getRandomAverageRating,
  getRandomNumberOfReviews,
  getRandomPopularity,
} from "@/lib/utils";
import { Flame, Heart, Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const MenuItemCard = ({
  menuItem,
  selectedNumber,
  onMenuItemSelect,
  showSelectButton = true,
}: MenuItemCardProps) => {
  const [imgSrc, setImgSrc] = useState(() => {
    const randomIndex = Math.floor(Math.random() * 9) + 1;
    return `/food/food${randomIndex}.jpg`;
  });
  const averageRating = getRandomAverageRating();
  const numberOfReviews = getRandomNumberOfReviews();
  const itemPopularity = getRandomPopularity();

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full flex h-40 mb-5">
      {/* Left part, Menu item image */}
      <div className="relative w-1/3">
        <Image
          src={imgSrc}
          alt={menuItem.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImgSrc("/food/food1.jpg")}
        />
      </div>
      {/* Right part */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          {/* Item name and select button */}
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold mb-1 truncate">{menuItem.name}</h2>
            {showSelectButton && (
              <button
                className="bg-white rounded-full p-1"
                onClick={onMenuItemSelect}
              >
                <Heart
                  className={`w-4 h-4 ${
                    selectedNumber > 0
                      ? "text-red-500 fill-red-500"
                      : "text-gray-600"
                  }`}
                />
              </button>
            )}
          </div>
          {/* Item description, rating,review */}
          <p className="text-gray-600 mb-1 text-sm truncate">
            {menuItem?.description}
          </p>
          <div className="flex text-sm items-center">
            <Star className="w-3 h-3 text-yellow-400 mr-1" />
            <span className="font-semibold">{averageRating.toFixed(1)}</span>
            <span className="text-gray-600 ml-1">
              ({numberOfReviews} Reviews)
            </span>
          </div>
        </div>
        {/* Item hot icon and price */}
        <div className="flex justify-between items-center text-sm">
          <div className="flex gap-2 text-gray-600">
            <span className="flex items-center">
              <Flame className="w-4 h-4 mr-1" /> {itemPopularity}
            </span>
          </div>

          <p className="text-base font-bold">
            ${menuItem.price}{" "}
            <span className="text-gray-600 text-xs font-normal"> /each</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
