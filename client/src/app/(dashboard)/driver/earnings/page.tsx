"use client";

import EarningsHistory from "@/components/EarningsHistory";
import Loading from "@/components/Loading";
import { useGetAuthUserQuery, useGetOrdersQuery } from "@/state/api";
import React from "react";

const Earnings = () => {
  const { data: authUser } = useGetAuthUserQuery();

  const { data: orders, isLoading, isError } = useGetOrdersQuery();

  if (isLoading) return <Loading />;
  if (!orders || isError) return <div>Error loading payments</div>;

  return (
    <div className="dashboard-container">
      <EarningsHistory orders={orders || []} userType={"driver"} />
    </div>
  );
};

export default Earnings;
