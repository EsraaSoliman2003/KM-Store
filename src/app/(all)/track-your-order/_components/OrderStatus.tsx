import React from "react";
import { useTranslations } from "next-intl";
import Timeline from "./Timeline";
import { Truck } from "lucide-react";

export default function OrderStatus() {
    const t = useTranslations();

    return (
        <section className="mt-4 rounded-[12px] border border-(--border-dark)">
            <div className="p-3 sm:p-5">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-lg font-semibold sm:text-xl">
                        {t("orderStatus")}
                    </h2>

                    <span className="shrink-0 rounded-full border border-[var(--main)]/60 bg-[var(--main)]/10 px-2.5 py-1 text-[10px] text-[var(--main)] sm:text-xs">
                        {t("orderExample")}
                    </span>
                </div>

                {/* Timeline */}
                <Timeline />

                {/* Update */}
                <div className="mt-3 border-t border-(--border-dark) pt-4">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-5">
                        {/* Current Status */}
                        <div className="flex min-w-0 flex-1 items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--main) text-white shadow-[0_0_15px_rgba(104,58,208,.35)]">
                                <Truck size={17} />
                            </div>

                            <div className="min-w-0">
                                <p className="text-base font-medium sm:text-xl">
                                    {t("yourOrderOnTheWay")}
                                </p>

                                <p className="mt-1 text-xs text-[var(--text-muted)]">
                                    {t("packageLeftDistributionCenter")}
                                </p>
                            </div>
                        </div>

                        {/* Latest Update */}
                        <div className="w-full border-t border-(--border-dark) pt-4 sm:w-[55%] sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                            <div className="flex items-start gap-3">
                                <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[var(--main)]" />

                                <div className="min-w-0">
                                    <p className="text-base font-medium sm:text-xl">
                                        {t("latestUpdate")}
                                    </p>

                                    <p className="mt-1 text-xs text-[var(--text-muted)]">
                                        Aug 10 · 10:42 AM
                                    </p>

                                    <p className="mt-1 text-xs text-[var(--text-muted)]">
                                        {t("packageDepartedFromCairoDistribution")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}