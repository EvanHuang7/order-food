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

  if (isLoading) return <Loading />;

  const initialData = {
    name: authUser?.userInfo.name,
    email: authUser?.userInfo.email,
    phoneNumber: authUser?.userInfo.phoneNumber,
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
