"use client";

import { FiFilter } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";

type Prop = {
  noCats?: boolean;
}

export default function DesktopFilter({ noCats = false }: Prop) {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Update one filter in the URL
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
    <aside className="shrink-0 rounded-2xl border border-(--border-dark) bg-(--bg-primary) p-3 w-75 hidden lg:block">

      {/* Filter Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiFilter size={16} />
          <h2 className="text-sm font-semibold ">{t("filters")}</h2>
        </div>

        <button
          onClick={clearAll}
          className="text-[12px] text-[#7040dc] transition hover:text-[#8756ef]"
        >
          {t("clearAll")}
        </button>
      </div>

      {
        !noCats && (
          <CategoryFilter updateFilter={updateFilter} />
        )
      }

      <BrandFilter updateFilter={updateFilter} />

      <PriceFilter />

      <RatingFilter updateFilter={updateFilter} />
    </aside>
  );
}