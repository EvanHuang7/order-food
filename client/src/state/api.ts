import { cleanParams, createNewUserInDatabase, withToast } from "@/lib/utils";
import {
  Customer,
  Restaurant,
  Driver,
  MenuItem,
  Order,
  Payment,
  FavoriteRestaurant,
  RestaurantRating,
  MenuItemRating,
} from "@/types/prismaTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { FiltersState, ShoppingCartItem } from ".";
import { toast } from "sonner";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: async (headers) => {
      const session = await fetchAuthSession();
      const { idToken } = session.tokens ?? {};
      if (idToken) {
        headers.set("Authorization", `Bearer ${idToken}`);
      }
      return headers;
    },
  }),
  reducerPath: "api",
  tagTypes: [
    // Auth user tags
    "Customer",
    "Restaurant",
    "Driver",
    // Another tags
    "RestaurantsList",
    "RestaurantRatings",
    "MenuItems",
    "MenuItemRatings",
    "Payments",
    "AvailableOrdersForDriver",
    "Orders",
    "FavoriteRestaurants",
  ],
  endpoints: (build) => ({
    getAuthUser: build.query<User, void>({
      queryFn: async (_, _queryApi, _extraoptions, fetchWithBQ) => {
        try {
          const session = await fetchAuthSession();
          const { idToken } = session.tokens ?? {};
          const user = await getCurrentUser();
          const userRole = idToken?.payload["custom:role"] as string;

          let endpoint = "";
          switch (userRole?.toLowerCase()) {
            case "customer":
              endpoint = `/customer/${user.userId}`;
              break;
            case "restaurant":
              endpoint = `/restaurant/${user.userId}`;
              break;
            case "driver":
              endpoint = `/driver/${user.userId}`;
              break;
            default:
              throw new Error(`Invalid user role: ${userRole}`);
          }

          let userDetailsResponse = await fetchWithBQ(endpoint);

          // if user doesn't exist, create new user
          if (
            userDetailsResponse.error &&
            userDetailsResponse.error.status === 404
          ) {
            userDetailsResponse = await createNewUserInDatabase(
              user,
              idToken,
              userRole,
              fetchWithBQ
            );
          }

          return {
            data: {
              cognitoInfo: { ...user },
              userInfo: userDetailsResponse.data as
                | Customer
                | Restaurant
                | Driver,
              userRole,
            },
          };
        } catch (error: any) {
          return { error: error.message || "Could not fetch user data" };
        }
      },

      providesTags: (result) => {
        if (!result) return [];

        switch (result.userRole?.toLowerCase()) {
          case "customer":
            return [{ type: "Customer", id: result.userInfo.id }];
          case "restaurant":
            return [{ type: "Restaurant", id: result.userInfo.id }];
          case "driver":
            return [{ type: "Driver", id: result.userInfo.id }];
          default:
            return [];
        }
      },
    }),

    // Customer related endpoints
    updateCustomerInfo: build.mutation<
      { customer: Customer; locationUpdated: boolean },
      { cognitoId: string } & Partial<Customer>
    >({
      query: ({ cognitoId, ...updatedCustomer }) => ({
        url: `customer/${cognitoId}`,
        method: "PUT",
        body: updatedCustomer,
      }),
      invalidatesTags: (responseData) => [
        { type: "Customer", id: responseData?.customer?.id },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          // Always show success toast
          toast.success("Customer info updated successfully!");

          // Show warning if location was not updated
          if (data?.locationUpdated === false) {
            toast.warning(
              "Customer info updated successfully, but location info not updated. Please complete all location fields."
            );
          }
        } catch {
          // Fallback error toast
          toast.error("Failed to update customer info.");
        }
      },
    }),

    getFavoriteRestaurants: build.query<Restaurant[], number>({
      query: (customerId) => `/customer/${customerId}/favorites`,
      providesTags: (restaurants) =>
        restaurants
          ? [
              // it extracts the id property of each restaurant
              // using destructuring "{ id }"
              ...restaurants.map(({ id }) => ({
                type: "FavoriteRestaurants" as const,
                id,
              })),
              { type: "FavoriteRestaurants", id: "LIST" },
            ]
          : [{ type: "FavoriteRestaurants", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to load favorite restaurants.",
        });
      },
    }),

    addFavoriteRestaurant: build.mutation<
      FavoriteRestaurant,
      { customerId: number; restaurantId: number }
    >({
      query: ({ customerId, restaurantId }) => ({
        url: `/customer/${customerId}/favorites/${restaurantId}`,
        method: "POST",
      }),
      invalidatesTags: (_result, _error, { customerId }) => [
        { type: "Customer", id: customerId },
        // Invalidate List because of adding new element in list
        // instead of udpating existing element in the list
        { type: "FavoriteRestaurants", id: "LIST" },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Added to favorites!",
          error: "Failed to add favorite.",
        });
      },
    }),

    removeFavoriteRestaurant: build.mutation<
      { message: string },
      { customerId: number; restaurantId: number }
    >({
      query: ({ customerId, restaurantId }) => ({
        url: `/customer/${customerId}/favorites/${restaurantId}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, { customerId }) => [
        { type: "Customer", id: customerId },
        // Invalidate List because of removing an element from list
        // instead of updating existing element in the list
        { type: "FavoriteRestaurants", id: "LIST" },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Removed from favorites.",
          error: "Failed to remove favorite.",
        });
      },
    }),

    upsertPaymentInfo: build.mutation<
      { message: string },
      {
        customerId: number;
        last4: string;
        expiryMonth: string;
        expiryYear: string;
      }
    >({
      query: ({ customerId, last4, expiryMonth, expiryYear }) => ({
        url: `/customer/${customerId}/paymentInfo`,
        method: "POST",
        body: {
          last4: last4,
          expiryMonth: expiryMonth,
          expiryYear: expiryYear,
        },
      }),
      invalidatesTags: (_result, _error, { customerId }) => [
        { type: "Customer", id: customerId },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Payment card updated successfully! 🎉",
          error: "Failed to update payment card.",
        });
      },
    }),

    toggleNotification: build.mutation<
      { message: string },
      { customerId: number; type: string; value: boolean }
    >({
      query: ({ customerId, type, value }) => ({
        url: `/notificationSetting/${customerId}/${type}/${
          value ? "on" : "off"
        }`,
        method: "POST",
      }),
      invalidatesTags: (_result, error, { customerId }) =>
        error ? [] : [{ type: "Customer", id: customerId }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(
          queryFulfilled,
          {
            success: "Notification toggled successfully.",
            error: "Failed to toggle notification.",
          },
          (err) => {
            const errorCode = err?.error?.data?.errorCode;
            if (errorCode === "PENDING_CONFIRMATION") {
              toast.error(
                "Please confirm your subscription via email before unsubscribing."
              );
              return true; // handled
            }
            return false; // not handled, fallback to default error
          }
        );
      },
    }),

    // Restaurant related endpoints
    getRestaurants: build.query<Restaurant[], Partial<FiltersState>>({
      query: (filters) => {
        const params = cleanParams({
          priceMin: filters.priceRange?.[0],
          priceMax: filters.priceRange?.[1],
          categories: filters.categories?.join(","),
        });

        return {
          url: "restaurant",
          params,
        };
      },
      providesTags: (restaurants) =>
        restaurants
          ? [
              ...restaurants.map(({ id }) => ({
                type: "RestaurantsList" as const,
                id,
              })),
              { type: "RestaurantsList", id: "LIST" },
            ]
          : [{ type: "RestaurantsList", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch restaurants.",
        });
      },
    }),

    updateRestaurantInfo: build.mutation<
      { restaurant: Restaurant; locationUpdated: boolean },
      { cognitoId: string } & Partial<Restaurant>
    >({
      query: ({ cognitoId, ...updatedRestaurant }) => ({
        url: `restaurant/${cognitoId}`,
        method: "PUT",
        body: updatedRestaurant,
      }),
      invalidatesTags: (responseData) => [
        { type: "Restaurant", id: responseData?.restaurant?.id },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          // Always show success for restaurant update
          toast.success("Restaurant info updated successfully!");

          // Show warning if location was not updated
          if (data?.locationUpdated === false) {
            toast.warning(
              "Restaurant info updated successfully, but location info not updated. Please complete all location fields."
            );
          }
        } catch {
          // Show fallback error toast
          toast.error("Failed to update restaurant info.");
        }
      },
    }),

    // Driver related endpoints
    updateDriverInfo: build.mutation<
      Driver,
      { cognitoId: string } & Partial<Driver>
    >({
      query: ({ cognitoId, ...updatedDriver }) => ({
        url: `driver/${cognitoId}`,
        method: "PUT",
        body: updatedDriver,
      }),
      invalidatesTags: (driver) => [{ type: "Driver", id: driver.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Driver info updated successfully!",
          error: "Failed to update driver info.",
        });
      },
    }),

    // MenuItem related endpoints
    getRestaurantMenuItems: build.query<Restaurant, string>({
      query: (restaurantId) => `menuItem/${restaurantId}/menuItems`,
      providesTags: (restaurantWithMenuItems) =>
        restaurantWithMenuItems?.menuItems
          ? [
              ...restaurantWithMenuItems.menuItems.map(({ id }: MenuItem) => ({
                type: "MenuItems" as const,
                id,
              })),
              { type: "MenuItems", id: "LIST" },
            ]
          : [{ type: "MenuItems", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to load restaurant menu items.",
        });
      },
    }),

    createRestaurantMenuItem: build.mutation<MenuItem, FormData>({
      query: (newMenuItem) => ({
        url: `menuItem`,
        method: "POST",
        body: newMenuItem,
      }),
      invalidatesTags: [{ type: "MenuItems", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Menu item created successfully!",
          error: "Failed to create menu item.",
        });
      },
    }),

    updateRestaurantMenuItem: build.mutation<
      MenuItem,
      { menuItemId: string } & Partial<MenuItem>
    >({
      query: ({ menuItemId, ...updatedMenuItem }) => ({
        url: `menuItem/${menuItemId}`,
        method: "PUT",
        body: updatedMenuItem,
      }),
      invalidatesTags: (menuItem) => [{ type: "MenuItems", id: menuItem.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Menu item info updated successfully!",
          error: "Failed to update menu item info.",
        });
      },
    }),

    // Order related endpoints
    getOrder: build.query<Order, string>({
      query: (orderId) => `order/${orderId}`,
      providesTags: (order) => [{ type: "Orders", id: order?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to get order.",
        });
      },
    }),

    getOrders: build.query<Order[], void>({
      query: () => `order`,
      providesTags: (orders) =>
        orders
          ? [
              ...orders.map(({ id }) => ({ type: "Orders" as const, id })),
              { type: "Orders", id: "LIST" },
            ]
          : [{ type: "Orders", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to get orders.",
        });
      },
    }),

    getAvailableOrdersForDriver: build.query<Order[], void>({
      query: () => `order/available-orders`,
      providesTags: (availableOrders) =>
        availableOrders
          ? [
              ...availableOrders.map(({ id }) => ({
                type: "AvailableOrdersForDriver" as const,
                id,
              })),
              { type: "AvailableOrdersForDriver", id: "LIST" },
            ]
          : [{ type: "AvailableOrdersForDriver", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to available get orders for driver.",
        });
      },
    }),

    createOrders: build.mutation<
      { payment: Payment; orders: Order[] },
      { customerId: string; items: ShoppingCartItem[] }
    >({
      query: ({ customerId, items }) => ({
        url: `order`,
        method: "POST",
        body: { customerId, items },
      }),
      invalidatesTags: [
        { type: "Payments", id: "LIST" },
        { type: "Orders", id: "LIST" },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success:
            "Your payment was successful and your order has been placed! 🎉",
          error: "Failed to process payment and place order.",
        });
      },
    }),

    updateOrder: build.mutation<
      Order,
      {
        orderId: string;
        userId: number;
        status: string;
        driverId: string;
      }
    >({
      query: ({ orderId, userId, status, driverId }) => ({
        url: `order/${orderId}`,
        method: "PUT",
        body: { userId, status, driverId },
      }),
      invalidatesTags: (order) => [
        { type: "Orders", id: order.id },
        { type: "AvailableOrdersForDriver", id: order.id },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Order updated successfully!",
          error: "Failed to update order.",
        });
      },
    }),

    // Payment related endpoints
    getPayment: build.query<Payment, string>({
      query: (paymentId) => `payment/${paymentId}`,
      providesTags: (payment) => [{ type: "Payments", id: payment?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to get payment.",
        });
      },
    }),

    getPayments: build.query<Payment[], Number>({
      query: (customerId) => {
        const queryParams = new URLSearchParams();
        if (customerId) {
          queryParams.append("customerId", customerId.toString());
        }

        return `payment?${queryParams.toString()}`;
      },
      providesTags: (payments) =>
        payments
          ? [
              ...payments.map(({ id }) => ({ type: "Payments" as const, id })),
              { type: "Payments", id: "LIST" },
            ]
          : [{ type: "Payments", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to get payments.",
        });
      },
    }),

    // Rating related endpoints
    // Get multiple menu item ratings by a customer
    getMenuItemRatings: build.query<
      MenuItemRating[],
      { customerId: number; menuItemIds: string[] }
    >({
      query: ({ customerId, menuItemIds }) => ({
        url: `/rating/menuItemRating/${customerId}`,
        params: { menuItemIds: menuItemIds.join(",") },
      }),
      providesTags: (menuItemRatings) =>
        menuItemRatings
          ? [
              ...menuItemRatings.map(({ id }) => ({
                type: "MenuItemRatings" as const,
                id,
              })),
              { type: "MenuItemRatings", id: "LIST" },
            ]
          : [{ type: "MenuItemRatings", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to get MenuItems ratings.",
        });
      },
    }),

    upsertMenuItemRatings: build.mutation<
      MenuItemRating[],
      {
        customerId: number;
        ratings: { menuItemId: number; rating: number; comment?: string }[];
      }
    >({
      query: ({ customerId, ratings }) => ({
        url: `/rating/menuItemRating/${customerId}`,
        method: "POST",
        body: ratings,
      }),
      invalidatesTags: [
        { type: "MenuItems", id: "LIST" },
        { type: "MenuItemRatings", id: "LIST" },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Menu item ratings submitted!",
          error: "Failed to submit menu item ratings.",
        });
      },
    }),

    // Get multiple restaurant ratings by a customer
    getRestaurantRatings: build.query<
      RestaurantRating[],
      { customerId: number; restaurantIds: string[] }
    >({
      query: ({ customerId, restaurantIds }) => ({
        url: `/rating/restaurantRating/${customerId}`,
        params: { restaurantIds: restaurantIds.join(",") },
      }),
      providesTags: (restaurantRatings) =>
        restaurantRatings
          ? [
              ...restaurantRatings.map((restaurantRating) => ({
                type: "RestaurantRatings" as const,
                id: restaurantRating.restaurantId,
              })),
              { type: "RestaurantRatings", id: "LIST" },
            ]
          : [{ type: "RestaurantRatings", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to get restaurant ratings.",
        });
      },
    }),

    // Upsert restaurant rating by a customer
    upsertRestaurantRating: build.mutation<
      RestaurantRating,
      {
        customerId: number;
        ratingData: { restaurantId: number; rating: number; comment?: string };
      }
    >({
      query: ({ customerId, ratingData }) => ({
        url: `/rating/restaurantRating/${customerId}`,
        method: "POST",
        body: ratingData,
      }),
      invalidatesTags: (restaurantRating) => [
        { type: "RestaurantsList", id: restaurantRating.restaurantId },
        { type: "RestaurantRatings", id: "LIST" },
      ],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Restaurant rating submitted!",
          error: "Failed to submit restaurant rating.",
        });
      },
    }),
  }),
});

export const {
  useGetAuthUserQuery,
  // Customer related endpoints
  useUpdateCustomerInfoMutation,
  useGetFavoriteRestaurantsQuery,
  useAddFavoriteRestaurantMutation,
  useRemoveFavoriteRestaurantMutation,
  useUpsertPaymentInfoMutation,
  useToggleNotificationMutation,
  // Restaurant related endpoints
  useGetRestaurantsQuery,
  useUpdateRestaurantInfoMutation,
  // Driver related endpoints
  useUpdateDriverInfoMutation,
  // MenuItem related endpoints
  useGetRestaurantMenuItemsQuery,
  useCreateRestaurantMenuItemMutation,
  useUpdateRestaurantMenuItemMutation,
  // Order related endpoints
  useGetOrderQuery,
  useGetOrdersQuery,
  useGetAvailableOrdersForDriverQuery,
  useCreateOrdersMutation,
  useUpdateOrderMutation,
  // Payment related endpoints
  useGetPaymentQuery,
  useGetPaymentsQuery,
  // Rating related endpoints
  useGetMenuItemRatingsQuery,
  useUpsertMenuItemRatingsMutation,
  useGetRestaurantRatingsQuery,
  useUpsertRestaurantRatingMutation,
} = api;
