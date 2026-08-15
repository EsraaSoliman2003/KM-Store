import { bags } from '@/assets';
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function Success() {
    const t = useTranslations();

    return (
        <>
            {/* Illustration */}
            <div className="relative mb-6 h-[190px] w-[190px] sm:mb-7 sm:h-[230px] sm:w-[230px] md:h-[250px] md:w-[250px] lg:mb-8 lg:h-[187px] lg:w-[280px]">
                <Image
                    src={bags}
                    alt={t("orderConfirmedAlt")}
                    fill
                    priority
                    className="relative object-contain"
                />
            </div>

            {/* Confirmation Message */}
            <div className="w-full max-w-[440px] px-4 text-center sm:px-0">
                <h1 className="text-lg font-semibold leading-tight sm:text-xl md:text-2xl">
                    {t("orderConfirmedTitle")}
                </h1>

                <p className="mt-2 text-xs leading-5 text-gray-400 sm:text-sm">
                    {t("orderConfirmedPlaced")}
                </p>

                <p className="text-xs leading-5 text-gray-400 sm:text-sm">
                    {t("orderConfirmedPreparing")}
                </p>
            </div>
        </>
    )
}
