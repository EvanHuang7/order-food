"use client";

import EarningsHistory from "@/components/EarningsHistory";
import Loading from "@/components/Loading";
import { useGetOrdersQuery } from "@/state/api";
import React from "react";

const Earnings = () => {
  const { data: orders, isLoading, isError } = useGetOrdersQuery();

  if (isLoading) return <Loading />;
  if (!orders || isError) return <div>Error loading earnings</div>;

  return (
    <div className="dashboard-container">
      <EarningsHistory orders={orders || []} userType={"restaurant"} />
    </div>
  );
};

export default Earnings;
