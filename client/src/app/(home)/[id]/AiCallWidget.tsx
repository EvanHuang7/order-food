"use client";

import { Button } from "@/components/ui/button";
import {
  useCreateOrdersMutation,
  useGenerateOrderItemsWithAiMutation,
  useGetAuthUserQuery,
} from "@/state/api";
import { vapi } from "@/lib/vapi";
import { Loader2, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { takingOrderAI } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MenuItem } from "@/types/prismaTypes";
import { ShoppingCartItem } from "@/state";
import { CallStatus } from "@/lib/constants";
import { toast } from "sonner";

const AiCallWidget = ({ restaurantWithMenuItems }: AiCallWidgetProps) => {
  const { data: authUser } = useGetAuthUserQuery();
  const showCustomerInteraction =
    !!authUser && authUser.userRole === "customer";
  const router = useRouter();
  const [createOrders] = useCreateOrdersMutation();
  const [generateOrderItemsWithAi] = useGenerateOrderItemsWithAiMutation();

  // AI conversation states
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [messages, setMessages] = useState<SavedMessage[]>([]);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  // Group messages by consecutive same-role
  const groupedMessages = useMemo(() => {
    const groups: SavedMessage[] = [];

    for (const msg of messages) {
      const last = groups[groups.length - 1];
      if (last && last.role === msg.role) {
        last.content += ` ${msg.content}`;
      } else {
        groups.push({ role: msg.role, content: msg.content });
      }
    }

    return groups;
  }, [messages]);

  // Subscribe to VAPI event
  useEffect(() => {
    const onCallStart = () => {
      setCallStatus(CallStatus.ACTIVE);
    };

    const onCallEnd = () => {
      setCallStatus(CallStatus.FINISHED);
    };

    const onMessage = (message: Message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const newMessage = { role: message.role, content: message.transcript };
        setMessages((prev) => [...prev, newMessage]);
      }
    };

    const onSpeechStart = () => {
      setIsAiSpeaking(true);
    };

    // TODO: find why it's not end by AI itself
    const onSpeechEnd = () => {
      setIsAiSpeaking(false);
    };

    const onError = (error: Error) => {
      // Ignore specific "meeting ended" errors
      if (error?.message?.includes("Meeting has ended")) return;
      console.error("Error:", error);
    };

    vapi.on("call-start", onCallStart);
    vapi.on("call-end", onCallEnd);
    vapi.on("message", onMessage);
    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);
    vapi.on("error", onError);

    return () => {
      vapi.off("call-start", onCallStart);
      vapi.off("call-end", onCallEnd);
      vapi.off("message", onMessage);
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
      vapi.off("error", onError);
    };
  }, []);

  // Place order after finishing conversation
  useEffect(() => {
    const handlePlaceOrder = async (groupedMessages: SavedMessage[]) => {
      try {
        // Format AI and user conversation messages
        const formattedTranscript = groupedMessages
          .map(
            (sentence: { role: string; content: string }) =>
              `- ${sentence.role}: ${sentence.content}\n`
          )
          .join("");

        // Call Google AI to get order items by parsing conversation
        const orderedItems = await generateOrderItemsWithAi({
          restaurantId: restaurantWithMenuItems.id,
          formattedTranscript: formattedTranscript,
        }).unwrap();

        // Create order and redirect user
        await createOrders({
          customerId: authUser?.userInfo.id || "",
          items: orderedItems.map((orderedItem: any) => ({
            id: orderedItem.id,
            restaurantId: orderedItem.restaurantId,
            name: orderedItem.name,
            price: orderedItem.price,
            quantity: orderedItem.quantity,
          })) as ShoppingCartItem[],
        }).unwrap();

        router.push("/customer/orders");
      } catch (error) {
        console.error("Error placing order via AI:", error);
        toast.error("An error occurs when placing order");
      }
    };

    if (callStatus === CallStatus.FINISHED) {
      handlePlaceOrder(groupedMessages);
    }
  }, [groupedMessages, callStatus, router]);

  const handleStartCallWithAI = async () => {
    try {
      setCallStatus(CallStatus.CONNECTING);

      await vapi.start(takingOrderAI, {
        variableValues: {
          menuItems: restaurantWithMenuItems.menuItems.map(
            (menuItem: MenuItem) => menuItem.name
          ),
        },
      });
    } catch (error) {
      console.error("Error starting a call with AI:", error);
      toast.error("An error occurs when starting a call with AI");
    }
  };

  const handleEndCallWithAI = () => {
    setCallStatus(CallStatus.FINISHED);
    vapi.stop();
  };

  return (
    <div className="bg-white border border-primary-200 rounded-2xl p-7 h-fit min-w-[300px]">
      {/* Contact Info */}
      <div className="flex items-center gap-5 mb-4 border border-primary-200 p-4 rounded-xl">
        <div className="relative flex items-center justify-center p-4 bg-primary-900 rounded-full">
          {isAiSpeaking && (
            <span className="absolute inline-flex h-12 w-12 animate-ping rounded-full bg-primary-200 opacity-75" />
          )}
          <Phone className="relative text-primary-50" size={15} />
        </div>
        <div>
          <h1 className="text-xl font-semibold">
            {restaurantWithMenuItems.name}
          </h1>
          <p>Place order with AI call</p>
          <div className="text-lg font-bold text-primary-800">
            {restaurantWithMenuItems.phoneNumber || "Unknown"}
          </div>
        </div>
      </div>

      {/* Action button */}
      {authUser &&
        showCustomerInteraction &&
        (callStatus !== "ACTIVE" ? (
          <Button
            className="w-full bg-primary-700 text-white hover:bg-primary-600"
            onClick={() => handleStartCallWithAI()}
            disabled={callStatus === "FINISHED" || callStatus === "CONNECTING"}
          >
            <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                callStatus !== "CONNECTING" && "hidden"
              )}
            />

            {(callStatus === "CONNECTING" || callStatus === "FINISHED") && (
              <Loader2 className="animate-spin" size={20} />
            )}

            <span className="relative">
              {callStatus === "INACTIVE"
                ? "Start AI call"
                : callStatus === "CONNECTING"
                ? "Connecting"
                : callStatus === "FINISHED"
                ? "Placing order"
                : ""}
            </span>
          </Button>
        ) : (
          <Button
            className="w-full bg-primary-700 text-white hover:bg-primary-600"
            onClick={() => handleEndCallWithAI()}
          >
            End AI call
          </Button>
        ))}

      <hr className="my-4" />
      <div className="text-sm">
        <div className="text-primary-600">
          Open at {restaurantWithMenuItems?.openTime || "unknow"} -{" "}
          {restaurantWithMenuItems?.closeTime || "unknow"} every day
        </div>
      </div>
    </div>
  );
};

export default AiCallWidget;
