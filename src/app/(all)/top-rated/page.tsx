"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import EmptyState from "@/components/EmptyState/EmptyState";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { ProductCardSkeleton } from "@/skeleton/HomeSkeleton";
import { getTopRated } from "@/rtk/slices/topRatedSlice";

export default function Page() {
    const t = useTranslations();

    const dispatch = useAppDispatch();

    const { products: data, loading } = useAppSelector((s) => s.topRated);

    const products = data ?? [];

    useEffect(() => {
        dispatch(getTopRated());
    }, [dispatch]);

    return (
        <section className="container mt-18 py-5 md:py-10">
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <h1 className="text-[21px] font-bold leading-tight text-(--text-primary) sm:text-[24px]">
                        {t("topRated")}
                    </h1>

                    <p className="mt-1 text-[11px] text-(--text-secondary) sm:text-[14px]">
                        {t("topRatedDescription")}
                    </p>
                </div>
            </div>

            <div className="min-w-0 flex-1">

                {/* ================= LOADING ================= */}
                {loading && (
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <ProductCardSkeleton key={index} />
                        ))}
                    </div>
                )}

                {/* ================= EMPTY / ERROR ================= */}
                {!loading && products.length === 0 && (
                    <EmptyState
                        title={t("somethingWentWrong")}
                        description={t("tryAgainLater")}
                    />
                )}

                {/* ================= PRODUCTS ================= */}
                {!loading && products.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}