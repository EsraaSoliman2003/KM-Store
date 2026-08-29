"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { getBrands } from "@/rtk/slices/brandsSlice";

import EmptyState from "../EmptyState/EmptyState";
import BrandsSwiper from "../Brands/BrandsSwiper";

export default function ShopByBrand() {
    const t = useTranslations();
    const dispatch = useAppDispatch();

    const { data, loading } = useAppSelector((state) => state.brands);

    const brands = data?.data?.items ?? [];

    useEffect(() => {
        void dispatch(getBrands(1));
    }, [dispatch]);

    return (
        <section className="container pb-14">
            {/* Header */}
            <div className="mt-14 mb-7 flex items-center justify-between">
                <h1 className="text-2xl font-bold sm:text-3xl">
                    {t("shopByBrand")}
                </h1>
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
            ) : brands.length === 0 ? (
                <EmptyState
                    title={t("somethingWentWrong")}
                    description={t("tryAgainLater")}
                />
            ) : (
                <BrandsSwiper data={brands} />
            )}
        </section>
    );
}