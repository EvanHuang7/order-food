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
import { Star } from "lucide-react";
import React, { useState } from "react";
import RateFoodModal from "./RateFoodModal";

const Orders = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const [activeTab, setActiveTab] = useState("all");

  const { data: orders, isLoading, isError } = useGetOrdersQuery();
  const [updateOrder] = useUpdateOrderMutation();
  const [selectedOrderForRating, setSelectedOrderForRating] = useState(null);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);

  const handleUpdateOrder = async (orderId: number, status: string) => {
    await updateOrder({
      orderId: String(orderId),
      userId: authUser?.userInfo.id,
      status,
      driverId: "",
    });
  };

  const handleOpenRatingModal = (order: any) => {
    setSelectedOrderForRating(order);
    setIsRatingModalOpen(true);
  };

  const handleCloseRatingModal = () => {
    setIsRatingModalOpen(false);
    setSelectedOrderForRating(null);
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
                <OrderCard key={order.id} order={order} userType="customer">
                  {/* Buttons when order is Delivered */}
                  {order.status === "Delivered" && (
                    <button
                      onClick={() => handleOpenRatingModal(order)}
                      className={`bg-white border border-gray-300 text-gray-700 py-2 px-4
      rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50`}
                    >
                      <Star className="w-5 h-5 mr-2" />
                      Rate Food
                    </button>
                  )}

                  {/* Buttons when order is Pending */}
                  {order.status === "Pending" && (
                    <button
                      className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-500"
                      onClick={() => handleUpdateOrder(order.id, "Cancelled")}
                    >
                      Cancelled
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
      <RateFoodModal
        open={isRatingModalOpen}
        onClose={handleCloseRatingModal}
        order={selectedOrderForRating}
      />
    </div>
  );
};

export default Orders;
