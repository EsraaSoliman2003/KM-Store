import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

export default function Breadcrumb() {
    const t = useTranslations();
    return (
        <div className="mb-5 flex flex-wrap items-center gap-3 text-[14px] text-[var(--text-muted)]">
            <Link href="/" className="transition-colors hover:text-[var(--text-primary)]">
                {t("home")}
            </Link>
            <ArrowRight size={15} className="text-[var(--text-muted)]" />
            <Link href="/profile" className="transition-colors hover:text-[var(--text-primary)]">
                {t("profile")}
            </Link>
            <ArrowRight size={15} className="text-[var(--text-muted)]" />
            <Link href="/my-orders" className="transition-colors hover:text-[var(--text-primary)]">
                {t("myOrders")}
            </Link>
            <ArrowRight size={15} className="text-[var(--text-muted)]" />
            <span className="font-medium text-[var(--text-primary)]">
                {t("orderDetailsPageTitle")}
            </span>
        </div>
    )
}
