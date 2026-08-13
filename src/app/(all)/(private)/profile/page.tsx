"use client";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/rtk/hooks";
import Header from "./_components/Header";
import ProfileStats from "./_components/ProfileStats";
import Info from "./_components/Info";
import Address from "./_components/Address";
import Payment from "./_components/Payment";
import Setting from "./_components/Setting";
import Help from "./_components/Help";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Sidebar from "./_components/Sidebar";

export default function Page() {
  const t = useTranslations();
  const { loading, profile } = useAppSelector((s) => s.profile);

  const user = profile?.data.user;

  if (loading) {
    return (
      <div className="flex min-h-100 items-center justify-center">
        <p className="text-[14px] text-(--text-muted)">
          {t("loading")}
        </p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-100 items-center justify-center">
        <p className="text-[14px] text-(--text-muted)">
          {t("noProfileDataFound")}
        </p>
      </div>
    );
  }

  return (
    <main className="mt-18 min-h-screen py-6 text-(--text-primary) transition-colors duration-300">
      <div className="container">

        {/* Breadcrumb */}
        <div className="mb-5 flex items-center gap-2 text-[12px] text-(--text-muted) sm:gap-3 sm:text-[14px]">
          <Link
            href="/"
            className="transition-colors hover:text-(--text-primary)"
          >
            {t("home")}
          </Link>

          <ChevronRight
            size={14}
            className="text-(--text-muted)"
          />

          <Link
            href="/account-menu"
            className="lg:hidden transition-colors hover:text-(--text-primary)"
          >
            {t("settings")}
          </Link>

          <ChevronRight
            size={14}
            className="lg:hidden text-(--text-muted)"
          />

          <span className="font-medium text-(--text-primary)">
            {t("profile")}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">

          {/* ================= SIDEBAR ================= */}
          <Sidebar />

          {/* ================= MAIN CONTENT ================= */}
          <div className="col-span-1 lg:col-span-3">
            <div className="min-w-0 mb-10">
              <Header />
              <ProfileStats />
              <Info />
              <Address />
              <Payment />
              <Setting />
              <Help />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
