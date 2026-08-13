import { Bell, ChevronLeft, ChevronRight, KeyRound, Trash2, WalletCards, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { SectionHeader } from './SectionHeader';

export default function Setting() {
    const t = useTranslations();
    const accountSettings = [
        {
            label: t("changePassword"),
            icon: KeyRound,
            href: "/profile/change-password",
        },
        {
            label: t("emailPreferences"),
            icon: WalletCards,
            href: "/profile/email-preferences",
        },
        {
            label: t("notificationSettings"),
            icon: Bell,
            href: "/profile/notifications",
        },
    ];

    return (
        <section className="mb-4 overflow-hidden rounded-2xl border border-(--border-dark) bg-(--bg-tertiary)">

            <SectionHeader
                title={t("accountSettings")}
            />

            <div className="divide-y divide-(--border-dark)">
                {accountSettings.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="flex items-center justify-between p-4 transition-colors hover:bg-(--bg-primary)"
                        >
                            <div className="flex items-center gap-2">
                                <Icon
                                    size={24}
                                    className="text-(--text-muted)"
                                />

                                <span className="text-[14px] text-(--text-secondary)">
                                    {item.label}
                                </span>
                            </div>
                            {t("dir") === "rtl"
                                ? <ChevronLeft
                                    size={20}
                                    className="text-(--text-muted)"
                                />
                                : <ChevronRight
                                    size={20}
                                    className="text-(--text-muted)"
                                />
                            }
                        </Link>
                    );
                })}

                <button
                    type="button"
                    onClick={() => {
                        // Delete account action
                    }}
                    className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-[rgba(239,68,68,0.05)]"
                >
                    <div className="flex items-center gap-2">
                        <Trash2
                            size={22}
                            className="text-(--error)"
                        />

                        <span className="text-[14px] text-(--error)">
                            {t("deleteAccount")}
                        </span>
                    </div>

                    {t("dir") === "rtl"
                        ? <ChevronLeft
                            size={20}
                            className="text-(--error)"
                        />
                        : <ChevronRight
                            size={20}
                            className="text-(--error)"
                        />
                    }
                </button>
            </div>
        </section>
    )
}
