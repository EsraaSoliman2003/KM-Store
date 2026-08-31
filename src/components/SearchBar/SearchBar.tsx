"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import {
    getSearchHistory,
    deleteSearchHistory,
    clearSearchHistory,
} from "@/rtk/slices/searchHistorySlice";

export default function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const dispatch = useAppDispatch();

    const { history, loading } = useAppSelector(
        (state) => state.searchHistory
    );

    const { products } = useAppSelector(
        (state) => state.products
    );

    const [search, setSearch] = useState(
        searchParams.get("search") || ""
    );

    const [isFocused, setIsFocused] = useState(false);

    // ===========================
    // Get Search History
    // ===========================

    useEffect(() => {
        dispatch(getSearchHistory());
    }, [dispatch, products]);

    // ===========================
    // Sync Search With URL
    // ===========================

    useEffect(() => {
        setSearch(searchParams.get("search") || "");
    }, [searchParams]);

    // ===========================
    // Filter Search History
    // ===========================

    const filteredHistory = useMemo(() => {
        const value = search.trim().toLowerCase();

        if (!value) {
            return history;
        }

        return history.filter((item) =>
            item.query.toLowerCase().includes(value)
        );
    }, [history, search]);

    // ===========================
    // Search
    // ===========================

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        const value = search.trim();

        const params = new URLSearchParams(
            searchParams.toString()
        );

        if (value) {
            params.set("search", value);
        } else {
            params.delete("search");
        }

        params.delete("page");

        router.push(`?${params.toString()}`);

        setIsFocused(false);
    };

    // ===========================
    // Clear Current Search
    // ===========================

    const handleClear = () => {
        setSearch("");

        const params = new URLSearchParams(
            searchParams.toString()
        );

        params.delete("search");
        params.delete("page");

        router.push(`?${params.toString()}`);
    };

    // ===========================
    // Delete History Item
    // ===========================

    const handleDeleteHistory = (
        e: React.MouseEvent,
        id: number
    ) => {
        e.stopPropagation();

        dispatch(deleteSearchHistory(id));
    };

    // ===========================
    // Clear All History
    // ===========================

    const handleClearHistory = () => {
        dispatch(clearSearchHistory());
    };

    // ===========================
    // Click History Item
    // ===========================

    const handleHistoryClick = (query: string) => {
        setSearch(query);

        const params = new URLSearchParams(
            searchParams.toString()
        );

        params.set("search", query);
        params.delete("page");

        router.push(`?${params.toString()}`);

        setIsFocused(false);
    };

    return (
        <div className="relative mb-7 w-full">
            <form
                onSubmit={handleSearch}
                className="flex w-full items-center gap-2"
            >
                <div className="relative min-w-0 flex-1">
                    <Search
                        size={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-(--text-muted)"
                    />

                    <input
                        type="text"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        onFocus={() => setIsFocused(true)}
                        onBlur={(e) => {
                            if (
                                !e.currentTarget.parentElement?.contains(
                                    e.relatedTarget as Node
                                )
                            ) {
                                setIsFocused(false);
                            }
                        }}
                        placeholder="Search products..."
                        className="h-12 w-full rounded-xl border border-(--border-dark) bg-(--bg-tertiary) pl-11 pr-10 text-sm text-(--text-primary) outline-none transition placeholder:text-(--text-muted) focus:border-(--main)"
                    />

                    {search && (
                        <button
                            type="button"
                            onClick={handleClear}
                            className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full p-1 text-(--text-muted) transition hover:bg-(--border-color) hover:text-(--text-primary)"
                            aria-label="Clear search"
                        >
                            <X size={17} />
                        </button>
                    )}

                    {/* ===========================
                        Autocomplete / Search History
                    =========================== */}

                    {isFocused && filteredHistory.length > 0 && (
                        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-xl border border-(--border-dark) bg-(--bg-tertiary) shadow-lg">
                            <div className="flex items-center justify-between border-b border-(--border-color) px-4 py-3">
                                <span className="text-xs font-semibold text-(--text-muted)">
                                    {search.trim()
                                        ? "Suggestions"
                                        : "Recent searches"}
                                </span>

                                {!search.trim() && (
                                    <button
                                        type="button"
                                        onMouseDown={(e) =>
                                            e.preventDefault()
                                        }
                                        onClick={handleClearHistory}
                                        className="text-xs font-medium text-(--main) transition hover:opacity-70"
                                    >
                                        Clear all
                                    </button>
                                )}
                            </div>

                            <div className="py-1">
                                {filteredHistory.map((item) => (
                                    <div
                                        key={item.id}
                                        onMouseDown={(e) =>
                                            e.preventDefault()
                                        }
                                        onClick={() =>
                                            handleHistoryClick(
                                                item.query
                                            )
                                        }
                                        className="group flex cursor-pointer items-center justify-between px-4 py-3 transition hover:bg-(--border-color)"
                                    >
                                        <div className="flex min-w-0 items-center gap-3">
                                            <Search
                                                size={16}
                                                className="shrink-0 text-(--text-muted)"
                                            />

                                            <span className="truncate text-sm text-(--text-primary)">
                                                {item.query}
                                            </span>
                                        </div>

                                        <button
                                            type="button"
                                            onMouseDown={(e) =>
                                                e.preventDefault()
                                            }
                                            onClick={(e) =>
                                                handleDeleteHistory(
                                                    e,
                                                    item.id
                                                )
                                            }
                                            className="shrink-0 rounded-full p-1 text-(--text-muted) transition hover:bg-(--border-dark) hover:text-(--text-primary)"
                                            aria-label={`Delete ${item.query}`}
                                        >
                                            <X size={15} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    className="h-12 shrink-0 rounded-xl bg-(--main) px-5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                    Search
                </button>
            </form>
        </div>
    );
}