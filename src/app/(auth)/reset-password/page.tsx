"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { useResetPasswordForm } from "@/hooks/useResetPasswordForm";

export default function Page() {
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    formState,
    onSubmit,
    loading,
  } = useResetPasswordForm();

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showPasswordConfirmation,
    setShowPasswordConfirmation,
  ] = useState(false);

  const dir =
    t("dir") === "ltr"
      ? "ltr"
      : "rtl";

  return (
    <main
      dir={dir}
      className="flex min-h-screen items-center justify-center bg-(--bg-primary) px-4"
    >
      <div className="my-5 w-full rounded-2xl border-(--border-dark) p-3 sm:p-8 md:my-20 md:w-212 md:border">
        <div className="m-auto md:max-w-171.5">

          {/* Logo */}
          <div className="mb-5 flex items-center justify-center">
            <Link
              href="/"
              className="text-4xl font-black tracking-tight transition-all duration-300 hover:scale-105 hover:text-(--main)"
            >
              K&M
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-center text-xl font-semibold">
            {t("resetPasswordTitle")}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-2 max-w-md text-center text-sm leading-6 text-(--text-muted)">
            {t("resetPasswordSubtitle")}
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-5"
          >

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-(--text-primary)"
              >
                {t("password")}
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  {...register("password")}
                  className="h-12 w-full rounded-[12px] border border-(--border-dark) bg-transparent px-4 pe-12 text-sm text-(--text-primary) outline-none transition focus:border-[#259DF3] focus:ring-2 focus:ring-[#259DF3]/20"
                  placeholder={t(
                    "enterNewPassword"
                  )}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      (prev) => !prev
                    )
                  }
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-(--text-muted) transition hover:text-(--text-primary)"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>

              {formState.errors.password && (
                <p className="mt-1 text-xs text-(--error)">
                  {
                    formState.errors
                      .password.message
                  }
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="password_confirmation"
                className="mb-2 block text-sm font-medium text-(--text-primary)"
              >
                {t("confirmPassword")}
              </label>

              <div className="relative">
                <input
                  id="password_confirmation"
                  type={
                    showPasswordConfirmation
                      ? "text"
                      : "password"
                  }
                  {...register(
                    "password_confirmation"
                  )}
                  className="h-12 w-full rounded-[12px] border border-(--border-dark) bg-transparent px-4 pe-12 text-sm text-(--text-primary) outline-none transition focus:border-[#259DF3] focus:ring-2 focus:ring-[#259DF3]/20"
                  placeholder={t(
                    "confirmNewPassword"
                  )}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPasswordConfirmation(
                      (prev) => !prev
                    )
                  }
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-(--text-muted) transition hover:text-(--text-primary)"
                >
                  {showPasswordConfirmation ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>

              {formState.errors
                .password_confirmation && (
                <p className="mt-1 text-xs text-(--error)">
                  {
                    formState.errors
                      .password_confirmation
                      .message
                  }
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="h-12 w-full rounded-[12px] bg-(--main) font-medium text-white transition hover:bg-(--main)/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Loading..."
                : t("resetPassword")}
            </button>
          </form>

          {/* Back To Login */}
          <p className="mt-6 text-center text-sm text-gray-600">
            {t("rememberPass")}{" "}

            <Link
              href="/login"
              className="font-semibold text-(--main) hover:underline"
            >
              {t("backToLogin")}
            </Link>
          </p>

        </div>
      </div>
    </main>
  );
}