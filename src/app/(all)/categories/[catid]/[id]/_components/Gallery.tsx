"use client";

import { useAppSelector } from "@/rtk/hooks";
import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function Gallery() {
    const { product } = useAppSelector((s) => s.productDetails);

    const [selectedImage, setSelectedImage] = useState<string | undefined>(
        product?.primary_image
    );

    // Combine primary image with other product images
    const images = useMemo(() => {
        if (!product) return [];

        const allImages = [
            product.primary_image,
            ...(product.images ?? []),
        ].filter(Boolean);

        // Remove duplicate images
        return [...new Set(allImages)];
    }, [product]);

    // Update selected image when product changes
    useEffect(() => {
        setSelectedImage(product?.primary_image);
    }, [product]);

    if (!product || !images.length) return null;

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

            {/* Thumbnails Swiper */}
            {images.length > 1 && (
                <div className="mt-4 w-full">
                    <Swiper
                        spaceBetween={8}
                        slidesPerView="auto"
                        className="w-full"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide
                                key={`${img}-${index}`}
                                className="
                                    !w-[72px]
                                    sm:!w-[82px]
                                    md:!w-[90px]
                                "
                            >
                                <button
                                    type="button"
                                    onClick={() => setSelectedImage(img)}
                                    className={`relative aspect-square w-full overflow-hidden rounded-[9px] border bg-[var(--bg-tertiary)] transition-all duration-200 ${selectedImage === img
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
}