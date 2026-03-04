import type { Lang } from "@/stores/langStore";
import type { ProductType, ProductVariant } from "@/types";

export function getVariantTextServer(
  product: ProductType,
  variant: ProductVariant | undefined,
  lang: Lang
) {
  const v = variant?.i18n?.[lang];
  const vEn = variant?.i18n?.en;

  const name = v?.name || vEn?.name || product.baseName;

  const description = v?.description || vEn?.description || "";
  const ingredients = v?.ingredients || vEn?.ingredients || "";

  // ✅ NEW
  const typeName = v?.typeName || vEn?.typeName || product.type || product.baseName;

  // ✅ NEW
  const flavorLabel =
    v?.flavorLabel ||
    vEn?.flavorLabel ||
    (variant?.flavorKey ? variant.flavorKey.replaceAll("_", " ") : "");

  return {
    name,
    description,
    ingredients,
    typeName,
    flavorLabel,
  };
}