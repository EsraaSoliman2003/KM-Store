"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import { products } from "@/components/FlashSales/data";
import DesktopFilter from "./DesktopFilter";
import MobileFilter from "./MobileFilter";

export default function Products() {
    return (
        <section className="min-h-screen py-8 text-white">
            <div className="container">
                {/* Title */}
                <div className="flex justify-between items-center mb-7">
                    <h1 className="text-2xl font-bold sm:text-3xl">
                        All Products
                    </h1>
                    <MobileFilter />
                </div>

                <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
                    {/* ================= FILTER SIDEBAR ================= */}
                    <DesktopFilter />

                    {/* ================= PRODUCTS ================= */}
                    <div className="min-w-0 flex-1">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}