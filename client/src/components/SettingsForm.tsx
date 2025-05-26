import { SettingsFormData, settingsSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, FormControl, FormItem, FormMessage } from "./ui/form";
import { CustomFormField } from "./FormField";
import { Button } from "./ui/button";
import CategoryMultiSelect from "./CategoryMultiSelect";
import { toast } from "sonner";
import { UserRoundPen } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const SettingsForm = ({
  initialData,
  onSubmit,
  userType,
}: SettingsFormProps) => {
  const [editMode, setEditMode] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const form = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
    defaultValues: initialData,
  });

  const toggleEditMode = () => {
    setEditMode(!editMode);
    if (editMode) {
      form.reset(initialData);
    }
  };

  const handleSubmit = async (data: SettingsFormData) => {
    data.profileImgUrl = selectedImg;
    await onSubmit(data);
    setEditMode(false);
  };

  const handleImageUpload = async (event: any) => {
    // Get image file of user selected and check it
    const file = event.target.files[0];
    if (!file) {
      console.log("Function errored because of no file uploaded");
      toast.error("Sorry, no file uploaded");
      return;
    }

    const maxSize = 2 * 1024 * 1024; // 2MB
    if (file.size > maxSize) {
      return toast.error(
        "Please try to upload a file less than max file size 2MB"
      );
    }

    // Convert the image to base64 format
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result as string;
      // Set the user selected image to the avator UI
      setSelectedImg(base64Image);
    };
  };

  return (
    <div className="dashboard-container">
      <div className="mb-5">
        <h1 className="text-xl font-semibold">
          {`${userType.charAt(0).toUpperCase() + userType.slice(1)} Settings`}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your account preferences and personal information
        </p>
      </div>
      <div className="bg-white rounded-xl p-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            {/* Basic Information */}
            <div className="space-y-6">
              <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
              {/* Avatar Upload Field */}
              <Controller
                control={form.control}
                name="profileImgUrl"
                render={() => (
                  <FormItem>
                    <FormControl>
                      <div className="flex justify-start items-start">
                        <div className="relative">
                          <Image
                            src={
                              selectedImg ||
                              initialData.profileImgUrl ||
                              "/userProfile/customer-profile-img-2.jpg"
                            }
                            alt="profileImgUrl"
                            width={100}
                            height={100}
                            className="rounded-full object-cover border-4"
                          />
                          <label
                            htmlFor="avatar-upload"
                            className={cn(
                              "absolute bottom-0 right-0 bg-gray-100 hover:scale-105 p-2 rounded-full transition-all duration-200 shadow-md",
                              editMode && "cursor-pointer"
                            )}
                          >
                            <UserRoundPen className="w-5 h-5" />
                            <input
                              type="file"
                              id="avatar-upload"
                              className="hidden"
                              accept="image/*"
                              onChange={handleImageUpload}
                              disabled={!editMode}
                            />
                          </label>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <CustomFormField name="name" label="Name" disabled={!editMode} />
              <CustomFormField
                name="email"
                label="Email"
                type="email"
                disabled={true}
              />
              <CustomFormField
                name="phoneNumber"
                label="Phone Number"
                disabled={!editMode}
              />
            </div>

            {/* Address Information */}
            {userType !== "driver" && (
              <>
                <hr className="my-6 border-gray-200" />

                <div className="space-y-6">
                  <h2 className="text-lg font-semibold mb-4">
                    Address Information
                  </h2>
                  <CustomFormField
                    name="address"
                    label="Address"
                    disabled={!editMode}
                  />
                  <div className="flex justify-between gap-4">
                    <CustomFormField
                      name="city"
                      label="City"
                      className="w-full"
                      disabled={!editMode}
                    />
                    <CustomFormField
                      name="province"
                      label="Province"
                      className="w-full"
                      disabled={!editMode}
                    />
                    <CustomFormField
                      name="postalCode"
                      label="Postal Code"
                      className="w-full"
                      disabled={!editMode}
                    />
                  </div>
                  <CustomFormField
                    name="country"
                    label="Country"
                    disabled={!editMode}
                  />
                </div>
              </>
            )}

            {/* Restaurant Info */}
            {userType === "restaurant" && (
              <>
                <hr className="my-6 border-gray-200" />

                {/* Restaurant Additional Information */}
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold mb-4">
                    Restaurant Additional Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <CustomFormField
                      name="openTime"
                      label="Open Time"
                      placeholder="e.g. 09:00"
                      disabled={!editMode}
                    />
                    <CustomFormField
                      name="closeTime"
                      label="Close Time"
                      placeholder="e.g. 21:00"
                      disabled={!editMode}
                    />
                    <CustomFormField
                      name="pricePerPereson"
                      label="Price Per Pereson (Enter number only)"
                      placeholder="19.99"
                      disabled={!editMode}
                    />
                  </div>
                  <CategoryMultiSelect
                    value={form.watch("categories") ?? []}
                    onChange={(val) => form.setValue("categories", val)}
                    disabled={!editMode}
                  />
                  <CustomFormField
                    name="description"
                    label="Restaurant Description"
                    type="textarea"
                    disabled={!editMode}
                  />
                </div>

                <hr className="my-6 border-gray-200" />

                {/* Restaurant Photos */}
                <div>
                  <h2 className="text-lg font-semibold mb-4">
                    Restaurant Photos
                  </h2>
                  <CustomFormField
                    name="photoUrls"
                    label="Photos"
                    type="file"
                    accept="image/*"
                    disabled={!editMode}
                  />
                </div>
              </>
            )}

            {/* Action buttons */}
            <div className="pt-4 flex justify-between">
              <Button
                type="button"
                onClick={toggleEditMode}
                className="bg-secondary-500 text-white hover:bg-secondary-600"
              >
                {editMode ? "Cancel" : "Edit"}
              </Button>
              {editMode && (
                <Button
                  type="submit"
                  className="bg-primary-700 text-white hover:bg-primary-800"
                >
                  Save Changes
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SettingsForm;
