import React from 'react'
import { SectionHeader } from './SectionHeader'
import Link from 'next/link'
import { MoreHorizontal, Plus } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Payment() {
    const t = useTranslations();

    return (
        <section className="mb-4 overflow-hidden rounded-2xl border border-(--border-dark) bg-(--bg-tertiary)">

            <SectionHeader
                title={t("paymentMethods")}
                action={t("managePaymentMethods")}
            />

            <div className="p-2 sm:p-3">

                <div className="flex items-center justify-between rounded-2xl border border-(--border-dark) bg-(--bg-primary) p-3">
                    <div className="flex items-center gap-2.5">

                        <div className="flex px-4 py-2 items-center justify-center rounded-[6px] bg-[#1d4ed8] text-[11px] font-semibold text-white">
                            VISA
                        </div>

                        <div>
                            <div className="flex items-center gap-1.5">
                                <p className="text-[14px] font-semibold text-(--text-primary)">
                                    {t("visaEndingIn")} 4242
                                </p>

                                <span className="rounded-full bg-[rgba(104,58,208,0.12)] py-2 px-3 text-[12px] font-medium text-(--white) border border-(--main)">
                                    {t("default")}
                                </span>
                            </div>

                            <p className="mt-0.5 text-[12px] text-(--text-muted)">
                                {t("expires")} 12/27
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="flex text-(--text-muted) transition-colors hover:text-(--text-primary)"
                    >
                        <MoreHorizontal size={18} />
                    </button>
                </div>

                <Link
                    href="/profile/payment-methods/new"
                    className="mt-2 flex py-2 items-center justify-center gap-1.5 rounded-[12px] border border-(--main) text-[18px] font-medium text-(--main) transition-colors hover:bg-[rgba(104,58,208,0.08)]"
                >
                    <Plus size={24} />
                    {t("addPaymentMethod")}
                </Link>
            </div>
        </section>
    )
}
