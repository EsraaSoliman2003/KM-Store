"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLogout } from "@/hooks/useLogout";
import { LogOut } from "lucide-react";
import { sidebarItems } from "./links";

export default function Sidebar() {
    const t = useTranslations();
    const pathname = usePathname();
    const logOut = useLogout();

    return (
        <aside className="col-span-1 hidden h-fit overflow-hidden rounded-2xl border border-(--border-dark) bg-(--bg-tertiary) lg:block">
            <div className="border-b border-(--border-dark) p-4">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-(--text-muted)">
                    {t("myAccount")}
                </p>
            </div>

            <nav className="space-y-1 p-2">
                {sidebarItems.map((item) => {
                    const Icon = item.icon;

                    const isActive =
                        pathname === item.href ||
                        pathname.startsWith(`${item.href}/`);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-2 rounded-[5px] p-4 text-sm transition-all ${isActive
                                    ? "bg-[rgba(104,58,208,0.16)] text-(--main)"
                                    : "text-(--text-secondary) hover:bg-(--bg-primary) hover:text-(--text-primary)"
                                }`}
                        >
                            <Icon size={24} />
                            <span>{t(item.label)}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Logout */}
            <div className="border-t border-(--border-dark) p-1.5">
                <button
                    type="button"
                    onClick={logOut}
                    className="flex w-full items-center gap-2 rounded-[5px] px-2 py-2 text-sm text-(--error) transition-colors hover:bg-[rgba(239,68,68,0.08)]"
                >
                    <LogOut size={24} />
                    <span>{t("logout")}</span>
                </button>
            </div>
        </aside>
    );
}