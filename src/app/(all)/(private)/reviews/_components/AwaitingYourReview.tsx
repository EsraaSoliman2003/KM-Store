import { useTranslations } from 'next-intl'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function AwaitingYourReview() {
    const t = useTranslations();
    const awaitingReviews = [
        {
            id: 1,
            name: 'LG OLED C3 65" 4K TV',
            purchasedAt: "Jul 29, 2026",
            image: "/earbuds.jpg",
        },
    ];

    return (
        <section className="overflow-hidden rounded-2xl border border-(--border-dark) bg-(--bg-primary)">
            <div className="border-b border-(--border-dark) px-3 py-3">
                <h2 className="text-[16px] font-semibold text-(--text-primary)">
                    {t("awaitingYourReview")}
                </h2>
            </div>

            <div className="space-y-2 p-3">
                {awaitingReviews.map((product) => (
                    <div
                        key={product.id}
                        className="flex min-h-[70px] flex-col md:flex-row justify-between md:items-center gap-3 rounded-[12px] border border-(--border-dark) px-3 py-2.5"
                    >
                        <div className='flex items-center gap-3'>
                            <div className="relative h-13 w-13 shrink-0 overflow-hidden rounded-[12px] bg-(--bg-secondary)">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="min-w-0 flex-1">
                                <h3 className="truncate text-[14px] font-semibold text-(--text-primary)">
                                    {product.name}
                                </h3>

                                <p className="mt-0.5 text-[13px] text-(--text-muted)">
                                    {t("purchased")} {product.purchasedAt}
                                </p>
                            </div>
                        </div>

                        <div className='flex justify-end w-full'>
                            <Link
                                href={`/reviews/${product.id}`}
                                className="shrink-0 rounded-[8px] bg-(--main) px-5 py-2 text-[16px] font-medium text-(--white) transition-opacity hover:opacity-90"
                            >
                                {t("writeReview")}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
