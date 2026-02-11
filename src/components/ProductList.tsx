import { ProductsType } from "@/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";

// TEMPORARY
const products: ProductsType = [
  {
    id: 1,
    name: "Befit Nutrition Double Chocolate",
    shortDescription:
      "High-protein bar for daily energy and recovery.",
    description:
      "High-protein bar for daily energy and recovery.",
    price: 24.000,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["Double_Chocolate", "Strawberries_and_Cream", "Pistachio_Ice_Cream", "Raspberry_and_Cranberry", "DarkChoco_and_MilkCream"],
    images: {
      Double_Chocolate: "/products/jdc.png",
      Strawberries_and_Cream: "/products/jsac.png",
      Pistachio_Ice_Cream: "/products/jrac.png",
      Raspberry_and_Cranberry: "/products/jdcamc.png",
      DarkChoco_and_MilkCream: "/products/jpic.png",
    },
  },
  {
    id: 1,
    name: "Befit Nutrition Strawberries & Cream",
    shortDescription:
      "High-protein bar for daily energy and recovery.",
    description:
      "High-protein bar for daily energy and recovery.",
    price: 24.000,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["Strawberries_and_Cream", "Double_Chocolate", "Pistachio_Ice_Cream", "Raspberry_and_Cranberry", "DarkChoco_and_MilkCream"],
    images: {
      Strawberries_and_Cream: "/products/jsac.png",
      Double_Chocolate: "/products/jdc.png",
      Pistachio_Ice_Cream: "/products/jrac.png",
      Raspberry_and_Cranberry: "/products/jdcamc.png",
      DarkChoco_and_MilkCream: "/products/jpic.png",
    },
  },
  {
    id: 1,
    name: "Befit Nutrition Pistachio Ice Cream",
    shortDescription:
      "High-protein bar for daily energy and recovery.",
    description:
      "High-protein bar for daily energy and recovery.",
    price: 24.000,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["Pistachio_Ice_Cream", "Double_Chocolate", "Strawberries_and_Cream", "Raspberry_and_Cranberry", "DarkChoco_and_MilkCream"],
    images: {
      Pistachio_Ice_Cream: "/products/jrac.png",
      Double_Chocolate: "/products/jdc.png",
      Strawberries_and_Cream: "/products/jsac.png",
      Raspberry_and_Cranberry: "/products/jdcamc.png",
      DarkChoco_and_MilkCream: "/products/jpic.png",
    },
  },
  {
    id: 1,
    name: "Befit Nutrition Raspberry & Cranberry",
    shortDescription:
      "High-protein bar for daily energy and recovery.",
    description:
      "High-protein bar for daily energy and recovery.",
    price: 24.000,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["Raspberry_and_Cranberry", "Double_Chocolate", "Strawberries_and_Cream", "Pistachio_Ice_Cream", "DarkChoco_and_MilkCream"],
    images: {
      Raspberry_and_Cranberry: "/products/jdcamc.png",
      Double_Chocolate: "/products/jdc.png",
      Strawberries_and_Cream: "/products/jsac.png",
      Pistachio_Ice_Cream: "/products/jrac.png",
      DarkChoco_and_MilkCream: "/products/jpic.png",
    },
  },
  {
    id: 1,
    name: "Befit Nutrition DarkChoco & MilkCream",
    shortDescription:
      "High-protein bar for daily energy and recovery.",
    description:
      "High-protein bar for daily energy and recovery.",
    price: 24.000,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["DarkChoco_and_MilkCream","Double_Chocolate", "Strawberries_and_Cream", "Pistachio_Ice_Cream", "Raspberry_and_Cranberry"],
    images: {
      DarkChoco_and_MilkCream: "/products/jpic.png",
      Double_Chocolate: "/products/jdc.png",
      Strawberries_and_Cream: "/products/jsac.png",
      Pistachio_Ice_Cream: "/products/jrac.png",
      Raspberry_and_Cranberry: "/products/jdcamc.png",
    },
  },
  
];

const ProductList = ({ category,params }: { category: string, params:"homepage" | "products" }) => {
  return (
    <div className="w-full">
      <Categories />
      {params === "products" && <Filter/>}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link
        href={category ? `/products/?category=${category}` : "/products"}
        className="flex justify-end mt-4 underline text-sm text-gray-500"
      >
        View all products
      </Link>
    </div>
  );
};

export default ProductList;
