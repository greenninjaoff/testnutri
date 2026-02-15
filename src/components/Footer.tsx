"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/i18n/t";

const Footer = () => {
  const t = useT();

  return (
    <div className="hidden md:flex mt-16 flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg">

      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Nutri" width={36} height={36} />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            Befit Nutrition
          </p>
        </Link>
        <p className="text-sm text-gray-400">© 2025 Befit.</p>
        <p className="text-sm text-gray-400">{t("footer.rights")}</p>
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">{t("footer.links")}</p>
        <Link href="/">{t("footer.homepage")}</Link>
        <Link href="/">{t("footer.contact")}</Link>
        <Link href="/">{t("footer.terms")}</Link>
        <Link href="/">{t("footer.privacy")}</Link>
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">{t("footer.links")}</p>
        <Link href="/">{t("footer.allProducts")}</Link>
        <Link href="/">{t("footer.newArrivals")}</Link>
        <Link href="/">{t("footer.bestSellers")}</Link>
        <Link href="/">{t("footer.sale")}</Link>
      </div>

      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">{t("footer.links")}</p>
        <Link href="/">{t("footer.about")}</Link>
        <Link href="/">{t("footer.contact")}</Link>
        <Link href="/">{t("footer.blog")}</Link>
        <Link href="/">{t("footer.affiliate")}</Link>
      </div>
    </div>
  );
};

export default Footer;