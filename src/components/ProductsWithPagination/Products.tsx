"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import { useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { getProducts } from "@/rtk/slices/productsSlice";
import ProductCardSkeleton from "@/skeleton/ProductCardSkeleton";
import { useTranslations } from "next-intl";
import MobileFilter from "@/components/Filters/MobileFilter";
import DesktopFilter from "@/components/Filters/DesktopFilter";
import EmptyState from "@/components/EmptyState/EmptyState";

type Props = {
    categoryId?: number;
    title?: string;
    noCats?: boolean;
};

export default function Products({
    categoryId,
    title = "All Products",
    noCats = false,
}: Props) {
    const t = useTranslations();
    const dispatch = useAppDispatch();
    const searchParams = useSearchParams();

    const {
        productsLoading,
        products,
        pagination,
    } = useAppSelector((s) => s.products);

    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    const query = searchParams.toString();

    const filters = useMemo(
        () => ({
            category_id:
                categoryId ??
                (searchParams.get("category")
                    ? Number(searchParams.get("category"))
                    : undefined),

            brand_id: searchParams.get("brand")
                ? Number(searchParams.get("brand"))
                : undefined,

            min_price: searchParams.get("minPrice")
                ? Number(searchParams.get("minPrice"))
                : undefined,

            max_price: searchParams.get("maxPrice")
                ? Number(searchParams.get("maxPrice"))
                : undefined,
        }),
        [categoryId, query]
    );

    // Fetch products
    useEffect(() => {
        void dispatch(
            getProducts({
                ...filters,
                page: 1,
                per_page: 15,
            })
        );
    }, [dispatch, filters]);

    // Infinite scroll
    useEffect(() => {
        const element = loadMoreRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (
                    !entry.isIntersecting ||
                    productsLoading ||
                    !pagination ||
                    pagination.current_page >= pagination.last_page
                ) {
                    return;
                }

                void dispatch(
                    getProducts({
                        ...filters,
                        page: pagination.current_page + 1,
                        per_page: pagination.per_page,
                    })
                );
            },
            {
                rootMargin: "300px",
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [
        dispatch,
        filters,
        pagination,
        productsLoading,
    ]);

    return (
        <section className="py-8">
            <div className="container">
                <div className="mb-7 flex items-center justify-between">
                    <h1 className="text-2xl font-bold sm:text-3xl">
                        {title}
                    </h1>

                    <MobileFilter noCats={noCats} />
                </div>

                <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
                    <DesktopFilter noCats={noCats} />

                    <div className="min-w-0 flex-1">
                        {productsLoading && products.length === 0 ? (
                            <ProductSkeletonGrid count={8} />
                        ) : products.length === 0 ? (
                            <EmptyState
                                title={t("noProductsFound")}
                                description={t(
                                    "noProductsFoundDescription"
                                )}
                            />
                        ) : (
                            <>
                                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                                    {products.map((product) => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                        />
                                    ))}
                                </div>

                                {productsLoading && (
                                    <div className="mt-4">
                                        <ProductSkeletonGrid count={4} />
                                    </div>
                                )}

                                {pagination &&
                                    pagination.current_page <
                                        pagination.last_page && (
                                        <div
                                            ref={loadMoreRef}
                                            className="h-10 w-full"
                                        />
                                    )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProductSkeletonGrid({ count }: { count: number }) {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: count }).map((_, index) => (
                <ProductCardSkeleton key={index} />
            ))}
        </div>
    );
}