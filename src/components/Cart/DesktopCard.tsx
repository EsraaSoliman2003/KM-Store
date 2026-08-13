import { Dot, Minus, Plus, ShieldCheck, Star, Trash2, Truck } from 'lucide-react'
import { useTranslations } from "next-intl";
import React from 'react'

type Props = {
    product: any
}

export default function DesktopCard({ product }: Props) {
    const t = useTranslations();

    return (
        <div className="hidden md:flex gap-4">
            {/* Product Image */}
            <div className="w-[175px] shrink-0 self-stretch overflow-hidden rounded-lg bg-[var(--bg-tertiary)] sm:w-[260px]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Product Info */}
            <div className="flex min-w-0 flex-1 flex-col gap-3">
                {/* Stock + Rating */}
                <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-2 rounded-full bg-[var(--success)]/10 py-3 ${t("dir") === "rtl" ? "pr-2 pl-3.5" : "pl-2 pr-3.5"} text-xs font-medium text-[var(--success)]`}>
                        <Dot size={16} strokeWidth={6} />
                        <span>{t("inStock")}</span>
                    </div>

                    <button
                        type="button"
                        className="z-10 text-[var(--error)] transition-colors hover:text-[var(--error)]/80"
                    >
                        <Trash2 size={20} strokeWidth={1.8} />
                    </button>
                </div>

                {/* Name + Price */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    size={15}
                                    className="fill-[var(--warning)] text-[var(--warning)]"
                                />
                            ))}
                        </div>
                        <span className="text-[14px] text-[var(--text-muted)]">
                            {product.rating}.0
                        </span>
                    </div>

                    <div className="flex justify-between gap-6">
                        <h3 className="text-sm font-semibold leading-5 text-[var(--text-primary)] sm:text-lg">
                            {product.name}
                        </h3>

                        <div className="shrink-0">
                            <p className="text-xl font-bold text-[var(--text-primary)]">
                                ${product.price.toFixed(2)}
                            </p>
                            <div className="flex items-center gap-1 text-sm">
                                <span className="text-[var(--text-muted)] line-through">
                                    ${product.oldPrice.toFixed(2)}
                                </span>
                                <span className="text-[var(--text-muted)]">
                                    {t("tenPercentOff")}
                                </span>
                            </div>
                        </div>
                    </div>

                    <p className="text-[12px] leading-4 text-[var(--text-muted)]">
                        {product.description}
                    </p>
                </div>

                {/* Bottom Actions */}
                <div className="mt-auto flex flex-col gap-2">
                    <div className="w-fit rounded-full border border-[var(--main)] bg-[var(--main)]/25 px-2 py-1 text-[12px] text-[var(--text-primary)]">
                        {t("getItBy")}{" "}
                        <span className="text-[var(--main)]">
                            {product.delivery}
                        </span>
                    </div>

                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                        <div className="flex gap-2">
                            <div className="flex items-center gap-2 rounded-[10px] border border-[var(--main)] bg-[var(--main)]/25 px-2 py-1.5 text-[12px] text-[var(--text-primary)]">
                                <Truck size={24} />
                                <span>{t("freeShipping")}</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-[10px] border border-[var(--main)] bg-[var(--main)]/25 px-2 py-1.5 text-[12px] text-[var(--text-primary)]">
                                <ShieldCheck size={24} />
                                <span>{t("twoYearsWarranty")}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 rounded-[10px] border border-[var(--main)] px-2 py-1">
                            <button
                                type="button"
                                className="rounded-full border border-[var(--border-dark)] p-0.5 text-[var(--text-primary)] transition hover:bg-[var(--main)]/20"
                            >
                                <Minus size={14} />
                            </button>
                            <span className="text-[14px] text-[var(--text-primary)]">
                                01
                            </span>
                            <button
                                type="button"
                                className="rounded-full border border-[var(--border-dark)] p-0.5 text-[var(--text-primary)] transition hover:bg-[var(--main)]/20"
                            >
                                <Plus size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}