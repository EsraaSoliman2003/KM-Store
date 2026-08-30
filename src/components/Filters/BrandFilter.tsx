"use client";

import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { useAppSelector } from "@/rtk/hooks";

type Props = {
    updateFilter: any;
};

export default function BrandFilter({ updateFilter }: Props) {
    const t = useTranslations();
    const searchParams = useSearchParams();
    const brand = searchParams.get("brand") || "";

    const { data, loading } = useAppSelector(
        (s) => s.brands
    );

    const brands = data?.data?.items ?? [];

    return (
        <div className="mb-3">
            <label className="relative block">
                <select
                    value={brand}
                    onChange={(e) =>
                        updateFilter("brand", e.target.value)
                    }
                    disabled={loading}
                    className="h-10 w-full appearance-none rounded-xl border border-[#444] bg-transparent px-3 pr-8 text-sm text-(--text-muted) outline-none transition focus:border-[#7040dc] disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <option
                        value=""
                        className="bg-(--bg-primary)"
                    >
                        {t("allBrands")}
                    </option>

                    {loading ? (
                        <option
                            value=""
                            className="bg-(--bg-primary)"
                        >
                            Loading...
                        </option>
                    ) : (
                        brands.map((item) => (
                            <option
                                key={item.id}
                                value={item.id}
                                className="bg-(--bg-primary)"
                            >
                                {item.name}
                            </option>
                        ))
                    )}
                </select>

                <IoChevronDown
                    size={14}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
            </label>
        </div>
    );
}