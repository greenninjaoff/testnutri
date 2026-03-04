import { Lang } from "@/stores/langStore";
import { ProductType, ProductVariant } from "@/types";

export function pickLang<T extends Record<string, any>>(
    obj: T | undefined,
    lang: Lang
) {
    return (obj?.[lang] ?? obj?.en ?? obj?.ru ?? obj?.uz) as any;
}

export function getVariantText(
    product: ProductType,
    variant: ProductVariant,
    lang: Lang
) {
    const v = pickLang(variant.i18n, lang);
    const vEn = variant.i18n?.en;

    const name = v?.name || vEn?.name || product.baseName;

    const description = v?.description || vEn?.description || "";
    const ingredients = v?.ingredients || vEn?.ingredients || "";

    // ✅ NEW: typeName fallback chain
    const typeName =
        v?.typeName ||
        vEn?.typeName ||
        product.type ||   // fallback to base product type
        product.baseName;

    // ✅ NEW: flavorLabel fallback chain
    const flavorLabel =
        v?.flavorLabel ||
        vEn?.flavorLabel ||
        (variant.flavorKey
            ? variant.flavorKey.replaceAll("_", " ")
            : "");

    return {
        name,
        description,
        ingredients,
        typeName,
        flavorLabel,
    };
}