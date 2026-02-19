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

    return {
        name: v?.name || product.baseName,
        description: v?.description || "",
        ingredients: v?.ingredients || "",
    };
}