"use client";

import SettingsForm from "@/components/SettingsForm";
import {
  useGetAuthUserQuery,
  useUpdateCustomerInfoMutation,
} from "@/state/api";
import React from "react";

const CustomerSettings = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const [updateCustomer] = useUpdateCustomerInfoMutation();

  if (isLoading) return <>Loading...</>;

  const initialData = {
    name: authUser?.userInfo.name,
    email: authUser?.userInfo.email,
    phoneNumber: authUser?.userInfo.phoneNumber,
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
