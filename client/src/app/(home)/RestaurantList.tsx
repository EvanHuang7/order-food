import {
  useGetAuthUserQuery,
  useGetCustomerQuery,
  useGetRestaurantsQuery,
} from "@/state/api";
import { useAppSelector } from "@/state/redux";
import { FavoriteRestaurant } from "@/types/prismaTypes";
import Card from "@/components/Card";
import React from "react";
import CardCompact from "@/components/CardCompact";

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

  if (isLoading) return <>Loading...</>;
  if (isError || !restaurants) return <div>Failed to fetch restaurants</div>;

  return (
    <div className="w-full">
      <h3 className="text-sm px-4 font-bold">
        {restaurants.length}{" "}
        <span className="text-gray-700 font-normal">
          Places in restaurant location
        </span>
      </h3>
      <div className="flex">
        <div className="p-4 w-full">
          {restaurants?.map((restaurant) =>
            viewMode === "grid" ? (
              <Card
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
              <CardCompact
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
    </div>
  );
};

export default RestaurantList;
