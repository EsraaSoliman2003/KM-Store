"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations();

  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-white dark:bg-gray-900">
      <div className="container text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white md:text-6xl">
          {t("heroTitle")}
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          {t("heroDescription")}
        </p>
      </div>
    </section>
  );
}