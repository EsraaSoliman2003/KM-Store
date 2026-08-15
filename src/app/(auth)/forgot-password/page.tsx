"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "@/rtk/slices/authSlice";
import { useAppSelector } from "@/rtk/hooks";
import { useRouter } from "next/navigation";
import PhoneInput, {
  CountryData,
} from "react-phone-input-2";

export default function Page() {
  const t = useTranslations();
  const dir = t("dir") === "ltr" ? "ltr" : "rtl";
  const router = useRouter();

  const dispatch = useDispatch();
  const { loading } = useAppSelector(s => s.auth)

  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+20");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!phone) return;

    try {
      const response = await dispatch(
        forgotPassword({
          country_code: countryCode,
          phone,
        }) as any
      ).unwrap();

      console.log("Forgot password response:", response);

      router.push(
        `/verify-otp?country_code=${encodeURIComponent(
          countryCode
        )}&phone=${encodeURIComponent(phone)}`
      );
    } catch (error) {
      console.error("Forgot password error:", error);
    }
  };

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
            {t("forgotPasswordTitle")}
          </h1>

          <p className="mt-2 text-center text-sm text-(--text-muted)">
            {t("forgotPasswordSubtitle")}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Phone Number */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                {t("phoneNumber")}
              </label>

              <PhoneInput
                country="eg"
                value={`${countryCode.replace("+", "")}${phone}`}
                onChange={(value, country) => {
                  const countryData = country as CountryData;

                  const dialCode = `+${countryData.dialCode}`;

                  setCountryCode(dialCode);

                  const cleanPhone = value
                    .replace(countryData.dialCode, "")
                    .replace(/\D/g, "");

                  setPhone(cleanPhone);
                }}
                enableSearch={false}
                containerClass="!w-full"
                placeholder={t("phonePlaceholder")}
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              disabled={loading || !phone}
              className="h-12 w-full rounded-[12px] bg-(--main) font-medium text-white transition hover:bg-(--main)/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Loading..." : t("sendCode")}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-(--border-dark)" />

            <span className="text-sm text-gray-500">
              {t("orContinueWith")}
            </span>

            <div className="h-px flex-1 bg-(--border-dark)" />
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