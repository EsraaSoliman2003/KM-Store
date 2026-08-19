export default function CategoryCardSkeleton({
    className = "",
}: {
    className?: string;
}) {
    return (
        <div
            className={`
                relative
                overflow-hidden
                rounded-2xl
                bg-(--bg-secondary)
                ${className}
            `}
        >
            {/* Shimmer */}
            <div
                className="
                    absolute inset-0
                    -translate-x-full
                    animate-[shimmer_1.5s_infinite]
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                "
            />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3 sm:p-5">
                <div className="w-2/3">
                    <div className="h-5 w-3/4 rounded-md bg-(--border-color) sm:h-6" />

                    <div className="mt-2 h-3 w-1/2 rounded-md bg-(--border-color)" />
                </div>

                <div className="h-9 w-9 shrink-0 rounded-full bg-(--border-color) sm:h-10 sm:w-10 lg:h-11 lg:w-11" />
            </div>
        </div>
    );
}