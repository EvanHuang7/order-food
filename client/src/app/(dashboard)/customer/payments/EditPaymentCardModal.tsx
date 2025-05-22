import React, { ChangeEvent, FormEvent } from "react";
import { CreditCard } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EditPaymentCardModal: React.FC<Props> = ({ open, onOpenChange }) => {
  const [form, setForm] = React.useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
    name: "",
  });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    toast.success("Payment simulated successfully 🎉");
    setLoading(false);
    onOpenChange(false); // Close modal
    setForm({ cardNumber: "", expiry: "", cvc: "", name: "" }); // Reset form
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white text-gray-800">
        <DialogHeader>
          <DialogTitle className="text-xl">Payment Card</DialogTitle>
          <p className="text-sm text-gray-500">
            Enter your card details below to update your payment info.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col border border-gray-300 rounded-md">
            <div className="flex items-center gap-2 bg-gray-50 py-2 px-3 border-b border-gray-300">
              <CreditCard size={20} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                Credit/Debit Card
              </span>
            </div>

            <div className="p-4 space-y-4">
              <div className="relative w-full">
                <input
                  name="cardNumber"
                  placeholder="Card number"
                  className="w-full px-4 py-2 pr-24 border border-gray-300 rounded-md"
                  value={form.cardNumber}
                  onChange={handleChange}
                />
                <div className="absolute top-1/2 right-3 -translate-y-1/2 flex gap-1">
                  <div className="w-10 h-6 bg-blue-600 flex items-center justify-center rounded">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  <div className="w-10 h-6 bg-yellow-500 flex items-center justify-center rounded">
                    <span className="text-white text-xs font-bold">MC</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <input
                  name="expiry"
                  placeholder="MM/YY"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
                  value={form.expiry}
                  onChange={handleChange}
                />
                <input
                  name="cvc"
                  placeholder="CVC"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md"
                  value={form.cvc}
                  onChange={handleChange}
                />
              </div>
              <input
                name="name"
                placeholder="Name on card"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                value={form.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditPaymentCardModal;
