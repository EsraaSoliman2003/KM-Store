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
    color: "#683AD0",
    bg: "#F3EEFF",
    border: "#D9CCF8",
  },
  {
    icon: FiShield,
    title: "whyUsFeatureSecurePaymentTitle",
    subtitle: "whyUsFeatureSecurePaymentSubtitle",
    description: "whyUsFeatureSecurePaymentDescription",
    color: "#683AD0",
    bg: "#F6F1FF",
    border: "#E1D5FA",
  },
  {
    icon: FiAward,
    title: "whyUsFeatureOfficialWarrantyTitle",
    subtitle: "whyUsFeatureOfficialWarrantySubtitle",
    description: "whyUsFeatureOfficialWarrantyDescription",
    color: "#683AD0",
    bg: "#F1EBFF",
    border: "#D5C5F6",
  },
  {
    icon: FiRefreshCw,
    title: "whyUsFeatureEasyReturnsTitle",
    subtitle: "whyUsFeatureEasyReturnsSubtitle",
    description: "whyUsFeatureEasyReturnsDescription",
    color: "#683AD0",
    bg: "#F7F3FF",
    border: "#E4DAFA",
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
                style={
                  {
                    "--card-color": item.color,
                    "--card-bg": item.bg,
                    "--card-border": item.border,
                  } as React.CSSProperties
                }
                className="
    group relative overflow-hidden
    rounded-2xl
    border border-(--card-border)
    bg-(--bg-primary)
    p-4
    transition-all duration-300

    hover:-translate-y-1
    hover:border-(--main)/50
    hover:shadow-xl
    hover:shadow-(--main)/10

    dark:border-(--border-color)
    dark:bg-(--bg-primary)

    sm:p-5
  "
              >
                {/* Decorative glow */}
                <div
                  className="
      absolute -right-10 -top-10
      h-28 w-28
      rounded-full
      bg-(--main)/10
      blur-2xl
      transition-all duration-500
      group-hover:scale-150
      group-hover:bg-(--main)/20
    "
                />

                {/* Top accent */}
                <div
                  className="
      absolute inset-x-0 top-0 h-1
      bg-(--main)
      opacity-70
      transition-opacity duration-300
      group-hover:opacity-100
    "
                />

                {/* Icon */}
                <div
                  className="
      relative mb-4
      flex h-12 w-12 items-center justify-center
      rounded-xl
      border border-(--card-border)
      bg-(--card-bg)
      text-(--main)
      transition-all duration-300

      group-hover:scale-105
      group-hover:border-(--main)
      group-hover:bg-(--main)
      group-hover:text-white
      group-hover:shadow-lg
      group-hover:shadow-(--main)/20

      sm:h-13 sm:w-13
    "
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3
                  className="
      relative
      text-sm font-bold
      text-(--text-primary)
      sm:text-lg
    "
                >
                  {t(item.title)}
                </h3>

                <p
                  className="
      relative mt-1
      text-[11px] font-semibold
      text-(--main)
      sm:text-xs
    "
                >
                  {t(item.subtitle)}
                </p>

                <p
                  className="
      relative mt-2
      text-xs leading-relaxed
      text-(--text-muted)
      sm:mt-3 sm:text-sm
    "
                >
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