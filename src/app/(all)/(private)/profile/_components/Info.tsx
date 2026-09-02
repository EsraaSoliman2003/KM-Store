import React from 'react'
import { SectionHeader } from './SectionHeader'
import { InfoRow } from './InfoRow'
import { useTranslations } from 'next-intl'
import { useAppSelector } from '@/rtk/hooks';

export default function Info() {
    const t = useTranslations();
    const { profile } = useAppSelector((s) => s.profile);

    const user = profile?.data.user;
    const fullName = user?.name || "Ahmed Hassan";
    const email = user?.email || t("noEmail");
    const phone =
        user?.country_code && user?.phone
            ? `${user?.country_code} ${user?.phone}`
            : t("notProvided");

    return (
        <section className="mb-4 overflow-hidden rounded-2xl border border-(--border-dark) bg-(--bg-tertiary)">

            <SectionHeader
                title={t("personalInformation")}
                action={t("edit")}
                href="/profile/edit"
            />

            <div className="divide-y divide-(--border-dark)">
                <InfoRow
                    label={t("name")}
                    value={fullName}
                />

                <InfoRow
                    label={t("email")}
                    value={email}
                />

                <InfoRow
                    label={t("phoneNumber")}
                    value={phone}
                />
            </div>
        </section>
    )
}
