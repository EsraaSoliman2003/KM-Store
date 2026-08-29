"use client";

import BestSeller from "@/components/BestSeller/BestSeller";
import Brands from "@/components/Brands/Brands";
import Categories from "@/components/Categories/Categories";
import FlashSales from "@/components/FlashSales/FlashSales";
import Hero from "@/components/Hero/Hero";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import TopRated from "@/components/TopRated/TopRated";
import WhyUs from "@/components/WhyUs/WhyUs";
import HomeSkeleton from "@/skeleton/HomeSkeleton";

import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { useEffect } from "react";
import EmptyState from "../EmptyState/EmptyState";
import { useTranslations } from "next-intl";
import { getProductSections } from "@/rtk/slices/homeSlice";

const HomePageClient = () => {
    const t = useTranslations();
    const dispatch = useAppDispatch();

    const { sections, loading } = useAppSelector((s) => s.home);

    useEffect(() => {
        void dispatch(getProductSections());
    }, [dispatch]);

    return (
        <section>
            <Hero />

            {loading ? (
                <HomeSkeleton />
            ) : !sections ? (
                <section className="container py-20">
                    <EmptyState
                        title={t("somethingWentWrong")}
                        description={t("tryAgainLater")}
                    />
                </section>
            ) : (
                <>
                    <Categories />

                    <HomeBanner index={0} />

                    <FlashSales />

                    <HomeBanner index={1} />

                    <BestSeller />

                    <HomeBanner index={2} />

                    <Brands />

                    <HomeBanner index={3} />

                    <TopRated />
                </>
            )}

            <WhyUs />
        </section>
    );
};

export default HomePageClient;