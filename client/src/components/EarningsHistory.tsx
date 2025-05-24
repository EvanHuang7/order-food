import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Order } from "@/types/prismaTypes";
import {
  ArrowDownToLineIcon,
  Check,
  Download,
  FileText,
  LoaderCircle,
} from "lucide-react";

const EarningsHistory = ({
  orders,
  userType,
}: {
  orders: Order[];
  userType: string;
}) => {
  return (
    <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-1">Earnings History</h2>
          <p className="text-sm text-gray-500">
            Download your earnings history.
          </p>
        </div>
        <div>
          <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center hover:bg-primary-700 hover:text-primary-50">
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
              <TableHead>Order</TableHead>
              <TableHead>Order Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Earning Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order: Order) => (
              <TableRow key={order.id} className="h-16">
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-2 shrink-0" />
                    Order #{order.id} -{" "}
                    {new Date(order.createdAt).toLocaleString("default", {
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold border ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800 border-green-300"
                        : "bg-yellow-100 text-yellow-800 border-yellow-300"
                    }`}
                  >
                    {order.status === "Delivered" ? (
                      <Check className="w-4 h-4 inline-block mr-1" />
                    ) : null}
                    <span className="hidden lg:inline">{order.status}</span>
                  </span>
                </TableCell>
                <TableCell>
                  {new Date(order.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {userType === "driver"
                    ? `$${
                        order.totalPrice * 0.15 >= 5
                          ? (order.totalPrice * 0.15).toFixed(2)
                          : 5
                      }`
                    : `$${
                        order.totalPrice * 0.15 >= 5
                          ? (order.totalPrice * 0.75).toFixed(2)
                          : (order.totalPrice * 0.9 - 5).toFixed(2)
                      }`}
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold border ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-500 border-green-300"
                        : "bg-yellow-100 text-yellow-800 border-yellow-300"
                    }`}
                  >
                    {order.status === "Delivered" ? (
                      <Check className="w-4 h-4 inline-block mr-1" />
                    ) : (
                      <LoaderCircle className="w-4 h-4 inline-block mr-1" />
                    )}
                    <span className="hidden lg:inline">
                      {order.status === "Delivered" ? "Paid" : "Pending"}
                    </span>
                  </span>
                </TableCell>
                <TableCell>
                  <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center font-semibold hover:bg-primary-700 hover:text-primary-50">
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

export default EarningsHistory;
