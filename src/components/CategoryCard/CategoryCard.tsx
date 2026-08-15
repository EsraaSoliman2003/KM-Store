"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

type Category = {
    id: number;
    title: string;
    products: string;
    image: string;
};

type Props = {
    item: Category;
    className?: string;
    isSmall?: boolean;
};

export default function CategoryCard({
    item,
    className = "",
    isSmall = false
}: Props) {
    const t = useTranslations();

    return (
        <Link
            href={`/categories/${item.id}`}
            className={`
        group relative
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
                alt={item.title}
                fill
                sizes="(min-width: 1280px) 33vw, 50vw"
                loading="eager"
                className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                "
            />

            {/* Overlay */}
            <div
                className="
                    absolute inset-0
                    bg-gradient-to-t from-black/80 via-black/20 to-transparent
                    transition-opacity duration-300
                    group-hover:opacity-90
                  "
            />

            {/* Content */}
            <div className={`${isSmall ? "absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-2 p-3" : "absolute inset-x-0 bottom-0 flex items-end justify-between p-3 sm:p-5"}`}>
                <div>
                    <h3
                        className={`
                            ${isSmall ? "truncate text-xs font-semibold text-white" : `
                                                            text-base sm:text-lg lg:text-xl
                            font-semibold text-white
                            transition-colors duration-300
                            group-hover:text-(--main-light)
                                `}
                        `}
                    >
                        {t(item.title)}
                    </h3>

                    <p className={`${isSmall ? "mt-1 text-[9px] text-white/70" : "mt-1 text-white/75 transition-colors duration-300 group-hover:text-white sm:mt-2 text-xs sm:text-sm"}`}>
                        {t(item.products)}
                    </p>
                </div>

                <button
                    className={`
                        ${isSmall ? `
            flex
            h-7
            w-7
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
            group-hover:scale-110
            group-hover:border-(--main)
            group-hover:bg-(--main)
                            ` : `
                                                  flex
                      h-9 w-9
                      shrink-0
                      items-center justify-center
                      rounded-full
                      border border-(--border-color)
                      bg-[rgba(var(--bg-primary-rgb),0.8)]
                      text-(--text-primary)
                      backdrop-blur-sm
                      transition-all duration-300
                      sm:h-10 sm:w-10
                      lg:h-11 lg:w-11
                      group-hover:rotate-12
                      group-hover:scale-110
                      group-hover:border-(--main)
                      group-hover:bg-(--main)
                      group-hover:text-(--text-white)
                            `}
                        
                    `}
                >
                    <FiArrowUpRight className={`${isSmall ? "text-sm" : "text-base sm:text-lg lg:text-xl"}`} />
                </button>
            </div>
        </Link>
    );
}