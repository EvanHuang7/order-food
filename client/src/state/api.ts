import { cleanParams, createNewUserInDatabase, withToast } from "@/lib/utils";
import {
  Customer,
  Restaurant,
  Driver,
  MenuItem,
  Order,
  Payment,
  FavoriteRestaurant,
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
    "Customer",
    "Restaurant",
    "Driver",
    "MenuItems",
    "Restaurants",
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
    getCustomer: build.query<Customer, string>({
      query: (cognitoId) => `customer/${cognitoId}`,
      providesTags: (result) => [{ type: "Customer", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to load customer profile.",
        });
      },
    }),

    updateCustomerInfo: build.mutation<
      Customer,
      { cognitoId: string } & Partial<Customer>
    >({
      query: ({ cognitoId, ...updatedCustomer }) => ({
        url: `customer/${cognitoId}`,
        method: "PUT",
        body: updatedCustomer,
      }),
      invalidatesTags: (result) => [{ type: "Customer", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Customer info updated successfully!",
          error: "Failed to update customer info.",
        });
      },
    }),

    getFavoriteRestaurants: build.query<Restaurant[], number>({
      query: (customerId) => `/customer/${customerId}/favorites`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
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
    getRestaurant: build.query<Restaurant, string>({
      query: (cognitoId) => `restaurant/${cognitoId}`,
      providesTags: (result) => [{ type: "Restaurant", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to load restaurant profile.",
        });
      },
    }),

    getRestaurants: build.query<
      Restaurant[],
      Partial<FiltersState> & { favoriteIds?: number[] }
    >({
      query: (filters) => {
        const params = cleanParams({
          favoriteIds: filters.favoriteIds?.join(","),
          priceMin: filters.priceRange?.[0],
          priceMax: filters.priceRange?.[1],
          categories: filters.categories?.join(","),
        });

        return {
          url: "restaurant",
          params,
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Restaurants" as const, id })),
              { type: "Restaurants", id: "LIST" },
            ]
          : [{ type: "Restaurants", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to fetch restaurants.",
        });
      },
    }),

    updateRestaurantInfo: build.mutation<
      Restaurant,
      { cognitoId: string } & Partial<Restaurant>
    >({
      query: ({ cognitoId, ...updatedRestaurant }) => ({
        url: `restaurant/${cognitoId}`,
        method: "PUT",
        body: updatedRestaurant,
      }),
      invalidatesTags: (result) => [{ type: "Restaurant", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Restaurant info updated successfully!",
          error: "Failed to update restaurant info.",
        });
      },
    }),

    // Driver related endpoints
    getDriver: build.query<Driver, string>({
      query: (cognitoId) => `driver/${cognitoId}`,
      providesTags: (result) => [{ type: "Driver", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to load driver profile.",
        });
      },
    }),

    updateDriverInfo: build.mutation<
      Driver,
      { cognitoId: string } & Partial<Driver>
    >({
      query: ({ cognitoId, ...updatedDriver }) => ({
        url: `driver/${cognitoId}`,
        method: "PUT",
        body: updatedDriver,
      }),
      invalidatesTags: (result) => [{ type: "Driver", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Driver info updated successfully!",
          error: "Failed to update driver info.",
        });
      },
    }),

    // MenuItem related endpoints
    getRestaurantMenuItems: build.query<MenuItem[], string>({
      query: (restaurantId) => `menuItem/${restaurantId}/menuItems`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "MenuItems" as const, id })),
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
      invalidatesTags: (result) => [
        { type: "MenuItems", id: result?.id },
        { type: "MenuItems", id: "LIST" },
      ],
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
      providesTags: (result) => [{ type: "Orders", id: result?.id }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to get order.",
        });
      },
    }),

    getOrders: build.query<Order[], void>({
      query: () => `order`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Orders" as const, id })),
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
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
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
      invalidatesTags: (result, error, arg) => {
        if (result?.payment?.id) {
          return [
            { type: "Payments", id: result.payment.id },
            { type: "Payments", id: "LIST" },
            { type: "Orders", id: "LIST" },
          ];
        }
        return [
          { type: "Payments", id: "LIST" },
          { type: "Orders", id: "LIST" },
        ];
      },
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          success: "Order placed successfully!",
          error: "Failed to place order.",
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
      invalidatesTags: (result) => [
        { type: "Orders", id: result?.id },
        { type: "Orders", id: "LIST" },
        { type: "AvailableOrdersForDriver", id: result?.id },
        { type: "AvailableOrdersForDriver", id: "LIST" },
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
      providesTags: (result) => [{ type: "Payments", id: result?.id }],
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
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Payments" as const, id })),
              { type: "Payments", id: "LIST" },
            ]
          : [{ type: "Payments", id: "LIST" }],
      async onQueryStarted(_, { queryFulfilled }) {
        await withToast(queryFulfilled, {
          error: "Failed to get payments.",
        });
      },
    }),
  }),
});

export const {
  useGetAuthUserQuery,
  // Customer related endpoints
  useGetCustomerQuery,
  useUpdateCustomerInfoMutation,
  useGetFavoriteRestaurantsQuery,
  useAddFavoriteRestaurantMutation,
  useRemoveFavoriteRestaurantMutation,
  useUpsertPaymentInfoMutation,
  useToggleNotificationMutation,
  // Restaurant related endpoints
  useGetRestaurantQuery,
  useGetRestaurantsQuery,
  useUpdateRestaurantInfoMutation,
  // Driver related endpoints
  useGetDriverQuery,
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
} = api;
