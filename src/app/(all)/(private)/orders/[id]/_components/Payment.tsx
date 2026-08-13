import { Check, CreditCard } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'

type Props = {
    order: any;
}

export default function Payment({ order }: Props) {
    const t = useTranslations();

    return (
        <section className="rounded-[10px] border border-(--border-dark) bg-(--bg-tertiary) p-4 sm:p-5">
            {/* Header */}
            <div className="mb-5 flex items-center gap-2.5">
                <CreditCard
                    size={24}
                    className="text-(--main)"
                />

                <h2 className="text-[18px] font-semibold text-(--text-primary) sm:text-[20px]">
                    5. {t("orderDetailsPaymentMethod")}
                </h2>
            </div>

            {/* Payment Details */}
            <div className="space-y-4">
                {/* Payment Method */}
                <div className="flex items-center justify-between gap-4">
                    <p className="text-[14px] font-semibold text-(--text-primary) sm:text-[16px]">
                        {t("orderDetailsPaymentMethod")}
                    </p>

                    <p className="text-right text-[14px] text-(--text-muted) sm:text-[16px]">
                        Visa Card
                    </p>
                </div>

                {/* Payment Status */}
                <div className="flex items-center justify-between gap-4">
                    <p className="text-[14px] font-semibold text-(--text-primary) sm:text-[16px]">
                        {t("orderDetailsPaymentStatus")}
                    </p>

                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-(--success) bg-[rgba(34,197,94,0.08)] px-2.5 py-1 text-[14px] font-medium text-(--success) sm:text-[14px]">
                        <Check size={14} strokeWidth={2.5} />
                        {order.payment}
                    </span>
                </div>

                {/* Payment Date */}
                <div className="flex items-center justify-between gap-4">
                    <p className="text-[14px] font-semibold text-(--text-primary) sm:text-[16px]">
                        {t("orderDetailsPaymentDate")}
                    </p>

                    <p className="text-right text-[14px] text-(--text-muted) sm:text-[16px]">
                        Aug 13, 2026 at 09:45 AM
                    </p>
                </div>
            </div>
        </section>
    )
}