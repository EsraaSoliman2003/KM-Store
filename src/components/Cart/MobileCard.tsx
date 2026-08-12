import { Minus, Plus, Trash2 } from 'lucide-react';
import { useTranslations } from "next-intl";
import React from 'react'

type Props = {
    product: any;
}

export default function MobileCard({ product }: Props) {
    const t = useTranslations();

    return (
        <div className="flex gap-3.5 md:hidden">
            <div className="h-[100px] w-[84px] shrink-0 overflow-hidden rounded-lg bg-[var(--bg-tertiary)]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4">
                    <span className="text-[11px] text-[var(--main)]">
                        {t("appleBrand")}
                    </span>
                    <button
                        type="button"
                        className="mr-1 shrink-0 text-[var(--text-muted)] transition-colors hover:text-[var(--error)]"
                    >
                        <Trash2 size={16} strokeWidth={1.5} />
                    </button>
                </div>

                <h3 className="mt-0.5 line-clamp-2 pr-4 text-[12px] font-medium leading-[16px] text-[var(--text-primary)]">
                    {product.name}
                </h3>

                <p className="mt-0.5 truncate text-[10px] text-[var(--text-muted)]">
                    {t("phoneSpec")}
                </p>

                <div className="mt-1.5 flex items-center justify-between gap-2">
                    <div className="flex min-w-0 items-center gap-1.5">
                        <span className="truncate text-[13px] font-bold text-[var(--text-primary)]">
                            ${product.price.toFixed(2)}
                        </span>
                        <span className="text-[10px] text-[var(--text-muted)] line-through">
                            ${product.oldPrice.toFixed(2)}
                        </span>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                        <button
                            type="button"
                            className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[var(--border-dark)] text-[var(--text-muted)]"
                        >
                            <Minus size={10} />
                        </button>
                        <span className="text-[11px] text-[var(--text-primary)]">
                            01
                        </span>
                        <button
                            type="button"
                            className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[var(--main)] text-[var(--main)]"
                        >
                            <Plus size={10} />
                        </button>
                    </div>
                </div>

                <div className="mt-1.5 text-[10px] text-[var(--text-muted)]">
                    {t("getItBy")}{" "}
                    <span className="text-[var(--main)]">
                        {product.delivery}
                    </span>
                </div>
            </div>
        </div>
    )
}