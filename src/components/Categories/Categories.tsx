"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

import CategoryCard from "../CategoryCard/CategoryCard";
import CategoryCardSkeleton from "@/skeleton/CategoryCardSkeleton";
import EmptyState from "../EmptyState/EmptyState";

import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { getCategories } from "@/rtk/slices/categoriesSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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

        {/* ================= LOADING ================= */}
        {loading && (
          <Swiper
            spaceBetween={16}
            slidesPerView="auto"
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <SwiperSlide
                key={index}
                className="
                  !h-[170px]
                  sm:!h-[200px]
                  lg:!h-[220px]

                  !w-[40%]
                  sm:!w-[30%]
                  md:!w-[25%]
                  lg:!w-[23%]
                  xl:!w-[31%]
                "
              >
                <CategoryCardSkeleton className="h-full w-full" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* ================= EMPTY ================= */}
        {!loading && categoryItems.length === 0 && (
          <div
            className="
                    items-center
                    justify-center
                    sm:h-[180px]
                    md:h-[180px]
                    lg:h-[240px]
                "
          >
            <EmptyState
              title={t("noCategories")}
              description={t("noCategoriesDescription")}
            />
          </div>
        )}

        {/* ================= CATEGORIES ================= */}
        {!loading && categoryItems.length > 0 && (
          <Swiper
            spaceBetween={16}
            slidesPerView="auto"
          >
            {categoryItems.map((item) => (
              <SwiperSlide
                key={item.id}
                className="
                  !h-[170px]
                  sm:!h-[200px]
                  lg:!h-[220px]

                  !w-[40%]
                  sm:!w-[30%]
                  md:!w-[25%]
                  lg:!w-[23%]
                  xl:!w-[31%]
                "
              >
                <CategoryCard
                  item={item}
                  className="h-full w-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}