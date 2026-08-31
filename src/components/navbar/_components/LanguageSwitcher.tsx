"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { useEffect } from "react";
import { changeLanguage } from "@/rtk/slices/changeLanguageSlice";

interface Props {
  currentLocale: string;
}

export default function LanguageSwitcher({ currentLocale }: Props) {
  const router = useRouter();
  const t = useTranslations();

  const dispatch = useAppDispatch();

  const { loading } = useAppSelector((state) => state.changeLanguage);
  const { token } = useAppSelector((state) => state.auth);

  const toggleLanguage = async () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";

    try {
      if (token) {
        await dispatch(changeLanguage(newLocale)).unwrap();
      }

      setCookie("NEXT_LOCALE", newLocale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });

      window.location.reload();
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  const localeName = currentLocale === "en" ? "العربية" : "English";

  return (
    <button
      onClick={toggleLanguage}
      aria-label={t("language")}
      className="
        flex h-8 items-center gap-1 rounded-full
        border border-(--border-color)
        bg-(--bg-primary)
        px-3
        text-xs font-medium
        text-(--text-primary)
        transition-all duration-200
        hover:border-(--main)
        hover:text-(--main)
        md:h-9 md:px-4 md:text-sm
      "
    >
      <span>{localeName}</span>
    </button>
  );
}