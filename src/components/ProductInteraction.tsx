"use client";

import useCartStore from "@/stores/cartStore";
import useLangStore from "@/stores/langStore";
import { useT } from "@/i18n/t";
import { getVariantText } from "@/lib/productI18n";

import { ProductType } from "@/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";

const ProductInteraction = ({ product }: { product: ProductType }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCartStore();

  const { lang } = useLangStore();
  const t = useT();

  // URL params
  const urlWeight = searchParams.get("weight") || "";
  const urlFlavor = searchParams.get("flavor") || "";

  // defaults
  const defaultWeight = product.netWeightOptions?.[0] || "";
  const defaultFlavor =
    product.variants.find((v) => v.flavorKey)?.flavorKey ||
    product.variants[0]?.flavorKey ||
    "";

  // all available flavor keys
  const allFlavorKeys = useMemo(() => {
    const keys = new Set<string>();
    product.variants.forEach((v) => {
      if (v.flavorKey) keys.add(v.flavorKey);
    });
    return Array.from(keys);
  }, [product.variants]);

  // map flavor -> valid weights
  const flavorToWeights = useMemo(() => {
    const map = new Map<string, string[]>();

    product.variants.forEach((v) => {
      if (!v.flavorKey) return;
      if (!v.netWeight) return;

      const arr = map.get(v.flavorKey) || [];
      if (!arr.includes(v.netWeight)) arr.push(v.netWeight);
      map.set(v.flavorKey, arr);
    });

    return map;
  }, [product.variants]);

  // selected flavor (URL if valid)
  const selectedFlavorKey = allFlavorKeys.includes(urlFlavor)
    ? urlFlavor
    : defaultFlavor;

  // allowed weights for current flavor
  const allowedWeightsForFlavor =
    selectedFlavorKey && flavorToWeights.has(selectedFlavorKey)
      ? flavorToWeights.get(selectedFlavorKey) || []
      : product.netWeightOptions;

  // selected weight (URL if valid for current flavor)
  const selectedWeight = allowedWeightsForFlavor.includes(urlWeight)
    ? urlWeight
    : allowedWeightsForFlavor[0] || defaultWeight;

  // selected variant (must exist)
  const selectedVariant = useMemo(() => {
    const exact = product.variants.find(
      (v) =>
        (v.flavorKey ? v.flavorKey === selectedFlavorKey : true) &&
        (v.netWeight ? v.netWeight === selectedWeight : true)
    );
    if (exact) return exact;

    const byFlavor = product.variants.find((v) => v.flavorKey === selectedFlavorKey);
    if (byFlavor) return byFlavor;

    const byWeight = product.variants.find((v) => v.netWeight === selectedWeight);
    if (byWeight) return byWeight;

    return product.variants[0];
  }, [product.variants, selectedFlavorKey, selectedWeight]);

  const setParam = (key: "weight" | "flavor", value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // when changing flavor, auto-fix weight to a valid one if needed
  const setFlavor = (newFlavor: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("flavor", newFlavor);

    const allowed = flavorToWeights.get(newFlavor) || product.netWeightOptions;
    const currentWeight = params.get("weight") || "";

    if (allowed.length > 0 && !allowed.includes(currentWeight)) {
      params.set("weight", allowed[0]);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment") setQuantity((p) => p + 1);
    else setQuantity((p) => Math.max(1, p - 1));
  };

  const handleAddToCart = () => {
    if (!selectedVariant) {
      toast.error(t("common.variantNotFound"));
      return;
    }

    const { name } = getVariantText(product, selectedVariant, lang);

    addToCart({
      productId: product.id,
      sku: selectedVariant.sku,
      quantity,

      name,
      price: Number(selectedVariant.price ?? 0),
      image: selectedVariant.image,
      netWeight: selectedVariant.netWeight || selectedWeight,
      flavorKey: selectedVariant.flavorKey,

      category: product.category,
      type: product.type,
      series: product.series,
    });

    toast.success(t("common.addedToCart"));
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* NET WEIGHT */}
      {product.netWeightOptions.length > 0 && (
        <div className="flex flex-col gap-2 text-sm">
          <span className="text-gray-500">{t("common.netWeight")}</span>
          <div className="flex items-center gap-2 flex-wrap">
            {product.netWeightOptions.map((w) => {
              const disabled =
                allowedWeightsForFlavor.length > 0 &&
                !allowedWeightsForFlavor.includes(w);

              return (
                <button
                  type="button"
                  key={w}
                  disabled={disabled}
                  onClick={() => !disabled && setParam("weight", w)}
                  className={`px-3 py-2 rounded-md ring-1 transition ${selectedWeight === w
                      ? "bg-lime-400 text-white ring-lime-400"
                      : disabled
                        ? "bg-gray-100 text-gray-400 ring-gray-100 cursor-not-allowed"
                        : "bg-white text-gray-700 ring-gray-200 hover:bg-gray-50"
                    }`}
                >
                  {w}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* FLAVOR OPTIONS */}
      {allFlavorKeys.length > 0 && (
        <div className="flex flex-col gap-2 text-sm">
          <span className="text-gray-500">{t("common.flavor")}</span>
          <div className="flex items-center gap-2 flex-wrap">
            {allFlavorKeys.map((key) => {
              const v = product.variants.find((x) => x.flavorKey === key);
              const img = v?.image;

              return (
                <button
                  type="button"
                  key={key}
                  onClick={() => setFlavor(key)}
                  className={`border p-[2px] rounded-md ${selectedFlavorKey === key ? "border-gray-300" : "border-white"
                    }`}
                  title={key.replaceAll("_", " ")}
                >
                  {img ? (
                    <Image
                      src={img}
                      alt={key}
                      width={80}
                      height={60}
                      className="object-cover rounded"
                    />
                  ) : (
                    <div className="w-20 h-14 flex items-center justify-center text-xs text-gray-500 border rounded">
                      {key}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* QUANTITY */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-gray-500">{t("common.quantity")}</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center ring-1 ring-gray-200 shadow-lg rounded-md text-sm cursor-pointer hover:text-white hover:bg-lime-400 transition-all duration-300"
            onClick={() => handleQuantityChange("decrement")}
          >
            <Minus className="w-4 h-4" />
          </button>

          <span className="w-6 text-center">{quantity}</span>

          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center ring-1 ring-gray-200 shadow-lg rounded-md text-sm cursor-pointer hover:text-white hover:bg-lime-400 transition-all duration-300"
            onClick={() => handleQuantityChange("increment")}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ADD */}
      <button
        onClick={handleAddToCart}
        className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium"
      >
        <ShoppingCart className="w-4 h-4" />
        {t("common.addToCart")}
      </button>
    </div>
  );
};

export default ProductInteraction;