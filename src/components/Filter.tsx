"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useT } from "@/i18n/t";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const t = useT();

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6">
      <span>{t("filter.sortBy")}:</span>
      <select
        name="sort"
        id="sort"
        className="ring-1 ring-gray-200 shadow-md p-1 rounded-sm"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="newest">{t("filter.newest")}</option>
        <option value="oldest">{t("filter.oldest")}</option>
        <option value="asc">{t("filter.priceLowHigh")}</option>
        <option value="desc">{t("filter.priceHighLow")}</option>
      </select>
    </div>
  );
};

export default Filter;