import {
    Bell,
    CreditCard,
    Heart,
    HelpCircle,
    MapPin,
    Package,
    Settings,
    ShoppingBag,
    Star,
    User,
} from "lucide-react";

export const sidebarItems = [
    {
        label: "profile",
        icon: User,
        href: "/profile",
    },
    {
        label: "myOrders",
        icon: ShoppingBag,
        href: "/orders",
    },
    {
        label: "address",
        icon: MapPin,
        href: "/address",
    },
    {
        label: "paymentMethod",
        icon: CreditCard,
        href: "/payment-methods",
    },
    {
        label: "wishlist",
        icon: Heart,
        href: "/wishlist",
    },
    {
        label: "recentlyViewed",
        icon: Package,
        href: "/recently-viewed",
    },
    {
        label: "reviewsAndRatings",
        icon: Star,
        href: "/reviews",
    },
    {
        label: "notifications",
        icon: Bell,
        href: "/notifications",
    },
    {
        label: "accountSettings",
        icon: Settings,
        href: "/settings",
    },
    {
        label: "helpCenter",
        icon: HelpCircle,
        href: "/help",
    },
];