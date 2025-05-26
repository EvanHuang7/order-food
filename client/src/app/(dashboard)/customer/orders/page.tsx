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
import { Star, Utensils } from "lucide-react";
import React, { useState } from "react";
import RateFoodModal from "./RateFoodModal";
import RateRestaurantModal from "./RateRestaurantModal";

const Orders = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const [activeTab, setActiveTab] = useState("all");

  const { data: orders, isLoading, isError } = useGetOrdersQuery();
  const [updateOrder] = useUpdateOrderMutation();

  const [selectedOrderForRating, setSelectedOrderForRating] = useState(null);
  const [activeRatingModal, setActiveRatingModal] = useState<
    "food" | "restaurant" | null
  >(null);

  const handleUpdateOrder = async (orderId: number, status: string) => {
    await updateOrder({
      orderId: String(orderId),
      userId: authUser?.userInfo.id,
      status,
      driverId: "",
    });
  };

  const handleOpenRatingModal = (
    order: any,
    modalType: "food" | "restaurant"
  ) => {
    setSelectedOrderForRating(order);
    setActiveRatingModal(modalType);
  };

  const handleCloseRatingModal = () => {
    setActiveRatingModal(null);
    setSelectedOrderForRating(null);
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
              <OrderCard key={order.id} order={order} userType="customer">
                {order.status === "Delivered" && (
                  <div className="flex flex-row sm:flex-col gap-2">
                    <button
                      onClick={() => handleOpenRatingModal(order, "food")}
                      className={`bg-white border border-gray-300 text-gray-700 py-2 px-4
                          rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50`}
                    >
                      <Star className="w-5 h-5 mr-2" />
                      Rate Food
                    </button>
                    <button
                      onClick={() => handleOpenRatingModal(order, "restaurant")}
                      className={`bg-white border border-gray-300 text-gray-700 py-2 px-4
                          rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50`}
                    >
                      <Utensils className="w-5 h-5 mr-2" />
                      Rate Restaurant
                    </button>
                  </div>
                )}

                {order.status === "Pending" && (
                  <button
                    className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-500"
                    onClick={() => handleUpdateOrder(order.id, "Cancelled")}
                  >
                    Cancelled
                  </button>
                )}

                {order.status === "Cancelled" && (
                  <button
                    className={`bg-gray-800 text-white py-2 px-4 rounded-md flex items-center justify-center`}
                    disabled
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
        open={activeRatingModal === "food"}
        onClose={handleCloseRatingModal}
        order={selectedOrderForRating}
      />

      <RateRestaurantModal
        open={activeRatingModal === "restaurant"}
        onClose={handleCloseRatingModal}
        order={selectedOrderForRating}
      />
    </div>
  );
};

export default Orders;
