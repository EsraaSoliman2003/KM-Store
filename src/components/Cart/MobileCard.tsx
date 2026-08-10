import { Minus, Plus, Trash2 } from 'lucide-react';
import React from 'react'

type Props = {
    product: any;
}

export default function MobileCard({ product }: Props) {
    return (
        <div className="flex gap-3.5 md:hidden">
            {/* Product Image */}
            <div className="h-[100px] w-[84px] shrink-0 overflow-hidden rounded-lg bg-black">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Product Info */}
            <div className="min-w-0 flex-1">
                {/* Brand + Delete */}
                <div className="flex items-start justify-between gap-4">
                    <span className="text-[11px] text-[#683AD0]">
                        Apple
                    </span>

                    <button
                        type="button"
                        className="mr-1 shrink-0 text-gray-400 transition-colors hover:text-red-500"
                    >
                        <Trash2 size={16} strokeWidth={1.5} />
                    </button>
                </div>

                {/* Product Name */}
                <h3 className="mt-0.5 line-clamp-2 pr-4 text-[12px] font-medium leading-[16px] text-white">
                    {product.name}
                </h3>

                {/* Specs */}
                <p className="mt-0.5 truncate text-[10px] text-gray-400">
                    256 GB · Purple black
                </p>

                {/* Price + Quantity */}
                <div className="mt-1.5 flex items-center justify-between gap-2">
                    {/* Price */}
                    <div className="flex min-w-0 items-center gap-1.5">
                        <span className="truncate text-[13px] font-bold text-white">
                            ${product.price.toFixed(2)}
                        </span>

                        <span className="text-[10px] text-gray-500 line-through">
                            ${product.oldPrice.toFixed(2)}
                        </span>
                    </div>

                    {/* Quantity */}
                    <div className="flex shrink-0 items-center gap-2">
                        <button
                            type="button"
                            className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-gray-500 text-gray-400"
                        >
                            <Minus size={10} />
                        </button>

                        <span className="text-[11px] text-white">
                            01
                        </span>

                        <button
                            type="button"
                            className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#683AD0] text-[#9b6cff]"
                        >
                            <Plus size={10} />
                        </button>
                    </div>
                </div>

                {/* Delivery */}
                <div className="mt-1.5 text-[10px] text-gray-400">
                    Get it by{" "}
                    <span className="text-[#9b6cff]">
                        {product.delivery}
                    </span>
                </div>
            </div>
        </div>
    )
}