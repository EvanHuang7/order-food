"use client";

import { useAppDispatch, useAppSelector } from "@/state/redux";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { cleanParams } from "@/lib/utils";
import { setFilters } from "@/state";
import AllRestaurantsSection from "./AllRestaurantsSection";
import FiltersSection from "./FiltersSection";

const Home = () => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  // Set filter with search param in url
  useEffect(() => {
    const initialFilters = Array.from(searchParams.entries()).reduce(
      (acc: any, [key, value]) => {
        if (key === "priceRange") {
          acc[key] = value.split(",").map((v) => (v === "" ? null : Number(v)));
        } else if (key === "categories") {
          acc[key] = value.split(",");
        } else {
          acc[key] = value === "any" ? null : value;
        }

        return acc;
      },
      {}
    );

    const cleanedFilters = cleanParams(initialFilters);
    dispatch(setFilters(cleanedFilters));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <FiltersSection />
      <AllRestaurantsSection />
    </div>
  );
};

export default Home;
