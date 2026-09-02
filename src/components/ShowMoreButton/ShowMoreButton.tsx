import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Props = {
    href: string;
};

export default function ShowMoreButton({ href }: Props) {
    const t = useTranslations();
    const isRTL = t("dir") === "rtl";

    return (
        <div className="mt-8 flex justify-center lg:justify-end">
            <Link
                href={href}
                className="
                    group inline-flex items-center gap-2
                    rounded-xl
                    border
                    border-[var(--main)]/20
                    bg-[var(--main-light)]
                    px-5 py-2.5
                    text-sm font-semibold
                    text-[var(--main)]
                    transition-all duration-300

                    hover:border-[var(--main)]
                    hover:bg-[var(--main)]
                    hover:text-white
                "
            >
                <span>{t("showMore")}</span>

                <span
                    className="
                        flex h-7 w-7 items-center justify-center
                        rounded-lg
                        bg-[var(--main)]/10
                        text-[var(--main)]
                        transition-all duration-300

                        group-hover:bg-white/20
                        group-hover:text-white
                    "
                >
                    {isRTL ? (
                        <FiChevronLeft
                            size={17}
                            className="
                                transition-transform duration-300
                                group-hover:-translate-x-0.5
                            "
                        />
                    ) : (
                        <FiChevronRight
                            size={17}
                            className="
                                transition-transform duration-300
                                group-hover:translate-x-0.5
                            "
                        />
                    )}
                </span>
            </Link>
        </div>
    );
}