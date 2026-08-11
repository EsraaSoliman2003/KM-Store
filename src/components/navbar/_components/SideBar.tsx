import Link from "next/link";
import React from "react";
import {
    FiMoon,
    FiSun,
    FiUser,
    FiX,
} from "react-icons/fi";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import { links } from "./links";
import { usePathname } from "next/navigation";

type Props = {
    locale: string;
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    darkMode: boolean;
    toggleDarkMode: () => void;
};

export default function SideBar({
    locale,
    isSidebarOpen,
    setIsSidebarOpen,
    darkMode,
    toggleDarkMode,
}: Props) {
    const t = useTranslations();
    const pathname = usePathname();

    return (
        <div
            className={`
        fixed inset-0 z-50 lg:hidden sidebar
        ${isSidebarOpen ? "pointer-events-auto" : "pointer-events-none"}
      `}
        >
            {/* Overlay */}
            <div
                className={`
          absolute inset-0 bg-black/60 backdrop-blur-sm
          transition-opacity duration-300
          ${isSidebarOpen ? "opacity-100" : "opacity-0"}
        `}
                onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar */}
            <div
                className={`
                    absolute top-0 h-full w-80 max-w-[85vw]
                    ${locale === "ar"
                        ? "right-0 rounded-l-[70px] border-r"
                        : "left-0 rounded-r-[70px] border-l"
                    }
                    bg-(--bg-primary)
                    border-(--border-color)
                    shadow-2xl
                    sidebar-content
                    ${isSidebarOpen ? "sidebar-open" : "sidebar-close"}
                `}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-(--border-color) p-5">
                    <span className="text-(--main) text-xl font-bold">
                        KM Store
                    </span>

                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="rounded-xl p-2 text-(--text-primary) transition-colors duration-200 hover:text-(--main)"
                    >
                        <FiX size={28} />
                    </button>
                </div>

                <div className="hide-scrollbar flex h-[calc(100%-80px)] flex-col overflow-y-auto p-5">
                    {/* Dark Mode */}
                    <button
                        onClick={toggleDarkMode}
                        className="mb-4 flex w-full items-center justify-between rounded-2xl border border-(--border-color) bg-(--bg-secondary) px-5 py-4 transition-all duration-200 hover:bg-(--bg-tertiary)"
                    >
                        <span className="font-medium text-(--text-primary)">
                            {darkMode ? t("lightMode") : t("darkMode")}
                        </span>

                        <span className="text-(--text-secondary)">
                            {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
                        </span>
                    </button>

                    {/* Navigation */}
                    <div className="space-y-2">
                        {links.map((item) => {
                            const isActive =
                                item.href === "/"
                                    ? pathname === `/${locale}` || pathname === "/"
                                    : pathname.startsWith(`/${locale}${item.href}`) ||
                                    pathname.startsWith(item.href);

                            return (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    onClick={() => setIsSidebarOpen(false)}
                                    className={`block rounded-xl px-5 py-3 text-sm font-medium transition-all duration-200 ${isActive
                                            ? "text-(--main)"
                                            : "text-(--text-primary) hover:text-(--main)"
                                        }`}
                                >
                                    {t(item.title)}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="my-5 border-b border-(--border-color)" />

                    {/* Profile */}
                    <div>
                        <Link
                            href="/profile"
                            onClick={() => setIsSidebarOpen(false)}
                            className="group flex items-center gap-4 rounded-2xl px-5 py-3.5 text-(--text-primary) transition-all duration-200 hover:text-(--main)"
                        >
                            <FiUser
                                size={22}
                                className="transition-transform duration-200 group-hover:scale-110"
                            />
                            <span className="font-medium">{t("profile")}</span>
                        </Link>
                    </div>

                    <div className="mt-5 border-t border-(--border-color) pt-5" />

                    {/* Language */}
                    <div className="mt-auto">
                        <div className="flex items-center justify-between px-3 py-2">
                            <span className="text-sm font-medium text-(--text-secondary)">
                                🌐 {t("language")}
                            </span>

                            <LanguageSwitcher currentLocale={locale} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}