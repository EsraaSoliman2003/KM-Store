"use client";

import { useTranslations } from "next-intl";
import { useAppSelector } from "@/rtk/hooks";
import CategoriesSwiper from "../DesignCategories/CategoriesSwiper";

export default function Categories() {
  const t = useTranslations();

  const { sections } = useAppSelector((s) => s.products);
  const categories = sections?.categories ?? [];

  return (
    <section className="py-12 lg:py-20">
      <div className="container">
        <h2 className="mb-8 text-center font-bold text-3xl text-(--text-primary) sm:text-4xl lg:mb-12 lg:text-start">
          {t("shopByCategoryTitle")}
        </h2>

        {categories.length > 0 && (
          <CategoriesSwiper data={categories} />
        )}
      </div>
    </section>
  );
}