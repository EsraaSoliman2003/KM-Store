"use client";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-4 sm:flex-row">
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-[#259DF3]"
          >
            MK Store
          </Link>

          <span className="text-sm text-gray-500">
            © {year} MK Store. {t("footerAllRights")}
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <Link
            href="#"
            aria-label="Facebook"
            className="text-gray-400 transition-colors duration-200 hover:text-[#259DF3]"
          >
            <FaFacebookF size={20} />
          </Link>

          <Link
            href="#"
            aria-label="Instagram"
            className="text-gray-400 transition-colors duration-200 hover:text-[#259DF3]"
          >
            <FaInstagram size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}