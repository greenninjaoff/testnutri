"use client";

import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import useCartStore from "@/stores/cartStore";
import useLangStore from "@/stores/langStore";
import { ShippingFormInputs } from "@/types";
import { ArrowRight, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { useT } from "@/i18n/t";
import { catalog } from "@/data/products";

const CartClient = () => {
  const t = useT();
  const { lang } = useLangStore();

  const searchParams = useSearchParams();
  const router = useRouter();
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();

  const activeStep = parseInt(searchParams.get("step") || "1", 10);

  const { cart, removeFromCart } = useCartStore();

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
    // If name looks like "Base - Flavor, 300g" -> take Flavor
    let flavor = "";
    if (localizedName.includes(" - ")) {
      flavor = localizedName.split(" - ")[1] || "";
    } else {
      flavor = fallbackFlavorKey ? fallbackFlavorKey.replaceAll("_", " ") : "";
    }

    // remove weight if it's inside flavor part
    if (netWeight) {
      flavor = flavor.replaceAll(netWeight, "").replaceAll(",", "").trim();
    }

    return flavor.trim();
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      <h1 className="text-2xl font-medium">{t("cart.title")}</h1>

      {/* STEPS */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            className={`flex items-center gap-2 border-b-2 pb-4 ${step.id === activeStep ? "border-gray-800" : "border-gray-200"
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
      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* LEFT */}
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {activeStep === 1 ? (
            cart.length ? (
              cart.map((item) => {
                // ✅ LOOKUP PRODUCT + VARIANT by productId + sku
                const product = catalog.find((p) => p.id === item.productId);
                const variant = product?.variants.find((v) => v.sku === item.sku);

                // ✅ Localized name (fallback to stored name)
                const localizedName =
                  variant?.i18n?.[lang]?.name ||
                  variant?.i18n?.en?.name || // optional fallback
                  item.name;

                // ✅ weight + image from variant if available
                const displayWeight = variant?.netWeight || item.netWeight || "";
                const imageSrc = variant?.image || item.image || "/placeholder.png";

                // ✅ Localized flavor label (best effort)
                const flavorLabel = variant?.flavorKey
                  ? getFlavorLabel(localizedName, displayWeight, variant.flavorKey)
                  : item.flavorKey
                    ? item.flavorKey.replaceAll("_", " ")
                    : "";

                return (
                  <div
                    className="flex items-center justify-between"
                    key={`${item.productId}-${item.sku}`}
                  >
                    {/* IMAGE + DETAILS */}
                    <div className="flex gap-8">
                      <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                        <Image
                          src={imageSrc}
                          alt={localizedName}
                          fill
                          className="object-contain"
                        />
                      </div>

                      <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-1">
                          <p className="text-sm font-medium">{localizedName}</p>

                          <p className="text-xs text-gray-500">
                            {t("cart.item.qty")}: {item.quantity}
                          </p>

                          {displayWeight && (
                            <p className="text-xs text-gray-500">
                              {t("cart.item.weight")}: {displayWeight}
                            </p>
                          )}

                          {flavorLabel && (
                            <p className="text-xs text-gray-500">
                              {t("cart.item.flavor")}: {flavorLabel}
                            </p>
                          )}
                        </div>

                        <p className="font-medium">${item.price.toFixed(2)}</p>
                      </div>
                    </div>

                    {/* DELETE */}
                    <button
                      onClick={() =>
                        removeFromCart({ productId: item.productId, sku: item.sku })
                      }
                      className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer"
                      aria-label="Remove"
                      title="Remove"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                );
              })
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

        {/* RIGHT */}
        <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
          <h2 className="font-semibold">{t("cart.details")}</h2>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">{t("cart.subtotal")}</p>
              <p className="font-medium">${subtotal.toFixed(2)}</p>
            </div>

            <div className="flex justify-between text-sm">
              <p className="text-gray-500">{t("cart.discount")}(10%)</p>
              <p className="font-medium">$ 10</p>
            </div>

            <div className="flex justify-between text-sm">
              <p className="text-gray-500">{t("cart.shippingFee")}</p>
              <p className="font-medium">$10</p>
            </div>

            <hr className="border-gray-200" />

            <div className="flex justify-between">
              <p className="text-gray-800 font-semibold">{t("cart.total")}</p>
              <p className="font-medium">${subtotal.toFixed(2)}</p>
            </div>
          </div>

          {activeStep === 1 && (
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
            >
              {t("cart.continue")}
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartClient;