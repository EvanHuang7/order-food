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
  };

  // TODO: update updateCustomer api to update other info
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
