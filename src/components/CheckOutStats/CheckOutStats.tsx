"use client";

import { useTranslations } from "next-intl";
import Help from "@/components/Help/Help";
import SummaryCheckout from "@/components/SummaryCheckout/SummaryCheckout";
import Success from "./Success";
import Loading from "./Loading";
import Failed from "./Failed";

export default function CheckOutStats() {
    const t = useTranslations();

    // 1 -> Loading
    // 2 -> Success
    // 3 -> Failed
    const state: number = 2;

    return (
        <section className="container mt-18 py-5 md:py-10">
            {/* Header */}
            <div className="mb-6 flex flex-row items-center justify-between gap-4 sm:mb-8">
                <h2 className="text-2xl font-semibold text-(--text-primary) sm:text-4xl">
                    {t("checkoutTitle")}
                </h2>
            </div>

            {/* Checkout Content */}
            <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-3">
                {/* Left */}
                <div className="min-w-0 xl:col-span-2">
                    <div className="mb-8 flex h-[400px] flex-col items-center justify-center rounded-2xl border border-(--border-dark) bg-[#181818]">
                        {state === 1 ? (
                            <Loading />
                        ) : state === 2 ? (
                            <Success />
                        ) : (
                            <Failed />
                        )}
                    </div>

                    <Help />
                </div>

                {/* Right */}
                <aside className="w-full xl:sticky xl:top-18">
                    <SummaryCheckout state={state} />
                </aside>
            </div>
        </section>
    );
}