"use client";

import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import EmptyState from "@/components/EmptyState/EmptyState";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { getBrands } from "@/rtk/slices/brandsSlice";
import BrandCard from "@/components/Brands/BrandCard";

export default function Page() {
  const t = useTranslations();

  const dispatch = useAppDispatch();

  const { data, loading } = useAppSelector(
    (s) => s.brands
  );

  const brands = data?.data.items ?? [];

  useEffect(() => {
    dispatch(getBrands(1));
  }, [dispatch]);

  return (
    <section className="container mt-18 py-5 md:py-10">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-[21px] font-bold leading-tight text-(--text-primary) sm:text-[24px]">
            {t("brands")}
          </h1>

          <p className="mt-1 text-[11px] text-(--text-secondary) sm:text-[14px]">
            {t("brandsDescription")}
          </p>
        </div>
      </div>

      <div className="min-w-0 flex-1">

        {/* ================= LOADING ================= */}
        {loading && (
          <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="
                    h-[170px]
                    animate-pulse
                    rounded-2xl
                    bg-(--bg-secondary)
                    sm:h-[200px]
                    sm:rounded-3xl
                    lg:h-[220px]
                "
              />
            ))}
          </div>
        )}

        {/* ================= EMPTY / ERROR ================= */}
        {!loading && brands.length === 0 && (
          <EmptyState
            title={t("somethingWentWrong")}
            description={t("tryAgainLater")}
          />
        )}

        {/* ================= data ================= */}
        {!loading && brands.length > 0 && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {brands.map((item) => (
              <BrandCard key={item.id} item={item} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}