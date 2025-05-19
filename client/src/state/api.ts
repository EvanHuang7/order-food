import { createNewUserInDatabase, withToast } from "@/lib/utils";
import { Customer, Restaurant, Driver, MenuItem } from "@/types/prismaTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { FiltersState } from ".";

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
  tagTypes: ["Customer", "Restaurant", "Driver", "MenuItems"],
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

    createRestaurantMenuItem: build.mutation<MenuItem, Partial<MenuItem>>({
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
  }),
});

export const {
  useGetAuthUserQuery,
  useGetCustomerQuery,
  useUpdateCustomerInfoMutation,
  useGetRestaurantQuery,
  useUpdateRestaurantInfoMutation,
  useGetDriverQuery,
  useUpdateDriverInfoMutation,
  useGetRestaurantMenuItemsQuery,
  useCreateRestaurantMenuItemMutation,
  useUpdateRestaurantMenuItemMutation,
} = api;
