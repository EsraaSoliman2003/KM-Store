"use client";

export default function AddressCardSkeleton() {
    return (
        <div className="min-h-[220px] animate-pulse rounded-2xl border border-(--border-dark) bg-(--bg-primary) p-5">
            <div className="mb-5 flex items-center justify-between">
                <div className="h-5 w-24 rounded bg-(--border-dark)" />
                <div className="h-5 w-16 rounded bg-(--border-dark)" />
            </div>

            <div className="space-y-4">
                <div className="h-4 w-2/3 rounded bg-(--border-dark)" />
                <div className="h-4 w-1/2 rounded bg-(--border-dark)" />
                <div className="h-4 w-3/4 rounded bg-(--border-dark)" />
                <div className="h-4 w-1/3 rounded bg-(--border-dark)" />
            </div>

            <div className="mt-6 flex gap-3">
                <div className="h-9 w-20 rounded-lg bg-(--border-dark)" />
                <div className="h-9 w-20 rounded-lg bg-(--border-dark)" />
            </div>
        </div>
    );
}