import React from 'react'
import { links } from './links';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { FiHeart, FiMoon, FiSearch, FiShoppingCart, FiSun, FiUser } from 'react-icons/fi';
import LanguageSwitcher from './LanguageSwitcher';
import { useAppSelector } from '@/rtk/hooks';

interface Props {
    locale: string;
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export default function DesktopNav({ locale, darkMode, toggleDarkMode }: Props) {
    const pathname = usePathname();
    const t = useTranslations();

    const router = useRouter();
    const { token } = useAppSelector(s => s.auth)

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

    const handleRoutingCart = () => {
        if (token) {
            router.push("/cart")
        } else {
            router.push("/login")
        }
    }


    return (
        <>
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
                <Link href={"/categories/#search"} className="text-(--text-primary) transition-colors hover:text-(--main)">
                    <FiSearch size={19} />
                </Link>

                <button onClick={handleRoutingFav} className="text-(--text-primary) transition-colors hover:text-(--main)">
                    <FiHeart size={19} />
                </button>

                <button onClick={handleRoutingCart} className="text-(--text-primary) transition-colors hover:text-(--main)">
                    <FiShoppingCart size={19} />
                </button>

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
        </>
    )
}
