"use client";

import { ShoppingBasket, Dumbbell, Pill, Flame, Zap, Apple } from "lucide-react";
import { useT } from "@/i18n/t";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  { labelKey: "categories.all", icon: <ShoppingBasket className="w-4 h-4" />, slug: "all" },
  { labelKey: "categories.proteinBars", icon: <Apple className="w-4 h-4" />, slug: "protein bars" },
  { labelKey: "categories.healthyBars", icon: <Apple className="w-4 h-4" />, slug: "healthy bars" },
  { labelKey: "categories.wpc", icon: <Dumbbell className="w-4 h-4" />, slug: "wpc" },
  { labelKey: "categories.wpcwpi", icon: <Dumbbell className="w-4 h-4" />, slug: "wpcwpi" },
  { labelKey: "categories.bcaa", icon: <Zap className="w-4 h-4" />, slug: "bcaa" },
  { labelKey: "categories.creatine", icon: <Flame className="w-4 h-4" />, slug: "creatine" },
  { labelKey: "categories.multivitamins", icon: <Pill className="w-4 h-4" />, slug: "multivitamins" },
  { labelKey: "categories.preworkout", icon: <Zap className="w-4 h-4" />, slug: "preworkout" },
];

const Categories = () => {
  const t = useT(); // ✅ hook must be inside component

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category") || "all";

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="bg-gray-100 p-2 rounded-lg mb-4 text-sm mt-4">
      <div className="flex gap-2 overflow-x-auto whitespace-nowrap no-scrollbar">
        {categories.map((category) => (
          <button
            type="button"
            key={category.slug}
            onClick={() => handleChange(category.slug)}
            className={`flex-shrink-0 flex items-center justify-center gap-2 cursor-pointer px-4 py-2 rounded-md transition ${category.slug === selectedCategory
                ? "bg-lime-400 text-white"
                : "text-gray-500 bg-white"
              }`}
          >
            {category.icon}
            {t(category.labelKey)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
