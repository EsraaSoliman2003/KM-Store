"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

export default function Page() {
  const t = useTranslations();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-center text-3xl font-bold text-gray-900">
          {t("registerTitle")}
        </h1>

        <p className="mt-2 text-center text-sm text-gray-500">
          {t("registerSubtitle")}
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              {t("fullName")}
            </label>

            <input
              type="text"
              placeholder={t("fullNamePlaceholder")}
              className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none transition focus:border-[#259DF3]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              {t("email")}
            </label>

            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none transition focus:border-[#259DF3]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              {t("password")}
            </label>

            <input
              type="password"
              placeholder={t("passwordPlaceholder")}
              className="h-12 w-full rounded-xl border border-gray-300 px-4 outline-none transition focus:border-[#259DF3]"
            />
          </div>

          <button
            type="submit"
            className="h-12 w-full rounded-xl bg-[#259DF3] font-medium text-white transition hover:bg-[#1782d1]"
          >
            {t("register")}
          </button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-sm text-gray-500">
            {t("orContinueWith")}
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="flex justify-center gap-4">
          <button
            type="button"
            aria-label="Google"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 transition hover:bg-gray-50 hover:border-[#259DF3]"
          >
            <FaGoogle size={20} className="text-[#DB4437]" />
          </button>

          <button
            type="button"
            aria-label="Facebook"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 transition hover:bg-gray-50 hover:border-[#259DF3]"
          >
            <FaFacebookF size={20} className="text-[#1877F2]" />
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          {t("alreadyHaveAccount")}{" "}
          <Link
            href="/login"
            className="font-semibold text-[#259DF3] hover:underline"
          >
            {t("login")}
          </Link>
        </p>
      </div>
    </main>
  );
}