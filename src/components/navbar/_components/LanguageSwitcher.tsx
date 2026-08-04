"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface Props {
  currentLocale: string;
}

export default function LanguageSwitcher({ currentLocale }: Props) {
  const router = useRouter();
  const t = useTranslations();

  const toggleLanguage = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";
    setCookie("NEXT_LOCALE", newLocale, { path: "/" });
    router.refresh();
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