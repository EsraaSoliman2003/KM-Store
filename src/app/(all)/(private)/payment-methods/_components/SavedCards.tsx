import { Plus, Trash2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react'

export default function SavedCards() {
    const t = useTranslations();

    const paymentCards = [
        {
            id: 1,
            type: "visa",
            last4: "4242",
            expires: "12/27",
            isDefault: true,
        },
        {
            id: 2,
            type: "mastercard",
            last4: "4242",
            expires: "12/27",
            isDefault: false,
        },
    ];

    return (
        <section className="overflow-hidden rounded-2xl border border-(--border-dark) bg-(--bg-primary)">
            <div className="border-b border-(--border-dark) px-3 py-3">
                <h2 className="text-[16px] font-semibold text-(--text-primary)">
                    {t("savedCards")}
                </h2>
            </div>

            <div className="space-y-3 p-3">
                {paymentCards.map((card) => (
                    <div
                        key={card.id}
                        className="flex min-h-[62px] items-center justify-between gap-3 rounded-[12px] border border-(--border-dark) px-4 py-3 max-md:flex-wrap max-md:gap-2 max-md:px-3 max-md:py-2.5"
                    >
                        <div className="flex min-w-0 flex-1 items-center gap-3 max-md:w-full max-md:gap-2.5">
                            {/* Card Logo */}
                            {card.type === "visa" ? (
                                <div className="flex h-9 w-14 shrink-0 items-center justify-center rounded-[4px] bg-blue-700 text-[11px] font-bold text-white max-md:h-8 max-md:w-12">
                                    VISA
                                </div>
                            ) : (
                                <div className="relative flex h-9 w-14 shrink-0 items-center justify-center max-md:h-8 max-md:w-12">
                                    <span className="absolute left-1 h-7 w-7 rounded-full bg-red-500 max-md:h-6 max-md:w-6" />
                                    <span className="absolute right-1 h-7 w-7 rounded-full bg-orange-400 max-md:h-6 max-md:w-6" />
                                    <span className="absolute bottom-[-8px] text-[7px] font-medium text-(--text-muted)">
                                        mastercard
                                    </span>
                                </div>
                            )}

                            {/* Card Info */}
                            <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2 max-md:gap-1.5">
                                    <p className="truncate text-[14px] font-semibold text-(--text-primary) max-md:text-[13px]">
                                        {card.type === "visa"
                                            ? t("visaEndingIn")
                                            : t("mastercardEndingIn")}{" "}
                                        {card.last4}
                                    </p>

                                    {card.isDefault && (
                                        <span className="shrink-0 rounded-full border border-(--main) bg-[rgba(104,58,208,0.12)] px-3 py-1.5 text-[12px] font-medium text-(--text-primary) max-md:px-2.5 max-md:py-1 max-md:text-[11px]">
                                            {t("default")}
                                        </span>
                                    )}
                                </div>

                                <p className="mt-0.5 text-[11px] text-(--text-muted)">
                                    {t("expires")} {card.expires}
                                </p>
                            </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-4 max-md:ml-auto max-md:w-full max-md:justify-end max-md:gap-2">
                            {!card.isDefault && (
                                <button
                                    type="button"
                                    className="rounded-[7px] bg-(--main) px-5 py-2 text-[14px] font-medium text-(--white) transition-opacity hover:opacity-90 max-md:px-4 max-md:py-1.5 max-md:text-[12px]"
                                >
                                    {t("setAsDefault")}
                                </button>
                            )}

                            <button
                                type="button"
                                aria-label={t("deletePaymentMethod")}
                                className="text-red-500 transition-colors hover:text-red-400"
                            >
                                <Trash2 size={22} className="max-md:h-5 max-md:w-5" />
                            </button>
                        </div>
                    </div>
                ))}

                {/* Add Payment Method */}
                <Link
                    href="/profile/payment-methods/new"
                    className="flex py-2 items-center justify-center gap-2 rounded-[10px] border border-(--main) text-[18px] font-medium text-(--main) transition-colors hover:bg-[rgba(104,58,208,0.08)]"
                >
                    <Plus size={24} />
                    {t("addPaymentMethod")}
                </Link>
            </div>
        </section>
    )
}
