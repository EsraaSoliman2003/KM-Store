import { Heart, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    group: any;
}

export default function Products({ group }: Props) {
    const t = useTranslations();

    return (
        <div className="space-y-2">
            {group.products.map((product: any) => (
                <div
                    key={product.id}
                    className="flex min-h-19 items-center gap-3 rounded-xl border border-(--border-dark) bg-(--bg-primary) px-3 py-2.5"
                >
                    {/* Product Image */}
                    <div className="relative h-15 w-15 shrink-0 overflow-hidden rounded-lg bg-(--bg-secondary)">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="min-w-0 flex-1">
                        <h3 className="truncate text-[16px] font-semibold text-(--text-primary)">
                            {product.name}
                        </h3>

                        <p className="mt-0.5 truncate text-[14px] text-(--text-muted)">
                            {product.category} · {product.time}
                        </p>
                    </div>

                    {/* Price */}
                    <p className="hidden shrink-0 text-[16px] font-semibold text-(--text-primary) sm:block">
                        {product.price}
                    </p>

                    {/* Actions */}
                    <div className="flex shrink-0 items-center gap-1.5">
                        <Link
                            href={`/products/${product.id}`}
                            className="rounded-full border border-(--main) bg-[rgba(104,58,208,0.12)] px-3 py-1.5 text-[12px] font-medium text-(--text-primary)"
                        >
                            {t("view")}
                        </Link>

                        <button
                            type="button"
                            aria-label={t("addToWishlist")}
                            className="flex px-1.5 py-1.5 items-center justify-center rounded-[7px] border border-(--border-dark) text-(--text-muted) transition-colors hover:border-(--main) hover:text-(--main)"
                        >
                            <Heart size={20} />
                        </button>

                        <button
                            type="button"
                            aria-label={t("remove")}
                            className="flex px-1.5 py-1.5 items-center justify-center rounded-[7px] border border-(--border-dark) text-(--text-muted) transition-colors hover:border-red-500 hover:text-red-500"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}