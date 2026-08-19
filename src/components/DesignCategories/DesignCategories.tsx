"use client";

import CategoryCard from "@/components/CategoryCard/CategoryCard";
import CategoryCardSkeleton from "@/skeleton/CategoryCardSkeleton";
import EmptyState from "@/components/EmptyState/EmptyState";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { getCategories } from "@/rtk/slices/categoriesSlice";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";

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

    return (
        <>
            {/* ================= DESKTOP ================= */}
            <div className="hidden h-[247px] grid-cols-5 gap-3 lg:grid">

                {/* ================= LOADING ================= */}
                {loading ? (
                    <>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CategoryCardSkeleton
                                key={index}
                                className="h-full min-w-0"
                            />
                        ))}
                    </>
                ) : categoryItems.length === 0 ? (
                    <div className="col-span-5">
                        <EmptyState
                            title={t("noCategories")}
                            description={t("noCategoriesDescription")}
                        />
                    </div>
                ) : (
                    <>
                        {/* First */}
                        {categoryItems[0] && (
                            <CategoryCard
                                item={categoryItems[0]}
                                className="h-full min-w-0"
                            />
                        )}

                        {/* Second */}
                        {categoryItems[1] && (
                            <CategoryCard
                                item={categoryItems[1]}
                                className="h-full min-w-0"
                            />
                        )}

                        {/* Third */}
                        {categoryItems[2] && (
                            <CategoryCard
                                item={categoryItems[2]}
                                className="h-full min-w-0"
                            />
                        )}

                        {/* Fourth */}
                        <div className="grid h-full min-w-0 grid-cols-2 grid-rows-[1.6fr_1fr] gap-3">

                            {categoryItems[3] && (
                                <CategoryCard
                                    item={categoryItems[3]}
                                    className="col-span-2 min-h-0 min-w-0"
                                />
                            )}

                            {categoryItems[4] && (
                                <CategoryCard
                                    item={categoryItems[4]}
                                    className="min-h-0 min-w-0"
                                    isSmall
                                />
                            )}

                            {categoryItems[5] && (
                                <CategoryCard
                                    item={categoryItems[5]}
                                    className="min-h-0 min-w-0"
                                    isSmall
                                />
                            )}

                        </div>

                        {/* Fifth */}
                        <div className="grid h-full min-w-0 grid-cols-2 grid-rows-[1.6fr_1fr] gap-3">

                            {categoryItems[6] && (
                                <CategoryCard
                                    item={categoryItems[6]}
                                    className="col-span-2 min-h-0 min-w-0"
                                />
                            )}

                            {categoryItems[7] && (
                                <CategoryCard
                                    item={categoryItems[7]}
                                    className="min-h-0 min-w-0"
                                    isSmall
                                />
                            )}

                            {categoryItems[8] && (
                                <CategoryCard
                                    item={categoryItems[8]}
                                    className="min-h-0 min-w-0"
                                    isSmall
                                />
                            )}

                        </div>
                    </>
                )}
            </div>

            {/* ================= MOBILE ================= */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">

                {/* Loading */}
                {loading &&
                    Array.from({ length: 6 }).map((_, index) => (
                        <CategoryCardSkeleton
                            key={index}
                            className="h-[170px] w-full min-w-0 sm:h-[200px]"
                        />
                    ))}

                {/* Empty */}
                {!loading && categoryItems.length === 0 && (
                    <EmptyState
                        title={t("noCategories")}
                        description={t("noCategoriesDescription")}
                    />
                )}

                {/* Categories */}
                {!loading &&
                    categoryItems.map((item, index) => (
                        <CategoryCard
                            key={item.id}
                            item={item}
                            className="h-[170px] w-full min-w-0 sm:h-[200px]"
                            isSmall={index > 4}
                        />
                    ))}
            </div>
        </>
    );
}