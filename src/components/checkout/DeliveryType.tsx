"use client";

import useCheckoutStore from "@/stores/checkoutStore";

const DeliveryType = () => {
  const deliveryType = useCheckoutStore((s) => s.deliveryType);
  const setDeliveryType = useCheckoutStore((s) => s.setDeliveryType);

  return (
    <div className="bg-white rounded-2xl p-4 flex gap-3">

      {/* Standard */}
      <button
        onClick={() => setDeliveryType("standard")}
        className={`flex-1 p-4 rounded-xl border transition ${
          deliveryType === "standard"
            ? "border-lime-400 bg-lime-50"
            : "border-neutral-200"
        }`}
      >
        <div className="text-sm font-semibold">
          Standard
        </div>

        <div className="text-xs text-neutral-500">
          15–25 min
        </div>
      </button>

      {/* Priority */}
      <button
        onClick={() => setDeliveryType("priority")}
        className={`flex-1 p-4 rounded-xl border transition ${
          deliveryType === "priority"
            ? "border-lime-400 bg-lime-50"
            : "border-neutral-200"
        }`}
      >
        <div className="text-sm font-semibold">
          Priority
        </div>

        <div className="text-xs text-neutral-500">
          5–20 min
        </div>

        <div className="text-xs text-neutral-500">
          +9900 sum
        </div>
      </button>

    </div>
  );
};

export default DeliveryType;