import { useSearchParams } from 'next/navigation';
import React from 'react'
import { IoChevronDown } from 'react-icons/io5';

type Props = {
    updateFilter: any;
}

const brands = [
    { label: "All Brands", value: "" },
    { label: "Apple", value: "apple" },
    { label: "Samsung", value: "samsung" },
    { label: "Sony", value: "sony" },
];

export default function BrandFilter({ updateFilter }: Props) {
    const searchParams = useSearchParams();
    const brand = searchParams.get("brand") || "";

    return (
        <div className="mb-5">
            <label className="relative block">
                <select
                    value={brand}
                    onChange={(e) => updateFilter("brand", e.target.value)}
                    className="h-10 w-full appearance-none rounded-xl border border-[#444] bg-transparent px-3 pr-8 text-sm text-(--text-muted) outline-none transition focus:border-[#7040dc]"
                >
                    {brands.map((item) => (
                        <option
                            key={item.value || "all"}
                            value={item.value}
                            className="bg-(--bg-primary)"
                        >
                            {item.label}
                        </option>
                    ))}
                </select>

                <IoChevronDown
                    size={14}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
            </label>
        </div>
    )
}