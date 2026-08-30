"use client";

import { useAppSelector } from "@/rtk/hooks";
import { useTranslations } from "next-intl";

export function SpecificationsContent() {
    const t = useTranslations();
    const { product } = useAppSelector((s) => s.productDetails);

    if (!product?.specifications?.length) {
        return null;
    }

    return (
        <div>
            <h2 className="text-[24px] font-semibold text-[var(--main)]">
                {t("technicalSpecifications")}
            </h2>

            <div className="mt-4 overflow-hidden rounded-[8px] border border-[var(--border-dark)]">
                {product.specifications.map((specification) => (
                    <div key={specification.title}>
                        {/* Specification Group Title */}
                        <div className="bg-[var(--bg-dark-secondary)] px-4 py-3 text-[16px] font-semibold text-[var(--text-primary)] sm:px-5">
                            {specification.title}
                        </div>

                        {/* Specification Items */}
                        {specification.items.map((item, index) => (
                            <div
                                key={`${item.key}-${index}`}
                                className="grid grid-cols-2 border-t border-[var(--border-dark)]"
                            >
                                <div className="px-4 py-3 text-[14px] font-medium text-[var(--text-secondary)] sm:px-5 sm:text-[15px]">
                                    {item.key}
                                </div>

                                <div className="px-4 py-3 text-[14px] text-[var(--text-primary)]/80 sm:px-5 sm:text-[15px]">
                                    {item.value}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}