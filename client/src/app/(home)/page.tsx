"use client";

import { useAppDispatch, useAppSelector } from "@/state/redux";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { cleanParams } from "@/lib/utils";
import { setFilters } from "@/state";
import FiltersFull from "./FiltersFull";
import AllRestaurants from "./AllRestaurants";
import FiltersBar from "./FiltersBar";

const HomePage = () => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const isFiltersFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen
  );

  // Set filter with search param in url
  useEffect(() => {
    const initialFilters = Array.from(searchParams.entries()).reduce(
      (acc: any, [key, value]) => {
        if (key === "priceRange") {
          acc[key] = value.split(",").map((v) => (v === "" ? null : Number(v)));
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
      <FiltersBar />
      <AllRestaurants />
    </div>
  );
};

export default HomePage;
