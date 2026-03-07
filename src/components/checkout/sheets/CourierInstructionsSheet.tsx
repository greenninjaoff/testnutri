"use client";

import { useEffect, useState } from "react";
import BottomSheet from "@/components/ui/BottomSheet";
import useCheckoutStore from "@/stores/checkoutStore";

const CourierInstructionsSheet = () => {
  const openSheet = useCheckoutStore((s) => s.openSheet);
  const close = useCheckoutStore((s) => s.close);
  const courierInstructions = useCheckoutStore((s) => s.courierInstructions);
  const setCourierInstructions = useCheckoutStore((s) => s.setCourierInstructions);

  const isOpen = openSheet === "courier";
  const [value, setValue] = useState("");

  useEffect(() => {
    if (isOpen) {
      setValue(courierInstructions);
    }
  }, [isOpen, courierInstructions]);

  const handleClose = () => {
    close();
  };

  const handleSave = () => {
    setCourierInstructions(value.trim());
    close();
  };

  return (
    <BottomSheet
      open={isOpen}
      onClose={handleClose}
      title="Courier instructions"
    >
      <div className="space-y-4">
        <p className="text-sm text-neutral-500">
          Add details to help the courier find you faster.
        </p>

        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="For example: call when you arrive, building behind the supermarket..."
          className="min-h-[140px] w-full resize-none rounded-2xl border border-neutral-200 px-4 py-3 text-sm outline-none transition focus:border-lime-400"
        />

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setValue("")}
            className="flex-1 rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-700"
          >
            Clear
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="flex-1 rounded-2xl bg-lime-400 px-4 py-3 text-sm font-semibold text-black transition hover:bg-lime-700"
          >
            Save
          </button>
        </div>
      </div>
    </BottomSheet>
  );
};

export default CourierInstructionsSheet;