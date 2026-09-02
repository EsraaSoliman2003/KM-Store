"use client";

import { FiChevronLeft, FiChevronRight, FiZap } from "react-icons/fi";
import Timer from "./Timer";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useAppSelector } from "@/rtk/hooks";
import ProductsSwiper from "../ProductsSwiper/ProductsSwiper";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";

export default function FlashSales() {
  const t = useTranslations();
  const { sections } = useAppSelector((s) => s.home);
  const products = sections?.more_products ?? [];

  return (
    <section className="py-14">
      <div className="container">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="text-center lg:text-left">
            <h2 className="flex items-center justify-center gap-2 text-3xl font-bold text-[var(--text-primary)] sm:text-4xl lg:justify-start">
              <FiZap className="text-[var(--warning)]" />
              {t("flashSalesTitle")}
            </h2>

            <p className="mt-2 text-sm text-[var(--text-muted)]">
              {t("flashSalesSubtitle")}
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Timer />
          </div>
        </div>

        {/* Products */}
        {products.length > 0 && (
          <ProductsSwiper data={products} />
        )}

        {/* Footer */}
        <ShowMoreButton href="/sales" />

      </div>
    </section>
  );
}