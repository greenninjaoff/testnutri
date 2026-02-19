import type { Lang } from "@/stores/langStore";
import type { ProductType, ProductVariant } from "@/types";

export function getVariantTextServer(
  product: ProductType,
  variant: ProductVariant | undefined,
  lang: Lang
) {
  const v = variant?.i18n?.[lang];

  return {
    name: v?.name || product.baseName,
    description: v?.description || "",
    ingredients: v?.ingredients || "",
  };
}