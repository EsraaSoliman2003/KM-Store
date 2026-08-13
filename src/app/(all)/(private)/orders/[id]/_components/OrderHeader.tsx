import { ArrowRight, CheckCircle2, Truck } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

type Prop = {
    order: any;
};

export default function OrderHeader({ order }: Prop) {
    const t = useTranslations();

    return (
        <section className="mb-5 rounded-[var(--radius-sm)] border border-[var(--border-dark)] bg-[var(--bg-tertiary)] p-4 transition-colors duration-300 sm:p-5">
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-5 lg:gap-0">

                {/* رقم الطلب والتاريخ */}
                <div className="col-span-2 flex flex-col justify-center border-b border-[var(--border-dark)] pb-4 lg:col-span-1 lg:border-b-0 lg:border-r lg:pr-6 lg:pb-0">
                    <p className="text-[17px] font-semibold text-[var(--text-primary)] sm:text-[18px]">
                        {t("ordersOrder")} {order.id}
                    </p>

                    <p className="mt-1 text-[12px] text-[var(--text-muted)]">
                        {t("orderDetailsPlacedOn")} {order.placedAt}
                    </p>
                </div>

                {/* الحالة */}
                <div className="flex min-w-0 flex-col justify-center border-r border-[var(--border-dark)] pr-3 lg:border-b-0 lg:border-r lg:px-6 lg:pb-0 lg:pr-6">
                    <p className="mb-1.5 text-[13px] text-[var(--text-muted)] sm:text-[14px]">
                        {t("orderDetailsStatus")}
                    </p>

                    <div className="inline-flex w-fit max-w-full items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--main)] bg-[rgba(104,58,208,0.08)] px-2.5 py-1.5 text-[13px] font-medium text-[var(--main)] sm:gap-2 sm:px-3 sm:py-2 sm:text-[14px]">
                        <Truck size={16} className="shrink-0 sm:h-[17px] sm:w-[17px]" />
                        <span className="truncate">
                            {t("ordersShippedStatus")}
                        </span>
                    </div>
                </div>

                {/* الدفع */}
                <div className="flex min-w-0 flex-col justify-center lg:border-b-0 lg:border-r border-[var(--border-dark)] lg:px-6 lg:pb-0">
                    <p className="mb-1.5 text-[13px] text-[var(--text-muted)] sm:text-[14px]">
                        {t("orderDetailsPayment")}
                    </p>

                    <div className="inline-flex w-fit max-w-full items-center gap-1.5 rounded-sm border border-[var(--success)] bg-[var(--success)]/10 px-2.5 py-1.5 text-[13px] font-medium text-[var(--success)] sm:gap-2 sm:px-3 sm:py-2 sm:text-[14px]">
                        <CheckCircle2 size={16} className="shrink-0 sm:h-[17px] sm:w-[17px]" />
                        <span className="truncate">
                            {order.payment}
                        </span>
                    </div>
                </div>

                {/* الإجمالي */}
                <div className="flex flex-col justify-center lg:border-b-0 lg:border-r border-[var(--border-dark)] lg:px-6 lg:pb-0">
                    <p className="mb-1.5 text-[13px] text-[var(--text-muted)] sm:text-[14px]">
                        {t("ordersTotal")}
                    </p>

                    <p className="text-[17px] font-semibold text-[var(--text-primary)] sm:text-[18px]">
                        {order.total}
                    </p>
                </div>

                {/* زر التتبع */}
                <div className="flex items-center justify-end lg:justify-end lg:pl-6">
                    <Link
                        href="/track-your-order"
                        className="flex h-[42px] w-full items-center justify-center gap-1.5 rounded-[var(--radius-sm)] bg-[var(--main)] px-3 text-[13px] font-medium text-[var(--text-white)] transition-colors hover:bg-[var(--main-hover)] sm:h-[46px] sm:gap-2 sm:px-4 sm:text-[15px] lg:w-auto lg:px-6"
                    >
                        <span className="truncate">
                            {t("ordersTrackYourOrder")}
                        </span>
                        <ArrowRight
                            size={16}
                            className="shrink-0 sm:h-[17px] sm:w-[17px]"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}