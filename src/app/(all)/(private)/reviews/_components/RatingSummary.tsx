import { Star } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'
import { renderStars } from './RenderStars';

export default function RatingSummary() {
    const t = useTranslations();
    const ratingStats = [
        { stars: 5, count: 2 },
        { stars: 4, count: 1 },
        { stars: 3, count: 0 },
        { stars: 2, count: 0 },
        { stars: 1, count: 0 },
    ];

    return (
        <section className="rounded-2xl border border-(--border-dark) bg-(--bg-primary) p-4 sm:p-5">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
                {/* Average */}
                <div className="flex min-w-25 flex-col items-center justify-center border-b border-(--border-dark) pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
                    <p className="text-[40px] font-semibold leading-none text-(--text-primary)">
                        4.8
                    </p>

                    <div className="mt-2">
                        {renderStars(5, 14)}
                    </div>

                    <p className="mt-1 text-[12px] text-(--text-muted)">
                        {t("averageRating")}
                    </p>
                </div>

                {/* Rating Bars */}
                <div className="flex-1 space-y-2">
                    {ratingStats.map((item) => {
                        const percentage =
                            item.stars === 5
                                ? 75
                                : item.stars === 4
                                    ? 38
                                    : 0;

                        return (
                            <div
                                key={item.stars}
                                className="flex items-center gap-2"
                            >
                                <div className="flex items-center gap-0.5">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <Star
                                            key={index}
                                            size={12}
                                            fill={
                                                index < item.stars
                                                    ? "currentColor"
                                                    : "none"
                                            }
                                            className="text-(--main)"
                                        />
                                    ))}
                                </div>

                                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-(--text-muted)/70">
                                    <div
                                        className="h-full rounded-full bg-(--main)"
                                        style={{ width: `${percentage}%` }}
                                    />
                                </div>

                                <span className="w-5 text-right text-[12px] text-(--text-muted)">
                                    {item.count}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Published / Pending */}
                <div className="flex justify-center gap-8 lg:min-w-32.5">
                    <div className="text-center">
                        <p className="text-[22px] font-semibold text-(--text-primary)">
                            3
                        </p>

                        <p className="mt-1 text-[12px] text-(--text-muted)">
                            {t("published")}
                        </p>
                    </div>

                    <div className="text-center">
                        <p className="text-[22px] font-semibold text-(--main)">
                            1
                        </p>

                        <p className="mt-1 text-[12px] text-(--text-muted)">
                            {t("pending")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
