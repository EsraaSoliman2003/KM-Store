"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import DesktopNav from "./_components/DesktopNav";
import MobileNav from "./_components/MobileNav";

interface Props {
  locale: string;
}

export default function Navbar({ locale }: Props) {
  const t = useTranslations();
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const isDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !darkMode;

    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };


  return (
    <header className="fixed w-full top-0 z-50 bg-(--bg-primary)">
      <div className="container flex h-18 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="bg-(--bg-secondary) text-(--text-primary) rounded-lg flex h-10 w-10 items-center justify-center font-bold">
            KM
          </div>
        </Link>

        <DesktopNav locale={locale} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <MobileNav locale={locale} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      </div>
    </header>
  );
}