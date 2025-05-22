"use client";

import Loading from "@/components/Loading";
import SettingsForm from "@/components/SettingsForm";
import {
  useGetAuthUserQuery,
  useUpdateCustomerInfoMutation,
} from "@/state/api";
import React from "react";

const CustomerSettings = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const [updateCustomer] = useUpdateCustomerInfoMutation();

  // Make sure has authUser data when setting initialData
  if (isLoading || !authUser) return <Loading />;

  const initialData = {
    name: authUser?.userInfo.name,
    email: authUser?.userInfo.email,
    phoneNumber: authUser?.userInfo.phoneNumber,
    address: authUser?.userInfo?.location?.address,
    city: authUser?.userInfo?.location?.city,
    province: authUser?.userInfo?.location?.province,
    postalCode: authUser?.userInfo?.location?.postalCode,
    country: authUser?.userInfo?.location?.country,
  };

  const handleSubmit = async (data: typeof initialData) => {
    await updateCustomer({
      cognitoId: authUser?.cognitoInfo?.userId,
      ...data,
    });
  };

  return (
    <SettingsForm
      initialData={initialData}
      onSubmit={handleSubmit}
      userType="customer"
    />
  );
};

export default CustomerSettings;
