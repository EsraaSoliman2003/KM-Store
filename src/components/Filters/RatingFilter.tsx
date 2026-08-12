import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React from 'react'

type Props = {
    updateFilter: any;
}

export default function RatingFilter({ updateFilter }: Props) {
    const t = useTranslations();
    const searchParams = useSearchParams();
    const rating = searchParams.get("rating") || "";

    const ratings = [
        { label: t("rating5Stars"), value: "5" },
        { label: t("rating4Stars"), value: "4" },
        { label: t("rating3StarsBelow"), value: "3" },
    ];

    return (
        <div>
            <h3 className="mb-3 text-sm font-semibold">{t("ratingLabel")}</h3>

            <div className="space-y-2">
                {ratings.map((item) => {
                    const active = rating === item.value;

                    return (
                        <button
                            key={item.value}
                            type="button"
                            onClick={() =>
                                updateFilter(
                                    "rating",
                                    active ? "" : item.value
                                )
                            }
                            className="flex w-full cursor-pointer items-center gap-2 text-left text-xs text-(--text-muted)"
                        >
                            <span
                                className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 ${active
                                    ? "border-[#7040dc]"
                                    : "border-[#7040dc]"
                                    }`}
                            >
                                {active && (
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#7040dc]" />
                                )}
                            </span>

                            {item.label}
                        </button>
                    );
                })}
            </div>
        </div>
    )
}