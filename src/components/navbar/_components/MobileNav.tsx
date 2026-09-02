import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { FiHeart, FiMenu, FiSearch, FiShoppingCart } from 'react-icons/fi';
import { useAppSelector } from '@/rtk/hooks';
import SideBar from './SideBar';

interface Props {
    locale: string;
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export default function MobileNav({ locale, darkMode, toggleDarkMode }: Props) {
    const pathname = usePathname();
    const t = useTranslations();
    const [open, setOpen] = useState(false);


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

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "unset";

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [open]);


    return (

        <>
            <div className="flex items-center gap-5 lg:hidden">
                <Link href={"/categories/#search"} className="text-(--text-primary) transition-colors hover:text-(--main)">
                    <FiSearch size={19} />
                </Link>

                <button onClick={handleRoutingFav} className="text-(--text-primary) transition-colors hover:text-(--main)">
                    <FiHeart size={19} />
                </button>

                <button onClick={handleRoutingCart} className="text-(--text-primary) transition-colors hover:text-(--main)">
                    <FiShoppingCart size={19} />
                </button>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(true)}
                    className="text-(--text-primary)"
                >
                    <FiMenu size={25} />
                </button>
            </div>

            <SideBar
                locale={locale}
                isSidebarOpen={open}
                setIsSidebarOpen={setOpen}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />

        </>
    )
}
