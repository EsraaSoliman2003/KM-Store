"use client";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-between gap-4 py-4 sm:flex-row">
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-[#259DF3] dark:text-[#4DB8FF]"
          >
            KM Store
          </Link>

          <span className="text-sm text-gray-500 dark:text-gray-400">
            © {year} KM Store. {t("footerAllRights")}
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <Link
            href="#"
            aria-label="Facebook"
            className="text-gray-400 transition-colors duration-200 hover:text-[#259DF3] dark:hover:text-[#4DB8FF]"
          >
            <FaFacebookF size={20} />
          </Link>

          <Link
            href="#"
            aria-label="Instagram"
            className="text-gray-400 transition-colors duration-200 hover:text-[#259DF3] dark:hover:text-[#4DB8FF]"
          >
            <FaInstagram size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}