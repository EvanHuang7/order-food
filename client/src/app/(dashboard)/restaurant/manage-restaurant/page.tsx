"use client";

import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import MenuItemCard from "@/components/MenuItemCard";
import MenuItemModal from "@/components//MenuItemModal";
import {
  useGetAuthUserQuery,
  useGetRestaurantMenuItemsQuery,
} from "@/state/api";
import React, { useState } from "react";
import { Plus } from "lucide-react";

const ManageRestaurant = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const {
    data: restaurantWithMenuItems,
    isLoading,
    error,
  } = useGetRestaurantMenuItemsQuery(authUser?.userInfo?.id || "", {
    skip: !authUser?.userInfo?.id,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    if (authUser) {
      setIsModalOpen(true);
    }
  };

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading restaurant menu items</div>;

  return (
    <div className="dashboard-container">
      <div className="flex justify-between items-center">
        <Header title="My Menu" subtitle="View and manage your menu items" />
        <Button
          className="bg-primary-700 text-white hover:bg-primary-600"
          onClick={handleButtonClick}
        >
          <Plus className="h-4 w-4" />
          <span className="hidden md:block ml-2">Add New Item</span>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {restaurantWithMenuItems?.menuItems?.map((menuItem: any) => (
          <MenuItemCard
            key={menuItem.id}
            menuItem={menuItem}
            showSelectButton={false}
            showEditButton={true}
          />
        ))}
      </div>
      {(!restaurantWithMenuItems?.menuItems ||
        restaurantWithMenuItems?.menuItems?.length === 0) && (
        <p>You don&lsquo;t have any menu item yet 🍔</p>
      )}

      {authUser && (
        <MenuItemModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          restaurantId={authUser?.userInfo?.id}
        />
      )}
    </div>
  );
};

export default ManageRestaurant;
