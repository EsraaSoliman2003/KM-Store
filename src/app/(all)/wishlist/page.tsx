import { products } from '@/components/FlashSales/data';
import ProductCard from '@/components/ProductCard/ProductCard';
import { Share } from 'lucide-react';
import { useTranslations } from 'next-intl'
import React from 'react'

export default function page() {
    const t = useTranslations();
    return (
        <section className="container mt-18 py-5 md:py-10">
            {/* Header */}
            <div className="mb-6 flex flex-row items-center justify-between gap-4 sm:mb-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">
                    {t("Wishlist")}
                </h2>

                <button
                    className="shrink-0 rounded-md border border-[#838383] p-2"
                    aria-label="Share wishlist"
                >
                    <Share size={20} className="" />
                </button>
            </div>


            <div className="min-w-0 flex-1">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}
