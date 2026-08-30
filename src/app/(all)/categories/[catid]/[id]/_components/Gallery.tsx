"use client";

import { useAppSelector } from "@/rtk/hooks";
import React, { useEffect, useState } from "react";

export default function Gallery() {
    const { product } = useAppSelector((s) => s.productDetails);

    const [selectedImage, setSelectedImage] = useState<string | undefined>(
        product?.primary_image
    );

    // Update selected image when product changes
    useEffect(() => {
        setSelectedImage(product?.primary_image);
    }, [product]);

    if (!product) return null;

    return (
        <div className="min-w-0">
            {/* Main Image */}
            <div className="relative mx-auto aspect-square w-full max-w-[470px] overflow-hidden rounded-[14px] border border-[var(--border-dark)] bg-[var(--bg-tertiary)] shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                <img
                    src={selectedImage}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
            </div>

            {/* Thumbnails */}
            <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-3">
                {product.images?.map((img, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setSelectedImage(img)}
                        className={`relative aspect-square min-w-0 overflow-hidden rounded-[9px] border bg-[var(--bg-tertiary)] transition-all duration-200 ${selectedImage === img
                                ? "border-[var(--main)] shadow-[0_0_0_1px_var(--main)]"
                                : "border-[var(--border-dark)] hover:border-[var(--text-muted)]"
                            }`}
                    >
                        <img
                            src={img}
                            alt={`${product.name} ${index + 1}`}
                            className="h-full w-full object-cover"
                        />

                        {selectedImage === img && (
                            <span className="absolute inset-0 bg-[var(--main)]/5" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}