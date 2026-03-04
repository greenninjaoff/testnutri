import ProductInteraction from "@/components/ProductInteraction";
import { catalog } from "@/data/products";
import { ProductType } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getServerLang } from "@/i18n/serverLang";
import { getVariantTextServer } from "@/lib/productI18nServer";
import { messages } from "@/i18n/messages";
import { formatPrice } from "@/lib/formatPrice";

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ flavor?: string; weight?: string }>;
};

export default async function ProductPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const sp = await searchParams;

  const lang = await getServerLang();
  const t = (key: string) => {
    const obj: any = messages[lang];
    return key.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), obj) ?? key;
  };

  const productId = Number(id);
  const product: ProductType | undefined = catalog.find((p) => p.id === productId);
  if (!product) return notFound();

  const urlFlavor = sp.flavor ?? "";
  const urlWeight = sp.weight ?? "";

  const selectedVariant =
    product.variants.find((v) => v.flavorKey === urlFlavor && v.netWeight === urlWeight) ||
    product.variants.find((v) => v.flavorKey === urlFlavor) ||
    product.variants.find((v) => v.netWeight === urlWeight) ||
    product.variants[0];

  const { name, description } = getVariantTextServer(product, selectedVariant, lang);

  const price = Number(selectedVariant?.price ?? 0);
  const imageSrc = selectedVariant?.image || "/placeholder.png";

  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image src={imageSrc} alt={name} fill className="object-contain rounded-md" />
      </div>

      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium text-[rgb(var(--text))]">{name}</h1>
        {description && <p className="text-[rgb(var(--muted))]">{description}</p>}

        {/* ✅ formatted price */}
        <h2 className="text-2xl font-semibold text-[rgb(var(--text))]">{formatPrice(price)}</h2>

        {/* client component */}
        <ProductInteraction product={product} />
      </div>
    </div>
  );
}