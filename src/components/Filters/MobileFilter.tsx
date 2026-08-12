"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { FiFilter, FiX } from "react-icons/fi";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";

type Prop = {
  noCats?: boolean;
}

export default function MobileFilter({ noCats = false }: Prop) {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    const query = params.toString();

    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  };

  const clearAll = () => {
    router.replace(pathname, {
      scroll: false,
    });
  };

  return (
    <>
      {/* Filter Button */}
      <button
        onClick={() => setOpen(true)}
        className="flex h-10 items-center gap-2 rounded-xl border border-[#7040dc] px-4 text-sm font-medium text-[#7040dc] transition hover:bg-[#7040dc] hover:text-white active:scale-95 lg:hidden"
        aria-label={t("openFilters")}
      >
        <FiFilter size={17} />
        <span>{t("filters")}</span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Filter Drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-3xl border-t border-[#333] bg-(--bg-primary) px-5 pb-8 pt-5 shadow-2xl transition-transform duration-300 lg:hidden ${open ? "translate-y-0" : "translate-y-full"
          }`}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FiFilter size={18} />
            <h2 className="text-base font-semibold">
              {t("filters")}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={clearAll}
              className="text-xs text-[#7040dc] hover:text-[#8756ef]"
            >
              {t("clearAll")}
            </button>

            <button
              onClick={() => setOpen(false)}
              className="
                flex h-8 w-8 items-center justify-center
                rounded-full
                border border-var(--border-color)
                bg-var(--bg-primary)
                text-var(--text-secondary)
                transition
                hover:border-var(--main)
                hover:bg-var(--main-light)
                hover:text-var(--main)
              "
            >
              <FiX size={18} />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="space-y-1">
          {
            !noCats && (
              <CategoryFilter updateFilter={updateFilter} />
            )
          }

          <BrandFilter updateFilter={updateFilter} />

          <PriceFilter />

          <RatingFilter updateFilter={updateFilter} />
        </div>

        {/* Apply */}
        <button
          onClick={() => setOpen(false)}
          className="mt-6 h-11 w-full rounded-xl bg-[#7040dc] text-sm font-medium text-white transition hover:bg-[#8756ef]"
        >
          {t("showResults")}
        </button>
      </div>
    </>
  );
}