import { useTranslations } from 'next-intl'
import React from 'react'

export default function Loading() {
    const t = useTranslations();
    return (
        <button
            disabled
            className="cursor-not-allowed! flex w-full items-center justify-center rounded-2xl bg-[#838383] text-(--text-white) h-13 text-lg"
        >
            {t("proceedToCheckout")}
        </button>
    )
}
