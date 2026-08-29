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
import { BrandsSkeleton } from "@/skeleton/HomeSkeleton";
import BrandsSwiper from "./BrandsSwiper";

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

          <Link
            href="/brands"
            className="group mx-auto flex w-fit items-center gap-2 text-lg text-purple-400 transition-all duration-300 hover:text-purple-300 lg:mx-0"
          >
            <span className="border-b-2 border-purple-500 pb-1">
              {t("showMore")}
            </span>

            {t("dir") === "rtl" ? (
              <FiChevronLeft
                size={22}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            ) : (
              <FiChevronRight
                size={22}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            )}
          </Link>
        </div>

        {/* ================= LOADING ================= */}
        {loading && (
          <BrandsSkeleton />
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