import { cn, formatToLocalString } from "@/lib/utils";
import {
  Mail,
  MapPin,
  PhoneCall,
  CircleCheckBig,
  File,
  CalendarDays,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import OrderDetailModal from "@/components/OrderDetailModal";
import OrderStepper from "./OrderStepper";

const OrderCard = ({ order, userType, children }: OrderCardProps) => {
  let cardName = "";
  let cardAddress = "";
  let cardImgSrc = "/order-food-logo.svg";

  let contactPersonRole = "";
  let contactPerson: any = {};
  let contactPersonImgSrc = "/order-food-logo.svg";

  const customerProfileImgUrl =
    order?.customer?.profileImgUrl || "/userProfile/customer-profile-img.jpg";
  const restaurantProfileImgUrl =
    order?.restaurant?.profileImgUrl ||
    "/userProfile/restaurant-profile-img.jpg";
  const driverProfileImgUrl =
    order?.driver?.profileImgUrl || "/userProfile/driver-profile-img.jpg";

  // Set card info based on user role
  if (userType === "customer") {
    cardName = order.restaurant.name;
    cardAddress = `${
      order.restaurant?.location?.address || "Unknown address"
    }, ${order.restaurant?.location?.city || "Unknown city"}, ${
      order.restaurant?.location?.province || "Unknown province"
    }`;
    cardImgSrc = restaurantProfileImgUrl;

    contactPersonRole = order?.driverId ? "Driver" : "Restaurant";
    contactPerson = order?.driverId ? order.driver : order.restaurant;
    contactPersonImgSrc = order?.driverId
      ? driverProfileImgUrl
      : restaurantProfileImgUrl;
  } else if (userType === "restaurant") {
    cardName = order.customer.name;
    cardAddress = `${order.customer?.location?.address || "Unknown address"}, ${
      order.customer?.location?.city || "Unknown city"
    }, ${order.customer?.location?.province || "Unknown province"}`;
    cardImgSrc = customerProfileImgUrl;

    contactPersonRole = order?.driverId ? "Driver" : "Customer";
    contactPerson = order?.driverId ? order.driver : order.customer;
    contactPersonImgSrc = order?.driverId
      ? driverProfileImgUrl
      : customerProfileImgUrl;
  } else if (userType === "driver") {
    cardName = order.restaurant.name;
    cardAddress = `${
      order.restaurant?.location?.address || "Unknown address"
    }, ${order.restaurant?.location?.city || "Unknown city"}, ${
      order.restaurant?.location?.province || "Unknown province"
    }`;
    cardImgSrc = restaurantProfileImgUrl;

    contactPersonRole = order?.driverId ? "Customer" : "Restaurant";
    contactPerson = order?.driverId ? order.customer : order.restaurant;
    contactPersonImgSrc = order?.driverId
      ? customerProfileImgUrl
      : restaurantProfileImgUrl;
  }

  const [fallbackCardImgSrc, setFallbackCardImgSrc] = useState(cardImgSrc);
  const [fallbackContactPersonImgSrc, setFallbackContactPersonImgSrc] =
    useState(contactPersonImgSrc);

  const statusColor =
    order.status === "Delivered"
      ? "bg-green-500"
      : order.status === "Cancelled"
      ? "bg-red-500"
      : "bg-yellow-500";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="border rounded-xl overflow-hidden shadow-sm bg-white mb-4">
      {/* Top part */}
      <div className="flex flex-col lgWithSidebar:flex-row items-start lglgWithSidebar:items-center justify-between px-6 md:px-4 py-6 gap-6 lgWithSidebar:gap-4">
        {/* Order Info Section */}
        <div className="flex flex-col lgWithSidebar:flex-row gap-3 w-full lgWithSidebar:w-auto lgWithSidebar:h-48">
          <Image
            src={cardImgSrc}
            alt={order.id}
            width={200}
            height={160}
            className="rounded-xl object-cover w-full lgWithSidebar:w-[200px] h-[160px] mt-2"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setFallbackCardImgSrc("/order-food-logo.svg")}
          />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold my-2">{cardName}</h2>
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 mr-1 shrink-0" />
                <span>{cardAddress}</span>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-3">
              <div
                className={cn(
                  "text-base",
                  userType === "customer" ? "font-bold" : "font-medium"
                )}
              >
                Total: ${order.totalPrice.toFixed(2)}
              </div>
              {userType !== "customer" && (
                <div className="text-base font-bold">
                  {userType === "driver"
                    ? `You Received: $${
                        order.totalPrice * 0.15 >= 5
                          ? (order.totalPrice * 0.15).toFixed(2)
                          : 5
                      }`
                    : `You Received: $${
                        order.totalPrice * 0.15 >= 5
                          ? (order.totalPrice * 0.75).toFixed(2)
                          : (order.totalPrice * 0.9 - 5).toFixed(2)
                      }`}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Divider - visible only on desktop */}
        <div className="hidden lgWithSidebar:block border-[0.5px] border-primary-200 h-48" />
        {/* Status and date Section */}
        <div className="flex flex-col justify-between w-full lgWithSidebar:basis-2/12 lgWithSidebar:h-48 py-2 gap-3 lgWithSidebar:gap-0">
          <div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Status:</span>
              <span
                className={`px-2 py-1 ${statusColor} text-white rounded-full text-sm`}
              >
                {order.status}
              </span>
            </div>
            <hr className="mt-3" />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-row">
              <CalendarDays className="w-5 h-5 mr-1 flex-shrink-0" />
              <span className="inline lgWithSidebar:hidden xl:inline text-gray-500">
                Placed:
              </span>{" "}
            </div>
            {formatToLocalString(order.createdAt)}
          </div>
          <div className="flex justify-between">
            <div className="flex flex-row">
              <CircleCheckBig className="w-5 h-5 mr-1 flex-shrink-0" />
              <span className="inline lgWithSidebar:hidden xl:inline text-gray-500">
                Delivered:
              </span>{" "}
            </div>
            {order.status === "Delivered"
              ? formatToLocalString(order.updatedAt)
              : "N/A"}
          </div>
        </div>
        {/* Divider - visible only on desktop */}
        <div className="hidden lgWithSidebar:block border-[0.5px] border-primary-200 h-48" />
        {/* Contact Person Section */}
        <div className="flex flex-col justify-start gap-5 w-full lgWithSidebar:basis-3/12 lgWithSidebar:h-48 py-2">
          <div>
            <div className="text-lg font-semibold">{contactPersonRole}</div>
            <hr className="mt-3" />
          </div>
          <div className="flex gap-4">
            <div>
              <Image
                src={contactPersonImgSrc}
                alt={contactPerson.name}
                width={40}
                height={40}
                className="rounded-full mr-2 min-w-[40px] min-h-[40px]"
                onError={() =>
                  setFallbackContactPersonImgSrc("/order-food-logo.svg")
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold">{contactPerson.name}</div>
              <div className="text-sm flex items-center text-primary-600">
                <PhoneCall className="w-5 h-5 mr-2" />
                {contactPerson.phoneNumber || "Unknow"}
              </div>
              <div className="text-sm flex items-center text-primary-600">
                <Mail className="w-5 h-5 mr-2" />
                {contactPerson.email}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttom part */}
      {/* Colored status banner and buttons */}
      <hr className="my-4" />
      <div className="flex flex-col sm:flex-row justify-between gap-5 w-full pb-4 px-4">
        {/* Left status banner or stepper section */}
        {order.status === "Cancelled" ? (
          <div className="p-4 text-red-700 grow bg-red-100">
            <div className="flex flex-wrap items-center">
              <CalendarDays className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="mr-2">
                Order placed on {formatToLocalString(order.createdAt)}.
              </span>
              <CircleCheckBig className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="font-semibold text-red-800">
                This order has been cancelled.
              </span>
            </div>
          </div>
        ) : (
          <div className="p-4 grow bg-yellow-100 flex flex-col items-center justify-center">
            <OrderStepper currentStatus={order.status} />
          </div>
        )}

        {/* Right Buttons section */}
        <div className="flex gap-2 justify-end">
          <button
            className={`bg-white border border-gray-300 text-gray-700 py-2 px-4 
                                  rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50`}
            onClick={handleModalOpen}
          >
            <File className="w-5 h-5 mr-2" />
            View Details
          </button>
          {children}
        </div>
      </div>
      <OrderDetailModal
        open={isModalOpen}
        onClose={handleModalClose}
        order={order}
      />
    </div>
  );
};

export default OrderCard;
