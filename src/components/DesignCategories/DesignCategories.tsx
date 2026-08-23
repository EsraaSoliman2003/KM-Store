"use client";

import CategoryCard from "@/components/CategoryCard/CategoryCard";
import CategoryCardSkeleton from "@/skeleton/CategoryCardSkeleton";
import EmptyState from "@/components/EmptyState/EmptyState";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { getCategories } from "@/rtk/slices/categoriesSlice";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function DesignCategories() {
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

    // ================= LOADING =================
    if (loading) {
        return (
            <Swiper
                spaceBetween={12}
                slidesPerView="auto"
            >
                {Array.from({ length: 6 }).map((_, index) => (
                    <SwiperSlide
                        key={index}
                        className="
                        !h-[150px]
                        sm:!h-[180px]
                        md:!h-[180px]
                        lg:!h-[240px]

                        !w-[40%]
                        sm:!w-[30%]
                        md:!w-[25%]
                        lg:!w-[23%]
                        xl:!w-[21%]
                    "
                    >
                        <CategoryCardSkeleton className="h-full w-full" />
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }

    // ================= EMPTY =================
    if (categoryItems.length === 0) {
        return (
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
        );
    }

    // ================= CATEGORIES =================
    return (
        <Swiper
            spaceBetween={12}
            slidesPerView="auto"
        >
            {categoryItems.map((item) => (
                <SwiperSlide
                    key={item.id}
                    className="
                        !h-[150px] sm:!h-[180px] md:!h-[180px] lg:!h-[240px]
                        !w-[40%]
                        sm:!w-[30%]
                        md:!w-[25%]
                        lg:!w-[23%]
                        xl:!w-[21%]
                    "
                >
                    <CategoryCard
                        item={item}
                        className="h-full w-full"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}