import ProductCard from '@/components/ProductCard/ProductCard';
import { Share } from 'lucide-react';
import { useTranslations } from 'next-intl'
import React from 'react'
import Header from '../_components/Header';
import { products } from '@/fakeData/data';

export default function page() {
    const t = useTranslations();
    return (
        <section className="pb-5 md:pb-10">
            {/* Header */}
            <Header
                title={t("Wishlist")}
                subTitle={t("WishlistSubTitle")}
            />


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
