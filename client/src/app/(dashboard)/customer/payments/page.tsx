"use client";

import Loading from "@/components/Loading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAuthUserQuery, useGetPaymentsQuery } from "@/state/api";
import { Payment } from "@/types/prismaTypes";
import {
  ArrowDownToLineIcon,
  Check,
  CreditCard,
  Download,
  Edit,
  FileText,
  Clock,
  LoaderCircle,
} from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import PaymentCardModal from "./PaymentCardModal";

const PaymentMethod = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const [modalOpen, setModalOpen] = React.useState(false);

  // Make sure has authUser data when setting initialData
  if (isLoading || !authUser) return <Loading />;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 mt-10 md:mt-0 flex-1">
      <h2 className="text-2xl font-bold mb-4">Payment method</h2>
      <p className="mb-4">Change how you pay for your orders.</p>
      <div className="border rounded-lg p-6">
        <div>
          {/* Card Info */}
          <div className="flex gap-10">
            <div className="relative w-36 h-20">
              <Image
                src="/mastercard.png"
                alt="MasterCard"
                className="object-cover"
                sizes="w-36 h-20"
                fill
                priority
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-start gap-5">
                  <h3 className="text-lg font-semibold">
                    MasterCard ending in{" "}
                    {authUser?.userInfo?.paymentInfo
                      ? `20${String(
                          authUser?.userInfo?.paymentInfo.expiryYear
                        )}`
                      : "N/A"}
                  </h3>
                  <span className="text-sm font-medium border border-primary-700 text-primary-700 px-3 py-1 rounded-full">
                    Default
                  </span>
                </div>
                <div className="text-sm text-gray-500 flex items-center">
                  <CreditCard className="w-4 h-4 mr-1" />
                  <span>
                    {authUser?.userInfo?.paymentInfo
                      ? `*********${authUser?.userInfo?.paymentInfo.last4}`
                      : "N/A"}
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-500 flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>
                  {authUser?.userInfo?.paymentInfo
                    ? `Expiry • ${authUser?.userInfo?.paymentInfo.expiryMonth}/${authUser?.userInfo?.paymentInfo.expiryYear}`
                    : "N/A"}
                </span>
              </div>
            </div>
          </div>

          <hr className="my-4" />
          <div className="flex justify-end">
            <button
              className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50"
              onClick={() => setModalOpen(true)}
            >
              <Edit className="w-5 h-5 mr-2" />
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>
      <PaymentCardModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

const PaymentHistory = ({ payments }: { payments: Payment[] }) => {
  return (
    <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-1">Payment History</h2>
          <p className="text-sm text-gray-500">
            Download your payment receipts.
          </p>
        </div>
        <div>
          <button
            className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center"
            disabled={true}
          >
            <Download className="w-5 h-5 mr-2" />
            <span>Download All</span>
          </button>
        </div>
      </div>
      <hr className="mt-4 mb-1" />
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Provider</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment: Payment) => (
              <TableRow key={payment.id} className="h-16">
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-2 shrink-0" />
                    Invoice #{payment.id} -{" "}
                    {new Date(payment.createdAt).toLocaleString("default", {
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </TableCell>
                <TableCell>{payment?.provider || "N/A"}</TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 inline-flex items-center gap-1 rounded-full text-xs font-semibold border ${
                      payment.status === "Paid"
                        ? "bg-green-100 text-green-800 border-green-300"
                        : "bg-yellow-100 text-yellow-800 border-yellow-300"
                    }`}
                  >
                    {payment.status === "Paid" ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <LoaderCircle className="w-4 h-4" />
                    )}
                    <span className="hidden lg:inline">{payment.status}</span>
                  </span>
                </TableCell>
                <TableCell>
                  {new Date(payment.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>${payment.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <button
                    className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center font-semibold"
                    disabled={true}
                  >
                    <ArrowDownToLineIcon className="w-4 h-4 mr-1" />
                    Download
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const Payments = () => {
  const { id } = useParams();
  const { data: authUser } = useGetAuthUserQuery();

  const {
    data: payments,
    isLoading: paymentsLoading,
    isError,
  } = useGetPaymentsQuery(authUser?.userInfo?.id || "", {
    skip: !authUser?.userInfo?.id,
  });

  if (paymentsLoading) return <Loading />;
  if (!payments || isError) return <div>Error loading payments</div>;

  return (
    <div className="dashboard-container">
      <PaymentMethod />
      <PaymentHistory payments={payments || []} />
    </div>
  );
};

export default Payments;
