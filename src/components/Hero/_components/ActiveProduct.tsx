import React from "react";
import { useTranslations } from "next-intl";

type Props = {
    activeProduct: any;
};

export default function ActiveProduct({ activeProduct }: Props) {
    const t = useTranslations();
    const isRtl = t("dir") === "rtl";

    return (
        <div
            className={`relative z-20 flex h-full items-center ${
                isRtl
                    ? "-mr-10 min-[1280px]:mr-20"
                    : "-ml-10 min-[1280px]:ml-20"
            }`}
        >
            {/* Glow */}
            <div
                className="absolute h-105 w-50 animate-pulse rounded-full blur-3xl"
                style={{
                    background: `linear-gradient(
                        to right,
                        ${activeProduct.color}10,
                        ${activeProduct.color}33,
                        ${activeProduct.color}10
                    )`,
                }}
            />

            {/* Fixed Size Container */}
            <div className="relative flex h-130 w-[320px] items-center justify-center">
                <img
                    src={activeProduct.image}
                    alt={activeProduct.title}
                    className="max-h-full max-w-full object-contain transition-all duration-700"
                    style={{
                        filter: `drop-shadow(0 0 60px ${activeProduct.color}55)`,
                    }}
                />
            </div>
        </div>
    );
}