"use client";

import { useTranslations } from "next-intl";
import CheckoutContent from "./_components/CheckoutContent";
import CheckOutStats from "@/components/CheckOutStats/CheckOutStats";

export default function Page() {
  const t = useTranslations();

  return (
    <section className="container mt-18 py-5 md:py-10">
      {/* Header */}
      <div className="mb-6 flex flex-row items-center justify-between gap-4 sm:mb-8">
        <h2 className="text-2xl font-semibold text-(--text-primary) sm:text-4xl">
          {t("checkoutTitle")}
        </h2>
      </div>

      {/* Checkout Content */}
      {false ? <CheckOutStats /> : <CheckoutContent />}
    </section>
  );
}