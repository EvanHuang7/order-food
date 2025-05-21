"use client";

import Header from "@/components/Header";
import Loading from "@/components/Loading";
import {
  useGetAuthUserQuery,
  useGetFavoriteRestaurantsQuery,
  useRemoveFavoriteRestaurantMutation,
} from "@/state/api";
import RestaurantCard from "@/components/RestaurantCard";

const Favorites = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const {
    data: favoriteRestaurants,
    isLoading,
    error,
  } = useGetFavoriteRestaurantsQuery(authUser?.userInfo?.id || "", {
    skip: !authUser?.userInfo?.id,
  });
  const [removeFavorite] = useRemoveFavoriteRestaurantMutation();

  const handleRemoveFavorite = async (restaurantId: number) => {
    if (!authUser) return;

    await removeFavorite({
      customerId: authUser?.userInfo?.id,
      restaurantId,
    });
  };

  if (isLoading) return <Loading />;
  if (error) return <div>Error loading favorite restaurants</div>;

  return (
    <div className="dashboard-container">
      <div className="flex justify-between items-center">
        <Header
          title="My Favorites Restaurants"
          subtitle="View and manage your favorite restaurants"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favoriteRestaurants?.map((favoriteRestaurant) => (
          <RestaurantCard
            key={favoriteRestaurant.id}
            restaurant={favoriteRestaurant}
            isFavorite={true}
            onFavoriteToggle={() => handleRemoveFavorite(favoriteRestaurant.id)}
            showFavoriteButton={true}
            restaurantLink={`/${favoriteRestaurant.id}`}
          />
        ))}
      </div>
      {(!favoriteRestaurants || favoriteRestaurants.length === 0) && (
        <p>You don&lsquo;t have anyfavorite restaurants yet</p>
      )}
    </div>
  );
};

export default Favorites;
