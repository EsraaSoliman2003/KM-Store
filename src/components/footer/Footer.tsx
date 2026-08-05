"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  const categories = [
    "Laptop",
    "Smartphones",
    "Gaming",
    "Audio",
    "Accessories",
    "Smarthome",
  ];

  const brands = [
    "Apple",
    "Samsung",
    "Oppo",
    "Realme",
    "OnePlus",
    "Google",
    "Nothing",
    "Sony",
    "Vivo",
    "Xiaomi",
  ];

  return (
    <footer className="bg-[#1f1f1f] text-white">
      <div className="container pt-16 pb-3">
        {/* Top */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1fr_1.2fr]">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-5xl font-black tracking-tight transition-all duration-300 hover:scale-105 hover:text-(--main)"
            >
              K&M
            </Link>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-6 text-[28px] font-medium">
              {t("categories")}
            </h3>

            <ul className="space-y-4">
              {categories.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="group relative inline-block text-lg text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {item}

                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-(--main) transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="mb-6 text-[28px] font-medium">
              {t("brands")}
            </h3>

            <div className="grid grid-cols-2 gap-y-4">
              {brands.map((brand) => (
                <Link
                  key={brand}
                  href="#"
                  className="group relative inline-block w-fit text-lg text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {brand}

                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-(--main) transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-3 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 text-base md:flex-row">
          <p className="text-gray-300">
            © {year} K&M. {t("footerAllRights")}
          </p>

          <div className="flex items-center gap-6">
            <span className="text-base text-gray-300">
              {t("followUs")}
            </span>

            <div className="flex items-center gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition-all duration-300 hover:-translate-y-1 hover:border-(--main) hover:bg-(--main) hover:shadow-[0_10px_25px_rgba(239,68,68,.35)]"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-white transition-all duration-300 hover:-translate-y-1 hover:border-(--main) hover:bg-(--main) hover:shadow-[0_10px_25px_rgba(239,68,68,.35)]"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}