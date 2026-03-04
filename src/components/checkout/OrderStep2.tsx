"use client";

import { useT } from "@/i18n/t";

const OrderStep2 = () => {
  const t = useT();

  return (
    <div className="w-full flex flex-col items-center justify-center py-16">

      <h1 className="text-2xl font-semibold mb-4">
        {t("checkout.step2") || "Step 2"}
      </h1>

      <p className="text-gray-500">
        Order review will be here.
      </p>

    </div>
  );
};

export default OrderStep2;