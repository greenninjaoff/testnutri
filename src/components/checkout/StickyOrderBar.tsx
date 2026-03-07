"use client";

import useCheckoutStore from "@/stores/checkoutStore";

const formatSum = (value: number) =>
  `${value.toLocaleString("en-US").replace(/,/g, " ")} sum`;

const StickyOrderBar = () => {
  const total = useCheckoutStore((s) => s.total);
  const paymentMethod = useCheckoutStore((s) => s.paymentMethod);

  const buttonText =
    paymentMethod === "cash" ? "Order" : "Pay";

  const handleSubmit = () => {
    // later:
    // cash  -> create order
    // card  -> open / process card payment
    // payme -> redirect to Payme
    // click -> redirect to Click
    console.log("submit checkout");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-neutral-200 bg-white px-4 pb-4 pt-3">
      <div className="mx-auto flex max-w-[640px] items-center gap-3">
        <div className="min-w-[120px]">
          <p className="text-[15px] font-semibold text-neutral-900">
            {formatSum(total)}
          </p>
          <button
            type="button"
            className="mt-1 text-xs text-neutral-500 transition hover:text-neutral-700"
          >
            Price includes
          </button>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="flex-1 rounded-[20px] bg-yellow-400 px-6 py-4 text-base font-semibold text-neutral-900 transition hover:bg-yellow-300 active:scale-[0.99]"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default StickyOrderBar;