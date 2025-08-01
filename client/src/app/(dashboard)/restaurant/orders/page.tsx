"use client";

import OrderCard from "@/components/OrderCard";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useGetOrdersQuery,
  useGetAuthUserQuery,
  useUpdateOrderMutation,
} from "@/state/api";
import React, { useState } from "react";

const Orders = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const [activeTab, setActiveTab] = useState("all");

  const { data: orders, isLoading, isError } = useGetOrdersQuery();
  const [updateOrder] = useUpdateOrderMutation();

  const handleUpdateOrder = async (orderId: number, status: string) => {
    await updateOrder({
      orderId: String(orderId),
      userId: authUser?.userInfo.id,
      status,
      driverId: "",
    });
  };

  if (isLoading) return <Loading />;
  if (isError || !orders) return <div>Error fetching orders</div>;

  const filteredOrders = orders?.filter((order) => {
    if (activeTab === "all") return true;
    if (activeTab === "pending")
      return ["pending", "accepted", "preparing", "pickedup"].includes(
        order.status.toLowerCase()
      );
    return order.status.toLowerCase() === activeTab;
  });

  return (
    <div className="dashboard-container">
      <Header title="Orders" subtitle="View and update your orders" />
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full my-5"
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="delivered">Delivered</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>
        {["all", "pending", "delivered", "cancelled"].map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-5 w-full">
            {filteredOrders.map((order) => (
              <OrderCard key={order.id} order={order} userType="restaurant">
                {/* Buttons when order is Pending */}
                {order.status === "Pending" && (
                  <button
                    className="px-4 py-2 text-sm text-white bg-green-600 rounded hover:bg-green-500"
                    onClick={() => handleUpdateOrder(order.id, "Accepted")}
                  >
                    Accepted
                  </button>
                )}
                {/* Buttons when order is Accepted */}
                {order.status === "Accepted" && (
                  <button
                    className="px-4 py-2 text-sm text-white bg-green-600 rounded hover:bg-green-500"
                    onClick={() => handleUpdateOrder(order.id, "Preparing")}
                  >
                    Preparing
                  </button>
                )}
                {/* Buttons when order is Cancelled */}
                {order.status === "Cancelled" && (
                  <button
                    className={`bg-gray-800 text-white py-2 px-4 rounded-md flex items-center
                          justify-center`}
                    disabled={true}
                  >
                    Contact User
                  </button>
                )}
              </OrderCard>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Orders;
