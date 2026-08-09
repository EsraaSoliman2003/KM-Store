import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

const MIN = 0;
const MAX = 3000;

export default function PriceFilter() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const urlMin = Number(searchParams.get("minPrice") || MIN);
    const urlMax = Number(searchParams.get("maxPrice") || MAX);

    const [minPrice, setMinPrice] = useState(urlMin);
    const [maxPrice, setMaxPrice] = useState(urlMax);

    const updatePriceUrl = (min: number, max: number) => {
        const params = new URLSearchParams(searchParams.toString());

        if (min === MIN) {
            params.delete("minPrice");
        } else {
            params.set("minPrice", String(min));
        }

        if (max === MAX) {
            params.delete("maxPrice");
        } else {
            params.set("maxPrice", String(max));
        }

        const query = params.toString();

        router.replace(query ? `${pathname}?${query}` : pathname, {
            scroll: false,
        });
    };

    const handleMinChange = (value: number) => {
        const newMin = Math.min(value, maxPrice - 1);

        setMinPrice(newMin);
    };

    const handleMaxChange = (value: number) => {
        const newMax = Math.max(value, minPrice + 1);

        setMaxPrice(newMax);
    };

    const minPercent =
        ((minPrice - MIN) / (MAX - MIN)) * 100;

    const maxPercent =
        ((maxPrice - MIN) / (MAX - MIN)) * 100;

    return (
        <div className="mb-5">
            <h3 className="mb-3 text-sm font-semibold text-white">
                Price range
            </h3>

            <div className="relative mx-1 h-6">
                {/* Background */}
                <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-[#555]" />

                {/* Active */}
                <div
                    className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-[#7040dc]"
                    style={{
                        left: `${minPercent}%`,
                        width: `${maxPercent - minPercent}%`,
                    }}
                />

                {/* MIN */}
                <input
                    type="range"
                    min={MIN}
                    max={MAX}
                    value={minPrice}
                    onChange={(e) =>
                        handleMinChange(Number(e.target.value))
                    }
                    onMouseUp={() =>
                        updatePriceUrl(minPrice, maxPrice)
                    }
                    onTouchEnd={() =>
                        updatePriceUrl(minPrice, maxPrice)
                    }
                    className="range-slider"
                />

                {/* MAX */}
                <input
                    type="range"
                    min={MIN}
                    max={MAX}
                    value={maxPrice}
                    onChange={(e) =>
                        handleMaxChange(Number(e.target.value))
                    }
                    onMouseUp={() =>
                        updatePriceUrl(minPrice, maxPrice)
                    }
                    onTouchEnd={() =>
                        updatePriceUrl(minPrice, maxPrice)
                    }
                    className="range-slider"
                />
            </div>

            <div className="mt-2 flex justify-between text-[12px] text-gray-300">
                <span>{minPrice} $</span>
                <span>{maxPrice} $</span>
            </div>
        </div>
    )
}