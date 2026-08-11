import { Truck } from "lucide-react";
import React from "react";

type Props = {};

export default function CoverTrackYourOrder({}: Props) {
    return (
        <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-black px-4 sm:min-h-[390px]">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/trackOrderCover.png')",
                }}
            />

            {/* Hero Content */}
            <div className="relative w-full max-w-[700px] rounded-xl bg-[#16074a]/90 px-5 py-6 text-center sm:w-fit sm:px-7 sm:py-5">
                {/* Badge */}
                <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-sm border border-main bg-(--main)/10 px-3 py-1 text-base text-gray-200 sm:text-lg">
                    <Truck size={22} className="shrink-0 sm:h-6 sm:w-6" />
                    <span>Stay Updated</span>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
                    Track your order
                </h1>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-[18px]">
                    Follow your order from confirmation to delivery
                </p>
            </div>
        </section>
    );
}