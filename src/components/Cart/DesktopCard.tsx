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
            <div className="w-[175px] shrink-0 self-stretch overflow-hidden rounded-lg bg-black sm:w-[260px]">
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
                    {/* Stock Status */}
                    <div className="flex items-center gap-2 rounded-full bg-green-500/10 py-3 pl-2 pr-3.5 text-xs font-medium text-green-500">
                        <Dot size={16} strokeWidth={6} />
                        <span>{t("inStock")}</span>
                    </div>

                    {/* Delete */}
                    <button
                        type="button"
                        className="z-10 text-red-500 transition-colors hover:text-red-400"
                    >
                        <Trash2 size={20} strokeWidth={1.8} />
                    </button>
                </div>

                {/* Name + Price */}
                <div className="flex flex-col gap-3">
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    size={15}
                                    className="fill-yellow-400 text-yellow-400"
                                />
                            ))}
                        </div>

                        <span className="text-[14px] text-gray-400">
                            {product.rating}.0
                        </span>
                    </div>

                    <div className="flex justify-between gap-6">
                        <h3 className="text-sm font-semibold leading-5 text-white sm:text-lg">
                            {product.name}
                        </h3>

                        <div className="shrink-0">
                            <p className="text-xl font-bold text-white">
                                ${product.price.toFixed(2)}
                            </p>

                            <div className="flex items-center gap-1 text-sm">
                                <span className="text-gray-500 line-through">
                                    ${product.oldPrice.toFixed(2)}
                                </span>

                                <span className="text-gray-400">
                                    {t("tenPercentOff")}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-[12px] leading-4 text-gray-400">
                        {product.description}
                    </p>
                </div>

                {/* Bottom Actions */}
                <div className="mt-auto flex flex-col gap-2">
                    {/* Delivery */}
                    <div className="w-fit rounded-full border border-[#683AD0] bg-[#683AD040] px-2 py-1 text-[12px] text-white">
                        {t("getItBy")} {" "}
                        <span className="text-[#9b6cff]">
                            {product.delivery}
                        </span>
                    </div>

                    <div className="flex flex-col justify-between gap-2 sm:flex-row">
                        <div className="flex gap-2">
                            {/* Free Shipping */}
                            <div className="flex items-center gap-2 rounded-[10px] border border-[#683AD0] bg-[#683AD040] px-2 py-1.5 text-[12px] text-white">
                                <Truck size={24} />
                                <span>{t("freeShipping")}</span>
                            </div>

                            {/* Warranty */}
                            <div className="flex items-center gap-2 rounded-[10px] border border-[#683AD0] bg-[#683AD040] px-2 py-1.5 text-[12px] text-white">
                                <ShieldCheck size={24} />
                                <span>{t("twoYearsWarranty")}</span>
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="flex items-center gap-4 rounded-[10px] border border-[#683AD0] px-2 py-1">
                            <button
                                type="button"
                                className="rounded-full border border-white p-0.5 text-white transition hover:bg-[#683AD0]/20"
                            >
                                <Minus size={14} />
                            </button>

                            <span className="text-[14px] text-white">
                                01
                            </span>

                            <button
                                type="button"
                                className="rounded-full border border-white p-0.5 text-white transition hover:bg-[#683AD0]/20"
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