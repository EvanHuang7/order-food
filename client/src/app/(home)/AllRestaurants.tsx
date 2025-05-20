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
  const { data: customer } = useGetCustomerQuery(
    authUser?.cognitoInfo?.userId || "",
    {
      skip: !authUser?.cognitoInfo?.userId || authUser.userRole !== "customer",
    }
  );
  const showCustomerInteraction =
    !!authUser && authUser.userRole === "customer";
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
      <h3 className="text-sm px-5 font-bold mb-3">
        {restaurants.length}{" "}
        <span className="text-gray-700 font-normal">restaurants in </span>
        Saskatoon <span className="text-gray-700 font-normal">city</span>
      </h3>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {restaurants.map((restaurant) => (
          <motion.div key={restaurant.id} variants={itemVariants}>
            {viewMode === "grid" ? (
              <RestaurantCard
                restaurant={restaurant}
                isFavorite={
                  customer?.favoriteRests?.some(
                    (fav: FavoriteRestaurant) =>
                      fav.restaurant.id === restaurant.id
                  ) || false
                }
                onFavoriteToggle={() => handleFavoriteToggle(restaurant.id)}
                showFavoriteButton={showCustomerInteraction}
                restaurantLink={`/${restaurant.id}`}
              />
            ) : (
              <RestaurantCardCompact
                restaurant={restaurant}
                isFavorite={
                  customer?.favoriteRests?.some(
                    (fav: FavoriteRestaurant) =>
                      fav.restaurant.id === restaurant.id
                  ) || false
                }
                onFavoriteToggle={() => handleFavoriteToggle(restaurant.id)}
                showFavoriteButton={showCustomerInteraction}
                restaurantLink={`/${restaurant.id}`}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AllRestaurants;
