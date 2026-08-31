"use client";

import FavoriteButton from "@/components/ProductCard/FavoriteButton";
import { Product } from "@/utils/dtos";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    products: Product[];
};

export default function Products({ products }: Props) {
    const t = useTranslations();

    return (
        <div className="space-y-2.5">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="
                        group
                        flex min-w-0 items-center gap-3
                        rounded-xl
                        border border-(--border-dark)
                        bg-(--bg-primary)
                        px-3 py-2.5
                        transition-all duration-200
                        hover:border-(--main)
                        hover:shadow-sm
                    "
                >
                    {/* Product Image */}
                    <Link
                        href={`/categories/${product.category.id}/${product.id}`}
                        className="
                            relative
                            h-16 w-16
                            shrink-0
                            overflow-hidden
                            rounded-lg
                            bg-(--bg-secondary)
                        "
                    >
                        <Image
                            src={product.primary_image}
                            alt={product.name}
                            fill
                            sizes="64px"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>

                    {/* Product Info */}
                    <div className="min-w-0 flex-1">
                        <Link
                            href={`/categories/${product.category.id}/${product.id}`}
                        >
                            <h3
                                className="
                                    truncate
                                    text-sm
                                    font-semibold
                                    text-(--text-primary)
                                    transition-colors
                                    hover:text-(--main)
                                    sm:text-[15px]
                                "
                            >
                                {product.name}
                            </h3>
                        </Link>

                        <div className="mt-1 flex min-w-0 items-center gap-1.5">
                            {product.category?.name && (
                                <span className="truncate text-xs text-(--text-muted)">
                                    {product.category.name}
                                </span>
                            )}

                            {product.brand?.name && (
                                <>
                                    <span className="shrink-0 text-(--text-muted)">
                                        ·
                                    </span>

                                    <span className="truncate text-xs text-(--text-muted)">
                                        {product.brand.name}
                                    </span>
                                </>
                            )}
                        </div>

                        {/* Price - Mobile */}
                        <div className="mt-1.5 flex items-center gap-2 sm:hidden">
                            <span className="text-sm font-bold text-(--text-primary)">
                                ${product.final_price}
                            </span>

                            {product.discount_info && (
                                <span className="text-[11px] text-(--main)">
                                    {product.discount_info}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Price - Desktop */}
                    <div className="hidden min-w-22 shrink-0 text-end sm:block">
                        <p className="text-sm font-bold text-(--text-primary)">
                            ${product.final_price}
                        </p>

                        {product.discount_info && (
                            <p className="mt-0.5 text-[11px] text-(--main)">
                                {product.discount_info}
                            </p>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex shrink-0 items-center gap-1.5">
                        {/* View */}
                        <Link
                            href={`/categories/${product.category.id}/${product.id}`}
                            className="
                                hidden
                                rounded-lg
                                border border-(--main)
                                bg-[rgba(104,58,208,0.10)]
                                px-3 py-1.5
                                text-xs font-medium
                                text-(--main)
                                transition-colors
                                hover:bg-[rgba(104,58,208,0.18)]
                                sm:block
                            "
                        >
                            {t("view")}
                        </Link>

                        {/* Wishlist */}
                        <FavoriteButton
                            productId={product.id}
                            isFavorite={product.in_wishlist}
                            className="h-8 w-8 rounded-lg p-0"
                            iconClassName="h-4 w-4"
                        />

                        {/* Remove */}
                        {/* <button
                            type="button"
                            aria-label={t("remove")}
                            className="
                                flex h-8 w-8
                                items-center justify-center
                                rounded-lg
                                border border-(--border-dark)
                                text-(--text-muted)
                                transition-colors
                                hover:border-red-500
                                hover:text-red-500
                            "
                        >
                            <X
                                size={17}
                                strokeWidth={1.8}
                            />
                        </button> */}
                    </div>
                </div>
            ))}
        </div>
    );
}