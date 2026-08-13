import React from "react";
import Header from "../_components/Header";
import { useTranslations } from "next-intl";
import {
  LockKeyhole,
} from "lucide-react";
import BalanceCards from "./_components/BalanceCards";
import SavedCards from "./_components/SavedCards";

export default function Page() {
  const t = useTranslations();

  return (
    <div className="min-w-0 mb-10">
      <Header
        title={t("paymentMethods")}
        subTitle={t("managePaymentMethods")}
      />

      <div className="space-y-4 p-0 sm:p-0">
        {/* Balance Cards */}
        <BalanceCards />

        {/* Saved Cards */}
        <SavedCards />

        {/* Security */}
        <div className="flex items-start gap-3 rounded-2xl border border-(--border-dark) bg-(--bg-primary) p-4">
          <LockKeyhole
            size={24}
            className="mt-0.5 shrink-0 text-(--main)"
          />

          <div className="min-w-0">
            <p className="text-[14px] font-semibold text-(--text-primary)">
              {t("paymentInformationSecure")}
            </p>

            <p className="mt-1 text-[14px] leading-4 text-(--text-muted)">
              {t("paymentSecurityDescription")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}