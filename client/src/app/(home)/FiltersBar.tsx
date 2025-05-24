import { FiltersState, setFilters } from "@/state";
import { useAppSelector } from "@/state/redux";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";
import {
  cleanParams,
  cn,
  formatPriceValue,
  formatEnumString,
} from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoryEnum, CategoryEnumIcons } from "@/lib/constants";
import { Label } from "@/components/ui/label";

const FiltersBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const filters = useAppSelector((state) => state.global.filters);

  const updateURL = debounce((newFilters: FiltersState) => {
    const cleanFilters = cleanParams(newFilters);
    const updatedSearchParams = new URLSearchParams();

    Object.entries(cleanFilters).forEach(([key, value]) => {
      updatedSearchParams.set(
        key,
        Array.isArray(value) ? value.join(",") : value.toString()
      );
    });

    router.push(`${pathname}?${updatedSearchParams.toString()}`);
  }, 300);

  const handleFilterChange = (
    key: string,
    value: any,
    isMin: boolean | null
  ) => {
    let newValue = value;

    if (key === "priceRange") {
      const currentArrayRange = [...filters[key]];
      if (isMin !== null) {
        const index = isMin ? 0 : 1;
        currentArrayRange[index] = value === "any" ? null : Number(value);
      }
      newValue = currentArrayRange;
    } else {
      newValue = value === "any" ? "any" : value;
    }

    const newFilters = { ...filters, [key]: newValue };
    dispatch(setFilters(newFilters));
    updateURL(newFilters);
  };

  const handleCategoryClick = (category: CategoryEnum) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];

    const newFilters = { ...filters, categories: newCategories };
    dispatch(setFilters(newFilters));
    updateURL(newFilters);
  };

  return (
    <div className="flex flex-col gap-4 px-4 py-5 w-full">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(CategoryEnumIcons).map(([category, Icon]) => (
          <div
            key={category}
            className={cn(
              "flex items-center space-x-2 p-2 border rounded-lg hover:cursor-pointer",
              filters.categories.includes(category as CategoryEnum)
                ? "border-black"
                : "border-gray-200"
            )}
            onClick={() => handleCategoryClick(category as CategoryEnum)}
          >
            <Icon className="w-5 h-5" />
            <Label>{formatEnumString(category)}</Label>
          </div>
        ))}
      </div>
      {/* Price Range */}
      <div className="flex items-center gap-4">
        <div className="flex gap-1">
          <Select
            value={filters.priceRange[0]?.toString() || "any"}
            onValueChange={(value) =>
              handleFilterChange("priceRange", value, true)
            }
          >
            <SelectTrigger className="w-22 rounded-xl border-primary-400">
              <SelectValue>
                {formatPriceValue(filters.priceRange[0], true)}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="any">Any Min Price</SelectItem>
              {[500, 1000, 1500, 2000, 3000, 5000, 10000].map((price) => (
                <SelectItem key={price} value={price.toString()}>
                  ${price / 1000}k+
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filters.priceRange[1]?.toString() || "any"}
            onValueChange={(value) =>
              handleFilterChange("priceRange", value, false)
            }
          >
            <SelectTrigger className="w-22 rounded-xl border-primary-400">
              <SelectValue>
                {formatPriceValue(filters.priceRange[1], false)}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="any">Any Max Price</SelectItem>
              {[1000, 2000, 3000, 5000, 10000].map((price) => (
                <SelectItem key={price} value={price.toString()}>
                  &lt;${price / 1000}k
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FiltersBar;
