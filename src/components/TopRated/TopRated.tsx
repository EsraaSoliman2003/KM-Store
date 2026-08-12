"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { products } from "../FlashSales/data";
import ProductCard from "../ProductCard/ProductCard";
import { useTranslations } from "next-intl";

export default function TopRated() {
  const t = useTranslations();

  return (
    <section className="py-14">
      <div className="container">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-center lg:text-start">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
              {t("topRatedTitle")}
            </h2>

            <p className="mt-2 text-sm text-[var(--text-muted)]">
              {t("topRatedSubtitle")}
            </p>
          </div>

          <button className="group mx-auto lg:mx-0 flex w-fit items-center gap-2 self-start text-lg text-purple-400 transition-all duration-300 hover:text-purple-300 lg:self-auto">
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
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}