import { X } from "lucide-react";

// TODO: use CategoryEnum instead
const allCategories = [
  "Food",
  "Drinks",
  "Dessert",
  "Asian",
  "Italian",
  "Fast Food",
];

const categoryColors: Record<string, string> = {
  Food: "bg-green-100 text-green-800",
  Drinks: "bg-blue-100 text-blue-800",
  Dessert: "bg-pink-100 text-pink-800",
  Asian: "bg-yellow-100 text-yellow-800",
  Italian: "bg-red-100 text-red-800",
  "Fast Food": "bg-orange-100 text-orange-800",
};

const CategoryMultiSelect = ({
  value,
  onChange,
  disabled = false,
}: CategoryMultiSelectProps) => {
  const toggleCategory = (cat: string) => {
    if (disabled) return;
    onChange(
      value.includes(cat) ? value.filter((v) => v !== cat) : [...value, cat]
    );
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Categories</label>
      <div className="flex flex-wrap gap-2">
        {allCategories.map((cat) => {
          const isSelected = value.includes(cat);
          return (
            <div
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={`px-2 py-1 rounded-full text-sm flex items-center gap-1 border ${
                isSelected
                  ? categoryColors[cat] ?? "bg-gray-100 text-gray-800"
                  : disabled
                  ? "bg-white text-gray-500 border-gray-300 opacity-50 cursor-default"
                  : "bg-white text-gray-500 border-gray-300 hover:bg-gray-100 cursor-pointer"
              }`}
            >
              {cat}
              {isSelected && !disabled && (
                <X className="w-3 h-3 pointer-events-none" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMultiSelect;
