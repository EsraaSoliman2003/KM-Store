import { ArrowRight, Download, FileText, Headphones, Link, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'

type Props = {
    order: any;
}

export default function Side({ order }: Props) {
    const t = useTranslations();

    return (
        <aside className="flex min-w-0 flex-col gap-5 col-span-1">
            {/* ملخص الطلب */}
            <section className="rounded-sm border border-(--border-dark) bg-(--bg-tertiary) p-4">
                <div className="mb-4 flex items-center gap-2">
                    <FileText size={24} className="text-(--main)" />
                    <h2 className="text-[24px] font-semibold">{t("orderDetailsOrderSummary")}</h2>
                </div>
                <div className="space-y-3 text-[14px]">
                    <div className="flex items-center justify-between gap-2">
                        <span className="text-(--text-muted)">{t("orderDetailsSubtotal")} ({order.productsNumbers} {t("ordersItems")})</span>
                        <span className="font-medium">{order.subtotal}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-(--text-muted)">{t("orderDetailsDiscount")}</span>
                        <span className="font-medium text-(--success)">{order.discount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-(--text-muted)">{t("orderDetailsShipping")}</span>
                        <span className="font-medium">{order.shipping}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-(--text-muted)">{t("orderDetailsTax")}</span>
                        <span className="font-medium">{order.tax}</span>
                    </div>
                    <div className="border-t border-(--border-dark) pt-3">
                        <div className="flex items-center justify-between">
                            <span className="font-semibold">{t("ordersTotal")}</span>
                            <span className="font-bold text-(--main)">{order.total}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* مساعدة */}
            <section className="rounded-sm border border-(--border-dark) bg-(--bg-tertiary) p-4">
                {/* Header */}
                <div className="flex items-center gap-2">
                    <Headphones
                        size={24}
                        className="text-(--main)"
                    />

                    <h2 className="text-[24px] font-semibold text-(--text-primary)">
                        {t("orderDetailsNeedHelp")}
                    </h2>
                </div>

                {/* Description */}
                <p className="mt-2.5 text-[14px] leading-5 text-(--text-secondary)">
                    {t("orderDetailsNeedHelpDescription")}
                </p>

                {/* Contact Support */}
                <div className="mt-4">
                    <button
                        type="button"
                        className="flex w-full h-10.5 items-center justify-center gap-2 rounded-sm border border-(--main) bg-transparent text-[18px] font-medium text-(--main) transition-colors hover:bg-(--main)/10"
                    >
                        {t("orderDetailsContactSupport")}

                        <ArrowRight
                            size={24}
                            strokeWidth={2}
                        />
                    </button>
                </div>
            </section>

            {/* تحميل الفاتورة */}
            <button
                type="button"
                className="flex h-10.5 items-center justify-center gap-2 rounded-sm border border-(--main) bg-transparent text-[18px] font-medium text-(--main) transition-colors hover:bg-(--main)/10"
            >
                <Download size={24} />
                {t("orderDetailsDownloadInvoice")}
            </button>

            {/* إلغاء الطلب */}
            <button
                type="button"
                className="flex h-10.5 items-center justify-center gap-2 rounded-sm border border-(--error) bg-transparent text-[18px] font-medium text-(--error) transition-colors hover:bg-(--error)/10"
            >
                {t("ordersCancelOrder")}
            </button>
        </aside>
    )
}