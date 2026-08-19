"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

import CategoryCard from "../CategoryCard/CategoryCard";
import CategoryCardSkeleton from "@/skeleton/CategoryCardSkeleton";
import EmptyState from "../EmptyState/EmptyState";

import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { getCategories } from "@/rtk/slices/categoriesSlice";

export default function Categories() {
  const t = useTranslations();

  const dispatch = useAppDispatch();

  const { categories, loading } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    void dispatch(
      getCategories({
        page: 1,
        per_page: 100,
      })
    );
  }, [dispatch]);

  const categoryItems = categories?.data?.categories ?? [];

  return (
    <section className="py-12 lg:py-20">
      <div className="container">
        <h2 className="mb-8 text-center font-bold text-3xl text-(--text-primary) sm:text-4xl lg:mb-12 lg:text-start">
          {t("shopByCategoryTitle")}
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-3">

          {/* ================= SKELETON ================= */}
          {loading &&
            Array.from({ length: 3 }).map((_, index) => (
              <CategoryCardSkeleton
                key={index}
                className="h-[170px] sm:h-[200px] lg:h-[220px]"
              />
            ))}

          {/* ================= CATEGORIES ================= */}
          {!loading &&
            categoryItems.slice(0, 3).map((item) => (
              <CategoryCard
                key={item.id}
                item={item}
                className="h-[170px] sm:h-[200px] lg:h-[220px]"
              />
            ))}

          {/* ================= EMPTY ================= */}
          {!loading && categoryItems.length === 0 && (
            <EmptyState
              title={t("noCategories")}
              description={t("noCategoriesDescription")}
            />
          )}

        </div>
      </div>
    </section>
  );
}