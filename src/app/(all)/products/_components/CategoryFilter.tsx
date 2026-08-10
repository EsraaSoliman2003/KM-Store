import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
    updateFilter: any;
}

const categories = [
    { label: "All Categories", value: "" },
    { label: "Smart Phones", value: "smart-phones" },
    { label: "Laptops", value: "laptops" },
    { label: "Audio", value: "audio" },
];

export default function CategoryFilter({ updateFilter }: Props) {
    const searchParams = useSearchParams();
    const category = searchParams.get("category") || "";

    return (
        <div className="mb-3">
            <label className="relative block">
                <select
                    value={category}
                    onChange={(e) => updateFilter("category", e.target.value)}
                    className="h-10 w-full appearance-none rounded-xl border border-[#444] bg-transparent px-3 pr-8 text-sm text-(--text-muted) outline-none transition focus:border-[#7040dc]"
                >
                    {categories.map((item) => (
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
