"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { getCategories } from "@/rtk/slices/categoriesSlice";

import EmptyState from "@/components/EmptyState/EmptyState";
import CategoriesSwiper from "./CategoriesSwiper";

export default function DesignCategories() {
    const t = useTranslations();
    const dispatch = useAppDispatch();

    const { categories, loading } = useAppSelector(
        (state) => state.categories
    );

    const categoryItems = categories?.data?.categories ?? [];

    useEffect(() => {
        void dispatch(
            getCategories({
                page: 1,
                per_page: 100,
            })
        );
    }, [dispatch]);

    return (
        <section className="container py-14">
            {/* Header */}
            <div className="mb-8 flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="text-center lg:text-start">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl">
                        {t("shopByCategoryTitle")}
                    </h2>
                </div>
            </div>

            {/* Content */}
            {loading ? (
                <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className="
                                h-[170px]
                                animate-pulse
                                rounded-2xl
                                bg-(--bg-secondary)
                                sm:h-[200px]
                                sm:rounded-3xl
                                lg:h-[220px]
                            "
                        />
                    ))}
                </div>
            ) : categoryItems.length === 0 ? (
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
            ) : (
                <CategoriesSwiper data={categoryItems} />
            )}
        </section>
    );
}