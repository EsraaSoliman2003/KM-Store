import { useTranslations } from 'next-intl'
import React from 'react'

export default function BalanceCards() {
    const t = useTranslations();

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Card 1 */}
            <div className="relative h-[204px] overflow-hidden rounded-[22px] bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 p-5 text-white">
                {/* Decorative circles */}
                <div className="absolute -right-16 -top-24 h-56 w-56 rounded-full bg-purple-500/30" />
                <div className="absolute -bottom-32 -left-20 h-56 w-56 rounded-full bg-indigo-900/25" />

                <div className="relative z-10 flex h-full flex-col">
                    <p className="text-[12px] text-white/60">
                        {t("currentBalance")}
                    </p>

                    <p className="mt-2 text-[22px] font-medium">
                        $5,750,20
                    </p>

                    <div className="mt-auto flex items-end justify-between">
                        <p className="text-[11px] tracking-wide text-white/90">
                            5282 3456 7890 1289
                        </p>

                        <div className="flex flex-col items-end">
                            <div className="flex -space-x-1">
                                <span className="h-7 w-7 rounded-full bg-red-600" />
                                <span className="h-7 w-7 rounded-full bg-orange-400" />
                            </div>

                            <span className="mt-0.5 text-[8px] font-medium">
                                mastercard
                            </span>
                        </div>

                        <p className="text-[11px]">
                            09/25
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="relative h-[204px] overflow-hidden rounded-[22px] bg-gradient-to-br from-rose-600 to-red-500 p-5 text-white">
                {/* Decorative circles */}
                <div className="absolute -right-16 -top-24 h-56 w-56 rounded-full bg-red-900/20" />
                <div className="absolute -bottom-32 -left-20 h-56 w-56 rounded-full bg-red-800/20" />

                <div className="relative z-10 flex h-full flex-col">
                    <p className="text-[12px] text-white/60">
                        {t("currentBalance")}
                    </p>

                    <p className="mt-2 text-[22px] font-medium">
                        $4,570,80
                    </p>

                    <div className="mt-auto flex items-end justify-between">
                        <p className="text-[11px] tracking-wide text-white/90">
                            5294 2436 4780 2468
                        </p>

                        <div className="flex flex-col items-end">
                            <div className="flex -space-x-1">
                                <span className="h-7 w-7 rounded-full bg-red-700" />
                                <span className="h-7 w-7 rounded-full bg-orange-400" />
                            </div>

                            <span className="mt-0.5 text-[8px] font-medium">
                                mastercard
                            </span>
                        </div>

                        <p className="text-[11px]">
                            12/24
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
