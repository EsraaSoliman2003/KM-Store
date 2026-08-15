"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import { useState } from "react";
import PaginationButtons from "./PaginationButtons";
import MobileFilter from "../Filters/MobileFilter";
import DesktopFilter from "../Filters/DesktopFilter";
import CategoryCard from "../CategoryCard/CategoryCard";
import { useTranslations } from "next-intl";
import { categories, products } from "@/fakeData/data";

type Prop = {
    text?: string;
    noCats?: boolean;
}

export default function Products({ text = "All Products", noCats = false }: Prop) {
    const t = useTranslations();
    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 8;

    const totalPages = Math.ceil(
        products.length / productsPerPage
    );

    const startIndex = (currentPage - 1) * productsPerPage;

    const currentProducts = products.slice(
        startIndex,
        startIndex + productsPerPage
    );

    return (
        <section className="min-h-screen py-8">
            <div className="container">
                {/* Title */}
                <div className="flex justify-between items-center mb-7">
                    <h1 className="text-2xl font-bold sm:text-3xl">
                        {text}
                    </h1>
                    <MobileFilter noCats={noCats} />
                </div>

                <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
                    {/* ================= FILTER SIDEBAR ================= */}
                    <DesktopFilter noCats={noCats} />

                    {/* ================= PRODUCTS ================= */}
                    <div className="min-w-0 flex-1">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                            {currentProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>

                        {/* PAGINATION */}
                        <PaginationButtons
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                </div>

                <div className="flex justify-between items-center mb-7 mt-14">
                    <h1 className="text-2xl font-bold sm:text-3xl">
                        {t("shopByCategoryTitle")}
                    </h1>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-3">
                    {categories.map((item, index) => (
                        <CategoryCard key={index} item={item} className="h-[170px] sm:h-[200px] lg:h-[220px]" />
                    ))}
                </div>
            </div>
        </section>
    );
}