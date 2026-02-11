import ProductInteraction from "@/components/ProductInteraction";
import { ProductType } from "@/types";
import Image from "next/image";

// TEMPORARY
const product: ProductType = {
  id: 1,
  name: "Befit Nutrition Double Chocolate",
  shortDescription:
    "High-protein bar for daily energy and recovery.",
  description:
    "High-protein bar for daily energy and recovery.",
  price: 24.000,
  sizes: ["40"],
  colors: ["Double_Chocolate", "Strawberries_and_Cream", "Pistachio_Ice_Cream", "Raspberry_and_Cranberry", "DarkChoco_and_MilkCream"],
  images: {
    Double_Chocolate: "/products/jdc.png",
    Strawberries_and_Cream: "/products/jsac.png",
    Pistachio_Ice_Cream: "/products/jrac.png",
    Raspberry_and_Cranberry: "/products/jdcamc.png",
    DarkChoco_and_MilkCream: "/products/jpic.png",
  },
}

const ProductPage = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { color: string; sizes: string };
}) => {
  const { color, sizes } = searchParams;

  const selectedSize = sizes ?? product.sizes[0];
  const selectedColor = color ?? product.colors[0];

  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">{product.price.toFixed(3)}</h2>
        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
        {/* CARD INFO */}
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="klarna"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/cards.png"
            alt="cards"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/stripe.png"
            alt="stripe"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>
        <p className="text-gray-500 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black">Terms & Conditions</span>{" "}
          and <span className="underline hover:text-black">Privacy Policy</span>
          . You authorize us to charge your selected payment method for the
          total amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-black">Refund Policies</span>.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;