"use client";

import { FiChevronLeft, FiChevronRight, FiZap } from "react-icons/fi";
import ProductCard from "../ProductCard/ProductCard";
import Timer from "./Timer";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { products } from "@/fakeData/data";

export default function FlashSales() {
  const t = useTranslations();

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
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {products.slice(0, 4).map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-center lg:justify-end">
          <Link href={`/sales`} className="group flex items-center gap-2 text-lg text-purple-400 transition-all duration-300 hover:text-purple-300">
            <span className="border-b-2 border-purple-500 pb-1">
              {t("showMore")}
            </span>

            {t("dir") === "rtl" ? (
              <FiChevronLeft
                size={22}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            ) : (
              <FiChevronRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}