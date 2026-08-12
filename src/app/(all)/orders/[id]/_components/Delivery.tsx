import { Truck } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React from 'react'

type Props = {}

export default function Delivery({ }: Props) {
    const t = useTranslations();
    return (
        <section className="rounded-sm border border-(--border-dark) bg-(--bg-tertiary) p-4">
            <div className="mb-4 flex items-center gap-2.5">
                <Truck size={24} className="text-(--main)" />
                <h2 className="text-[20px] font-semibold">4. {t("orderDetailsShippingMethod")}</h2>
            </div>
            <div className="grid grid-cols-1 gap-3 text-[14px] sm:grid-cols-2">
                <div className='flex justify-between sm:block'>
                    <p className="font-semibold">{t("orderDetailsDeliveryMethod")}</p>
                    <p className="mt-1 text-(--text-muted)">Standard</p>
                </div>
                <div className='flex justify-between sm:block'>
                    <p className="font-semibold">{t("orderDetailsShippingCompany")}</p>
                    <p className="mt-1 text-(--text-muted)">MK Express</p>
                </div>
                <div className='flex justify-between sm:block'>
                    <p className="font-semibold">{t("orderDetailsTrackingNumber")}</p>
                    <p className="mt-1 text-(--main)">TRK-923974</p>
                </div>
                <div className='flex justify-between sm:block'>
                    <p className="font-semibold">{t("ordersEstimatedDelivery")}</p>
                    <p className="mt-1 text-(--text-muted)">Aug 13, 2026</p>
                </div>
            </div>
        </section>

    )
}