"use client";

import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiX, FiMoon, FiSun, FiMenu, FiHome, FiPackage, FiInfo, FiMail, FiUser, FiLogIn, FiUserPlus } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import LanguageSwitcher from "./_components/LanguageSwitcher";
import SideBar from "./_components/SideBar";

interface Props {
  locale: string;
}

export default function Navbar({ locale }: Props) {
  const t = useTranslations();
  const [darkMode, setDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Check for user's preferred color scheme on mount
  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isSidebarOpen && !target.closest(".sidebar") && !target.closest(".menu-button")) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  // Prevent scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className="w-full bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-lg dark:bg-gray-900/90 dark:border-gray-700/50 dark:shadow-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          {/* Top row */}
          <div className="flex items-center justify-between gap-3 md:gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <span className="text-xl font-bold tracking-tight text-[#259DF3] dark:text-[#4DB8FF] md:text-2xl lg:text-3xl transition-all duration-300">
                MK Store
              </span>
            </Link>

            {/* Search Bar - Always Visible */}
            <div className="flex-1 max-w-md lg:max-w-2xl mx-2 md:mx-4">
              <div className="relative w-full">
                <FiSearch
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 transition-colors duration-200 md:left-4"
                />
                <input
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  aria-label={t("searchPlaceholder")}
                  className="h-10 w-full rounded-xl border-2 border-gray-200/80 bg-gray-50/80 pl-9 pr-3 text-sm outline-none transition-all duration-200 focus:border-[#259DF3] focus:bg-white focus:ring-4 focus:ring-[#259DF3]/20 dark:border-gray-600/80 dark:bg-gray-800/80 dark:text-white dark:placeholder-gray-400 dark:focus:bg-gray-800 dark:focus:ring-[#4DB8FF]/20 hover:border-gray-300 dark:hover:border-gray-500 md:h-12 md:rounded-2xl md:pl-12 md:pr-4 md:text-base"
                />
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-1.5 md:gap-3 lg:gap-4">
              {/* Dark Mode Toggle - Enhanced */}
              <button
                onClick={toggleDarkMode}
                className="hidden lg:flex p-2 rounded-full text-gray-600 hover:text-[#259DF3] hover:bg-gray-100/80 transition-all duration-200 dark:text-gray-400 dark:hover:text-[#4DB8FF] dark:hover:bg-gray-800/80 hover:scale-110 md:p-2.5"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>

              {/* Mobile Menu Button - Enhanced */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden p-2 text-gray-600 hover:text-[#259DF3] hover:bg-gray-100/80 rounded-xl transition-all duration-200 dark:text-gray-400 dark:hover:text-[#4DB8FF] dark:hover:bg-gray-800/80 menu-button"
                aria-label="Open menu"
              >
                <FiMenu size={24} />
              </button>

              <div className="hidden lg:block">
                <LanguageSwitcher currentLocale={locale} />
              </div>

              <Link
                href="/login"
                className="hidden lg:block rounded-full border-2 border-[#259DF3] px-4 py-1.5 text-xs font-semibold text-[#259DF3] transition-all duration-200 hover:bg-[#259DF3] hover:text-white hover:shadow-md hover:shadow-[#259DF3]/25 dark:border-[#4DB8FF] dark:text-[#4DB8FF] dark:hover:bg-[#4DB8FF] dark:hover:text-white dark:hover:shadow-[#4DB8FF]/25 md:px-5 md:py-2 md:text-sm lg:px-7 lg:py-2.5 lg:text-base"
              >
                {t("login")}
              </Link>

              <Link
                href="/register"
                className="hidden lg:block rounded-full bg-[#259DF3] px-4 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-[#1782d1] hover:shadow-lg hover:shadow-[#259DF3]/30 hover:scale-105 dark:bg-[#4DB8FF] dark:hover:bg-[#3BA3E6] dark:hover:shadow-[#4DB8FF]/30 md:px-5 md:py-2 md:text-sm lg:px-7 lg:py-2.5 lg:text-base"
              >
                {t("register")}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar - Enhanced */}
      <SideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} darkMode={darkMode} toggleDarkMode={toggleDarkMode} locale={locale} />
    </>
  );
}