import Image from "next/image";
import { X } from "lucide-react";
import { CategoryEnum, CategoryEnumImageFile } from "@/lib/constants";

const CategoryMultiSelect = ({
  value,
  onChange,
  disabled = false,
}: CategoryMultiSelectProps) => {
  const toggleCategory = (cat: CategoryEnum) => {
    if (disabled) return;
    onChange(
      value.includes(cat) ? value.filter((v) => v !== cat) : [...value, cat]
    );
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Categories</label>
      <div className="flex flex-wrap gap-2">
        {Object.entries(CategoryEnumImageFile).map(([catKey, imageFile]) => {
          const cat = catKey as CategoryEnum;
          const isSelected = value.includes(cat);

          return (
            <div
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={`px-2 py-1 rounded-full text-sm flex items-center gap-1 border ${
                isSelected
                  ? "bg-blue-100 border-blue-300"
                  : disabled
                  ? "bg-white text-gray-500 border-gray-300 opacity-50 cursor-default"
                  : "bg-white text-gray-500 border-gray-300 hover:bg-gray-100 cursor-pointer"
              }`}
            >
              <Image
                src={imageFile}
                alt={cat}
                width={16}
                height={16}
                className="rounded-sm"
              />
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
