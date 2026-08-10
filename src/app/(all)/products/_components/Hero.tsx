import Link from "next/link";
import React from "react";

type Props = {};

export default function Hero({ }: Props) {
    return (
        <section className="relative min-h-[420px] overflow-hidden sm:min-h-[390px] bg-black">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/cat-background.png')",
                }}
            />

            {/* Hero Content */}
            <div className="container relative z-10 flex h-full min-h-[420px] flex-col justify-center gap-10 py-10 sm:min-h-[390px] sm:gap-12 lg:flex-row lg:items-center lg:justify-between lg:py-0">
                {/* Left Content */}
                <div className="w-full text-center lg:w-auto lg:text-left">
                    {/* Breadcrumb */}
                    <div className="mb-4 flex items-center justify-center gap-2 text-sm text-gray-400 sm:mb-5 sm:gap-3 sm:text-base lg:justify-start">
                        <Link
                            href="/"
                            className="transition-colors hover:text-white"
                        >
                            Home
                        </Link>

                        <span className="text-gray-600">›</span>

                        <span className="text-white">Categories</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">
                        Explore{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
                            Categories
                        </span>
                    </h1>

                    <p className="mt-3 text-base text-gray-300 sm:text-lg lg:text-xl">
                        Find the perfect tech for your lifestyle
                    </p>
                </div>

                {/* Discount */}
                <div className="w-full text-center text-4xl font-semibold leading-tight sm:text-5xl lg:w-auto lg:text-6xl lg:leading-[1.35] text-white">
                    <p>Up to</p>

                    <p className="text-orange-500">40% Off</p>

                    <p>on all products</p>
                </div>
            </div>
        </section>
    );
}
