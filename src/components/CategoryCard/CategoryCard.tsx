"use client";

import { Category } from "@/utils/dtos";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

type Props = {
    item: Category;
    className?: string;
};

export default function CategoryCard({
    item,
    className = "",
}: Props) {
    const t = useTranslations();

    return (
        <Link
            href={`/categories/${item.id}`}
            className={`
                group relative block
                h-full w-full
                overflow-hidden
                rounded-2xl
                border border-transparent
                transition-all
                duration-300
                ease-in-out
                hover:-translate-y-1
                hover:border-(--main)
                hover:shadow-[0_16px_40px_var(--shadow-color)]
                ${className}
            `}
        >
            {/* ================= IMAGE ================= */}
            <Image
                src={item.image}
                alt={String(item.id)}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                loading="eager"
                className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                "
            />

            {/* ================= OVERLAY ================= */}
            <div
                className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                    transition-opacity
                    duration-300
                    group-hover:opacity-90
                "
            />

            {/* ================= CONTENT ================= */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3 sm:p-5">
                <div>
                    <h3
                        className="
                            text-base
                            font-semibold
                            text-white
                            transition-colors
                            duration-300
                            group-hover:text-(--main-light)
                            sm:text-lg
                            lg:text-xl
                        "
                    >
                        {item.name}
                    </h3>

                    <p
                        className="
                            mt-1
                            text-xs
                            text-white/75
                            transition-colors
                            duration-300
                            group-hover:text-white
                            sm:mt-2
                            sm:text-sm
                        "
                    >
                        {item.level}
                    </p>
                </div>

                <span
                    className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-(--border-color)
                        bg-[rgba(var(--bg-primary-rgb),0.8)]
                        text-(--text-primary)
                        backdrop-blur-sm
                        transition-all
                        duration-300
                        sm:h-10
                        sm:w-10
                        lg:h-11
                        lg:w-11
                        group-hover:rotate-12
                        group-hover:scale-110
                        group-hover:border-(--main)
                        group-hover:bg-(--main)
                        group-hover:text-(--text-white)
                    "
                >
                    <FiArrowUpRight className="text-base sm:text-lg lg:text-xl" />
                </span>
            </div>
        </Link>
    );
}