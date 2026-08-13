import { useAppSelector } from '@/rtk/hooks';
import { Heart, ShoppingBag, User, WalletCards } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'
import { Stat } from './Stat';

export default function ProfileStats() {
    const t = useTranslations();
    const { profile } = useAppSelector((s) => s.profile);
    const user = profile?.data.user;
    const fullName = user?.name || "Ahmed Hassan";
    const email = user?.email || t("noEmail");
    const initials = fullName
        .split(" ")
        .slice(0, 2)
        .map((name: string) => name.charAt(0))
        .join("")
        .toUpperCase();

    return (
        <section className="mb-4 overflow-hidden rounded-2xl border border-(--border-dark) bg-(--bg-tertiary)">
            <div className="flex flex-col (--border-dark) sm:flex-row justify-between p-4">

                {/* User */}
                <div className="flex items-center gap-3 sm:min-w-90">
                    <div className="relative flex h-22 w-22 shrink-0 items-center justify-center rounded-full bg-(--main) text-[13px] font-bold text-(--text-white)">
                        {user?.avatar ? (
                            <img
                                src={user.avatar}
                                alt={fullName}
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            initials
                        )}

                        <span className="absolute bottom-0 right-0 p-1 flex items-center justify-center rounded-full border border-(--text-white) bg-[#8B5CF6]">
                            <User size={20} />
                        </span>
                    </div>

                    <div className="min-w-0">
                        <p className="truncate text-xl font-semibold text-(--text-primary)">
                            {fullName}
                        </p>

                        <p className="mt-0.5 truncate text-sm text-(--text-muted)">
                            {email}
                        </p>
                    </div>
                </div>

                <div className="my-8 w-px  bg-(--border-dark)" />

                {/* Orders */}
                <Stat
                    icon={ShoppingBag}
                    value="18"
                    label={t("orders")}
                    linkLabel={t("viewOrders")}
                    href="/orders"
                />

                <div className="my-8 w-px  bg-(--border-dark)" />

                {/* Wishlist */}
                <Stat
                    icon={Heart}
                    value="12"
                    label={t("wishlist")}
                    linkLabel={t("viewWishlist")}
                    href="/wishlist"
                />

                <div className="my-8 w-px  bg-(--border-dark)" />

                {/* Coupons */}
                <Stat
                    icon={WalletCards}
                    value="4"
                    label={t("coupons")}
                    linkLabel={t("viewCoupons")}
                    href="/coupons"
                />
            </div>
        </section>
    )
}
