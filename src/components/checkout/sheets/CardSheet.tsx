"use client";

import { useEffect, useState } from "react";
import BottomSheet from "@/components/ui/BottomSheet";
import useCheckoutStore from "@/stores/checkoutStore";

const inputClassName =
  "h-[46px] w-full rounded-[18px] border border-[#d6d6d6] bg-transparent px-4 text-[15px] text-neutral-900 outline-none placeholder:text-[#8f8f95] focus:border-lime-400";

const formatCardNumber = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
};

const formatExpiry = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
};

const CardSheet = () => {
  const openSheet = useCheckoutStore((s) => s.openSheet);
  const close = useCheckoutStore((s) => s.close);
  const addSavedCard = useCheckoutStore((s) => s.addSavedCard);
  const selectSavedCard = useCheckoutStore((s) => s.selectSavedCard);

  const isOpen = openSheet === "card";

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  useEffect(() => {
    if (isOpen) {
      setCardNumber("");
      setExpiry("");
      setCvc("");
    }
  }, [isOpen]);

  const handleSave = () => {
    const digits = cardNumber.replace(/\D/g, "");
    if (digits.length < 12) return;

    const last4 = digits.slice(-4);
    const id = Date.now().toString();

    addSavedCard({
      id,
      maskedNumber: `•••• •••• •••• ${last4}`,
      brand: "Card",
    });

    selectSavedCard(id);
    close();
  };

  return (
    <BottomSheet open={isOpen} onClose={close} title="Add new card">
      <div className="space-y-3">
        <input
          type="text"
          inputMode="numeric"
          value={cardNumber}
          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          placeholder="Card number"
          className={inputClassName}
        />

        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            inputMode="numeric"
            value={expiry}
            onChange={(e) => setExpiry(formatExpiry(e.target.value))}
            placeholder="MM/YY"
            className={inputClassName}
          />
          <input
            type="text"
            inputMode="numeric"
            value={cvc}
            onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 4))}
            placeholder="CVC"
            className={inputClassName}
          />
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="mt-3 h-[44px] w-full rounded-[18px] bg-[#97e600] text-[17px] font-medium text-black transition hover:brightness-95 active:scale-[0.995]"
        >
          Save card
        </button>
      </div>
    </BottomSheet>
  );
};

export default CardSheet;