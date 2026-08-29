"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import { useEffect, useRef } from "react";
import MobileFilter from "../Filters/MobileFilter";
import DesktopFilter from "../Filters/DesktopFilter";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { getProducts } from "@/rtk/slices/productsSlice";
import ProductCardSkeleton from "@/skeleton/ProductCardSkeleton";
import EmptyState from "../EmptyState/EmptyState";

type Prop = {
    text?: string;
    noCats?: boolean;
};

export default function Products({
    text = "All Products",
    noCats = false,
}: Prop) {
    const dispatch = useAppDispatch();

    const {
        productsLoading,
        products,
        pagination,
    } = useAppSelector((s) => s.products);

    const loadMoreRef = useRef<HTMLDivElement | null>(
        null
    );

    // ===========================
    // Initial Products
    // ===========================

    useEffect(() => {
        void dispatch(
            getProducts({
                page: 1,
                per_page: 15,
            })
        );
    }, [dispatch]);

    // ===========================
    // Infinite Scroll
    // ===========================

    useEffect(() => {
        const element = loadMoreRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const firstEntry = entries[0];

                if (!firstEntry.isIntersecting) {
                    return;
                }

                if (productsLoading) {
                    return;
                }

                if (!pagination) {
                    return;
                }

                const currentPage =
                    pagination.current_page;

                const lastPage =
                    pagination.last_page;

                if (currentPage >= lastPage) {
                    return;
                }

                void dispatch(
                    getProducts({
                        page: currentPage + 1,
                        per_page: pagination.per_page,
                    })
                );
            },
            {
                rootMargin: "300px",
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [
        dispatch,
        pagination,
        productsLoading,
    ]);

    return (
        <section className="py-8">
            <div className="container">

                {/* ===========================
                    Title
                =========================== */}

                <div className="mb-7 flex items-center justify-between">
                    <h1 className="text-2xl font-bold sm:text-3xl">
                        {text}
                    </h1>

                    <MobileFilter noCats={noCats} />
                </div>

                <div className="flex flex-col gap-4 lg:flex-row lg:items-start">

                    {/* ===========================
                        FILTER SIDEBAR
                    =========================== */}

                    <DesktopFilter noCats={noCats} />

                    {/* ===========================
                        PRODUCTS
                    =========================== */}

                    <div className="min-w-0 flex-1">

                        {/* Initial Loading */}

                        {productsLoading &&
                        products.length === 0 ? (
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                                {Array.from({
                                    length: 8,
                                }).map((_, index) => (
                                    <ProductCardSkeleton
                                        key={index}
                                    />
                                ))}
                            </div>
                        ) : products.length === 0 ? (
                            <EmptyState
                                title="test"
                                description="test"
                            />
                        ) : (
                            <>
                                {/* Products */}

                                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                                    {products.map(
                                        (product) => (
                                            <ProductCard
                                                key={
                                                    product.id
                                                }
                                                product={
                                                    product
                                                }
                                            />
                                        )
                                    )}
                                </div>

                                {/* ===========================
                                    Loading More
                                =========================== */}

                                {productsLoading && (
                                    <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                                        {Array.from({
                                            length: 4,
                                        }).map(
                                            (_, index) => (
                                                <ProductCardSkeleton
                                                    key={
                                                        index
                                                    }
                                                />
                                            )
                                        )}
                                    </div>
                                )}

                                {/* ===========================
                                    Intersection Observer Target
                                =========================== */}

                                {pagination &&
                                    pagination.current_page <
                                        pagination.last_page && (
                                        <div
                                            ref={
                                                loadMoreRef
                                            }
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