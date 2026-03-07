"use client";

import { useEffect, useState } from "react";
import BottomSheet from "@/components/ui/BottomSheet";
import useCheckoutStore from "@/stores/checkoutStore";

const PhoneSheet = () => {
  const openSheet = useCheckoutStore((s) => s.openSheet);
  const close = useCheckoutStore((s) => s.close);
  const phone = useCheckoutStore((s) => s.phone);
  const setPhone = useCheckoutStore((s) => s.setPhone);

  const isOpen = openSheet === "phone";
  const [value, setValue] = useState("");

  useEffect(() => {
    if (isOpen) {
      setValue(phone || "");
    }
  }, [isOpen, phone]);

  const handleSave = () => {
    setPhone(value.trim());
    close();
  };

  return (
    <BottomSheet open={isOpen} onClose={close} title="Recipient phone">
      <div className="space-y-4">
        <p className="text-sm text-neutral-500">
          Enter the phone number the courier can call.
        </p>

        <input
          type="tel"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="+998 90 123 45 67"
          className="h-12 w-full rounded-2xl border border-neutral-200 px-4 text-sm outline-none transition focus:border-lime-400"
        />

        <button
          type="button"
          onClick={handleSave}
          className="w-full rounded-2xl bg-lime-400 px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-lime-500 active:bg-lime-700"
        >
          Save
        </button>
      </div>
    </BottomSheet>
  );
};

export default PhoneSheet;