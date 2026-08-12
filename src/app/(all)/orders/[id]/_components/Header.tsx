import { useTranslations } from 'next-intl'
import React from 'react'

export default function Header() {
    const t = useTranslations();
    return (
        <div className="mb-9">
            <h1 className="text-[26px] font-bold leading-tight text-[var(--text-primary)] sm:text-[28px]">
                {t("orderDetailsPageTitle")}
            </h1>
            <p className="mt-1.5 text-[15px] text-[var(--text-secondary)]">
                {t("orderDetailsSubtitle") || "تفاصيل الطلب"}
            </p>
        </div>
    )
}
