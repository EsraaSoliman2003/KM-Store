"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useAppSelector } from "@/rtk/hooks";
import ProductsSwiper from "../ProductsSwiper/ProductsSwiper";

export default function BestSeller() {
    const t = useTranslations();
    const { sections } = useAppSelector((s) => s.products);
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

                    <Link
                        href="/best-sellers"
                        className="group mx-auto flex w-fit items-center gap-2 self-start text-lg text-purple-400 transition-all duration-300 hover:text-purple-300 lg:mx-0 lg:self-auto"
                    >
                        <span className="border-b-2 border-purple-500 pb-1">
                            {t("showMore")}
                        </span>

                        {t("dir") === "rtl" ? (
                            <FiChevronLeft
                                size={22}
                                className="transition-transform duration-300 group-hover:-translate-x-1"
                            />
                        ) : (
                            <FiChevronRight
                                size={22}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        )}
                    </Link>
                </div>

                {/* Products */}
                {products.length > 0 && (
                    <ProductsSwiper data={products} />
                )}

            </div>
        </section>
    );
}