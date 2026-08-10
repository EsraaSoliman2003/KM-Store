"use client";

import { useTranslations } from "next-intl";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export default function PaginationButtons({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    const t = useTranslations();
    if (totalPages <= 1) return null;

    const pages = Array.from(
        { length: totalPages },
        (_, i) => i + 1
    ).filter(
        (page) =>
            page === 1 ||
            page === totalPages ||
            Math.abs(page - currentPage) <= 1
    );

    return (
        <div className="mt-12 flex items-center justify-center gap-3">
            {/* Previous */}
            <button
                onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className={`flex h-8 w-8 items-center justify-center rounded-sm border transition ${currentPage === 1
                    ? "cursor-not-allowed! border-transparent bg-(--bg-dark) text-(--text-muted)"
                    : "border-[#777] bg-transparent text-(--main) hover:border-[#7040dc] hover:text-[#7040dc]"
                    }`}
                aria-label="Previous page"
            >
                {t("dir") === "rtl" ? <FiChevronRight size={26} /> : <FiChevronLeft size={26} />}
            </button>

            {/* Page Numbers */}
            {pages.map((page, index) => {
                const previousPage = pages[index - 1];

                return (
                    <div key={page} className="flex items-center gap-3">
                        {/* Ellipsis */}
                        {previousPage && page - previousPage > 1 && (
                            <span className="flex h-8 w-8 items-center justify-center rounded-sm border border-[#777] text-xl text-gray-400">
                                ...
                            </span>
                        )}

                        {/* Page */}
                        <button
                            onClick={() => onPageChange(page)}
                            className={`h-8 w-8 rounded-sm border text-sm font-medium transition ${currentPage === page
                                ? "border-[#7040dc] bg-transparent text-[#7040dc]"
                                : "border-[#777] bg-transparent text-gray-300 hover:border-[#7040dc] hover:text-[#7040dc]"
                                }`}
                        >
                            {page}
                        </button>
                    </div>
                );
            })}

            {/* Next */}
            <button
                onClick={() =>
                    onPageChange(Math.min(currentPage + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`flex h-8 w-8 items-center justify-center rounded-sm border transition ${currentPage === totalPages
                    ? "cursor-not-allowed! border-transparent bg-(--bg-dark) text-(--text-muted)"
                    : "border-[#777] bg-transparent text-(--main) hover:border-[#7040dc] hover:text-[#7040dc]"
                    }`}
                aria-label="Next page"
            >
                {t("dir") === "rtl" ? <FiChevronLeft size={26} /> : <FiChevronRight size={26} />}
            </button>
        </div>
    );
}