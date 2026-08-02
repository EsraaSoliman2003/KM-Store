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
      className="flex h-8 items-center gap-1 rounded-full border-2 border-gray-200 bg-transparent px-2.5 text-xs font-medium text-gray-600 transition hover:border-[#259DF3] hover:bg-[#259DF3]/10 hover:text-[#259DF3] focus:outline-none focus:ring-2 focus:ring-[#259DF3]/50 md:h-9 md:px-3.5 md:text-sm"
    >
      <span>{localeName}</span>
    </button>
  );
}