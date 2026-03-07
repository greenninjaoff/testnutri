"use client";

import { useEffect, useState } from "react";
import BottomSheet from "@/components/ui/BottomSheet";
import useCheckoutStore from "@/stores/checkoutStore";

const PromoSheet = () => {
  const openSheet = useCheckoutStore((s) => s.openSheet);
  const close = useCheckoutStore((s) => s.close);
  const promoCode = useCheckoutStore((s) => s.promoCode);
  const setPromoCode = useCheckoutStore((s) => s.setPromoCode);

  const isOpen = openSheet === "promo";
  const [value, setValue] = useState("");

  useEffect(() => {
    if (isOpen) {
      setValue(promoCode || "");
    }
  }, [isOpen, promoCode]);

  const handleApply = () => {
    setPromoCode(value.trim().toUpperCase());
    close();
  };

  return (
    <BottomSheet open={isOpen} onClose={close} title="Promo code">
      <div className="space-y-4">
        <p className="text-sm text-neutral-500">
          Enter your promo code if you have one.
        </p>

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="PROMO2026"
          className="h-12 w-full rounded-2xl border border-neutral-200 px-4 text-sm uppercase outline-none transition focus:border-lime-400"
        />

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setValue("")}
            className="flex-1 rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50"
          >
            Clear
          </button>

          <button
            type="button"
            onClick={handleApply}
            className="flex-1 rounded-2xl bg-lime-400 px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-lime-500 active:bg-lime-700"
          >
            Apply
          </button>
        </div>
      </div>
    </BottomSheet>
  );
};

export default PromoSheet;