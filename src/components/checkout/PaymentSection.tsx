"use client";

import useCheckoutStore from "@/stores/checkoutStore";
import { Banknote, ChevronRight, CreditCard, Wallet } from "lucide-react";

const optionBase =
  "flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-4 text-left transition";

const iconBox =
  "flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700";

const PaymentSection = () => {
  const savedCards = useCheckoutStore((s) => s.savedCards);
  const selectedCardId = useCheckoutStore((s) => s.selectedCardId);
  const isAddingNewCard = useCheckoutStore((s) => s.isAddingNewCard);
  const paymentMethod = useCheckoutStore((s) => s.paymentMethod);

  const selectSavedCard = useCheckoutStore((s) => s.selectSavedCard);
  const selectAddNewCard = useCheckoutStore((s) => s.selectAddNewCard);
  const selectPayme = useCheckoutStore((s) => s.selectPayme);
  const selectClick = useCheckoutStore((s) => s.selectClick);
  const selectCash = useCheckoutStore((s) => s.selectCash);

  const needChange = useCheckoutStore((s) => s.needChange);
  const toggleNeedChange = useCheckoutStore((s) => s.toggleNeedChange);
  const changeAmount = useCheckoutStore((s) => s.changeAmount);
  const setChangeAmount = useCheckoutStore((s) => s.setChangeAmount);

  const open = useCheckoutStore((s) => s.open);

  const radio = (active: boolean) => (
    <div
      className={`h-5 w-5 rounded-full border-2 transition ${
        active ? "border-lime-500 bg-lime-400" : "border-neutral-300 bg-white"
      }`}
    />
  );

  return (
    <section className="rounded-[28px] bg-[#f5f5f3] p-4 sm:p-5">
      <h2 className="mb-4 text-[18px] font-semibold text-neutral-900">
        Payment
      </h2>

      <div className="space-y-3">
        {/* Saved cards */}
        {savedCards.map((card) => {
          const active =
            paymentMethod === "card" &&
            selectedCardId === card.id &&
            !isAddingNewCard;

          return (
            <button
              key={card.id}
              type="button"
              onClick={() => selectSavedCard(card.id)}
              className={`${optionBase} ${
                active ? "border-lime-400" : "border-neutral-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={iconBox}>
                  <CreditCard className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    {card.brand || "Card"}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">
                    {card.maskedNumber}
                  </p>
                </div>
              </div>

              {radio(active)}
            </button>
          );
        })}

        {/* Add new card */}
        <button
          type="button"
          onClick={() => {
            selectAddNewCard();
            open("card");
          }}
          className={`${optionBase} ${
            paymentMethod === "card" && isAddingNewCard
              ? "border-lime-400"
              : "border-neutral-200"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={iconBox}>
              <CreditCard className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-semibold text-neutral-900">
                Add new card
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Link a new payment card
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {paymentMethod === "card" && isAddingNewCard
              ? radio(true)
              : <ChevronRight className="h-5 w-5 text-neutral-400" />}
          </div>
        </button>

        {/* Payme */}
        <button
          type="button"
          onClick={selectPayme}
          className={`${optionBase} ${
            paymentMethod === "payme"
              ? "border-lime-400"
              : "border-neutral-200"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={iconBox}>
              <Wallet className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-semibold text-neutral-900">Payme</p>
              <p className="mt-1 text-xs text-neutral-500">
                Pay with Payme
              </p>
            </div>
          </div>

          {radio(paymentMethod === "payme")}
        </button>

        {/* Click */}
        <button
          type="button"
          onClick={selectClick}
          className={`${optionBase} ${
            paymentMethod === "click"
              ? "border-lime-400"
              : "border-neutral-200"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={iconBox}>
              <Wallet className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-semibold text-neutral-900">Click</p>
              <p className="mt-1 text-xs text-neutral-500">
                Pay with Click
              </p>
            </div>
          </div>

          {radio(paymentMethod === "click")}
        </button>

        {/* Cash */}
        <button
          type="button"
          onClick={selectCash}
          className={`${optionBase} ${
            paymentMethod === "cash"
              ? "border-lime-400"
              : "border-neutral-200"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className={iconBox}>
              <Banknote className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-semibold text-neutral-900">Cash</p>
              <p className="mt-1 text-xs text-neutral-500">
                Pay on delivery
              </p>
            </div>
          </div>

          {radio(paymentMethod === "cash")}
        </button>

        {/* Cash extra */}
        {paymentMethod === "cash" && (
          <div className="rounded-2xl bg-white p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  Need change
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Tell courier what amount you will pay with
                </p>
              </div>

              <button
                type="button"
                onClick={toggleNeedChange}
                className={`relative h-6 w-11 rounded-full transition ${
                  needChange ? "bg-lime-400" : "bg-neutral-300"
                }`}
              >
                <span
                  className={`absolute top-[2px] h-5 w-5 rounded-full bg-white transition ${
                    needChange ? "left-5" : "left-[2px]"
                  }`}
                />
              </button>
            </div>

            {needChange && (
              <input
                type="text"
                inputMode="numeric"
                value={changeAmount}
                onChange={(e) => setChangeAmount(e.target.value)}
                placeholder="100000"
                className="mt-4 w-full rounded-2xl border border-neutral-200 px-4 py-3 text-sm outline-none transition focus:border-lime-400"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default PaymentSection;