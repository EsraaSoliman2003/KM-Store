import { phone } from '@/assets'
import { useTranslations } from 'next-intl';
import Image from 'next/image'

export default function ProductSummary() {
    const t = useTranslations();

    return (
        <section className="rounded-[12px] border border-(--border-dark)">
            <div className="flex items-center gap-3 p-3 sm:gap-5 sm:p-0">
                {/* Image */}
                <div className="relative h-[90px] w-[75px] shrink-0 overflow-hidden rounded-[10px] sm:h-[200px] sm:w-[200px]">
                    <Image
                        src={phone}
                        alt={t("iphone15ProMax")}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Details */}
                <div className="flex min-w-0 flex-1 items-center justify-between gap-3 sm:pl-0! sm:p-5">
                    {/* Product Info */}
                    <div className="min-w-0 flex-1">
                        <h2 className="truncate text-sm font-semibold capitalize sm:text-lg">
                            {t("iphone15ProMax")}
                        </h2>

                        <p className="mt-1 truncate text-xs text-[var(--text-muted)] sm:mt-1.5 sm:text-sm">
                            {t("deepPurple256GB")}
                        </p>

                        {/* Mobile Qty + Total */}
                        <div className="mt-1 flex items-center justify-between gap-2 sm:hidden flex-end items-end">
                            <span className="inline-flex h-fit shrink-0 rounded-full border border-[var(--main)]/60 bg-[var(--main)]/10 px-2.5 py-1 text-[10px] font-medium text-[var(--main)]">
                                {t("qty")} · 1
                            </span>

                            <div className="shrink-0">
                                <p className="text-[10px] font-medium uppercase tracking-wide text-[var(--text-muted)]">
                                    {t("total")}:
                                </p>

                                <p className="mt-0.5 whitespace-nowrap text-sm font-semibold text-[var(--text-primary)]">
                                    1199.00 $
                                </p>
                            </div>
                        </div>

                        {/* Desktop Qty */}
                        <span className="mt-3 hidden h-fit w-fit rounded-full border border-[var(--main)]/60 bg-[var(--main)]/10 px-3 py-1 text-xs font-medium text-[var(--main)] sm:inline-flex">
                            {t("qty")} · 1
                        </span>
                    </div>

                    {/* Desktop Total */}
                    <div className="hidden shrink-0 sm:block sm:min-w-[120px]">
                        <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
                            {t("total")}:
                        </p>

                        <p className="mt-1 whitespace-nowrap text-lg font-semibold text-[var(--text-primary)]">
                            1199.00 $
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}