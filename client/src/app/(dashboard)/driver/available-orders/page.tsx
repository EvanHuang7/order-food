"use client";

import OrderCard from "@/components/OrderCard";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import {
  useGetAuthUserQuery,
  useUpdateOrderMutation,
  useGetAvailableOrdersForDriverQuery,
} from "@/state/api";
import React from "react";

const AvailableOrders = () => {
  const { data: authUser } = useGetAuthUserQuery();

  const {
    data: orders,
    isLoading,
    isError,
  } = useGetAvailableOrdersForDriverQuery();
  const [updateOrder] = useUpdateOrderMutation();

  const handleAcceptOrder = async (orderId: number) => {
    await updateOrder({
      orderId: String(orderId),
      userId: authUser?.userInfo.id,
      status: "",
      driverId: authUser?.userInfo.id,
    });
  };

  if (isLoading) return <Loading />;
  if (isError || !orders) return <div>Error fetching available orders</div>;

  return (
    <div className="dashboard-container">
      <Header
        title="Available Orders"
        subtitle="View and accept available orders"
      />

      {orders.map((order) => (
        <OrderCard key={order.id} order={order} userType="driver">
          <button
            className="px-4 py-2 text-sm text-white bg-green-600 rounded hover:bg-green-500"
            onClick={() => handleAcceptOrder(order.id)}
          >
            Accept
          </button>
        </OrderCard>
      ))}
    </div>
  );
};

export default AvailableOrders;
