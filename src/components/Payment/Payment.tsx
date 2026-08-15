"use client";

import React, { useRef, useState } from "react";
import {
    CreditCard,
    Wallet,
    Truck,
    CalendarDays,
    LockKeyhole,
} from "lucide-react";
import { useTranslations } from "next-intl";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./style.css"

export default function Payment() {
    const t = useTranslations();

    const [paymentMethod, setPaymentMethod] = useState<
        "card" | "wallet" | "cash"
    >("card");

    const [phone, setPhone] = useState("");

    const expiryRef = useRef<HTMLInputElement>(null);

    const openDatePicker = () => {
        expiryRef.current?.showPicker();
    };

    return (
        <section className="mb-2">
            <h2 className="mb-4 text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
                {t("payWith")}
            </h2>

            {/* Payment Methods */}
            <div className="grid grid-cols-3 gap-3">
                {/* Card */}
                <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`flex h-[70px] flex-col items-center justify-center gap-1.5 rounded-2xl border transition ${paymentMethod === "card"
                        ? "border-[var(--main)] bg-[var(--main)]/10 text-[var(--main)]"
                        : "border-[var(--border-dark)] bg-[var(--bg-tertiary)] text-[var(--text-muted)] hover:border-[var(--main)]"
                        }`}
                >
                    <CreditCard size={19} />
                    <span className="text-xs">{t("paymentCard")}</span>
                </button>

                {/* Wallet */}
                <button
                    type="button"
                    onClick={() => setPaymentMethod("wallet")}
                    className={`flex h-[70px] flex-col items-center justify-center gap-1.5 rounded-2xl border transition ${paymentMethod === "wallet"
                        ? "border-[var(--main)] bg-[var(--main)]/10 text-[var(--main)]"
                        : "border-[var(--border-dark)] bg-[var(--bg-tertiary)] text-[var(--text-muted)] hover:border-[var(--main)]"
                        }`}
                >
                    <Wallet size={19} />
                    <span className="text-xs">{t("paymentWallet")}</span>
                </button>

                {/* Cash */}
                <button
                    type="button"
                    onClick={() => setPaymentMethod("cash")}
                    className={`flex h-[70px] flex-col items-center justify-center gap-1.5 rounded-2xl border transition ${paymentMethod === "cash"
                        ? "border-[var(--main)] bg-[var(--main)]/10 text-[var(--main)]"
                        : "border-[var(--border-dark)] bg-[var(--bg-tertiary)] text-[var(--text-muted)] hover:border-[var(--main)]"
                        }`}
                >
                    <Truck size={19} />
                    <span className="text-xs">{t("paymentOnDelivery")}</span>
                </button>
            </div>

            {/* Card */}
            {paymentMethod === "card" && (
                <div className="mt-5 rounded-2xl border border-[var(--border-dark)] bg-[var(--bg-tertiary)] p-4 sm:p-5">
                    <div className="space-y-4">
                        {/* Card Number */}
                        <div>
                            <label className="mb-2 block text-xs font-medium text-[var(--text-primary)]">
                                {t("cardNumber")}
                            </label>

                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder={t("cardNumberPlaceholder")}
                                    className="h-11 w-full rounded-xl border border-[var(--border-dark)] bg-[var(--bg-tertiary)] px-4 pr-10 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--main)]"
                                />

                                <LockKeyhole
                                    size={15}
                                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
                                />
                            </div>
                        </div>

                        {/* Expiry + CVC */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {/* Expiry */}
                            <div>
                                <label className="mb-2 block text-xs font-medium text-[var(--text-primary)]">
                                    {t("expiryDate")}
                                </label>

                                <div
                                    onClick={openDatePicker}
                                    className="relative cursor-pointer"
                                >
                                    <input
                                        ref={expiryRef}
                                        type="date"
                                        className="pointer-events-none h-11 w-full cursor-pointer rounded-xl border border-[var(--border-dark)] bg-[var(--bg-tertiary)] px-4 pr-10 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--main)] [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:hidden"
                                    />

                                    <CalendarDays
                                        size={15}
                                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
                                    />
                                </div>
                            </div>

                            {/* CVC */}
                            <div>
                                <label className="mb-2 block text-xs font-medium text-[var(--text-primary)]">
                                    {t("cvc")}
                                </label>

                                <input
                                    type="password"
                                    placeholder={t("cvcPlaceholder")}
                                    className="h-11 w-full rounded-xl border border-[var(--border-dark)] bg-[var(--bg-tertiary)] px-4 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--main)]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Wallet */}
            {paymentMethod === "wallet" && (
                <div className="mt-5 rounded-2xl border border-[var(--border-dark)] bg-[var(--bg-tertiary)] p-4 sm:p-5">
                    <div className="space-y-4">
                        <div>
                            <label className="mb-2 block text-xs font-medium text-[var(--text-primary)]">
                                {t("walletNumber")}
                            </label>

                            <PhoneInput
                                country="eg"
                                value={phone}
                                onChange={(value) => {
                                    setPhone(`+${value}`);
                                }}
                                disableCountryCode
                                enableSearch={false}
                                containerClass="!w-full"
                                inputClass={`!h-11 !w-full !rounded-xl !border !border-[var(--border-dark)] !bg-[var(--bg-tertiary)] !text-[var(--text-primary)] ${t("dir") === "rtl"
                                    ? "!text-right"
                                    : "!text-left"
                                    }`}
                                buttonClass="!rounded-l-xl !border-[var(--border-dark)] !bg-[var(--bg-tertiary)]"
                                dropdownClass="!rounded-xl"
                                placeholder={t("phonePlaceholder")}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Cash */}
            {paymentMethod === "cash" && (
                <div className="mt-5 rounded-2xl border border-[var(--border-dark)] bg-[var(--bg-tertiary)] p-5 text-sm text-[var(--text-muted)]">
                    {t("cashDeliveryMessage")}
                </div>
            )}
        </section>
    );
}