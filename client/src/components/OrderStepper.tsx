import { cn } from "@/lib/utils";
import {
  Clock,
  CheckCircle2,
  ChefHat,
  Truck,
  PackageCheck,
} from "lucide-react";
import React from "react";

const steps = [
  { icon: Clock, key: "Pending" },
  { icon: CheckCircle2, key: "Accepted" },
  { icon: ChefHat, key: "Preparing" },
  { icon: Truck, key: "PickedUp" },
  { icon: PackageCheck, key: "Delivered" },
];

const statusToStepIndex: Record<string, number> = {
  Pending: 0,
  Accepted: 1,
  Preparing: 2,
  PickedUp: 3,
  Delivered: 4,
};

const OrderStepper = ({ currentStatus }: { currentStatus: string }) => {
  const currentStep = statusToStepIndex[currentStatus] ?? 0;

  return (
    <div className="w-full flex items-center">
      <div className="w-full max-w-xl flex items-center justify-between px-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <React.Fragment key={step.key}>
              <div
                className={cn(
                  "flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-300",
                  {
                    "bg-green-500 text-white border-green-500": isCompleted,
                    "bg-primary-600 text-white border-primary-600": isActive,
                    "bg-white text-gray-400 border-gray-300":
                      !isCompleted && !isActive,
                  }
                )}
              >
                <Icon className="w-5 h-5" />
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-1 bg-gray-300 mx-2">
                  <div
                    className={cn("h-1 rounded transition-all duration-300", {
                      "bg-green-500 w-full": index < currentStep,
                      "bg-gray-300 w-full": index >= currentStep,
                    })}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default OrderStepper;
