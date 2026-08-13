import { ArrowRight, Check, Clock3 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react'
import Timeline from '../../../track-your-order/_components/Timeline';

type OrderStatus = {
    label: string;
    date: string;
    completed: boolean;
    current?: boolean;
};

export default function Status() {
    const t = useTranslations();

    const orderStatuses: OrderStatus[] = [
        { label: t("orderDetailsOrderPlaced"), date: "Aug 08, 2026", completed: true },
        { label: t("orderDetailsConfirmed"), date: "Aug 08, 2026", completed: true },
        { label: t("orderDetailsProcessing"), date: "Aug 09, 2026", completed: true },
        { label: t("orderDetailsShipped"), date: "Aug 09, 2026", completed: true, current: true },
        { label: t("orderDetailsDelivered"), date: "--", completed: false },
    ];

    return (
        <section className="rounded-sm border border-(--border-dark) bg-(--bg-tertiary) p-4">
            <div className="mb-10 flex items-center gap-2.5">
                <Clock3 size={24} className="text-(--main)" />
                <h2 className="text-[18px] font-semibold">2. {t("orderDetailsOrderStatus")}</h2>
            </div>

            <Timeline />

            <div className="mt-6 flex flex-col gap-4 border-t border-(--border-dark) pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-[16px] font-semibold">{t("orderDetailsLatestUpdate")}</p>

                </div>
                <div>
                    <p className="mt-1 text-[14px] text-(--text-muted)">Aug 10, 2026 at 09:48 AM</p>
                    <p className="mt-1 text-[14px] text-(--text-secondary)">{t("orderDetailsOrderHasBeenShipped")}</p>
                </div>
                <Link
                    href="/track-your-order"
                    className="flex h-10.5 items-center justify-center gap-2 rounded-sm border border-(--main) px-6 text-[18px] font-medium text-(--main) transition-colors hover:bg-(--main)/10"
                >
                    {t("ordersTrackYourOrder")}
                    <ArrowRight size={18} />
                </Link>
            </div>
        </section>
    )
}