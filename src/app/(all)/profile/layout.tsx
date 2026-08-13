import React from "react";
import {
  ChevronRight,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Sidebar from "./_components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = useTranslations();

  return (
    <main className="mt-18 min-h-screen py-6 text-[var(--text-primary)] transition-colors duration-300">
      <div className="container">

        {/* Breadcrumb */}
        <div className="mb-5 flex items-center gap-2 text-[12px] text-[var(--text-muted)] sm:gap-3 sm:text-[14px]">
          <Link
            href="/"
            className="transition-colors hover:text-[var(--text-primary)]"
          >
            {t("home")}
          </Link>

          <ChevronRight
            size={14}
            className="text-[var(--text-muted)]"
          />

          <span className="font-medium text-[var(--text-primary)]">
            {t("profile")}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">

          {/* ================= SIDEBAR ================= */}
          <Sidebar />

          {/* ================= MAIN CONTENT ================= */}
          <div className="col-span-1 lg:col-span-3">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
