import { SettingsFormData, settingsSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { CustomFormField } from "./FormField";
import { Button } from "./ui/button";
import { CategoryEnum } from "@/lib/constants";

const SettingsForm = ({
  initialData,
  onSubmit,
  userType,
}: SettingsFormProps) => {
  const [editMode, setEditMode] = useState(false);
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
    await onSubmit(data);
    setEditMode(false);
  };

  return (
    <div className="pt-8 pb-5 px-8">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      name="categories"
                      label="Categories"
                      type="select"
                      options={Object.keys(CategoryEnum).map((category) => ({
                        value: category,
                        label: category,
                      }))}
                      disabled={!editMode}
                    />
                    <CustomFormField
                      name="description"
                      label="Restaurant Description"
                      type="textarea"
                      disabled={!editMode}
                    />
                  </div>
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
