"use client";

import useCheckoutStore from "@/stores/checkoutStore";
import { ChevronRight, MessageSquareText } from "lucide-react";

const CourierInstructionsRow = () => {
  const courierInstructions = useCheckoutStore((s) => s.courierInstructions);
  const open = useCheckoutStore((s) => s.open);

  return (
    <button
      type="button"
      onClick={() => open("courier")}
      className="flex w-full items-center justify-between rounded-[28px] bg-[#f5f5f3] px-4 py-4 text-left transition hover:bg-[#eeeeea]"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-neutral-700">
          <MessageSquareText className="h-5 w-5" />
        </div>

        <div>
          <p className="text-sm font-semibold text-neutral-900">
            Courier instructions
          </p>
          <p className="mt-1 text-xs text-neutral-500">
            {courierInstructions?.trim()
              ? courierInstructions
              : "Add instructions for the courier"}
          </p>
        </div>
      </div>

      <ChevronRight className="h-5 w-5 text-neutral-400" />
    </button>
  );
};

export default CourierInstructionsRow;