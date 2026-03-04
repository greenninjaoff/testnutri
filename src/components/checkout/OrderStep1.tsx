"use client";

import useLangStore from "@/stores/langStore";
import { getVariantText } from "@/lib/productI18n";
import { formatPrice } from "@/lib/formatPrice";
import Image from "next/image";

type CartItem = {
    productId: number;
    sku: string;
    quantity: number;
    name: string;
    price: number;
    image?: string | null;
    netWeight?: string | null;
    flavorLabel?: string | null;
    typeName?: string | null;
};

type CatalogProduct = {
    id: number;
    variants: any[];
};

export default function CartStep1({
    t,
    cart,
    catalog,
    onInc,
    onDec,
}: {
    t: (key: string) => string;
    cart: CartItem[];
    catalog: CatalogProduct[];
    onInc: (productId: number, sku: string, currentQty: number) => void;
    onDec: (productId: number, sku: string, currentQty: number) => void;
}) {
    const { lang } = useLangStore();

    if (!cart.length) {
        return <p className="text-sm text-[rgb(var(--muted))]">{t("cart.empty")}</p>;
    }

    return (
        <>
            {cart.map((item, idx) => {
                const product = catalog.find((p) => p.id === item.productId) as any;
                const variant = product?.variants?.find((v: any) => v.sku === item.sku);

                // If catalog missing for some reason, fallback to stored cart fields
                if (!product || !variant) {
                    const fallbackTitle = (item as any).typeName || item.name || "";
                    const fallbackInfo = [item.netWeight, (item as any).flavorLabel].filter(Boolean).join(" • ");
                    const fallbackImg = item.image || "/placeholder.png";

                    return (
                        <div key={`${item.productId}-${item.sku}`}>
                            <div className="flex items-center gap-4">
                                <div className="relative w-16 h-16 bg-[rgb(var(--surface))] rounded-lg shrink-0">
                                    <Image
                                        src={fallbackImg}
                                        alt={fallbackTitle || "Product"}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium truncate text-[rgb(var(--text))]">{fallbackTitle}</p>

                                    {fallbackInfo ? (
                                        <p className="text-xs text-[rgb(var(--muted))] mt-1 truncate">{fallbackInfo}</p>
                                    ) : null}

                                    <p className="text-sm font-semibold mt-1 text-[rgb(var(--text))]">
                                        {formatPrice(item.price)}
                                    </p>
                                </div>

                                <div className="flex items-center bg-[rgb(var(--surface))] rounded-lg overflow-hidden">
                                    <button
                                        type="button"
                                        onClick={() => onDec(item.productId, item.sku, item.quantity)}
                                        className="w-8 h-8 flex items-center justify-center
                      transition-all duration-200 ease-out
                      hover:bg-[rgb(var(--btn-bg-hover))] hover:text-[rgb(var(--btn-text))]
                      active:bg-[rgb(var(--btn-bg-hover))] active:text-[rgb(var(--btn-text))]
                      active:scale-95"
                                        aria-label="Decrease quantity"
                                    >
                                        –
                                    </button>

                                    <div className="w-8 text-center text-sm font-medium text-[rgb(var(--text))] tabular-nums">
                                        {item.quantity}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => onInc(item.productId, item.sku, item.quantity)}
                                        className="w-8 h-8 flex items-center justify-center
                      transition-all duration-200 ease-out
                      hover:bg-[rgb(var(--btn-bg-hover))] hover:text-[rgb(var(--btn-text))]
                      active:bg-[rgb(var(--btn-bg-hover))] active:text-[rgb(var(--btn-text))]
                      active:scale-95"
                                        aria-label="Increase quantity"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {idx !== cart.length - 1 && <hr className="my-4 border-[rgb(var(--border))]" />}
                        </div>
                    );
                }

                // ✅ Same i18n logic as ProductCard
                const { name, typeName, flavorLabel } = getVariantText(product, variant, lang);

                const imageSrc = variant.image || item.image || "/placeholder.png";
                const title = typeName || name || item.name || "";
                const bottomInfo = [flavorLabel, variant.netWeight].filter(Boolean).join(" • ");

                return (
                    <div key={`${item.productId}-${item.sku}`}>
                        <div className="flex items-center gap-4">
                            {/* IMAGE */}
                            <div className="relative w-16 h-16 bg-[rgb(var(--surface))] rounded-lg shrink-0">
                                <Image src={imageSrc} alt={title || "Product"} fill className="object-contain p-2" />
                            </div>

                            {/* TEXT */}
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate text-[rgb(var(--text))]">{title}</p>

                                {bottomInfo ? (
                                    <p className="text-xs text-[rgb(var(--muted))] mt-1 truncate">{bottomInfo}</p>
                                ) : null}

                                <p className="text-sm font-semibold mt-1 text-[rgb(var(--text))]">
                                    {formatPrice(item.price)}
                                </p>
                            </div>

                            {/* QTY */}
                            <div className="flex items-center bg-[rgb(var(--surface))] rounded-lg overflow-hidden">
                                <button
                                    type="button"
                                    onClick={() => onDec(item.productId, item.sku, item.quantity)}
                                    className="w-8 h-8 flex items-center justify-center
                    transition-all duration-200 ease-out
                    hover:bg-[rgb(var(--btn-bg-hover))] hover:text-[rgb(var(--btn-text))]
                    active:bg-[rgb(var(--btn-bg-hover))] active:text-[rgb(var(--btn-text))]
                    active:scale-95"
                                    aria-label="Decrease quantity"
                                >
                                    –
                                </button>

                                <div className="w-8 text-center text-sm font-medium text-[rgb(var(--text))] tabular-nums">
                                    {item.quantity}
                                </div>

                                <button
                                    type="button"
                                    onClick={() => onInc(item.productId, item.sku, item.quantity)}
                                    className="w-8 h-8 flex items-center justify-center
                    transition-all duration-200 ease-out
                    hover:bg-[rgb(var(--btn-bg-hover))] hover:text-[rgb(var(--btn-text))]
                    active:bg-[rgb(var(--btn-bg-hover))] active:text-[rgb(var(--btn-text))]
                    active:scale-95"
                                    aria-label="Increase quantity"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {idx !== cart.length - 1 && <hr className="my-4 border-[rgb(var(--border))]" />}
                    </div>
                );
            })}
        </>
    );
}