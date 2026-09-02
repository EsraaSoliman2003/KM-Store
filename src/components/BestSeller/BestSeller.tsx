"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useAppSelector } from "@/rtk/hooks";
import ProductsSwiper from "../ProductsSwiper/ProductsSwiper";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";

export default function BestSeller() {
    const t = useTranslations();
    const { sections } = useAppSelector((s) => s.home);
    const products = sections?.best_sellers ?? [];

    return (
        <section className="py-14">
            <div className="container">

                {/* Header */}
                <div className="mb-8 flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="text-center lg:text-start">
                        <h2 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
                            {t("bestSellerTitle")}
                        </h2>

                        <p className="mt-2 text-sm text-[var(--text-muted)]">
                            {t("bestSellerSubtitle")}
                        </p>
                    </div>

                    <ShowMoreButton href="/best-sellers" />
                </div>

                {/* Products */}
                {products.length > 0 && (
                    <ProductsSwiper data={products} />
                )}

            </div>
        </section>
    );
}