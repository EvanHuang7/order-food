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
      driverId: authUser?.userInfo.id,
    });
  };

  if (isLoading) return <Loading />;
  if (isError || !orders) return <div>Error fetching orders</div>;

  const filteredOrders = orders?.filter((order) => {
    if (activeTab === "all") return true;
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
            {/* TODO: Make sure to display Accepted, Preparing, PickedUp too */}
            {filteredOrders
              .filter(
                (order) => tab === "all" || order.status.toLowerCase() === tab
              )
              .map((order) => (
                <OrderCard key={order.id} order={order} userType="driver">
                  {/* TODO: add a single page in dashboard to show all orders */}
                  {/* TODO: and allow driver to assign driver to order in that page  */}
                  {/* Buttons when order is Accepted or Preparing */}
                  {(order.status === "Accepted" ||
                    order.status === "Preparing") && (
                    <button
                      className="px-4 py-2 text-sm text-white bg-green-600 rounded hover:bg-green-500"
                      onClick={() => handleUpdateOrder(order.id, "PickedUp")}
                    >
                      PickedUp
                    </button>
                  )}
                  {/* Buttons when order is PickedUp */}
                  {order.status === "PickedUp" && (
                    <button
                      className="px-4 py-2 text-sm text-white bg-green-600 rounded hover:bg-green-500"
                      onClick={() => handleUpdateOrder(order.id, "Delivered")}
                    >
                      Delivered
                    </button>
                  )}
                  {/* Buttons when order is Cancelled */}
                  {order.status === "Cancelled" && (
                    <button
                      className={`bg-gray-800 text-white py-2 px-4 rounded-md flex items-center
                          justify-center hover:bg-secondary-500 hover:text-primary-50`}
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
