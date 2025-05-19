"use client";

import SettingsForm from "@/components/SettingsForm";
import { useGetAuthUserQuery, useUpdateDriverInfoMutation } from "@/state/api";
import React from "react";

const DriverSettings = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const [updateDriver] = useUpdateDriverInfoMutation();

  if (isLoading) return <>Loading...</>;

  const initialData = {
    name: authUser?.userInfo.name,
    email: authUser?.userInfo.email,
    phoneNumber: authUser?.userInfo.phoneNumber,
  };

  const handleSubmit = async (data: typeof initialData) => {
    await updateDriver({
      cognitoId: authUser?.cognitoInfo?.userId,
      ...data,
    });
  };

  return (
    <SettingsForm
      initialData={initialData}
      onSubmit={handleSubmit}
      userType="driver"
    />
  );
};

export default DriverSettings;
