// ProfileStats.tsx
import { useAppSelector } from "@/rtk/hooks";
import {
    Heart,
    ShoppingBag,
    User,
    WalletCards,
} from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import { Stat } from "./Stat";
import ImageContainer from "./ImageContainer";

export default function ProfileStats() {
    const t = useTranslations();
    const { profile } = useAppSelector((s) => s.profile);

    const user = profile?.data.user;

    const fullName = user?.name || "Ahmed Hassan";
    const email = user?.email || t("noEmail");

    return (
        <section className="mb-4 overflow-hidden rounded-2xl border border-(--border-dark) bg-(--bg-tertiary)">
            <div className="flex flex-col md:flex-row justify-between p-4">

                {/* User */}
                <div className="flex items-center gap-3 md:min-w-60 xl:min-w-90">
                    <ImageContainer />

                    <div className="min-w-0">
                        <p className="truncate text-lg sm:text-xl font-semibold text-(--text-primary)">
                            {fullName}
                        </p>

                        <p className="mt-0.5 truncate text-xs sm:text-sm text-(--text-muted)">
                            {email}
                        </p>
                    </div>
                </div>

                {/* Desktop separator */}
                <div className="hidden md:block my-8 w-px bg-(--border-dark)" />

                {/* Mobile stats */}
                <div className="mt-10 md:mt-5 grid grid-cols-3 gap-x-2 gap-y-4 md:contents">

                    <Stat
                        icon={ShoppingBag}
                        value="18"
                        label={t("orders")}
                        linkLabel={t("viewOrders")}
                        href="/orders"
                    />

                    {/* Desktop separator */}
                    <div className="hidden md:block my-8 w-px bg-(--border-dark)" />

                    <Stat
                        icon={Heart}
                        value="12"
                        label={t("wishlist")}
                        linkLabel={t("viewWishlist")}
                        href="/wishlist"
                    />

                    {/* Desktop separator */}
                    <div className="hidden md:block my-8 w-px bg-(--border-dark)" />

                    <Stat
                        icon={WalletCards}
                        value="4"
                        label={t("coupons")}
                        linkLabel={t("viewCoupons")}
                        href="/coupons"
                    />

                </div>
            </div>
        </section>
    );
}