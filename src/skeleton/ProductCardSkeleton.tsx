export default function ProductCardSkeleton() {
    return (
        <div className="overflow-hidden rounded-2xl border border-(--border-color) bg-(--bg-secondary)">
            <div className="aspect-square animate-pulse bg-(--border-color)" />

            <div className="space-y-3 p-4">
                <div className="h-4 w-3/4 animate-pulse rounded bg-(--border-color)" />
                <div className="h-4 w-1/2 animate-pulse rounded bg-(--border-color)" />
                <div className="h-5 w-1/3 animate-pulse rounded bg-(--border-color)" />
            </div>
        </div>
    );
}