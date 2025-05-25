import React from "react";
import {
  useAddFavoriteRestaurantMutation,
  useGetAuthUserQuery,
  useGetRestaurantsQuery,
  useRemoveFavoriteRestaurantMutation,
} from "@/state/api";
import { useAppSelector } from "@/state/redux";
import { FavoriteRestaurant } from "@/types/prismaTypes";
import RestaurantCard from "@/components/RestaurantCard";
import Loading from "@/components/Loading";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AllRestaurants = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const showCustomerInteraction =
    !!authUser && authUser.userRole === "customer";
  const filters = useAppSelector((state) => state.global.filters);

  // RTK Query watches that input filter (detects the change) and will automatically
  // re-run the query (issues a new API request) when filters (input) changes.
  // RTK Query uses the filters object as the cache key to cache and
  // reuse previous results if the same filter object has been queried before.
  const {
    data: restaurants,
    isLoading,
    isError,
  } = useGetRestaurantsQuery(filters);

  const [addFavorite] = useAddFavoriteRestaurantMutation();
  const [removeFavorite] = useRemoveFavoriteRestaurantMutation();

  const handleFavoriteToggle = async (restaurantId: number) => {
    if (!authUser) return;

    const isFavorite = authUser?.userInfo?.favoriteRests?.some(
      (fav: FavoriteRestaurant) => fav.restaurant.id === restaurantId
    );

    if (isFavorite) {
      await removeFavorite({
        customerId: authUser?.userInfo?.id,
        restaurantId,
      });
    } else {
      await addFavorite({
        customerId: authUser?.userInfo?.id,
        restaurantId,
      });
    }
  };

  if (isLoading) return <Loading />;
  if (isError || !restaurants)
    return <div className="ml-5">Failed to fetch restaurants</div>;

  return (
    <div className="w-full">
      <h3 className="text-sm px-5 font-bold mb-3">
        {restaurants.length}{" "}
        <span className="text-gray-700 font-normal">restaurants in </span>
        {authUser?.userInfo?.location?.city || "your"}{" "}
        <span className="text-gray-700 font-normal">city</span>
      </h3>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        {restaurants.map((restaurant) => (
          <motion.div key={restaurant.id} variants={itemVariants}>
            <RestaurantCard
              restaurant={restaurant}
              isFavorite={
                authUser?.userInfo?.favoriteRests?.some(
                  (fav: FavoriteRestaurant) =>
                    fav.restaurant.id === restaurant.id
                ) || false
              }
              onFavoriteToggle={() => handleFavoriteToggle(restaurant.id)}
              showFavoriteButton={showCustomerInteraction}
              restaurantLink={`/${restaurant.id}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AllRestaurants;
