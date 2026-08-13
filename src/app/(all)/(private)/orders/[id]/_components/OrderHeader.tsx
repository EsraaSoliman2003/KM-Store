import { ArrowLeft, ArrowRight, CheckCircle2, Truck } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

type Prop = {
    order: any;
};

export default function OrderHeader({ order }: Prop) {
    const t = useTranslations();

    return (
        <section className="mb-5 rounded-sm border border-(--border-dark) bg-(--bg-tertiary) p-4 transition-colors duration-300 sm:p-5">
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-5 lg:gap-0">

                {/* رقم الطلب والتاريخ */}
                <div className={`col-span-2 flex flex-col justify-center border-b border-(--border-dark) pb-4 lg:col-span-1 lg:border-b-0 ${t("dir") === "ltr" && "lg:border-r lg:pr-6"} lg:pb-0`}>
                    <p className="text-[17px] font-semibold text-(--text-primary) sm:text-[18px]">
                        {t("ordersOrder")} {order.id}
                    </p>

                    <p className="mt-1 text-[12px] text-(--text-muted)">
                        {t("orderDetailsPlacedOn")} {order.placedAt}
                    </p>
                </div>

                {/* الحالة */}
                <div className="flex min-w-0 flex-col justify-center border-r border-(--border-dark) pr-3 lg:border-b-0 lg:border-r lg:px-6 lg:pb-0 lg:pr-6">
                    <p className="mb-1.5 text-[13px] text-(--text-muted) sm:text-[14px]">
                        {t("orderDetailsStatus")}
                    </p>

                    <div className="inline-flex w-fit max-w-full items-center gap-1.5 rounded-sm border border-(--main) bg-[rgba(104,58,208,0.08)] px-2.5 py-1.5 text-[13px] font-medium text-(--main) sm:gap-2 sm:px-3 sm:py-2 sm:text-[14px]">
                        <Truck size={16} className="shrink-0 sm:h-4.25 sm:w-4.25" />
                        <span className="truncate">
                            {t("ordersShippedStatus")}
                        </span>
                    </div>
                </div>

                {/* الدفع */}
                <div className="flex min-w-0 flex-col justify-center lg:border-b-0 lg:border-r border-(--border-dark) lg:px-6 lg:pb-0">
                    <p className="mb-1.5 text-[13px] text-(--text-muted) sm:text-[14px]">
                        {t("orderDetailsPayment")}
                    </p>

                    <div className="inline-flex w-fit max-w-full items-center gap-1.5 rounded-sm border border-(--success) bg-(--success)/10 px-2.5 py-1.5 text-[13px] font-medium text-(--success) sm:gap-2 sm:px-3 sm:py-2 sm:text-[14px]">
                        <CheckCircle2 size={16} className="shrink-0 sm:h-4.25 sm:w-4.25" />
                        <span className="truncate">
                            {order.payment}
                        </span>
                    </div>
                </div>

                {/* الإجمالي */}
                <div className="flex flex-col justify-center lg:border-b-0 lg:border-r border-(--border-dark) lg:px-6 lg:pb-0">
                    <p className="mb-1.5 text-[13px] text-(--text-muted) sm:text-[14px]">
                        {t("ordersTotal")}
                    </p>

                    <p className="text-[17px] font-semibold text-(--text-primary) sm:text-[18px]">
                        {order.total}
                    </p>
                </div>

                {/* زر التتبع */}
                <div className={`flex items-center justify-end lg:justify-end lg:pl-6 ${t("dir") === "rtl" && "border-(--border-dark) lg:border-r lg:pr-6"}`}>
                    <Link
                        href="/track-your-order"
                        className="flex h-10.5 w-full items-center justify-center gap-1.5 rounded-sm bg-(--main) px-3 text-[13px] font-medium text-(--text-white) transition-colors hover:bg-(--main-hover) sm:h-11.5 sm:gap-2 sm:px-4 sm:text-[15px] lg:w-auto lg:px-6"
                    >
                        <span className="truncate">
                            {t("ordersTrackYourOrder")}
                        </span>
                        {t("dir") === "rtl"
                            ? <ArrowLeft
                                size={16}
                                className="shrink-0 sm:h-4.25 sm:w-4.25"
                            />
                            : <ArrowRight
                                size={16}
                                className="shrink-0 sm:h-4.25 sm:w-4.25"
                            />
                        }
                    </Link>
                </div>
            </div>
        </section>
    );
}