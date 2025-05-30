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
  useUpdateRestaurantMenuItemMutation,
} from "@/state/api";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const MenuItemModal = ({
  isOpen,
  onClose,
  restaurantId,
  menuItem = null,
}: MenuItemModalProps) => {
  const [createRestaurantMenuItem] = useCreateRestaurantMenuItemMutation();
  const [updateRestaurantMenuItem] = useUpdateRestaurantMenuItemMutation();
  const { data: authUser } = useGetAuthUserQuery();

  const form = useForm<MenuItemFormData>({
    resolver: zodResolver(menuItemSchema),
    defaultValues: {
      name: menuItem ? menuItem.name : "",
      description: menuItem ? menuItem.description : "",
      price: menuItem ? menuItem.price : 0,
      photoUrls: [],
    },
  });

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });

  const onSubmit = async (data: MenuItemFormData) => {
    if (!authUser || authUser.userRole !== "restaurant") {
      console.error(
        "You must be logged in as a restaurant to create or update a menu item"
      );
      return;
    }

    let base64ImageFile = "";
    const files = data.photoUrls as File[];
    // Only add "file" if there is photo uploaded
    if (files && files?.length > 0) {
      const file = files[0];
      const maxSize = 1 * 1024 * 1024; // 1MB
      if (file.size > maxSize) {
        return toast.error(
          "The last file exceeds max file size 1MB, please try again"
        );
      }

      // Convert the image to base64 format
      base64ImageFile = await toBase64(file);
    }

    // Updating existing menuItem case
    if (menuItem) {
      await updateRestaurantMenuItem({
        menuItemId: menuItem.id,
        name: data.name,
        description: data.description!,
        price: data.price,
        file: base64ImageFile,
      });
    }
    // Add newe menuItem case
    else {
      await createRestaurantMenuItem({
        name: data.name,
        description: data.description!,
        price: data.price,
        restaurantId: restaurantId,
        file: base64ImageFile,
      });
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
              name="photoUrls"
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
