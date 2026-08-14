import React from "react";
import Header from "../_components/Header";
import { useTranslations } from "next-intl";
import SupportOptions from "./_components/SupportOptions";
import QuickHelp from "./_components/QuickHelp";

export default function Page() {
  const t = useTranslations();

  return (
    <div className="min-w-0 mb-10">
      <Header
        title={t("helpCenter")}
        subTitle={t("helpCenterSubtitle")}
      />

      <div className="space-y-6">
        {/* Support Options */}
        <SupportOptions />

        {/* Quick Help */}
        <QuickHelp />
      </div>
    </div>
  );
}