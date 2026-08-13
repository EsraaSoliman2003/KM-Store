import { Edit3, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl'
import React from 'react'

type Props = {}

export default function Info({ }: Props) {
    const t = useTranslations();
    return (
        <section className="rounded-sm border border-(--border-dark) bg-(--bg-tertiary) p-4">
            <div className="mb-4 flex items-center gap-2.5">
                <MapPin size={24} className="text-(--main)" />
                <h2 className="text-[20px] font-semibold">3. {t("orderDetailsDeliveryInformation")}</h2>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-[14px] font-bold">Ahmed Hassan</p>
                    <p className="mt-1 text-[14px] text-(--text-secondary)">+201002345678</p>
                    <p className="text-[14px] text-(--text-secondary)">Ahmedhassan17@gmail.com</p>
                    <p className="mt-1.5 text-[14px] text-(--text-secondary)">123 El Tahrir street, maadi</p>
                    <p className="text-[14px] text-(--text-secondary)">Cairo, Egypt</p>
                </div>
                <button
                    type="button"
                    className="flex h-9.5 items-center justify-center gap-2 rounded-sm border border-(--main) px-4 text-[16px] font-medium text-(--main) transition-colors hover:bg-(--main)/10"
                >
                    {t("orderDetailsEditAddress")}
                    <Edit3 size={18} />
                </button>
            </div>
        </section>
    )
}