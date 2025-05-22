"use client";

import Loading from "@/components/Loading";
import SettingsForm from "@/components/SettingsForm";
import { useGetAuthUserQuery, useUpdateDriverInfoMutation } from "@/state/api";
import React from "react";

const DriverSettings = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const [updateDriver] = useUpdateDriverInfoMutation();

  // Make sure has authUser data when setting initialData
  if (isLoading || !authUser) return <Loading />;

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
