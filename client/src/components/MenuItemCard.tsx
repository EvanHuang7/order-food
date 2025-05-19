import { getRandomAverageRating, getRandomNumberOfReviews } from "@/lib/utils";
import { Heart, Star } from "lucide-react";
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

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full mb-5">
      <div className="relative">
        <div className="w-full h-48 relative">
          <Image
            src={imgSrc}
            alt={menuItem.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgSrc("/food/food1.jpg")}
          />
        </div>
        {showSelectButton && (
          <button
            className="absolute bottom-4 right-4 bg-white hover:bg-white/90 rounded-full p-2 cursor-pointer"
            onClick={onMenuItemSelect}
          >
            <Heart
              className={`w-5 h-5 ${
                selectedNumber > 0
                  ? "text-red-500 fill-red-500"
                  : "text-gray-600"
              }`}
            />
          </button>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-1">{menuItem.name}</h2>
        <p className="text-gray-600 mb-2">{menuItem?.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center mb-2">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="font-semibold">{averageRating.toFixed(1)}</span>
            <span className="text-gray-600 ml-1">
              ({numberOfReviews} Reviews)
            </span>
          </div>
          <p className="text-lg font-bold mb-3">
            ${menuItem.price}{" "}
            <span className="text-gray-600 text-base font-normal"> /each</span>
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default MenuItemCard;
