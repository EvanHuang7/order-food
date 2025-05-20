import { Button } from "@/components/ui/button";
import { useGetAuthUserQuery } from "@/state/api";
import { Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const AiCallWidget = ({ restaurantId }: AiCallWidgetProps) => {
  const { data: authUser } = useGetAuthUserQuery();
  const router = useRouter();
  // TODO: get Restaurant info

  const handleButtonClick = () => {
    if (authUser) {
      // TODO: Start VAPI workflow call by sending user info
    } else {
      router.push("/signin");
    }
  };

  return (
    <div className="bg-white border border-primary-200 rounded-2xl p-7 h-fit min-w-[300px]">
      {/* Contact Info */}
      <div className="flex items-center gap-5 mb-4 border border-primary-200 p-4 rounded-xl">
        <div className="flex items-center p-4 bg-primary-900 rounded-full">
          <Phone className="text-primary-50" size={15} />
        </div>
        <div>
          <h1 className="text-xl font-semibold">Restaurant name</h1>
          <p>Place order with AI call</p>
          <div className="text-lg font-bold text-primary-800">
            (424) 340-5574
          </div>
        </div>
      </div>
      <Button
        className="w-full bg-primary-700 text-white hover:bg-primary-600"
        onClick={handleButtonClick}
      >
        {authUser ? "Start AI call" : "Sign In to Order"}
      </Button>

      <hr className="my-4" />
      <div className="text-sm">
        <div className="text-primary-600">
          Open at Monday - Sunday every day
        </div>
      </div>
    </div>
  );
};

export default AiCallWidget;
