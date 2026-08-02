"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function VerifyCodePage() {
  const t = useTranslations();
  const router = useRouter();

  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < code.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      if (code[index]) {
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
        return;
      }

      if (index > 0) {
        inputRefs.current[index - 1]?.focus();

        const newCode = [...code];
        newCode[index - 1] = "";
        setCode(newCode);
      }
    }

    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === "ArrowRight" && index < code.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pasted) return;

    const newCode = [...code];

    pasted.split("").forEach((digit, index) => {
      newCode[index] = digit;
    });

    setCode(newCode);

    const lastIndex = Math.min(pasted.length - 1, 5);
    inputRefs.current[lastIndex]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const otp = code.join("");

    console.log("OTP:", otp);

    // TODO:
    // Verify OTP API
    // Success => router.push("/reset-password")
    // Error => show error message

    // router.push("/reset-password");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10 dark:bg-gray-950">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
          {t("verificationTitle")}
        </h1>

        <p className="mt-2 text-center text-sm leading-6 text-gray-500 dark:text-gray-400">
          {t("verificationSubtitle")}
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex justify-center gap-3">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                autoComplete={index === 0 ? "one-time-code" : "off"}
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
                className="h-14 w-14 rounded-xl border border-gray-300 bg-white text-center text-xl font-semibold text-gray-900 outline-none transition focus:border-[#259DF3] focus:ring-2 focus:ring-[#259DF3]/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            ))}
          </div>

          <button
            type="submit"
            className="mt-8 h-12 w-full rounded-xl bg-[#259DF3] font-medium text-white transition hover:bg-[#1782d1] dark:bg-[#4DB8FF] dark:hover:bg-[#3BA3E6]"
          >
            {t("verifyCode")}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t("didntReceiveCode")}
          </p>

          <button
            type="button"
            className="mt-2 font-medium text-[#259DF3] hover:underline dark:text-[#4DB8FF]"
          >
            {t("resendCode")}
          </button>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="text-sm font-medium text-[#259DF3] hover:underline dark:text-[#4DB8FF]"
          >
            {t("backToLogin")}
          </Link>
        </div>
      </div>
    </main>
  );
}