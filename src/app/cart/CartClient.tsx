"use client";

import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import useCartStore from "@/stores/cartStore";
import useLangStore from "@/stores/langStore";
import { ShippingFormInputs } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useT } from "@/i18n/t";
import { catalog } from "@/data/products";
import { formatPrice } from "@/lib/formatPrice";

const CartClient = () => {
  const t = useT();
  const { lang } = useLangStore();

  const searchParams = useSearchParams();
  const router = useRouter();
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();

  const activeStep = parseInt(searchParams.get("step") || "1", 10);

  const { cart, removeFromCart, updateQuantity } = useCartStore();

  const steps = useMemo(
    () => [
      { id: 1, title: t("cart.steps.cart") },
      { id: 2, title: t("cart.steps.shipping") },
      { id: 3, title: t("cart.steps.payment") },
    ],
    [t]
  );

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Helper: best-effort flavor label extraction from localized name
  const getFlavorLabel = (
    localizedName: string,
    netWeight?: string,
    fallbackFlavorKey?: string
  ) => {
    let flavor = "";
    if (localizedName.includes(" - ")) {
      flavor = localizedName.split(" - ")[1] || "";
    } else {
      flavor = fallbackFlavorKey ? fallbackFlavorKey.replaceAll("_", " ") : "";
    }

    if (netWeight) {
      flavor = flavor.replaceAll(netWeight, "").replaceAll(",", "").trim();
    }

    return flavor.trim();
  };

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

  const goToStep = (step: number) => router.push(`/cart?step=${step}`, { scroll: false });

  const stepButtonText =
    activeStep === 1 ? t("cart.continue") : activeStep === 2 ? t("cart.continue") : t("cart.continue");

  return (
    <div className="mt-6 lg:mt-12">
      {/* MOBILE HEADER (cart step only) */}
      <div className="lg:hidden px-4">
        <h1 className="text-xl font-semibold">{t("cart.title")}</h1>
        <p className="text-xs text-gray-500 mt-1">
          {cart.length ? `${cart.length} item(s)` : t("cart.empty")}
        </p>
      </div>

      {/* STEPS (kept, but looks nicer on mobile) */}
      <div className="mt-6 flex flex-col lg:flex-row items-center gap-6 lg:gap-16 px-4 lg:px-0">
        {steps.map((step) => (
          <div
            className={`flex items-center gap-2 border-b-2 pb-3 ${step.id === activeStep ? "border-gray-800" : "border-gray-200"
              }`}
            key={step.id}
          >
            <div
              className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${step.id === activeStep ? "bg-gray-800" : "bg-gray-400"
                }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${step.id === activeStep ? "text-gray-800" : "text-gray-400"
                }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16 mt-6 px-4 lg:px-0">
        {/* LEFT */}
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-4 lg:p-8 rounded-lg flex flex-col gap-4 lg:gap-8">
          {activeStep === 1 ? (
            cart.length ? (
              <div className="flex flex-col">
                {cart.map((item, idx) => {
                  const product = catalog.find((p) => p.id === item.productId);
                  const variant = product?.variants.find((v) => v.sku === item.sku);

                  const localizedName =
                    variant?.i18n?.[lang]?.name || variant?.i18n?.en?.name || item.name;

                  const displayWeight = variant?.netWeight || item.netWeight || "";
                  const imageSrc = variant?.image || item.image || "/placeholder.png";

                  const flavorLabel = variant?.flavorKey
                    ? getFlavorLabel(localizedName, displayWeight, variant.flavorKey)
                    : item.flavorKey
                      ? item.flavorKey.replaceAll("_", " ")
                      : "";

                  return (
                    <div key={`${item.productId}-${item.sku}`}>
                      {/* KFC-ish row */}
                      <div className="flex items-center justify-between gap-4 py-4">
                        {/* LEFT: image + text */}
                        <div className="flex items-center gap-4 min-w-0">
                          <div className="relative w-16 h-16 lg:w-24 lg:h-24 bg-gray-50 rounded-xl overflow-hidden shrink-0">
                            <Image src={imageSrc} alt={localizedName} fill className="object-contain p-2" />
                          </div>

                          <div className="min-w-0">
                            <p className="text-sm lg:text-base font-medium truncate">
                              {localizedName}
                            </p>

                            <div className="mt-1 flex flex-wrap gap-x-2 gap-y-1 text-xs text-gray-500">
                              {displayWeight && <span>{displayWeight}</span>}
                              {displayWeight && flavorLabel && <span>•</span>}
                              {flavorLabel && <span className="truncate">{flavorLabel}</span>}
                            </div>

                            <p className="mt-2 text-sm lg:text-base font-semibold">
                              {formatPrice(item.price)} sum
                            </p>
                          </div>
                        </div>

                        {/* RIGHT: qty control (no Qty label) */}
                        <div className="shrink-0">
                          <div className="flex items-center bg-gray-100 rounded-xl overflow-hidden">
                            <button
                              type="button"
                              onClick={() => decQty(item.productId, item.sku, item.quantity)}
                              className="w-10 h-10 flex items-center justify-center text-lg hover:bg-gray-200 transition"
                              aria-label="Decrease quantity"
                              title="Decrease"
                            >
                              –
                            </button>

                            <div className="w-10 h-10 flex items-center justify-center text-sm font-medium">
                              {item.quantity}
                            </div>

                            <button
                              type="button"
                              onClick={() => incQty(item.productId, item.sku, item.quantity)}
                              className="w-10 h-10 flex items-center justify-center text-lg hover:bg-gray-200 transition"
                              aria-label="Increase quantity"
                              title="Increase"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* divider */}
                      {idx !== cart.length - 1 && <hr className="border-gray-200" />}
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-gray-500">{t("cart.empty")}</p>
            )
          ) : activeStep === 2 ? (
            <ShippingForm setShippingForm={setShippingForm} />
          ) : activeStep === 3 && shippingForm ? (
            <PaymentForm />
          ) : (
            <p className="text-sm text-gray-500">{t("cart.fillShipping")}</p>
          )}
        </div>

        {/* RIGHT (desktop summary) */}
        <div className="hidden lg:flex w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex-col gap-8 h-max">
          <h2 className="font-semibold">{t("cart.details")}</h2>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">{t("cart.subtotal")}</p>
              <p className="font-medium">{formatPrice(subtotal)} sum</p>
            </div>

            <div className="flex justify-between text-sm">
              <p className="text-gray-500">{t("cart.discount")}(10%)</p>
              <p className="font-medium">{formatPrice(subtotal * 0.1)} sum</p>
            </div>

            <div className="flex justify-between text-sm">
              <p className="text-gray-500">{t("cart.shippingFee")}</p>
              <p className="font-medium">{formatPrice(10000)} sum</p>
            </div>

            <hr className="border-gray-200" />

            <div className="flex justify-between">
              <p className="text-gray-800 font-semibold">{t("cart.total")}</p>
              <p className="font-medium">{formatPrice(subtotal)} sum</p>
            </div>
          </div>

          {activeStep === 1 && (
            <button
              onClick={() => goToStep(2)}
              className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
            >
              {t("cart.continue")}
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* MOBILE FIXED BOTTOM BAR */}
      <div className="lg:hidden h-24" />
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">{t("cart.total")}</p>
            <p className="text-lg font-semibold">{subtotal}</p>
          </div>

          {activeStep === 1 ? (
            <button
              onClick={() => goToStep(2)}
              className="bg-gray-800 text-white px-5 py-3 rounded-xl font-medium flex items-center gap-2"
            >
              {t("cart.continue")}
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : activeStep === 2 ? (
            <button
              onClick={() => goToStep(3)}
              className="bg-gray-800 text-white px-5 py-3 rounded-xl font-medium flex items-center gap-2"
            >
              {stepButtonText}
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => { }}
              className="bg-gray-300 text-white px-5 py-3 rounded-xl font-medium cursor-not-allowed"
              disabled
            >
              {t("cart.continue")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartClient;
