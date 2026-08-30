"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/rtk/hooks";

export default function Variants() {
    const t = useTranslations();
    const { product } = useAppSelector((s) => s.productDetails);

    const variants = product?.variants ?? [];

    const [selectedColor, setSelectedColor] = useState("");

    // Select the first variant when product data is loaded
    useEffect(() => {
        if (variants.length > 0) {
            setSelectedColor(variants[0].name);
        }
    }, [product]);

    if (!variants.length) {
        return null;
    }

    const selectedVariant = variants.find(
        (variant) => variant.name === selectedColor
    );

    return (
        <div className="mt-6">
            {/* Selected Color */}
            <div className="text-[15px] text-[var(--text-muted)]">
                {t("colorLabel")}:{" "}
                <span className="font-medium text-[var(--text-primary)]">
                    {selectedVariant?.name}
                </span>
            </div>

            {/* Colors */}
            <div className="mt-3 flex items-center gap-3">
                {variants.map((variant) => (
                    <button
                        key={variant.name}
                        type="button"
                        title={variant.name}
                        aria-label={`${t("selectColor")} ${variant.name}`}
                        onClick={() => setSelectedColor(variant.name)}
                        className={`h-[30px] w-[30px] rounded-full transition-all duration-200 ${
                            selectedColor === variant.name
                                ? "ring-2 ring-[var(--main)] ring-offset-2 ring-offset-[var(--bg-tertiary)]"
                                : "hover:scale-110"
                        }`}
                        style={{
                            backgroundColor: variant.value,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}