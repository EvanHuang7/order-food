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
  const [updateRestaurantInfo] = useUpdateRestaurantInfoMutation();

  // Make sure has authUser data when setting initialData
  if (isLoading || !authUser) return <Loading />;

  const initialData = {
    name: authUser?.userInfo.name,
    email: authUser?.userInfo.email,
    phoneNumber: authUser?.userInfo.phoneNumber || "",
    profileImgUrl: authUser?.userInfo.profileImgUrl || "",
    address: authUser?.userInfo?.location?.address || "",
    city: authUser?.userInfo?.location?.city || "",
    province: authUser?.userInfo?.location?.province || "",
    postalCode: authUser?.userInfo?.location?.postalCode || "",
    country: authUser?.userInfo?.location?.country || "",
    openTime: authUser?.userInfo?.openTime || "",
    closeTime: authUser?.userInfo?.closeTime || "",
    pricePerPereson: String(authUser?.userInfo?.pricePerPereson || ""),
    categories:
      !!authUser?.userInfo?.categories &&
      authUser?.userInfo?.categories.length > 0
        ? authUser?.userInfo?.categories
        : [],
    description: authUser?.userInfo?.description || "",
    photoUrls: [],
  };

  const handleSubmit = async (data: typeof initialData) => {
    if (!authUser || authUser.userRole !== "restaurant") {
      console.error(
        "You must be logged in as a restaurant to update restaurant info"
      );
      return;
    }

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "photoUrls") {
        const files = value as File[];
        // Only append "photos" if there are photos uploaded
        if (files && files?.length > 0) {
          files.forEach((file: File) => {
            formData.append("photos", file);
          });
        }
      } else if (Array.isArray(value)) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    });

    formData.append("cognitoId", authUser?.cognitoInfo?.userId);
    await updateRestaurantInfo(formData);
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
