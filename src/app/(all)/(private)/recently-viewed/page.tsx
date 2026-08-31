"use client";

import React, { useEffect } from "react";
import Header from "../_components/Header";
import { useTranslations } from "next-intl";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { getRecentlyViewed } from "@/rtk/slices/recentlyViewedSlice";
import Products from "./_components/Products";
import EmptyState from "@/components/EmptyState/EmptyState";

export default function Page() {
    const t = useTranslations();
    const dispatch = useAppDispatch();

    const {
        products,
        loading,
    } = useAppSelector((state) => state.recentlyViewed);

    useEffect(() => {
        dispatch(getRecentlyViewed());
    }, [dispatch]);

    return (
        <div className="mb-10 min-w-0">
            <Header
                title={t("recentlyViewed")}
                subTitle={t("recentlyViewedSubtitle")}
            />

            <div className="mt-6">
                {/* Loading */}
                {loading ? (
                    <div className="space-y-2.5">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="
                                    flex h-[86px]
                                    animate-pulse
                                    items-center gap-3
                                    rounded-xl
                                    border border-(--border-dark)
                                    bg-(--bg-primary)
                                    px-3 py-2.5
                                "
                            >
                                <div className="h-16 w-16 shrink-0 rounded-lg bg-(--bg-secondary)" />

                                <div className="min-w-0 flex-1 space-y-2">
                                    <div className="h-3.5 w-2/3 rounded bg-(--bg-secondary)" />
                                    <div className="h-3 w-1/3 rounded bg-(--bg-secondary)" />
                                </div>

                                <div className="hidden h-4 w-20 rounded bg-(--bg-secondary) sm:block" />

                                <div className="flex gap-1.5">
                                    <div className="h-8 w-8 rounded-lg bg-(--bg-secondary)" />
                                    <div className="h-8 w-8 rounded-lg bg-(--bg-secondary)" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : products.length > 0 ? (
                    <Products products={products} />
                ) : (
                    <EmptyState
                        title={t("noRecentlyViewed")}
                    />
                )}
            </div>
        </div>
    );
}