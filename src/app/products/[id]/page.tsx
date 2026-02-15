import ProductInteraction from "@/components/ProductInteraction";
import { catalog } from "@/data/products";
import { ProductType } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getServerLang } from "@/i18n/serverLang";
import { getVariantTextServer } from "@/lib/productI18nServer";
import { messages } from "@/i18n/messages";

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
        <h1 className="text-2xl font-medium">{name}</h1>
        {description && <p className="text-gray-500">{description}</p>}
        <h2 className="text-2xl font-semibold">{price.toFixed(3)}</h2>

        {/* client component */}
        <ProductInteraction product={product} />

        {/* CARD INFO */}
        <div className="flex items-center gap-2 mt-4">
          <Image src="/klarna.png" alt="klarna" width={50} height={25} className="rounded-md" />
          <Image src="/cards.png" alt="cards" width={50} height={25} className="rounded-md" />
          <Image src="/stripe.png" alt="stripe" width={50} height={25} className="rounded-md" />
        </div>

        {/* Localized policy text (simple version) */}
        <p className="text-gray-500 text-xs">
          {t("product.payNowText")}
          {" "}
          <span className="underline hover:text-black">{t("product.terms")}</span>{" "}
          {t("product.and")}{" "}
          <span className="underline hover:text-black">{t("product.privacy")}</span>.
        </p>
      </div>
    </div>
  );
}