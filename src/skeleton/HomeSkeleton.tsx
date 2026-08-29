"use client";

import CategoryCardSkeleton from "@/skeleton/CategoryCardSkeleton";

export function ProductCardSkeleton() {
    return (
        <div className="overflow-hidden rounded-2xl border border-(--border-color) bg-(--bg-secondary)">
            <div className="aspect-square animate-pulse bg-(--border-color)" />

            <div className="space-y-3 p-4">
                <div className="h-4 w-3/4 animate-pulse rounded bg-(--border-color)" />
                <div className="h-4 w-1/2 animate-pulse rounded bg-(--border-color)" />
                <div className="h-5 w-1/3 animate-pulse rounded bg-(--border-color)" />
            </div>
        </div>
    );
}

export function ProductSectionSkeleton() {
    return (
        <section className="py-14">
            <div className="container">
                {/* Header */}
                <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="space-y-3">
                        <div className="h-9 w-52 animate-pulse rounded-lg bg-(--border-color)" />
                        <div className="h-4 w-72 animate-pulse rounded bg-(--border-color)" />
                    </div>

                    <div className="h-6 w-28 animate-pulse rounded bg-(--border-color)" />
                </div>

                {/* Products */}
                <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export function BannerSkeleton() {
    return (
        <section className="container">
            <div
                className="
                    relative
                    h-50
                    animate-pulse
                    overflow-hidden
                    rounded-2xl
                    bg-(--bg-secondary)
                    md:h-90
                    lg:h-120
                "
            />
        </section>
    );
}

export function BrandsSkeleton() {
    return (
        <section className="py-14">
            <div className="container">
                <div className="mb-8 h-9 w-48 animate-pulse rounded-lg bg-(--border-color)" />

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
                                    lg:h-[220px]
                                    sm:rounded-3xl
                                "
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export function CategoriesSkeleton() {
    return (
        <section className="py-12 lg:py-20">
            <div className="container">
                <div className="mb-8 h-10 w-64 animate-pulse rounded-lg bg-(--border-color) lg:mb-12" />

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <CategoryCardSkeleton
                            key={index}
                            className="h-[170px] w-full sm:h-[200px] lg:h-[220px]"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function HomeSkeleton() {
    return (
        <>
            {/* Categories */}
            <CategoriesSkeleton />

            {/* Banner */}
            <BannerSkeleton />

            {/* Flash Sales */}
            <ProductSectionSkeleton />

            {/* Banner */}
            <BannerSkeleton />

            {/* Best Seller */}
            <ProductSectionSkeleton />

            {/* Banner */}
            <BannerSkeleton />

            {/* Brands */}
            <BrandsSkeleton />

            {/* Banner */}
            <BannerSkeleton />

            {/* Top Rated */}
            <ProductSectionSkeleton />
        </>
    );
}