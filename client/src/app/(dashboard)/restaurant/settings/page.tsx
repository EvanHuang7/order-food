"use client";

import Loading from "@/components/Loading";
import SettingsForm from "@/components/SettingsForm";
import {
  useGetAuthUserQuery,
  useUpdateRestaurantInfoMutation,
} from "@/state/api";
import React from "react";
import { isBase64ImagesUnder1MB, toBase64 } from "@/lib/utils";
import { toast } from "sonner";

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

    let base64ImageFilesList: string[] = [];
    const files = data.photoUrls as File[];
    // Only append "files" if there are photos uploaded
    if (files && files.length > 0) {
      const maxSize = 1 * 1024 * 1024; // 1MB
      // Check each file size
      for (const file of files) {
        if (file.size > maxSize) {
          toast.error("A file exceeds max file size 1MB, please try again");
          return;
        }
      }
      // Convert files to base64
      base64ImageFilesList = await Promise.all(
        files.map((file) => toBase64(file))
      );
    }

    // Check all images size (new profile image + background photos)
    const isValidSize = isBase64ImagesUnder1MB(
      // Only include profileImgUrl if it's NOT a uploaded S3 image
      !data.profileImgUrl.startsWith(
        "https://of-s3-images.s3.us-east-1.amazonaws.com/restaurant"
      )
        ? [data.profileImgUrl, ...base64ImageFilesList]
        : base64ImageFilesList
    );
    if (!isValidSize) {
      toast.error(
        "Total file size (profile image and background photos) exceeds 1MB, please try again"
      );
      return;
    }

    await updateRestaurantInfo({
      cognitoId: authUser?.cognitoInfo?.userId,
      updatedRestaurant: data,
      files: base64ImageFilesList,
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
