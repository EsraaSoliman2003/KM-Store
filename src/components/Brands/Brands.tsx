"use client";

import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { getBrands } from "@/rtk/slices/brandsSlice";

import EmptyState from "../EmptyState/EmptyState";

import { useEffect } from "react";
import BrandsSwiper from "./BrandsSwiper";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";

export default function Brands() {
  const t = useTranslations();

  const dispatch = useAppDispatch();

  const { data, loading } = useAppSelector((state) => state.brands);

  const brands = data?.data?.items ?? [];

  useEffect(() => {
    dispatch(getBrands(1));
  }, [dispatch]);

  return (
    <section className="py-14">
      <div className="container">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-center lg:text-start">
            <h2 className="text-3xl font-bold text-(--text-primary) sm:text-4xl">
              {t("brandsTitle")}
            </h2>
          </div>
          <ShowMoreButton href="/brands" />
        </div>

        {/* ================= LOADING ================= */}
        {loading && (
          <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
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

        {/* ================= BRANDS ================= */}
        {!loading && brands.length > 0 && (
          <BrandsSwiper data={brands} />
        )}
      </div>
    </section>
  );
}