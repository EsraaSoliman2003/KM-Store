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
    <section className="py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold text-(--text-primary) sm:text-4xl">
          {t("whyShopWithUsTitle")}
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-[#838383] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-(--main)/60 hover:bg-(--main)/5"
              >
                <div className="mb-4 text-(--main) transition-all duration-300">
                  <Icon size={36} />
                </div>

                <h3 className="text-xl font-semibold text-(--text-primary)">
                  {t(item.title)}
                </h3>

                <p className="mt-1 text-xs font-medium text-(--main)">
                  {t(item.subtitle)}
                </p>

                <p className="mt-3 text-sm text-(--text-muted)">
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