import { catalog } from "@/data/products";
import { ProductType, ProductVariant } from "@/types";

export type ProductListing = {
  product: ProductType;
  variant: ProductVariant;
};

export const productListings: ProductListing[] = catalog.flatMap((product) =>
  product.variants.map((variant) => ({
    product,
    variant,
  }))
);
