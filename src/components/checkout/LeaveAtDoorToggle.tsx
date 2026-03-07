"use client";

import useCheckoutStore from "@/stores/checkoutStore";
import { DoorOpen } from "lucide-react";

const LeaveAtDoorToggle = () => {
  const leaveAtDoor = useCheckoutStore((s) => s.leaveAtDoor);
  const toggleLeaveAtDoor = useCheckoutStore((s) => s.toggleLeaveAtDoor);

  return (
    <div className="flex items-center justify-between rounded-[28px] bg-[#f5f5f3] px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-neutral-700">
          <DoorOpen className="h-5 w-5" />
        </div>

        <div>
          <p className="text-sm font-semibold text-neutral-900">
            Leave at the door
          </p>
          <p className="mt-1 text-xs text-neutral-500">
            Courier will leave the order at your door
          </p>
        </div>
      </div>

      {/* toggle */}
      <button
        onClick={toggleLeaveAtDoor}
        className={`relative h-6 w-11 rounded-full transition ${
          leaveAtDoor ? "bg-lime-400" : "bg-neutral-300"
        }`}
      >
        <span
          className={`absolute top-[2px] h-5 w-5 rounded-full bg-white transition ${
            leaveAtDoor ? "left-5" : "left-[2px]"
          }`}
        />
      </button>
    </div>
  );
};

export default LeaveAtDoorToggle;