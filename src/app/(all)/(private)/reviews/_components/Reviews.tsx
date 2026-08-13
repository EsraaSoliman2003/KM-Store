import Image from 'next/image'
import React from 'react'
import { renderStars } from './RenderStars'
import { Edit3, MoreHorizontal, Trash2 } from 'lucide-react'
import { useTranslations } from 'next-intl';

export default function Reviews() {
    const t = useTranslations();
    const reviews = [
        {
            id: 1,
            name: "Sony WH-1000XM5 Headphones",
            date: "Aug 2, 2026",
            rating: 5,
            title: "Absolutely worth every penny",
            description:
                "The noise cancellation on these is in a class of its own. Battery life is exceptional and the sound quality is rich and detailed across all frequencies.",
            helpful: 24,
            image: "/earbuds.jpg",
        },
        {
            id: 2,
            name: "Sony WH-1000XM5 Headphones",
            date: "Aug 2, 2026",
            rating: 4,
            title: "Absolutely worth every penny",
            description:
                "The noise cancellation on these is in a class of its own. Battery life is exceptional and the sound quality is rich and detailed across all frequencies.",
            helpful: 24,
            image: "/earbuds.jpg",
        },
    ];

    return (
        <section className="space-y-5">
            {reviews.map((review) => (
                <article
                    key={review.id}
                    className="rounded-2xl border border-(--border-dark) bg-(--bg-primary) p-3.5 sm:p-4"
                >
                    {/* Product Header */}
                    <div className="flex items-start gap-3">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[12px] bg-(--bg-secondary)">
                            <Image
                                src={review.image}
                                alt={review.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="min-w-0 flex-1">
                            <h3 className="truncate text-[14px] font-semibold text-(--text-primary)">
                                {review.name}
                            </h3>

                            <div className="mt-1 flex flex-wrap items-center gap-2">
                                {renderStars(review.rating, 13)}

                                <span className="text-[12px] text-(--text-muted)">
                                    {review.date}
                                </span>

                                <span className="rounded-full border border-green-500/70 bg-green-500/10 px-3 py-1.5 text-[12px] font-medium text-green-500">
                                    {t("published")}
                                </span>
                            </div>
                        </div>

                        <button
                            type="button"
                            aria-label={t("more")}
                            className="shrink-0 text-(--text-muted) transition-colors hover:text-(--text-primary)"
                        >
                            <MoreHorizontal size={17} />
                        </button>
                    </div>

                    {/* Review Content */}
                    <div className="mt-3">
                        <h4 className="text-[16px] font-semibold text-(--text-primary)">
                            {review.title}
                        </h4>

                        <p className="mt-3 max-w-[95%] text-[14px] leading-5 text-(--text-muted)">
                            {review.description}
                        </p>


                    </div>

                    {/* Actions */}
                    <div className="flex justify-between md:items-center flex-col md:flex-row">
                        <p className="mt-4 text-[12px] text-(--text-muted)">
                            {review.helpful} {t("peopleFoundThisHelpful")}
                        </p>

                        <div className="mt-3 flex justify-end gap-3">
                            <button
                                type="button"
                                className="flex h-[38px] items-center gap-2 rounded-[8px] border border-(--border-dark) px-4 text-[12px] font-medium text-(--text-muted) transition-colors hover:border-(--main) hover:text-(--main)"
                            >
                                <Edit3 size={16} />
                                {t("edit")}
                            </button>

                            <button
                                type="button"
                                className="flex h-[38px] items-center gap-2 rounded-[8px] border border-red-500 px-4 text-[12px] font-medium text-red-500 transition-colors hover:bg-red-500/10"
                            >
                                <Trash2 size={16} />
                                {t("delete")}
                            </button>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    )
}
