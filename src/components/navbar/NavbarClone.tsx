"use client";

import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiX } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { useState } from "react";
import LanguageSwitcher from "./_components/LanguageSwitcher";

interface Props {
  locale: string;
}

export default function Navbar({ locale }: Props) {
  const t = useTranslations();
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="container  py-2 md:py-3">
        {/* Top row */}
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* Logo - متوسط */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* <div className="relative h-9 w-9 md:h-12 md:w-12 transition-transform group-hover:scale-105">
              <Image
                src={logo}
                alt="MK Store"
                fill
                className="object-contain"
                priority
              />
            </div> */}
            <span className="text-base font-bold tracking-tight text-[#259DF3] md:text-2xl">
              MK Store
            </span>
          </Link>

          {/* Desktop Search - متوسط */}
          <div className="hidden md:flex flex-1 max-w-md lg:max-w-lg">
            <div className="relative w-full">
              <FiSearch
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder={t("searchPlaceholder")}
                aria-label={t("searchPlaceholder")}
                className="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 pl-9 pr-3 text-sm outline-none transition focus:border-[#259DF3] focus:bg-white focus:ring-2 focus:ring-[#259DF3]/20"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-1.5 md:gap-3">
            {/* Mobile search toggle */}
            <button
              onClick={() => setShowMobileSearch((prev) => !prev)}
              className="md:hidden p-1 text-gray-600 hover:text-[#259DF3] transition"
              aria-label={showMobileSearch ? "Close search" : "Open search"}
            >
              {showMobileSearch ? <FiX size={20} /> : <FiSearch size={20} />}
            </button>

            <LanguageSwitcher currentLocale={locale} />

            <Link
              href="/login"
              className="rounded-full border-2 border-[#259DF3] px-3 py-1 text-xs font-semibold text-[#259DF3] transition hover:bg-[#259DF3] hover:text-white md:px-5 md:py-1.5 md:text-sm"
            >
              {t("login")}
            </Link>

            <Link
              href="/register"
              className="rounded-full bg-[#259DF3] px-3 py-1 text-xs font-semibold text-white transition hover:bg-[#1782d1] md:px-5 md:py-1.5 md:text-sm"
            >
              {t("register")}
            </Link>
          </div>
        </div>

        {/* Mobile search - متوسط */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${showMobileSearch ? "max-h-14 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
        >
          <div className="relative">
            <FiSearch
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              aria-label={t("searchPlaceholder")}
              className="h-9 w-full rounded-xl border border-gray-200 bg-gray-50 pl-9 pr-3 text-sm outline-none transition focus:border-[#259DF3] focus:bg-white focus:ring-2 focus:ring-[#259DF3]/20"
              autoFocus={showMobileSearch}
            />
          </div>
        </div>
      </div>
    </header>
  );
}