import { bags } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
    const t = useTranslations();

    return (
        <section className="container mt-18 min-h-[calc(100vh-72px)] py-5 md:py-10">
            {/* Main Content */}
            <div className="flex min-h-[calc(100vh-170px)] flex-col items-center justify-center pb-8">
                {/* Illustration */}
                <div className="relative mb-6 h-[190px] w-[190px] sm:mb-7 sm:h-[230px] sm:w-[230px] md:h-[250px] md:w-[250px] lg:mb-8 lg:h-[270px] lg:w-[270px]">
                    {/* Soft glow */}
                    <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--main)]/10 blur-3xl sm:h-40 sm:w-40" />

                    <Image
                        src={bags}
                        alt={t("orderConfirmedAlt")}
                        fill
                        priority
                        className="relative object-contain"
                    />
                </div>

                {/* Confirmation Message */}
                <div className="w-full max-w-[440px] px-4 text-center sm:px-0">
                    <h1 className="text-lg font-semibold leading-tight sm:text-xl md:text-2xl">
                        {t("orderConfirmedTitle")}
                    </h1>

                    <p className="mt-2 text-xs leading-5 text-gray-400 sm:text-sm">
                        {t("orderConfirmedPlaced")}
                    </p>

                    <p className="text-xs leading-5 text-gray-400 sm:text-sm">
                        {t("orderConfirmedPreparing")}
                    </p>
                </div>

                {/* Actions */}
                <div className="mt-7 flex w-full max-w-[400px] flex-col gap-3 px-4 sm:mt-8 sm:px-0">
                    {/* Track Order */}
                    <Link
                        href={`/orders`}
                        className="h-11 w-full rounded-lg flex justify-center items-center border border-[var(--main)] px-4 text-sm font-medium text-[var(--main)] transition-all duration-200 hover:bg-[var(--main)]/10 active:scale-[0.99] sm:h-12"
                    >
                        {t("trackYourOrder")}
                    </Link>

                    {/* Continue Shopping */}
                    <Link
                        href={"/products"}
                        className="h-11 w-full rounded-lg flex justify-center items-center bg-[var(--main)] px-4 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[var(--main-hover)] hover:shadow-md active:scale-[0.99] sm:h-12"
                    >
                        {t("continueShopping")}
                    </Link>
                </div>
            </div>
        </section>
    );
}