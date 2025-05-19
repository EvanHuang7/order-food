"use client";

import MenuItemCard from "@/components/MenuItemCard";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import {
  useGetAuthUserQuery,
  useGetRestaurantMenuItemsQuery,
} from "@/state/api";
import React from "react";

// TODO: may change file to manage menu
const ManageRestaurant = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const {
    data: restaurantMenuItems,
    isLoading,
    error,
  } = useGetRestaurantMenuItemsQuery(authUser?.userInfo?.id || "", {
    skip: !authUser?.userInfo?.id,
  });

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading restaurant menu items</div>;

  return (
    <div className="dashboard-container">
      <Header title="My Menu" subtitle="View and manage your menu items" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {restaurantMenuItems?.map((menuItem) => (
          <MenuItemCard
            key={menuItem.id}
            menuItem={menuItem}
            selectedNumber={0}
            onMenuItemSelect={() => {}}
            showSelectButton={false}
          />
        ))}
      </div>
      {(!restaurantMenuItems || restaurantMenuItems.length === 0) && (
        <p>You don&lsquo;t have any menu item yet</p>
      )}
    </div>
  );
};

export default ManageRestaurant;
