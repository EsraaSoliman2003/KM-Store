"use client";

import { useTranslations } from "next-intl";
import {
  FiZap,
  FiShield,
  FiAward,
  FiRefreshCw,
} from "react-icons/fi";

const features = [
  {
    icon: FiZap,
    title: "whyUsFeatureFastDeliveryTitle",
    subtitle: "whyUsFeatureFastDeliverySubtitle",
    description: "whyUsFeatureFastDeliveryDescription",
  },
  {
    icon: FiShield,
    title: "whyUsFeatureSecurePaymentTitle",
    subtitle: "whyUsFeatureSecurePaymentSubtitle",
    description: "whyUsFeatureSecurePaymentDescription",
  },
  {
    icon: FiAward,
    title: "whyUsFeatureOfficialWarrantyTitle",
    subtitle: "whyUsFeatureOfficialWarrantySubtitle",
    description: "whyUsFeatureOfficialWarrantyDescription",
  },
  {
    icon: FiRefreshCw,
    title: "whyUsFeatureEasyReturnsTitle",
    subtitle: "whyUsFeatureEasyReturnsSubtitle",
    description: "whyUsFeatureEasyReturnsDescription",
  },
];

export default function WhyUs() {
  const t = useTranslations();

  return (
    <section className="py-14">
      <div className="container">
        <h2 className="mb-8 text-center text-2xl font-bold text-(--text-primary) sm:text-3xl lg:mb-12 lg:text-5xl">
          {t("whyShopWithUsTitle")}
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-[#838383] p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1 hover:border-(--main)/60 hover:bg-(--main)/5"
              >
                <div className="mb-3 text-(--main) transition-all duration-300 sm:mb-4">
                  <Icon className="h-7 w-7 sm:h-9 sm:w-9" />
                </div>

                <h3 className="text-base font-semibold text-(--text-primary) sm:text-xl">
                  {t(item.title)}
                </h3>

                <p className="mt-1 text-[11px] font-medium text-(--main) sm:text-xs">
                  {t(item.subtitle)}
                </p>

                <p className="mt-2 text-xs text-(--text-muted) sm:mt-3 sm:text-sm">
                  {t(item.description)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}