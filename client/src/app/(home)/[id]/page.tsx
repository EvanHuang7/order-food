"use client";

import {
  useGetAuthUserQuery,
  useGetRestaurantMenuItemsQuery,
} from "@/state/api";
import { useParams } from "next/navigation";
import React from "react";
import ImagePreviews from "./ImagePreviews";
import AiCallWidget from "./AiCallWidget";
import MenuItemCard from "@/components/MenuItemCard";
import Loading from "@/components/Loading";

const SingleRestaurant = () => {
  const { id: restaurantId } = useParams();
  const { data: authUser } = useGetAuthUserQuery();
  const showCustomerInteraction =
    !!authUser && authUser.userRole === "customer";

  const {
    data: restaurantMenuItems,
    isLoading,
    error,
  } = useGetRestaurantMenuItemsQuery(String(restaurantId));

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading restaurant menu items</div>;

  return (
    <div className="w-full pt-2 pb-3 px-4">
      <ImagePreviews
        images={["/singlelisting-2.jpg", "/singlelisting-3.jpg"]}
      />

      <div className="flex flex-col md:flex-row gap-3 items-start">
        {/* Menu Items */}
        <div className="flex-1 order-2 w-full md:order-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-3 gap-6">
            {restaurantMenuItems?.map((menuItem: any) => (
              <MenuItemCard
                key={menuItem.id}
                menuItem={menuItem}
                showSelectButton={showCustomerInteraction}
              />
            ))}
          </div>
          {(!restaurantMenuItems || restaurantMenuItems.length === 0) && (
            <p className="text-sm text-gray-500 mt-4">
              This restaurant is still preparing its menu ✍️.
            </p>
          )}
        </div>

        {/* Widget */}
        <div className="w-full md:w-[300px] order-1 md:order-2 pt-3">
          <AiCallWidget restaurantId={String(restaurantId)} />
        </div>
      </div>
    </div>
  );
};

export default SingleRestaurant;
