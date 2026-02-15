"use client";

import Categories from "./Categories";
import Filter from "./Filter";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { productListings } from "@/data/products/listings";
import { useT } from "@/i18n/t";

const ProductList = ({
  category,
  params,
}: {
  category?: string;
  params: "homepage" | "products";
}) => {
  const t = useT();

  const listings =
    category && category !== "all"
      ? productListings.filter(({ product }) =>
          product.category.toLowerCase().includes(category.toLowerCase())
        )
      : productListings;

  return (
    <div className="w-full">
      <Categories />
      {params === "products" && <Filter />}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {listings.map(({ product, variant }) => (
          <ProductCard
            key={`${product.id}-${variant.sku}`}
            product={product}
            variant={variant}
          />
        ))}
      </div>

      {/* Usually only show this on homepage */}
      {params === "homepage" && (
        <Link
          href={category ? `/products/?category=${category}` : "/products"}
          className="flex justify-end mt-4 underline text-sm text-gray-500"
        >
          {t("common.viewAll")}
        </Link>
      )}
    </div>
  );
};

export default ProductList;