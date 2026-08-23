import React from "react";
import { useTranslations } from "next-intl";
import { IoChevronDown } from "react-icons/io5";
import { useSearchParams } from "next/navigation";
import { useAppSelector } from "@/rtk/hooks";

type Props = {
    updateFilter: any;
};

export default function CategoryFilter({ updateFilter }: Props) {
    const t = useTranslations();
    const searchParams = useSearchParams();
    const category = searchParams.get("category") || "";

    const { categories, loading } = useAppSelector((s) => s.categories);

    const categoryItems = categories?.data?.categories ?? [];

    return (
        <div className="mb-3">
            <label className="relative block">
                <select
                    value={category}
                    onChange={(e) =>
                        updateFilter("category", e.target.value)
                    }
                    disabled={loading}
                    className="h-10 w-full appearance-none rounded-xl border border-[#444] bg-transparent px-3 pr-8 text-sm text-(--text-muted) outline-none transition focus:border-[#7040dc] disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <option value="">
                        {t("allCategories")}
                    </option>
                    {loading ? (
                        <option value="">Loading...</option>
                    ) : (
                        categoryItems.map((item) => (
                            <option
                                key={item.id || "all"}
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
