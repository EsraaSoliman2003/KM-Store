"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";

import Header from "../_components/Header";
import EmptyState from "@/components/EmptyState/EmptyState";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { getWishlist } from "@/rtk/slices/wishlistSlice";
import { ProductCardSkeleton } from "@/skeleton/HomeSkeleton";

export default function Page() {
    const t = useTranslations();

    const dispatch = useAppDispatch();

    const { wishlist, loading } = useAppSelector((s) => s.wishlist);

    const products = wishlist?.data?.items ?? [];

    useEffect(() => {
        dispatch(getWishlist());
    }, [dispatch]);

    return (
        <section className="pb-5 md:pb-10">
            {/* Header */}
            <Header
                title={t("Wishlist")}
                subTitle={t("WishlistSubTitle")}
            />

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