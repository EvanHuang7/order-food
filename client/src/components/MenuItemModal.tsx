import { CustomFormField } from "@/components/FormField";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { MenuItemFormData, menuItemSchema } from "@/lib/schemas";
import {
  useCreateRestaurantMenuItemMutation,
  useGetAuthUserQuery,
} from "@/state/api";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const MenuItemModal = ({
  isOpen,
  onClose,
  restaurantId,
  menuItem = null,
}: MenuItemModalProps) => {
  const [createRestaurantMenuItem] = useCreateRestaurantMenuItemMutation();
  const { data: authUser } = useGetAuthUserQuery();

  const form = useForm<MenuItemFormData>({
    resolver: zodResolver(menuItemSchema),
    defaultValues: {
      name: menuItem ? menuItem.name : "",
      description: menuItem ? menuItem.description : "",
      price: menuItem ? menuItem.price : 0,
      photoUrl: undefined,
    },
  });

  const onSubmit = async (data: MenuItemFormData) => {
    if (!authUser || authUser.userRole !== "restaurant") {
      console.error(
        "You must be logged in as a restaurant to create a menu item"
      );
      return;
    }

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      // TODO: make sure it won't break when uploading more than
      // 1 file and won't break after adding loading initail defaut imgs for restaurant setting page
      if (key === "photoUrl") {
        const file = value as File;
        formData.append("photo", file);
      } else {
        formData.append(key, String(value));
      }
    });

    formData.append("restaurantId", String(restaurantId));

    // Updating existing menuItem case
    if (menuItem) {
      // TODO: finish it
      // await updateRestaurantMenuItem(formData);
    }
    // Add newe menuItem case
    else {
      await createRestaurantMenuItem(formData);
    }

    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md sm:max-w-2xl max-h-[70vh] overflow-y-auto bg-white p-6">
        <DialogHeader className="mb-4">
          <DialogTitle>
            {menuItem
              ? "Update an existing menu item"
              : "Add new menu item for your restaurant"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Modal for creating a new or update an existing restaurant menu item.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <CustomFormField
              name="name"
              label="Name"
              type="text"
              placeholder="Enter new menu item name"
            />
            <CustomFormField
              name="description"
              label="Description (Optional)"
              type="textarea"
              placeholder="Enter new menu item description"
            />
            <CustomFormField
              name="price"
              label="Price"
              type="number"
              placeholder="Enter new menu item price"
            />
            <CustomFormField
              name="photoUrl"
              label="Photo (Optional)"
              type="file"
              accept="image/*"
            />
            <Button type="submit" className="bg-primary-700 text-white w-full">
              {menuItem ? "Update Item" : "Add Item"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default MenuItemModal;
