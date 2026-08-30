"use client";

import { useAppSelector } from "@/rtk/hooks";

export function DescriptionContent() {
    const { product } = useAppSelector((s) => s.productDetails);

    if (!product?.description) {
        return null;
    }

    return (
        <div
            className="text-[14px] leading-7 text-[var(--text-secondary)]"
            dangerouslySetInnerHTML={{
                __html: product.description,
            }}
        />
    );
}