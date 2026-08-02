"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

export default function Page() {
  const t = useTranslations();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-950">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
          {t("registerTitle")}
        </h1>

        <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
          {t("registerSubtitle")}
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("fullName")}
            </label>

            <input
              type="text"
              placeholder={t("fullNamePlaceholder")}
              className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 outline-none transition focus:border-[#259DF3] focus:ring-2 focus:ring-[#259DF3]/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("email")}
            </label>

            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 outline-none transition focus:border-[#259DF3] focus:ring-2 focus:ring-[#259DF3]/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("password")}
            </label>

            <input
              type="password"
              placeholder={t("passwordPlaceholder")}
              className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 outline-none transition focus:border-[#259DF3] focus:ring-2 focus:ring-[#259DF3]/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="h-12 w-full rounded-xl bg-[#259DF3] font-medium text-white transition hover:bg-[#1782d1] dark:bg-[#4DB8FF] dark:hover:bg-[#3BA3E6]"
          >
            {t("register")}
          </button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {t("orContinueWith")}
          </span>
          <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
        </div>

        <div className="flex justify-center gap-4">
          <button
            type="button"
            aria-label="Google"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 transition hover:bg-gray-50 hover:border-[#259DF3] dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:border-[#4DB8FF]"
          >
            <FaGoogle size={20} className="text-[#DB4437]" />
          </button>

          <button
            type="button"
            aria-label="Facebook"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 transition hover:bg-gray-50 hover:border-[#259DF3] dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:border-[#4DB8FF]"
          >
            <FaFacebookF size={20} className="text-[#1877F2]" />
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
          {t("alreadyHaveAccount")}{" "}
          <Link
            href="/login"
            className="font-semibold text-[#259DF3] hover:underline dark:text-[#4DB8FF]"
          >
            {t("login")}
          </Link>
        </p>
      </div>
    </main>
  );
}