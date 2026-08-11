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
            <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">
                Pay with
            </h2>

            {/* Payment Methods */}
            <div className="grid grid-cols-3 gap-3">
                {/* Card */}
                <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`flex h-[70px] flex-col items-center justify-center gap-1.5 rounded-2xl border transition ${paymentMethod === "card"
                        ? "border-[#683AD0] bg-[#683AD0]/10 text-[#9b6cff]"
                        : "border-[#2d2d2d] bg-[#151515] text-gray-400 hover:border-[#683AD0]"
                        }`}
                >
                    <CreditCard size={19} />
                    <span className="text-xs">Card</span>
                </button>

                {/* Wallet */}
                <button
                    type="button"
                    onClick={() => setPaymentMethod("wallet")}
                    className={`flex h-[70px] flex-col items-center justify-center gap-1.5 rounded-2xl border transition ${paymentMethod === "wallet"
                        ? "border-[#683AD0] bg-[#683AD0]/10 text-[#9b6cff]"
                        : "border-[#2d2d2d] bg-[#151515] text-gray-400 hover:border-[#683AD0]"
                        }`}
                >
                    <Wallet size={19} />
                    <span className="text-xs">Wallet</span>
                </button>

                {/* Cash */}
                <button
                    type="button"
                    onClick={() => setPaymentMethod("cash")}
                    className={`flex h-[70px] flex-col items-center justify-center gap-1.5 rounded-2xl border transition ${paymentMethod === "cash"
                        ? "border-[#683AD0] bg-[#683AD0]/10 text-[#9b6cff]"
                        : "border-[#2d2d2d] bg-[#151515] text-gray-400 hover:border-[#683AD0]"
                        }`}
                >
                    <Truck size={19} />
                    <span className="text-xs">On-Delivery</span>
                </button>
            </div>

            {/* Card */}
            {paymentMethod === "card" && (
                <div className="mt-5 rounded-2xl border border-[#2d2d2d] bg-[#151515] p-4 sm:p-5">
                    <div className="space-y-4">
                        {/* Card Number */}
                        <div>
                            <label className="mb-2 block text-xs font-medium text-white">
                                Card Number
                            </label>

                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="1234-5678-9123-4567"
                                    className="h-11 w-full rounded-xl border border-[#2d2d2d] bg-[#111111] px-4 pr-10 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#683AD0]"
                                />

                                <LockKeyhole
                                    size={15}
                                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                                />
                            </div>
                        </div>

                        {/* Expiry + CVC */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {/* Expiry */}
                            <div>
                                <label className="mb-2 block text-xs font-medium text-white">
                                    Expiry date
                                </label>

                                <div
                                    onClick={openDatePicker}
                                    className="relative cursor-pointer"
                                >
                                    <input
                                        ref={expiryRef}
                                        type="date"
                                        className="pointer-events-none h-11 w-full cursor-pointer rounded-xl border border-[#2d2d2d] bg-[#111111] px-4 pr-10 text-sm text-white outline-none transition focus:border-[#683AD0] [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:hidden"
                                    />

                                    <CalendarDays
                                        size={15}
                                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                                    />
                                </div>
                            </div>

                            {/* CVC */}
                            <div>
                                <label className="mb-2 block text-xs font-medium text-white">
                                    CVC
                                </label>

                                <input
                                    type="password"
                                    placeholder="***"
                                    className="h-11 w-full rounded-xl border border-[#2d2d2d] bg-[#111111] px-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#683AD0]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Wallet */}
            {paymentMethod === "wallet" && (
                <div className="mt-5 rounded-2xl border border-[#2d2d2d] bg-[#151515] p-4 sm:p-5">
                    <div className="space-y-4">
                        <div>
                            <label className="mb-2 block text-xs font-medium text-white">
                                Wallet Number
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
                                inputClass={`!h-11 !w-full !rounded-xl !border !border-[#2d2d2d] !bg-[#111111] !text-white ${t("dir") === "rtl"
                                    ? "!text-right"
                                    : "!text-left"
                                    }`}
                                buttonClass="!rounded-l-xl !border-[#2d2d2d] !bg-[#111111]"
                                dropdownClass="!rounded-xl"
                                placeholder={t("phonePlaceholder")}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Cash */}
            {paymentMethod === "cash" && (
                <div className="mt-5 rounded-2xl border border-[#2d2d2d] bg-[#151515] p-5 text-sm text-gray-400">
                    Pay when your order is delivered to your address.
                </div>
            )}
        </section>
    );
}