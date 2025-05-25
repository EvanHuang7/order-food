"use client";

import Loading from "@/components/Loading";
import SettingsForm from "@/components/SettingsForm";
import {
  useGetAuthUserQuery,
  useUpdateRestaurantInfoMutation,
} from "@/state/api";
import React from "react";

const RestaurantSettings = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const [updateRestaurant] = useUpdateRestaurantInfoMutation();

  // Make sure has authUser data when setting initialData
  if (isLoading || !authUser) return <Loading />;

  const initialData = {
    name: authUser?.userInfo.name,
    email: authUser?.userInfo.email,
    phoneNumber: authUser?.userInfo.phoneNumber || "",
    address: authUser?.userInfo?.location?.address || "",
    city: authUser?.userInfo?.location?.city || "",
    province: authUser?.userInfo?.location?.province || "",
    postalCode: authUser?.userInfo?.location?.postalCode || "",
    country: authUser?.userInfo?.location?.country || "",
    openTime: authUser?.userInfo?.openTime || "",
    closeTime: authUser?.userInfo?.closeTime || "",
    pricePerPereson: String(authUser?.userInfo?.pricePerPereson) || "",
    categories:
      !!authUser?.userInfo?.categories &&
      authUser?.userInfo?.categories.length > 0
        ? authUser?.userInfo?.categories
        : [],
    description: authUser?.userInfo?.description || "",
    photoUrls: [],
  };

  const handleSubmit = async (data: typeof initialData) => {
    await updateRestaurant({
      cognitoId: authUser?.cognitoInfo?.userId,
      ...data,
    });
  };

  return (
    <SettingsForm
      initialData={initialData}
      onSubmit={handleSubmit}
      userType="restaurant"
    />
  );
};

export default RestaurantSettings;
