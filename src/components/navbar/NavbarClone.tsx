"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiSun,
  FiMoon,
  FiMenu,
} from "react-icons/fi";
import { links } from "./_components/links";
import SideBar from "./_components/SideBar";
import LanguageSwitcher from "./_components/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/rtk/hooks";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  locale: string;
}

export default function Navbar({ locale }: Props) {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();
  const { token } = useAppSelector(s => s.auth)
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

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

  const handleRouting = () => {
    if (token) {
      router.push("/profile")
    } else {
      router.push("/login")
    }
  }

  const handleRoutingFav = () => {
    if (token) {
      router.push("/wishlist")
    } else {
      router.push("/login")
    }
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-(--bg-primary)">
      <div className="container flex h-18 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="bg-(--bg-secondary) text-(--text-primary) rounded-lg flex h-10 w-10 items-center justify-center font-bold">
            KM
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === `/${locale}` || pathname === "/"
                : pathname.startsWith(`/${locale}${item.href}`) ||
                pathname.startsWith(item.href);

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${isActive
                  ? "text-(--main)"
                  : "text-(--text-primary) hover:text-(--main)"
                  }`}
              >
                {t(item.title)}
              </Link>
            );
          })}
        </nav>

        {/* Right Icons */}
        <div className="hidden items-center gap-5 lg:flex">
          <button className="text-(--text-primary) transition-colors hover:text-(--main)">
            <FiSearch size={19} />
          </button>

          <button onClick={handleRoutingFav} className="text-(--text-primary) transition-colors hover:text-(--main)">
            <FiHeart size={19} />
          </button>

          <Link href={"/cart"} className="text-(--text-primary) transition-colors hover:text-(--main)">
            <FiShoppingCart size={19} />
          </Link>

          <button
            onClick={toggleDarkMode}
            className="text-(--text-primary) transition-colors hover:text-(--main)"
          >
            {darkMode ? <FiSun size={19} /> : <FiMoon size={19} />}
          </button>

          <button onClick={handleRouting} className="text-(--text-primary) transition-colors hover:text-(--main)">
            <FiUser size={19} />
          </button>

          <LanguageSwitcher currentLocale={locale} />
        </div>

        <div className="flex items-center gap-5 lg:hidden">
          <button className="text-(--text-primary) transition-colors hover:text-(--main)">
            <FiSearch size={19} />
          </button>

          <button onClick={handleRoutingFav} className="text-(--text-primary) transition-colors hover:text-(--main)">
            <FiHeart size={19} />
          </button>

          <Link href={"/cart"} className="text-(--text-primary) transition-colors hover:text-(--main)">
            <FiShoppingCart size={19} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="text-(--text-primary)"
          >
            <FiMenu size={25} />
          </button>
        </div>


      </div>

      <SideBar
        locale={locale}
        isSidebarOpen={open}
        setIsSidebarOpen={setOpen}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </header>
  );
}