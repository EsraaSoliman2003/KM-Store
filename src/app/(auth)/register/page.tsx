"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Eye, EyeOff } from "lucide-react";

import { useRegisterForm } from "@/hooks/useRegisterForm";

export default function Page() {
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    onSubmit,
    loading,
  } = useRegisterForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
          {t("registerTitle")}
        </h1>

        <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
          {t("registerSubtitle")}
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-5"
        >
          {/* =========================
              Full Name
          ========================= */}

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("fullName")}
            </label>

            <input
              type="text"
              placeholder={t("fullNamePlaceholder")}
              {...register("name")}
              className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-gray-900 outline-none transition focus:border-[#259DF3] focus:ring-2 focus:ring-[#259DF3]/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* =========================
              Phone
          ========================= */}

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("phoneNumber") || "Phone Number"}
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
              inputClass={`!h-12 !w-full !rounded-xl !border !border-gray-300 !bg-white !text-gray-900 dark:!border-gray-700 dark:!bg-gray-800 dark:!text-white ${t("dir") === "rtl"
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

          {/* =========================
              Password
          ========================= */}

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("password")}
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder={t("passwordPlaceholder")}
                {...register("password")}
                className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 pr-12 text-gray-900 outline-none transition focus:border-[#259DF3] focus:ring-2 focus:ring-[#259DF3]/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword((prev) => !prev)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-[#259DF3] dark:text-gray-400"
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

          {/* =========================
              Confirm Password
          ========================= */}

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("confirmPassword")}
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder={t("passwordPlaceholderConfirmation")}
                {...register("password_confirmation")}
                className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 pr-12 text-gray-900 outline-none transition focus:border-[#259DF3] focus:ring-2 focus:ring-[#259DF3]/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword((prev) => !prev)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-[#259DF3] dark:text-gray-400"
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>

            {errors.password_confirmation && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password_confirmation.message}
              </p>
            )}
          </div>

          {/* =========================
              Submit
          ========================= */}

          <button
            type="submit"
            disabled={loading}
            className="h-12 w-full rounded-xl bg-[#259DF3] font-medium text-white transition hover:bg-[#1782d1] disabled:cursor-not-allowed disabled:opacity-60 dark:bg-[#4DB8FF] dark:hover:bg-[#3BA3E6]"
          >
            {loading ? "Loading..." : t("register")}
          </button>
        </form>

        {/* =========================
            Social Login
        ========================= */}

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

        {/* =========================
            Login
        ========================= */}

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