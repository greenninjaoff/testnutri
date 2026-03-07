"use client";

import useCheckoutStore from "@/stores/checkoutStore";
import { ChevronDown, Info } from "lucide-react";

const PriceRow = ({
  label,
  value,
  bold = false,
}: {
  label: string;
  value: number;
  bold?: boolean;
}) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <span
        className={`text-sm ${
          bold ? "font-semibold text-neutral-900" : "text-neutral-700"
        }`}
      >
        {label}
      </span>
      <span
        className={`text-sm ${
          bold ? "font-semibold text-neutral-900" : "text-neutral-900"
        }`}
      >
        {value.toLocaleString("en-US").replace(/,/g, " ")} sum
      </span>
    </div>
  );
};

const PriceDetails = () => {
  const itemsTotal = useCheckoutStore((s) => s.itemsTotal);
  const deliveryFee = useCheckoutStore((s) => s.deliveryFee);
  const serviceFee = useCheckoutStore((s) => s.serviceFee);
  const priorityFee = useCheckoutStore((s) => s.priorityFee);
  const total = useCheckoutStore((s) => s.total);
  const deliveryType = useCheckoutStore((s) => s.deliveryType);

  return (
    <section className="rounded-[28px] bg-[#f5f5f3] p-4 sm:p-5">
      <h2 className="mb-4 text-[18px] font-semibold text-neutral-900">
        Price details
      </h2>

      <div className="space-y-4">
        <PriceRow label="Items in the order" value={itemsTotal} />

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-900">
            <span>Delivery</span>
            <ChevronDown className="h-4 w-4" />
          </div>

          <div className="pl-5">
            <PriceRow label="Delivery rate" value={deliveryFee} />
          </div>

          {deliveryType === "priority" && priorityFee > 0 && (
            <div className="pl-5">
              <PriceRow label="Priority delivery" value={priorityFee} />
            </div>
          )}
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-900">
            <span>Service fee</span>
            <ChevronDown className="h-4 w-4" />
          </div>

          <div className="flex items-center justify-between gap-4 pl-5">
            <div className="flex items-center gap-1 text-sm text-neutral-700">
              <span>Service fee</span>
              <Info className="h-4 w-4 text-neutral-400" />
            </div>

            <span className="text-sm text-neutral-900">
              {serviceFee.toLocaleString("en-US").replace(/,/g, " ")} sum
            </span>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-4">
          <PriceRow label="Total" value={total} bold />
        </div>
      </div>
    </section>
  );
};

export default PriceDetails;