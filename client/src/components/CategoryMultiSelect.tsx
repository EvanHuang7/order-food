import { useState } from "react";
import {
  Command,
  CommandItem,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

// TODO: use CategoryEnum instead
const allCategories = [
  "Food",
  "Drinks",
  "Dessert",
  "Asian",
  "Italian",
  "Fast Food",
];

const CategoryMultiSelect = ({
  value,
  onChange,
  disabled = false,
}: CategoryMultiSelectProps) => {
  const [open, setOpen] = useState(false);

  const toggleCategory = (cat: string) => {
    if (disabled) return;
    onChange(
      value.includes(cat) ? value.filter((v) => v !== cat) : [...value, cat]
    );
  };

  const removeCategory = (cat: string) => {
    if (disabled) return;
    onChange(value.filter((v) => v !== cat));
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Categories</label>

      <Popover open={open} onOpenChange={setOpen} disabled={disabled}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start"
            disabled={disabled}
          >
            {value.length > 0 ? (
              <div className="flex gap-2 flex-wrap">
                {value.map((val) => (
                  <Badge
                    key={val}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {val}
                    {!disabled && (
                      <X
                        className="w-3 h-3 cursor-pointer"
                        onClick={() => removeCategory(val)}
                      />
                    )}
                  </Badge>
                ))}
              </div>
            ) : (
              <span className="text-muted-foreground">
                Select categories...
              </span>
            )}
          </Button>
        </PopoverTrigger>

        {!disabled && (
          <PopoverContent className="w-[300px] p-0">
            <Command>
              <CommandInput placeholder="Search categories..." />
              <CommandList>
                {allCategories.map((cat) => (
                  <CommandItem
                    key={cat}
                    onSelect={() => toggleCategory(cat)}
                    className={value.includes(cat) ? "bg-muted" : ""}
                  >
                    {cat}
                  </CommandItem>
                ))}
              </CommandList>
            </Command>
          </PopoverContent>
        )}
      </Popover>
    </div>
  );
};

export default CategoryMultiSelect;
