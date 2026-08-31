"use client";

import React, { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(
        searchParams.get("search") || ""
    );

    useEffect(() => {
        setSearch(searchParams.get("search") || "");
    }, [searchParams]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        const params = new URLSearchParams(searchParams.toString());

        if (search.trim()) {
            params.set("search", search.trim());
        } else {
            params.delete("search");
        }

        // Reset pagination/filter results to first page
        params.delete("page");

        router.push(`?${params.toString()}`);
    };

    const handleClear = () => {
        setSearch("");

        const params = new URLSearchParams(searchParams.toString());
        params.delete("search");
        params.delete("page");

        router.push(`?${params.toString()}`);
    };

    return (
        <form
            onSubmit={handleSearch}
            className="mb-7 flex w-full items-center gap-2"
        >
            <div className="relative min-w-0 flex-1">
                <Search
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-(--text-muted)"
                />

                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
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
            </div>

            <button
                type="submit"
                className="h-12 shrink-0 rounded-xl bg-(--main) px-5 text-sm font-semibold text-white transition hover:opacity-90"
            >
                Search
            </button>
        </form>
    );
}