import { useTranslations } from "next-intl";
import {
    Edit3,
    LockKeyhole,
    Mail,
    Phone,
    Shield,
} from "lucide-react";
import { SettingRow } from "./SettingRow";
import { Toggle } from "./Toggle";
import Link from "next/link";

export default function Security() {
    const t = useTranslations();
    return (
        <section className="overflow-hidden rounded-2xl border border-(--border-dark) bg-(--bg-primary)">
            <div className="border-b border-(--border-dark) px-3 py-3">
                <h2 className="text-[16px] font-semibold text-(--text-primary)">
                    {t("security")}
                </h2>
            </div>

            <div>
                {/* Change Password */}
                <SettingRow
                    icon={LockKeyhole}
                    title={t("changePassword")}
                    description={t("lastChangedPassword")}
                    action={
                        <Link href={"/change-password"} className="flex py-1 items-center gap-2 rounded-[8px] bg-(--main) px-3 text-[14px] font-medium text-(--white) transition-opacity hover:opacity-90">
                            <Edit3 size={20} />
                            {t("update")}
                        </Link>
                    }
                />

                {/* Email */}
                <SettingRow
                    icon={Mail}
                    title={t("emailAddress")}
                    description="ahmed.hassan@example.com"
                    action={
                        <button className="flex py-1 items-center gap-2 rounded-[8px] bg-(--main) px-3 text-[14px] font-medium text-(--white) transition-opacity hover:opacity-90">
                            <Edit3 size={20} />
                            {t("change")}
                        </button>
                    }
                />

                {/* Phone */}
                <SettingRow
                    icon={Phone}
                    title={t("phoneNumber")}
                    description="+20 100 123 4567"
                    action={
                        <button className="flex py-1 items-center gap-2 rounded-[8px] bg-(--main) px-3 text-[14px] font-medium text-(--white) transition-opacity hover:opacity-90">
                            <Edit3 size={20} />
                            {t("change")}
                        </button>
                    }
                />

                {/* 2FA */}
                <SettingRow
                    icon={Shield}
                    title={t("twoFactorAuthentication")}
                    description={t("twoFactorDescription")}
                    action={<Toggle checked />}
                    last
                />
            </div>
        </section>
    )
}
