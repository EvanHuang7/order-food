import React from "react";
import {
  useGetAuthUserQuery,
  useGetCustomerQuery,
  useGetRestaurantsQuery,
} from "@/state/api";
import { useAppSelector } from "@/state/redux";
import { FavoriteRestaurant } from "@/types/prismaTypes";
import RestaurantCard from "@/components/RestaurantCard";
import RestaurantCardCompact from "@/components/RestaurantCardCompact";
import Loading from "@/components/Loading";

const RestaurantList = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const { data: customer } = useGetCustomerQuery(
    authUser?.cognitoInfo?.userId || "",
    {
      skip: !authUser?.cognitoInfo?.userId,
    }
  );
  // const [addFavorite] = useAddFavoriteRestaurantMutation();
  // const [removeFavorite] = useRemoveFavoriteRestaurantMutation();
  const viewMode = useAppSelector((state) => state.global.viewMode);
  const filters = useAppSelector((state) => state.global.filters);

  const {
    data: restaurants,
    isLoading,
    isError,
  } = useGetRestaurantsQuery(filters);

  const handleFavoriteToggle = async (restaurantId: number) => {
    return;
    // if (!authUser) return;

    // const isFavorite = customer?.favoriteRests?.some(
    //   (fav: FavoriteRestaurant) => fav.restaurant.id === restaurantId
    // );

    // if (isFavorite) {
    //   await removeFavorite({
    //     id: authUser?.userInfo?.id,
    //     restaurantId,
    //   });
    // } else {
    //   await addFavorite({
    //     id: authUser?.userInfo?.id,
    //     restaurantId,
    //   });
    // }
  };

  if (isLoading) return <Loading />;
  if (isError || !restaurants) return <div>Failed to fetch restaurants</div>;

  return (
    <div className="w-full">
      <h3 className="text-sm px-5 font-bold mb-2">
        {restaurants.length}{" "}
        <span className="text-gray-700 font-normal">
          restaurants in your city
        </span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 gap-4 lg:gap-6 xl:gap-8">
        {restaurants?.map((restaurant) =>
          viewMode === "grid" ? (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              isFavorite={
                customer?.favoriteRests?.some(
                  (fav: FavoriteRestaurant) =>
                    fav.restaurant.id === restaurant.id
                ) || false
              }
              onFavoriteToggle={() => handleFavoriteToggle(restaurant.id)}
              showFavoriteButton={!!authUser}
              restaurantLink={`/restaurant/${restaurant.id}`}
            />
          ) : (
            <RestaurantCardCompact
              key={restaurant.id}
              restaurant={restaurant}
              isFavorite={
                customer?.favoriteRests?.some(
                  (fav: FavoriteRestaurant) =>
                    fav.restaurant.id === restaurant.id
                ) || false
              }
              onFavoriteToggle={() => handleFavoriteToggle(restaurant.id)}
              showFavoriteButton={!!authUser}
              restaurantLink={`/restaurant/${restaurant.id}`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
