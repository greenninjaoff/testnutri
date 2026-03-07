"use client";

import PaymentForm from "@/components/PaymentForm";
import RecommendationsRow from "@/components/RecommendationsRow";
import OrderStep2 from "@/components/checkout/OrderStep2";
import CartStep1 from "@/components/checkout/OrderStep1";
import useCartStore from "@/stores/cartStore";
import useCheckoutStore from "@/stores/checkoutStore";
import useLangStore from "@/stores/langStore";
import { ShippingFormInputs } from "@/types";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { useT } from "@/i18n/t";
import { catalog } from "@/data/products";
import { formatPrice } from "@/lib/formatPrice";

const CartClient = () => {
  const t = useT();
  const { lang } = useLangStore();

  const router = useRouter();
  const searchParams = useSearchParams();

  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();
  const activeStep = parseInt(searchParams.get("step") || "1", 10);

  const { cart, removeFromCart, updateQuantity } = useCartStore();

  const deliveryType = useCheckoutStore((s) => s.deliveryType);
  const setPriceDetails = useCheckoutStore((s) => s.setPriceDetails);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    const itemsTotal = subtotal;
    const deliveryFee = subtotal > 0 ? 6999 : 0;
    const serviceFee = subtotal > 0 ? 4990 : 0;
    const priorityFee = deliveryType === "priority" ? 9900 : 0;
    const total = itemsTotal + deliveryFee + serviceFee + priorityFee;

    setPriceDetails({
      itemsTotal,
      deliveryFee,
      serviceFee,
      priorityFee,
      total,
    });
  }, [subtotal, deliveryType, setPriceDetails]);

  const goToStep = (step: number) => router.push(`/cart?step=${step}`, { scroll: false });

  const incQty = (productId: number, sku: string, currentQty: number) => {
    updateQuantity({ productId, sku }, currentQty + 1);
  };

  const decQty = (productId: number, sku: string, currentQty: number) => {
    if (currentQty <= 1) {
      removeFromCart({ productId, sku });
      return;
    }
    updateQuantity({ productId, sku }, currentQty - 1);
  };

  const recItems = useMemo(() => {
    const cartSkus = new Set(cart.map((c) => c.sku));

    return catalog
      .flatMap((p) => p.variants.map((v) => ({ product: p, variant: v })))
      .filter(({ variant }) => !cartSkus.has(variant.sku))
      .slice(0, 6);
  }, [cart]);

  const recRef = useRef<HTMLDivElement | null>(null);

  const scrollRecs = (dir: "left" | "right") => {
    const el = recRef.current;
    if (!el) return;

    const amount = Math.max(240, Math.floor(el.clientWidth * 0.9));
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="mt-6 lg:mt-12 -mx-4 lg:mx-0">
      {/* MOBILE HEADER */}
      <div className="lg:hidden px-4">
        <h1 className="text-xl font-semibold text-[rgb(var(--text))]">{t("cart.title")}</h1>
        <p className="text-xs text-[rgb(var(--muted))] mt-1">
          {cart.length ? `${cart.length} item(s)` : t("cart.empty")}
        </p>
      </div>

      {/* CONTENT */}
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16 mt-6 px-4 lg:px-0">
        {/* LEFT */}
        <div className="w-full lg:w-7/12 shadow-lg border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-4 lg:p-8 rounded-lg flex flex-col gap-6">
          {activeStep === 1 ? (
            <CartStep1
              t={t}
              cart={cart as any}
              catalog={catalog as any}
              onInc={incQty}
              onDec={decQty}
            />
          ) : activeStep === 2 ? (
            <OrderStep2 />
          ) : activeStep === 3 && shippingForm ? (
            <PaymentForm />
          ) : (
            <p className="text-sm text-[rgb(var(--muted))]">{t("cart.fillShipping")}</p>
          )}
        </div>

        {/* RIGHT (desktop summary) */}
        <div className="hidden lg:flex w-full lg:w-5/12 flex-col gap-6 self-start">
          <div className="shadow-lg border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8 rounded-lg flex-col gap-6 h-max flex">
            <h2 className="font-semibold text-[rgb(var(--text))]">{t("cart.details")}</h2>

            <div className="flex justify-between text-sm">
              <span className="text-[rgb(var(--muted))]">{t("cart.subtotal")}</span>
              <span className="font-medium text-[rgb(var(--text))]">{formatPrice(subtotal)}</span>
            </div>

            <div className="flex justify-between text-sm font-semibold">
              <span className="text-[rgb(var(--text))]">{t("cart.total")}</span>
              <span className="text-[rgb(var(--text))]">{formatPrice(subtotal)}</span>
            </div>

            {activeStep === 1 && (
              <button
                type="button"
                onClick={() => goToStep(2)}
                className="w-full bg-lime-400 text-black p-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 ease-out hover:bg-lime-700 active:bg-lime-700 active:scale-[0.98]"
              >
                {t("cart.continue")}
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Desktop recommendations */}
          {activeStep === 1 && recItems.length > 0 && (
            <div className="shadow-lg border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-6 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <p className="font-semibold text-[rgb(var(--text))]">You may also like</p>

                <div className="hidden lg:flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => scrollRecs("left")}
                    className="w-7 h-7 rounded-md border border-[rgb(var(--border))] flex items-center justify-center transition-all duration-200 ease-out hover:bg-[rgb(var(--surface))] active:scale-95"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollRecs("right")}
                    className="w-7 h-7 rounded-md border border-[rgb(var(--border))] flex items-center justify-center transition-all duration-200 ease-out hover:bg-[rgb(var(--surface))] active:scale-95"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <RecommendationsRow ref={recRef} items={recItems} />
            </div>
          )}
        </div>
      </div>

      {/* MOBILE ONLY: “You may also like” after left part */}
      {activeStep === 1 && recItems.length > 0 && (
        <div className="lg:hidden mt-6 px-4">
          <div className="shadow-lg border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5 rounded-lg">
            <p className="font-semibold text-[rgb(var(--text))] mb-3">You may also like</p>
            <RecommendationsRow items={recItems} />
          </div>
        </div>
      )}

      {/* MOBILE SPACER ONLY FOR STEP 1 */}
      {activeStep === 1 && <div className="lg:hidden h-24" />}

      {/* MOBILE FIXED BOTTOM BAR ONLY FOR STEP 1 */}
      {activeStep === 1 && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[rgb(var(--card))] border-t border-[rgb(var(--border))] px-4 py-3 z-40">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[rgb(var(--muted))]">{t("cart.total")}</p>
              <p className="text-lg font-semibold text-[rgb(var(--text))]">{formatPrice(subtotal)}</p>
            </div>

            <button
              type="button"
              onClick={() => goToStep(2)}
              className="bg-lime-400 hover:bg-lime-700 text-black px-5 py-3 rounded-xl font-medium flex items-center gap-2 transition"
            >
              {t("cart.continue")}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartClient;