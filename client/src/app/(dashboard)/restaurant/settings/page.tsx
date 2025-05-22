"use client";

import Loading from "@/components/Loading";
import SettingsForm from "@/components/SettingsForm";
import {
  useGetAuthUserQuery,
  useUpdateRestaurantInfoMutation,
} from "@/state/api";
import React from "react";
import { CategoryEnum } from "@/lib/constants";

const RestaurantSettings = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const [updateRestaurant] = useUpdateRestaurantInfoMutation();

  if (isLoading) return <Loading />;

  const initialData = {
    name: authUser?.userInfo.name,
    email: authUser?.userInfo.email,
    phoneNumber: authUser?.userInfo.phoneNumber,
    address: authUser?.userInfo?.location?.address,
    city: authUser?.userInfo?.location?.city,
    province: authUser?.userInfo?.location?.province,
    postalCode: authUser?.userInfo?.location?.postalCode,
    country: authUser?.userInfo?.location?.country,
    openTime: authUser?.userInfo?.openTime || "",
    closeTime: authUser?.userInfo?.closeTime || "",
    categories:
      !!authUser?.userInfo?.categories &&
      authUser?.userInfo?.categories.length > 0
        ? authUser?.userInfo?.categories
        : CategoryEnum.Food,
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
