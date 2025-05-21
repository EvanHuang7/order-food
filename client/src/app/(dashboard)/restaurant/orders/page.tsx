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
import { Download, Hospital } from "lucide-react";
import Link from "next/link";
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
                <OrderCard key={order.id} order={order} userType="restaurant">
                  {/* Right Buttons */}
                  <div className="flex gap-2">
                    {/* TODO: Change to display order detail in model */}
                    <Link
                      href={`/restaurant/${order.id}`}
                      className={`bg-white border border-gray-300 text-gray-700 py-2 px-4 
                          rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50`}
                      scroll={false}
                    >
                      <Hospital className="w-5 h-5 mr-2" />
                      Order Details
                    </Link>
                    {/* Buttons of Delivered status */}
                    {order.status === "Delivered" && (
                      <button
                        className={`bg-white border border-gray-300 text-gray-700 py-2 px-4
                          rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50`}
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Receipt
                      </button>
                    )}
                    {/* Buttons of Pending status */}
                    {order.status === "Pending" && (
                      <>
                        <button
                          className="px-4 py-2 text-sm text-white bg-green-600 rounded hover:bg-green-500"
                          onClick={() =>
                            handleUpdateOrder(order.id, "Delivered")
                          }
                        >
                          Delivered
                        </button>
                        <button
                          className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-500"
                          onClick={() =>
                            handleUpdateOrder(order.id, "Cancelled")
                          }
                        >
                          Cancelled
                        </button>
                      </>
                    )}
                    {/* Buttons of Cancelled status */}
                    {order.status === "Cancelled" && (
                      <button
                        className={`bg-gray-800 text-white py-2 px-4 rounded-md flex items-center
                          justify-center hover:bg-secondary-500 hover:text-primary-50`}
                      >
                        Contact User
                      </button>
                    )}
                  </div>
                </OrderCard>
              ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Orders;
