import React from "react";
import { useTranslations } from "next-intl";
import {
    ChevronDown,
    Globe,
    Mail,
    Smartphone,
} from "lucide-react";
import { SettingRow } from "./SettingRow";
import { Toggle } from "./Toggle";

export default function Preferences() {
    const t = useTranslations();

    return (
        <section className="overflow-hidden rounded-2xl border border-(--border-dark) bg-(--bg-primary)">
            <div className="border-b border-(--border-dark) px-3 py-3">
                <h2 className="text-[16px] font-semibold text-(--text-primary)">
                    {t("preferences")}
                </h2>
            </div>

            <div>
                {/* Language */}
                <SettingRow
                    icon={Globe}
                    title={t("language")}
                    description={t("languageDescription")}
                    action={
                        <button className="flex h-8 items-center gap-2 rounded-[8px] bg-(--main) px-3 text-[14px] font-medium text-(--white)">
                            English
                            <ChevronDown size={20} />
                        </button>
                    }
                />

                {/* Push Notifications */}
                <SettingRow
                    icon={Smartphone}
                    title={t("pushNotifications")}
                    description={t("pushNotificationsDescription")}
                    action={<Toggle />}
                />

                {/* Marketing Emails */}
                <SettingRow
                    icon={Mail}
                    title={t("marketingEmails")}
                    description={t("marketingEmailsDescription")}
                    action={<Toggle checked />}
                    last
                />
            </div>
        </section>
    )
}
