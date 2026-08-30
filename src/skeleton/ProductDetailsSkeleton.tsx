export default function ProductDetailsSkeleton() {
    return (
        <main className="container mt-18 mb-10 py-6">
            <div className="container">

                {/* Product Top */}
                <section className="grid gap-8 lg:grid-cols-[minmax(0,470px)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[470px_minmax(0,1fr)] xl:gap-12">

                    {/* Gallery */}
                    <div className="min-w-0">
                        {/* Main Image */}
                        <div className="mx-auto aspect-square w-full max-w-[470px] animate-pulse rounded-[14px] bg-(--border-color)" />

                        {/* Thumbnails */}
                        <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-3">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="aspect-square animate-pulse rounded-[9px] bg-(--border-color)"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="min-w-0">

                        {/* Title */}
                        <div className="h-9 w-[80%] animate-pulse rounded-lg bg-(--border-color)" />

                        {/* Model / SKU */}
                        <div className="mt-3 h-4 w-[55%] animate-pulse rounded bg-(--border-color)" />

                        {/* Divider */}
                        <div className="my-4 h-px bg-(--border-color)" />

                        {/* Price */}
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-28 animate-pulse rounded bg-(--border-color)" />
                            <div className="h-5 w-20 animate-pulse rounded bg-(--border-color)" />
                            <div className="h-7 w-16 animate-pulse rounded bg-(--border-color)" />
                        </div>

                        {/* Rating */}
                        <div className="mt-3 h-5 w-40 animate-pulse rounded bg-(--border-color)" />

                        {/* Description */}
                        <div className="mt-4 space-y-2">
                            <div className="h-4 w-full animate-pulse rounded bg-(--border-color)" />
                            <div className="h-4 w-[90%] animate-pulse rounded bg-(--border-color)" />
                            <div className="h-4 w-[70%] animate-pulse rounded bg-(--border-color)" />
                        </div>

                        {/* Features */}
                        <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="h-16 animate-pulse rounded-[9px] bg-(--border-color)"
                                />
                            ))}
                        </div>

                        {/* Variants */}
                        <div className="mt-6">
                            <div className="h-5 w-24 animate-pulse rounded bg-(--border-color)" />

                            <div className="mt-3 flex gap-3">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="h-10 w-10 animate-pulse rounded-full bg-(--border-color)"
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="mt-6">
                            <div className="mb-2 h-5 w-20 animate-pulse rounded bg-(--border-color)" />

                            <div className="h-[46px] w-36 animate-pulse rounded-[9px] bg-(--border-color)" />
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                            <div className="h-[50px] animate-pulse rounded-[11px] bg-(--border-color)" />
                            <div className="h-[50px] animate-pulse rounded-[11px] bg-(--border-color)" />
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="my-20 h-px bg-(--border-color)" />

                {/* Tabs */}
                <section>
                    <div className="flex gap-5 border-b border-(--border-color) sm:gap-8">
                        <div className="h-7 w-28 animate-pulse rounded bg-(--border-color)" />
                        <div className="h-7 w-32 animate-pulse rounded bg-(--border-color)" />
                        <div className="h-7 w-24 animate-pulse rounded bg-(--border-color)" />
                    </div>

                    {/* Tab Content */}
                    <div className="space-y-3 pt-8">
                        <div className="h-4 w-full animate-pulse rounded bg-(--border-color)" />
                        <div className="h-4 w-[90%] animate-pulse rounded bg-(--border-color)" />
                        <div className="h-4 w-[75%] animate-pulse rounded bg-(--border-color)" />
                        <div className="h-4 w-[85%] animate-pulse rounded bg-(--border-color)" />
                    </div>
                </section>
            </div>
        </main>
    );
}