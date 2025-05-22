"use client";

import React, { useEffect } from "react";
import { CreditCard } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { CustomFormField } from "@/components/FormField";
import { paymentCardSchema, PaymentCardFormData } from "@/lib/schemas";
import Loading from "@/components/Loading";
import { useGetAuthUserQuery, useUpsertPaymentInfoMutation } from "@/state/api";

const PaymentCardModal = ({ open, onOpenChange }: PaymentCardModalProps) => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const [upsertPaymentInfo] = useUpsertPaymentInfoMutation();

  const form = useForm<PaymentCardFormData>({
    resolver: zodResolver(paymentCardSchema),
    defaultValues: {
      cardNumber: authUser?.userInfo?.paymentInfo
        ? `*********${authUser?.userInfo?.paymentInfo.last4}`
        : "",
      expiry: authUser?.userInfo?.paymentInfo
        ? `${authUser?.userInfo?.paymentInfo.expiryMonth}/${authUser?.userInfo?.paymentInfo.expiryYear}`
        : "",
      cvc: authUser?.userInfo?.paymentInfo ? "***" : "",
      name: authUser?.userInfo?.paymentInfo ? "******" : "",
    },
  });

  useEffect(() => {
    if (open && authUser) {
      const paymentInfo = authUser.userInfo?.paymentInfo;

      form.reset({
        cardNumber: paymentInfo ? `*********${paymentInfo.last4}` : "",
        expiry: paymentInfo
          ? `${paymentInfo.expiryMonth}/${paymentInfo.expiryYear}`
          : "",
        cvc: paymentInfo ? "***" : "",
        name: paymentInfo ? "******" : "",
      });
    }
  }, [open, authUser, form]);

  const onSubmit = async (data: PaymentCardFormData) => {
    const [month, year] = data.expiry.split("/");

    await upsertPaymentInfo({
      customerId: authUser?.userInfo?.id,
      last4: data.cardNumber.slice(-4),
      expiryMonth: Number(month),
      expiryYear: Number(year),
    });

    // Close modal
    onOpenChange(false);
  };

  // Make sure has authUser data when setting initialData
  if (isLoading || !authUser) return <Loading />;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white text-gray-900 sm:max-w-[500px] max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader className="mb-2">
          <DialogTitle className="text-xl">Payment Card</DialogTitle>
          <p className="text-sm text-gray-500">
            Enter your card details below to update your payment info.
          </p>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="flex flex-col border border-gray-300 rounded-md">
              <div className="flex items-center gap-2 bg-gray-50 py-2 px-3 border-b border-gray-300">
                <CreditCard size={20} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700">
                  Credit/Debit Card
                </span>
              </div>

              <div className="p-4 space-y-4">
                <div className="relative w-full">
                  <CustomFormField
                    name="cardNumber"
                    label="Card Number"
                    placeholder="Card number"
                  />
                  <div className="pointer-events-none absolute right-3 top-[25px] flex">
                    <div className="w-14 h-9 relative">
                      <Image
                        src="/visa.png"
                        alt="Visa"
                        fill
                        className="object-contain rounded"
                      />
                    </div>
                    <div className="w-14 h-9 relative">
                      <Image
                        src="/mastercard.png"
                        alt="Mastercard"
                        fill
                        className="object-contain rounded"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CustomFormField
                    name="expiry"
                    label="Expiry"
                    placeholder="MM/YY"
                  />
                  <CustomFormField name="cvc" label="CVC" placeholder="CVC" />
                </div>

                <CustomFormField
                  name="name"
                  label="Name on Card"
                  placeholder="Full name on card"
                />
              </div>
            </div>

            <DialogFooter>
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="bg-primary-700 hover:bg-primary-800 text-white w-full"
              >
                {form.formState.isSubmitting ? "Saving..." : "Save"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentCardModal;
