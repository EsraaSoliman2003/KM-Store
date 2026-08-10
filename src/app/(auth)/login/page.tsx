"use client";

import Link from "next/link";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useLoginForm } from "@/hooks/useLoginForm";

export default function Page() {
  const t = useTranslations();
  const dir = t("dir") === "ltr" ? "ltr" : "rtl";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    onSubmit,
    loading,
  } = useLoginForm();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <main
      dir={dir}
      className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-900"
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800 sm:p-8">
        {/* Title */}
        <h1 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
          {t("loginTitle")}
        </h1>

        <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
          {t("loginSubtitle")}
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-5"
        >
          {/* Phone Number */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("phoneNumber")}
            </label>

            <PhoneInput
              country="eg"
              value=""
              onChange={(value) => {
                setValue("phone", `+${value}`, {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              }}
              enableSearch={false}
              containerClass="!w-full"
              inputClass={`!h-12 !w-full !rounded-xl !border !border-gray-300 !bg-white !text-gray-900 dark:!border-gray-700 dark:!bg-gray-800 dark:!text-white ${
                t("dir") === "rtl"
                  ? "!text-right"
                  : "!text-left"
              }`}
              buttonClass="!rounded-l-xl !border-gray-300 !bg-gray-50 dark:!border-gray-700 dark:!bg-gray-700"
              dropdownClass="!rounded-xl"
              placeholder={t("phonePlaceholder")}
            />

            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("password")}
            </label>

            <div className="relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder={t("passwordPlaceholder")}
                className={`h-12 w-full rounded-xl border bg-white px-4 ${dir === "rtl" ? "pl-12" : "pr-12"
                  } text-gray-900 outline-none transition focus:border-[#259DF3] focus:ring-2 focus:ring-[#259DF3]/20 dark:bg-gray-800 dark:text-white ${errors.password
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-700"
                  }`}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => !prev)
                }
                className={`absolute top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 ${dir === "rtl" ? "left-4" : "right-4"
                  }`}
                aria-label={
                  showPassword
                    ? "Hide password"
                    : "Show password"
                }
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-[#259DF3] hover:underline dark:text-[#4DB8FF]"
            >
              {t("forgotPassword")}
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="h-12 w-full rounded-xl bg-[#259DF3] font-medium text-white transition hover:bg-[#1782d1] disabled:cursor-not-allowed disabled:opacity-60 dark:bg-[#4DB8FF] dark:hover:bg-[#3BA3E6]"
          >
            {loading ? t("loading") : t("login")}
          </button>
        </form>

        {/* Social Login */}
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
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 transition hover:border-[#259DF3] hover:bg-gray-50 dark:border-gray-700 dark:hover:border-[#4DB8FF] dark:hover:bg-gray-800"
          >
            <FaGoogle
              size={20}
              className="text-[#DB4437]"
            />
          </button>

          <button
            type="button"
            aria-label="Facebook"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 transition hover:border-[#259DF3] hover:bg-gray-50 dark:border-gray-700 dark:hover:border-[#4DB8FF] dark:hover:bg-gray-800"
          >
            <FaFacebookF
              size={20}
              className="text-[#1877F2]"
            />
          </button>
        </div>

        {/* Register */}
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
          {t("dontHaveAccount")}{" "}
          <Link
            href="/register"
            className="font-semibold text-[#259DF3] hover:underline dark:text-[#4DB8FF]"
          >
            {t("register")}
          </Link>
        </p>
      </div>
    </main>
  );
}
