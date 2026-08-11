import { useSearchParams } from 'next/navigation';
import React from 'react'

type Props = {
    updateFilter: any;
}

const ratings = [
    { label: "5 Stars", value: "5" },
    { label: "4 Stars", value: "4" },
    { label: "3 Stars & below", value: "3" },
];


export default function RatingFilter({ updateFilter }: Props) {
    const searchParams = useSearchParams();
    const rating = searchParams.get("rating") || "";

    return (
        <div>
            <h3 className="mb-3 text-sm font-semibold">Rating</h3>

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