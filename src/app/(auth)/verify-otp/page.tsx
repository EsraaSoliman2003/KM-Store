"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import { useVerifyResetPasswordOtp } from "@/hooks/useVerifyResetPasswordOtp";

export default function Page() {
  const t = useTranslations();

  const dir =
    t("dir") === "ltr"
      ? "ltr"
      : "rtl";

  const {
    otp,
    loading,
    resending,
    inputRefs,
    countryCode,
    phone,
    handleChange,
    handleKeyDown,
    handlePaste,
    handleSubmit,
    handleResend,
  } = useVerifyResetPasswordOtp();

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
            {t("verifyOtpTitle")}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-2 max-w-md text-center text-sm leading-6 text-(--text-muted)">
            {t("verifyOtpSubtitle")}
          </p>

          {/* Phone */}
          <p
            dir="ltr"
            className="mt-3 text-center text-sm font-medium text-(--text-primary)"
          >
            {countryCode} {phone}
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >
            {/* OTP Inputs */}
            <div
              dir="ltr"
              className="flex justify-center gap-2 sm:gap-3"
            >
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) =>
                    handleChange(
                      e.target.value,
                      index
                    )
                  }
                  onKeyDown={(e) =>
                    handleKeyDown(
                      e,
                      index
                    )
                  }
                  onPaste={handlePaste}
                  className="h-12 w-11 rounded-[12px] border border-(--border-dark) bg-transparent text-center text-lg font-semibold text-(--text-primary) outline-none transition focus:border-[#259DF3] focus:ring-2 focus:ring-[#259DF3]/20 sm:h-14 sm:w-14"
                  aria-label={`OTP digit ${index + 1
                    }`}
                />
              ))}
            </div>

            {/* Verify */}
            <button
              type="submit"
              disabled={
                loading ||
                otp.join("").length !== 4
              }
              className="h-12 w-full rounded-[12px] bg-(--main) font-medium text-white transition hover:bg-(--main)/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Loading..."
                : t("verifyCode")}
            </button>
          </form>

          {/* Resend */}
          <div className="mt-6 text-center text-sm">
            <span className="text-(--text-muted)">
              {t("didntReceiveCode")}{" "}
            </span>

            <button
              type="button"
              onClick={handleResend}
              disabled={resending}
              className="font-semibold text-(--main) transition hover:underline disabled:cursor-not-allowed disabled:opacity-50"
            >
              {resending
                ? "Loading..."
                : t("resendCode")}
            </button>
          </div>

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