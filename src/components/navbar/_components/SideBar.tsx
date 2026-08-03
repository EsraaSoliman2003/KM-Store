import Link from 'next/link'
import React from 'react'
import { FiHome, FiInfo, FiLogIn, FiMail, FiMoon, FiPackage, FiSun, FiUser, FiUserPlus, FiX } from 'react-icons/fi'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslations } from 'next-intl'

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

    return (
        <div
            className={`
                lg:hidden sidebar fixed inset-0 z-50
                ${isSidebarOpen ? "pointer-events-auto" : "pointer-events-none"}
            `}
        >

            {/* Overlay */}
            <div
                className={`
                    absolute inset-0 bg-black/60 backdrop-blur-sm
                    ${isSidebarOpen ? "opacity-100" : "opacity-0"}
                    transition-opacity duration-300
                `}
                onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar Content - Animation only */}
            <div
                className={`
                    absolute ${locale === "ar" ? "left-0" : "right-0"} 
                    top-0 h-full w-80 max-w-[85vw] 
                    bg-white dark:bg-gray-900 shadow-2xl
                    sidebar-content
                    ${isSidebarOpen ? "sidebar-open" : "sidebar-close"}
                `}
            >
                {/* باقي المحتوى كما هو دون أي تغيير */}
                <div className="flex items-center justify-between border-b border-gray-200/80 dark:border-gray-700/80 p-5 bg-gradient-to-r from-[#259DF3]/5 to-transparent dark:from-[#4DB8FF]/5">
                    <span className="text-xl font-bold text-[#259DF3] dark:text-[#4DB8FF]">
                        MK Store
                    </span>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="p-2 text-gray-600 hover:text-[#259DF3] hover:bg-gray-100/80 rounded-xl transition-all duration-200 dark:text-gray-400 dark:hover:text-[#4DB8FF] dark:hover:bg-gray-800/80"
                    >
                        <FiX size={28} />
                    </button>
                </div>

                <div className="flex flex-col p-5 space-y-4 overflow-y-auto h-[calc(100%-80px)]">
                    <button
                        onClick={toggleDarkMode}
                        className="flex items-center justify-between w-full px-5 py-4 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100/50 hover:from-gray-100 hover:to-gray-200/50 transition-all duration-200 dark:from-gray-800 dark:to-gray-800/50 dark:hover:from-gray-700 dark:hover:to-gray-700/50 border border-gray-200"
                    >
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                            {darkMode ? t("lightMode") : t("darkMode")}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                            {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
                        </span>
                    </button>

                    <div className="flex flex-col space-y-2 pt-3">
                        <Link
                            href="/"
                            className="flex items-center gap-4 px-5 py-3.5 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-[#259DF3]/10 hover:to-transparent hover:text-[#259DF3] transition-all duration-200 dark:text-gray-300 dark:hover:from-[#4DB8FF]/10 dark:hover:to-transparent dark:hover:text-[#4DB8FF] group"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <FiHome size={22} className="group-hover:scale-110 transition-transform" />
                            <span className="font-medium">{t("home")}</span>
                        </Link>
                        <Link
                            href="/products"
                            className="flex items-center gap-4 px-5 py-3.5 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-[#259DF3]/10 hover:to-transparent hover:text-[#259DF3] transition-all duration-200 dark:text-gray-300 dark:hover:from-[#4DB8FF]/10 dark:hover:to-transparent dark:hover:text-[#4DB8FF] group"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <FiPackage size={22} className="group-hover:scale-110 transition-transform" />
                            <span className="font-medium">{t("products")}</span>
                        </Link>
                        <Link
                            href="/about"
                            className="flex items-center gap-4 px-5 py-3.5 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-[#259DF3]/10 hover:to-transparent hover:text-[#259DF3] transition-all duration-200 dark:text-gray-300 dark:hover:from-[#4DB8FF]/10 dark:hover:to-transparent dark:hover:text-[#4DB8FF] group"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <FiInfo size={22} className="group-hover:scale-110 transition-transform" />
                            <span className="font-medium">{t("about")}</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="flex items-center gap-4 px-5 py-3.5 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-[#259DF3]/10 hover:to-transparent hover:text-[#259DF3] transition-all duration-200 dark:text-gray-300 dark:hover:from-[#4DB8FF]/10 dark:hover:to-transparent dark:hover:text-[#4DB8FF] group"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <FiMail size={22} className="group-hover:scale-110 transition-transform" />
                            <span className="font-medium">{t("contact")}</span>
                        </Link>
                    </div>

                    <div className="border-t border-gray-200/60 dark:border-gray-700/60 pt-3" />

                    <div className="flex flex-col space-y-2">
                        <Link
                            href="/profile"
                            className="flex items-center gap-4 px-5 py-3.5 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-[#259DF3]/10 hover:to-transparent hover:text-[#259DF3] transition-all duration-200 dark:text-gray-300 dark:hover:from-[#4DB8FF]/10 dark:hover:to-transparent dark:hover:text-[#4DB8FF] group"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <FiUser size={22} className="group-hover:scale-110 transition-transform" />
                            <span className="font-medium">{t("profile")}</span>
                        </Link>
                    </div>

                    <div className="border-t border-gray-200/60 dark:border-gray-700/60 pt-3" />

                    <div className="flex flex-col space-y-3 pt-2">
                        <Link
                            href="/login"
                            className="flex items-center justify-center gap-3 w-full rounded-2xl border-2 border-[#259DF3] px-6 py-3.5 text-base font-semibold text-[#259DF3] transition-all duration-200 hover:bg-[#259DF3] hover:text-white hover:shadow-md hover:shadow-[#259DF3]/25 dark:border-[#4DB8FF] dark:text-[#4DB8FF] dark:hover:bg-[#4DB8FF] dark:hover:text-white dark:hover:shadow-[#4DB8FF]/25"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <FiLogIn size={20} />
                            {t("login")}
                        </Link>
                        <Link
                            href="/register"
                            className="flex items-center justify-center gap-3 w-full rounded-2xl bg-[#259DF3] px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-[#1782d1] hover:shadow-lg hover:shadow-[#259DF3]/30 hover:scale-[1.02] dark:bg-[#4DB8FF] dark:hover:bg-[#3BA3E6] dark:hover:shadow-[#4DB8FF]/30"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <FiUserPlus size={20} />
                            {t("register")}
                        </Link>
                    </div>

                    <div className="pt-3 mt-auto border-t border-gray-200/60 dark:border-gray-700/60">
                        <div className="flex items-center justify-between px-3 py-2">
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">🌐 {t("language")}</span>
                            <LanguageSwitcher currentLocale={locale} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}