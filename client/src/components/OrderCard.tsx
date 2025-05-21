import { Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const OrderCard = ({ order, userType, children }: OrderCardProps) => {
  let cardName;
  let cardAddress;
  const [cardImgSrc, setCardImgSrc] = useState("/order-food-logo.svg");

  let contactPersonRole;
  let contactPerson;
  const [contactPersonImgSrc, setContactPersonImgSrc] = useState(
    "/order-food-logo.svg"
  );

  // Set card info based on user role
  if (userType === "customer") {
    cardName = order.restaurant.name;
    cardAddress = `${order.restaurant?.location?.address}, ${order.restaurant?.location?.city}, ${order.restaurant?.location?.province}`;
    setCardImgSrc("/userProfile/restaurant-profile-img.jpg");

    contactPersonRole = order?.driverId ? "Driver" : "Restaurant";
    contactPerson = order?.driverId ? order.driver : order.restaurant;
    setContactPersonImgSrc(
      order?.driverId
        ? "/userProfile/driver-profile-img.jpg"
        : "/userProfile/restaurant-profile-img.jpg"
    );
  } else if (userType === "restaurant") {
    cardName = order.customer.name;
    cardAddress = `${order.customer?.location?.address}, ${order.customer?.location?.city}, ${order.customer?.location?.province}`;
    setCardImgSrc("/userProfile/customer-profile-img.jpg");

    contactPersonRole = order?.driverId ? "Driver" : "Customer";
    contactPerson = order?.driverId ? order.driver : order.customer;
    setContactPersonImgSrc(
      order?.driverId
        ? "/userProfile/driver-profile-img.jpg"
        : "/userProfile/customer-profile-img.jpg"
    );
  } else if (userType === "driver") {
    cardName = order.restaurant.name;
    cardAddress = `${order.restaurant?.location?.address}, ${order.restaurant?.location?.city}, ${order.restaurant?.location?.province}`;
    setCardImgSrc("/userProfile/restaurant-profile-img.jpg");

    contactPersonRole = order?.driverId ? "Restaurant" : "Customer";
    contactPerson = order?.driverId ? order.restaurant : order.customer;
    setContactPersonImgSrc(
      order?.driverId
        ? "/userProfile/restaurant-profile-img.jpg"
        : "/userProfile/customer-profile-img.jpg"
    );
  }

  const statusColor =
    order.status === "Delivered"
      ? "bg-green-500"
      : order.status === "Cancelled"
      ? "bg-red-500"
      : "bg-yellow-500";

  return (
    <div className="border rounded-xl overflow-hidden shadow-sm bg-white mb-4">
      <div className="flex flex-col lg:flex-row  items-start lg:items-center justify-between px-6 md:px-4 py-6 gap-6 lg:gap-4">
        {/* Property Info Section */}
        <div className="flex flex-col lg:flex-row gap-5 w-full lg:w-auto">
          <Image
            src={cardImgSrc}
            alt={order.id}
            width={200}
            height={150}
            className="rounded-xl object-cover w-full lg:w-[200px] h-[150px]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setCardImgSrc("/order-food-logo.svg")}
          />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold my-2">{cardName}</h2>
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 mr-1" />
                <span>{cardAddress}</span>
              </div>
            </div>
            <div className="text-xl font-semibold">
              ${order.totalPrice}{" "}
              <span className="text-sm font-normal">total</span>
            </div>
          </div>
        </div>

        {/* Divider - visible only on desktop */}
        <div className="hidden lg:block border-[0.5px] border-primary-200 h-48" />

        {/* Status and date Section */}
        <div className="flex flex-col justify-between w-full lg:basis-2/12 lg:h-48 py-2 gap-3 lg:gap-0">
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
            <span className="text-gray-500">Order Placed Date:</span>{" "}
            {new Date(order.createdAt).toLocaleDateString()}
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Last Updated Date:</span>{" "}
            {new Date(order.updatedAt).toLocaleDateString()}
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Order Delivered Date:</span>{" "}
            {new Date(order.updatedAt).toLocaleDateString()}
          </div>
        </div>

        {/* Divider - visible only on desktop */}
        <div className="hidden lg:block border-[0.5px] border-primary-200 h-48" />

        {/* Contact Person Section */}
        <div className="flex flex-col justify-start gap-5 w-full lg:basis-3/12 lg:h-48 py-2">
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
                onError={() => setContactPersonImgSrc("/order-food-logo.svg")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold">{contactPerson.name}</div>
              <div className="text-sm flex items-center text-primary-600">
                <PhoneCall className="w-5 h-5 mr-2" />
                {contactPerson.phoneNumber}
              </div>
              <div className="text-sm flex items-center text-primary-600">
                <Mail className="w-5 h-5 mr-2" />
                {contactPerson.email}
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-4" />
      {children}
    </div>
  );
};

export default OrderCard;
