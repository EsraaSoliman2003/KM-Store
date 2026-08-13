import { ArrowLeft, ArrowRight, Headphones } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function Help() {
    const t = useTranslations();

    return (
        <section className="mt-4 rounded-xl border border-(--border-dark) p-4 sm:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
                {/* Content */}
                <div className="flex min-w-0 items-center gap-3">
                    <div className="rounded-full bg-[var(--main)] p-2 text-white">
                        <Headphones size={32} />
                    </div>

                    <div className="min-w-0">
                        <h3 className="font-semibold text-lg">
                            {t("needHelp")}
                        </h3>

                        <p className="leading-relaxed text-[var(--text-muted)] text-sm">
                            {t("needHelpDescription")}
                        </p>
                    </div>
                </div>

                {/* Button */}
                <button
                    type="button"
                    className="flex w-full sm:w-fit shrink-0 items-center justify-center gap-2 rounded-full border border-[var(--main)] py-2 px-6 text-lg font-medium text-[var(--main)] transition hover:bg-[var(--main)]/10"
                >
                    {t("contactSupport")}
                    {t("dir") === "rtl"
                        ? <ArrowLeft
                            size={24}
                        />
                        : <ArrowRight
                            size={24}
                        />
                    }
                </button>
            </div>
        </section>
    );
}