import {
  getRandomAverageRating,
  getRandomNumberOfReviews,
  getRandomPopularity,
} from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import { Flame, Plus, Star } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { addItemToShoppingCart, removeItemFromShoppingCart } from "@/state";

const MenuItemCard = ({
  menuItem,
  showSelectButton = true,
}: MenuItemCardProps) => {
  const [imgSrc, setImgSrc] = useState(() => {
    const randomIndex = Math.floor(Math.random() * 9) + 1;
    return `/food/food${randomIndex}.jpg`;
  });

  const dispatch = useAppDispatch();
  const selectedItem = useAppSelector((state) =>
    state.global.shoppingCart.find((item: any) => item.id === menuItem.id)
  );
  const selectedNumber = selectedItem?.quantity || 0;

  const averageRating = getRandomAverageRating();
  const numberOfReviews = getRandomNumberOfReviews();
  const itemPopularity = getRandomPopularity();

  const handleAddItem = () => {
    dispatch(addItemToShoppingCart(menuItem));
  };
  const handleRemoveItem = () => {
    dispatch(removeItemFromShoppingCart(menuItem.id));
  };

  return (
    // Consistent horizontal layout across all screen sizes
    <div className="bg-white rounded-xl overflow-hidden shadow-lg w-full flex h-40 mb-5">
      {/* Left part */}
      <div className="relative w-1/3 h-full">
        {/* Item image */}
        <Image
          src={imgSrc}
          alt={menuItem.name}
          fill
          className="object-cover"
          sizes="100vw"
          onError={() => setImgSrc("/food/food1.jpg")}
        />
        {/* Item select button */}
        {showSelectButton && (
          <div className="absolute bottom-1 right-1 flex items-center gap-1 bg-white rounded-full p-1 shadow-md">
            {selectedNumber > 0 ? (
              <>
                {/* Decrease button */}
                <button
                  onClick={() => handleRemoveItem()}
                  className="w-6 h-6 text-red-500 hover:bg-red-100 rounded-full flex items-center justify-center"
                >
                  -
                </button>

                {/* Quantity display */}
                <span className="text-sm font-medium min-w-[20px] text-center">
                  {selectedNumber}
                </span>

                {/* Increase button */}
                <button
                  onClick={() => handleAddItem()}
                  className="w-6 h-6 text-green-600 hover:bg-green-100 rounded-full flex items-center justify-center"
                >
                  +
                </button>
              </>
            ) : (
              // If not in cart, show only +
              <button
                onClick={() => handleAddItem()}
                className="w-6 h-6 text-gray-600 hover:bg-gray-100 rounded-full flex items-center justify-center"
              >
                <Plus className="w-5 h-5" />
              </button>
            )}
          </div>
        )}
      </div>
      {/* Right part */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          {/* Item name */}
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold mb-1 truncate">{menuItem.name}</h2>
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
