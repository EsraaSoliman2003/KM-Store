import { Trash2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'

export default function DeleteAccount() {
    const t = useTranslations();

    return (
        <section className="overflow-hidden rounded-2xl border border-red-500 bg-(--bg-primary)"
        >
            <div className="border-b border-red-500 px-3 py-3">
                <h2 className="text-[16px] font-semibold text-(--text-primary)">
                    {t("deleteAccount")}
                </h2>

                <p className="mt-1 text-[12px] md:text-[14px] leading-4 text-(--text-secondary)">
                    {t("deleteAccountDescription")}
                </p>
            </div>

            <div className="flex justify-end p-3">
                <button className="flex h-10 w-full items-center justify-center gap-2 rounded-[8px] border border-red-500 px-4 text-[16px] font-medium text-red-500 transition-colors hover:bg-red-500/10 sm:w-auto sm:min-w-[190px]">
                    <Trash2 size={20} />
                    {t("deleteAccount")}
                </button>
            </div>
        </section>
    )
}
