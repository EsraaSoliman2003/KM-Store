"use client";

import { useState } from "react";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslations } from "next-intl";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const t = useTranslations();
  const router = useRouter();

  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // استدعاء API لإرسال الكود

      // لو نجح
      router.push("/verify-code");
    } catch (error) {
      console.error("Error sending code:", error);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-center text-3xl font-bold text-gray-900">
          {t("forgotPasswordTitle")}
        </h1>

        <p className="mt-2 text-center text-sm leading-6 text-gray-500">
          {t("forgotPasswordSubtitle")}
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              {t("phoneNumber")}
            </label>

            <PhoneInput
              country="eg"
              value={phone}
              onChange={setPhone}
              enableSearch={false}
              disableCountryCode
              containerClass="!w-full"
              inputClass={
                t("dir") === "rtl" ? "!text-right" : "!text-left"
              }
              buttonClass="!bg-gray-50"
              dropdownClass="!rounded-xl"
              placeholder={t("phonePlaceholder")}
            />
          </div>

          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] font-medium text-white transition hover:bg-[#1ebe5d]"
          >
            <FaWhatsapp size={20} />
            {t("sendCode")}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="text-sm font-medium text-[#259DF3] transition hover:underline"
          >
            {t("backToLogin")}
          </Link>
        </div>
      </div>
    </main>
  );
}