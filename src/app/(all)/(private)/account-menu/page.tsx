"use client"
import {
    Bell,
    CreditCard,
    Heart,
    HelpCircle,
    LogOut,
    MapPin,
    Package,
    Settings,
    ShoppingBag,
    Star,
    User,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLogout } from "@/hooks/useLogout";

export default function page() {
    const t = useTranslations();
    const logOut = useLogout();

    const sidebarItems = [
        {
            label: t("profile"),
            icon: User,
            href: "/profile",
            active: true,
        },
        {
            label: t("myOrders"),
            icon: ShoppingBag,
            href: "/orders",
        },
        {
            label: t("address"),
            icon: MapPin,
            href: "/profile/address",
        },
        {
            label: t("paymentMethod"),
            icon: CreditCard,
            href: "/profile/payment-methods",
        },
        {
            label: t("wishlist"),
            icon: Heart,
            href: "/wishlist",
        },
        {
            label: t("recentlyViewed"),
            icon: Package,
            href: "/recently-viewed",
        },
        {
            label: t("reviewsAndRatings"),
            icon: Star,
            href: "/reviews",
        },
        {
            label: t("notifications"),
            icon: Bell,
            href: "/notifications",
        },
        {
            label: t("accountSettings"),
            icon: Settings,
            href: "/profile/settings",
        },
        {
            label: t("helpCenter"),
            icon: HelpCircle,
            href: "/help",
        },
    ];

    return (
        <div className='py-18'>
            <div className="">
                <div className="border-b border-(--border-dark) p-4">
                    <p className="text-lg font-semibold uppercase tracking-[0.12em] text-(--text-muted)">
                        {t("myAccount")}
                    </p>
                </div>

                <nav className="p-2 space-y-1">
                    {sidebarItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex items-center gap-4 rounded-[5px] p-4 text-lg transition-all text-(--text-secondary) hover:bg-(--main)/10 hover:text-(--text-primary)`}
                            >
                                <Icon size={24} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Logout */}
                <div className="border-t border-(--border-dark) p-1.5">
                    <button
                        type="button"
                        onClick={logOut}
                        className="flex w-full items-center gap-2 rounded-[5px] p-4 justify-center text-lg text-(--error) transition-colors hover:bg-[rgba(239,68,68,0.08)]"
                    >
                        <LogOut size={24} />
                        <span>{t("logout")}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
