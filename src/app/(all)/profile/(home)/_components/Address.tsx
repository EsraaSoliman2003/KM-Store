import React from 'react'
import { SectionHeader } from './SectionHeader'
import { useTranslations } from 'next-intl'
import { MapPin, MoreHorizontal, MoreVertical, Plus } from 'lucide-react';
import Link from 'next/link';
import { useAppSelector } from '@/rtk/hooks';

export default function Address() {
    const t = useTranslations();
    const { profile } = useAppSelector((s) => s.profile);

    return (
        <section className="mb-4 overflow-hidden rounded-2xl border border-(--border-dark) bg-(--bg-tertiary)">

            <SectionHeader
                title={t("addresses")}
                action={t("manageAddresses")}
            />

            <div className="p-2 sm:p-3">
                <div className="rounded-2xl border border-(--border-dark) bg-(--bg-primary) p-3">

                    <div className="mb-2 flex justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <MapPin
                                size={24}
                                className="text-(--main)"
                            />

                            <p className="text-sm font-semibold text-(--text-primary)">
                                {t("defaultAddress")}
                            </p>

                            <span className="rounded-full bg-[rgba(104,58,208,0.12)] py-2 px-3 text-[12px] font-medium text-(--white) border border-(--main)">
                                {t("default")}
                            </span>
                        </div>

                        <button
                            type="button"
                            className="flex text-(--text-muted) transition-colors hover:text-(--text-primary)"
                        >
                            <MoreHorizontal size={18} />
                        </button>
                    </div>

                    <p className="text-[12px] leading-4 text-(--text-muted) mt-1">
                        123 El Tahrir Street, Maadi
                    </p>

                    <p className="text-[12px] leading-4 text-(--text-muted) mt-1">
                        Cairo, Egypt 11728
                    </p>

                    <p className="text-[12px] leading-4 text-(--text-muted) mt-1">
                        Phone: +20 100 123 4567
                    </p>
                </div>

                <Link
                    href="/profile/address/new"
                    className="mt-2 flex py-2 items-center justify-center gap-1.5 rounded-[12px] border border-(--main) text-[18px] font-medium text-(--main) transition-colors hover:bg-[rgba(104,58,208,0.08)]"
                >
                    <Plus size={24} />
                    {t("addNewAddress")}
                </Link>
            </div>
        </section>
    )
}
