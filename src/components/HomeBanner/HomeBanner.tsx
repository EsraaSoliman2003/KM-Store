"use client";

import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { getBanners } from "@/rtk/slices/bannersSlice";
import { useEffect } from "react";
import Image from "next/image";

type Props = {
    index: number;
};

export default function HomeBanner({ index }: Props) {
    const dispatch = useAppDispatch();

    const { banners, loading } = useAppSelector(
        (state) => state.banners
    );

    useEffect(() => {
        if (!banners.length) {
            dispatch(getBanners());
        }
    }, [dispatch, banners.length]);

    // Skeleton while loading
    if (loading) {
        return (
            <section className="container">
                <div className="relative overflow-hidden rounded-2xl h-50 md:h-90 lg:h-120 bg-(--bg-secondary)">
                    {/* Shimmer */}
                    <div
                        className="
                        absolute inset-0
                        -translate-x-full
                        animate-[shimmer_1.5s_infinite]
                        bg-gradient-to-r
                        from-transparent
                        via-white/10
                        to-transparent
                    "
                    />

                    {/* Optional subtle content placeholders */}
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                        <div className="h-5 w-1/3 rounded-md bg-(--border-color) sm:h-6" />
                        <div className="mt-2 h-3 w-1/5 rounded-md bg-(--border-color)" />
                    </div>
                </div>
            </section>
        );
    }

    if (!banners.length) return null;

    const banner = banners[index];

    if (!banner) return null;

    return (
        <section className="container">
            <div className="relative overflow-hidden rounded-2xl h-50 md:h-90 lg:h-120">
                <Image
                    src={banner.image}
                    alt={String(banner.id) || "Banner"}
                    fill
                    className="object-cover"
                    priority={index === 0}
                />
            </div>
        </section>
    );
}