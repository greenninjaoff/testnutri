"use client";

import useCartStore from "@/stores/cartStore";
import useLangStore from "@/stores/langStore";
import { useT } from "@/i18n/t";
import { getVariantText } from "@/lib/productI18n";

import { ProductType, ProductVariant } from "@/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { toast } from "react-toastify";

const ProductCard = ({
  product,
  variant,
}: {
  product: ProductType;
  variant: ProductVariant;
}) => {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCartStore();

  const { lang } = useLangStore();
  const t = useT();

  const { name: localizedName, tagline } = getVariantText(product, variant, lang);

  const prettyFlavor = (variant.flavorKey || "").replaceAll("_", " ").trim();

  const name =
    prettyFlavor &&
      localizedName &&
      !localizedName.toLowerCase().includes(prettyFlavor.toLowerCase())
      ? `${localizedName} - ${prettyFlavor}${variant.netWeight ? `, ${variant.netWeight}` : ""}`
      : `${localizedName}${variant.netWeight ? `, ${variant.netWeight}` : ""}`;

  const shortDescription = tagline || "";
  const price = Number(variant.price ?? 0);
  const imageSrc = variant.image || "/placeholder.png";

  const cartItem = useMemo(
    () => cart.find((c) => c.productId === product.id && c.sku === variant.sku),
    [cart, product.id, variant.sku]
  );

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      sku: variant.sku,
      quantity: 1,

      name,
      price,
      image: variant.image,
      netWeight: variant.netWeight,
      flavorKey: variant.flavorKey,

      category: product.category,
      type: product.type,
      series: product.series,
    });

    toast.success(t("common.addedToCart") ?? "Added to cart");
  };

  const inc = () => {
    if (!cartItem) return;
    updateQuantity(
      { productId: product.id, sku: variant.sku },
      cartItem.quantity + 1
    );
  };

  const dec = () => {
    if (!cartItem) return;

    if (cartItem.quantity <= 1) {
      removeFromCart({ productId: product.id, sku: variant.sku });
      return;
    }

    updateQuantity(
      { productId: product.id, sku: variant.sku },
      cartItem.quantity - 1
    );
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden flex flex-col h-[370px]">
      {/* IMAGE */}
      <Link
        href={`/products/${product.id}?flavor=${encodeURIComponent(
          variant.flavorKey || ""
        )}&weight=${encodeURIComponent(variant.netWeight || "")}`}
      >
        <div className="relative h-[180px] w-full bg-gray-50">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-contain p-2 hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>

      {/* DETAILS */}
      <div className="flex flex-col gap-3 p-4 flex-1">
        <h1 className="font-medium truncate h-[24px]">{name}</h1>

        {shortDescription ? (
          <p className="text-sm text-gray-500 line-clamp-2 h-[40px] overflow-hidden">
            {shortDescription}
          </p>
        ) : (
          <div className="h-[40px]" />
        )}

        {/* Flavor + weight pills */}
        <div className="flex gap-2 text-xs overflow-hidden whitespace-nowrap h-[28px]">
          {variant.flavorKey && (
            <span className="px-2 py-1 rounded bg-gray-100 text-gray-600">
              {variant.flavorKey.replaceAll("_", " ")}
            </span>
          )}
          {variant.netWeight && (
            <span className="px-2 py-1 rounded bg-gray-100 text-gray-600">
              {variant.netWeight}
            </span>
          )}
        </div>

        {/* PRICE + CART */}
        <div className="mt-auto flex items-center justify-between">
          <p className="font-medium">{price.toFixed(3)}</p>

          {!cartItem ? (
            <button
              onClick={handleAddToCart}
              className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-lime-400 transition-all duration-300 flex items-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              {t("common.add")}
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={dec}
                className="w-8 h-8 flex items-center justify-center ring-1 ring-gray-200 shadow-lg rounded-md hover:text-white hover:bg-lime-400 transition-all duration-300"
              >
                <Minus className="w-4 h-4" />
              </button>

              <span className="w-6 text-center text-sm">{cartItem.quantity}</span>

              <button
                onClick={inc}
                className="w-8 h-8 flex items-center justify-center ring-1 ring-gray-200 shadow-lg rounded-md hover:text-white hover:bg-lime-400 transition-all duration-300"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;