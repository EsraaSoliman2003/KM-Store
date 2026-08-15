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
  const dir = t("dir") === "ltr" ? "ltr" : "rtl";

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
    <main
      dir={dir}
      className="flex min-h-screen items-center justify-center px-4 bg-(--bg-primary)"
    >
      <div className="w-full md:w-212 rounded-2xl p-3 sm:p-8 md:border border-(--border-dark) my-5 md:my-20">
        <div className="md:max-w-171.5 m-auto">
          <div className="flex items-center justify-center mb-5">
            <Link
              href="/"
              className="text-4xl font-black tracking-tight transition-all duration-300 hover:scale-105 hover:text-(--main)"
            >
              K&M
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-center text-xl font-semibold">
            {t("registerTitle")}
          </h1>

          <p className="mt-2 text-center text-sm text-(--text-muted)">
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
                className={`h-12 w-full rounded-[12px] border px-4 text-(--text-primary) outline-none transition focus:border-[#259DF3] focus:ring-2 focus:ring-[#259DF3]/20 border-(--border-dark)`}
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
                  className={`h-12 w-full rounded-[12px] border px-4 ${dir === "rtl" ? "pl-12" : "pr-12"} text-(--text-primary) outline-none transition focus:border-[#259DF3] focus:ring-2 focus:ring-[#259DF3]/20 border-(--border-dark)`}
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
                  className={`h-12 w-full rounded-[12px] border px-4 ${dir === "rtl" ? "pl-12" : "pr-12"} text-(--text-primary) outline-none transition focus:border-[#259DF3] focus:ring-2 focus:ring-[#259DF3]/20 border-(--border-dark)`}
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
              className="h-12 w-full rounded-[12px] bg-(--main) font-medium text-white transition hover:bg-(--main)/90 disabled:cursor-not-allowed disabled:opacity-60]3BA3E6]"
            >
              {loading ? "Loading..." : t("register")}
            </button>
          </form>

          {/* Social Login */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-(--border-dark)" />

            <span className="text-sm text-gray-500">
              {t("orContinueWith")}
            </span>

            <div className="h-px flex-1 bg-(--border-dark)" />
          </div>

          <div className="flex justify-center gap-4">
            <button
              type="button"
              aria-label="Google"
              className="flex h-12 w-12 items-center justify-center rounded-[8px] border border-(--border-dark) transition hover:border-[#259DF3] hover:bg-gray-504DB8FF]-800"
            >
              <FaGoogle
                size={20}
                className="text-[#DB4437]"
              />
            </button>

            <button
              type="button"
              aria-label="Facebook"
              className="flex h-12 w-12 items-center justify-center rounded-[8px] border border-(--border-dark) transition hover:border-[#259DF3] hover:bg-gray-504DB8FF]-800"
            >
              <FaFacebookF
                size={20}
                className="text-[#1877F2]"
              />
            </button>
          </div>

          {/* login */}
          <p className="mt-6 text-center text-sm text-gray-600">
            {t("alreadyHaveAccount")}{" "}
            <Link
              href="/login"
              className="font-semibold text-(--main) hover:underline]"
            >
              {t("login")}
            </Link>
          </p>

        </div>
      </div>
    </main>
  );
}
