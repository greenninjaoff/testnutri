"use client";

import { useRef } from "react";
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

export default function Categories() {
  const t = useT();

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category") || "all";

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;
    isDown.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
  };

  const stopDrag = () => {
    isDown.current = false;
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el || !isDown.current) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = x - startX.current;
    el.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="bg-[rgb(var(--surface))] p-2 rounded-lg mb-4 text-sm mt-4">
      <div
        ref={scrollerRef}
        onMouseDown={onMouseDown}
        onMouseLeave={stopDrag}
        onMouseUp={stopDrag}
        onMouseMove={onMouseMove}
        className="flex gap-2 overflow-x-auto whitespace-nowrap no-scrollbar select-none"
      >
        {categories.map((category) => {
          const isActive = category.slug === selectedCategory;

          return (
            <button
              type="button"
              key={category.slug}
              onClick={() => handleChange(category.slug)}
              className={
                "flex-shrink-0 flex items-center justify-center gap-2 px-4 py-2 rounded-md " +
                "transition-colors duration-200 " +
                (isActive
                  ? "bg-[rgb(var(--btn-bg))] active:bg-[rgb(var(--btn-bg-hover))] text-[rgb(var(--btn-text))]"
                  : "text-[rgb(var(--muted))] bg-[rgb(var(--card))] hover:text-[rgb(var(--btn-text))] hover:bg-[rgb(var(--btn-bg-hover))] active:bg-[rgb(var(--btn-bg-hover))]")
              }
            >
              {category.icon}
              {t(category.labelKey)}
            </button>
          );
        })}
      </div>
    </div>
  );
}