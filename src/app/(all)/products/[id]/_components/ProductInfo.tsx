import {
    Truck,
    CreditCard,
    RotateCcw,
    Minus,
    Plus,
    Star,
    ShoppingCart,
    Zap,
} from "lucide-react";
import { FeatureBadge } from "./FeatureBadge";
import Variants from "./Variants";

type Props = {
    product: any;
}

export default function ProductInfo({ product }: Props) {

    return (
        <div className="min-w-0">
            {/* Title */}
            <h1 className="max-w-[700px] text-[24px] font-semibold leading-[1.3] text-white sm:text-[28px] lg:text-[30px]">
                {product.title}
            </h1>

            {/* Model / SKU */}
            <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-[#777] sm:text-[14px]">
                <span>
                    Model:{" "}
                    <span className="text-[#9a9a9a]">
                        {product.model}
                    </span>
                </span>

                <span className="text-[#444]">•</span>

                <span>
                    SKU:{" "}
                    <span className="text-[#9a9a9a]">
                        {product.sku}
                    </span>
                </span>
            </div>

            {/* Divider */}
            <div className="my-4 h-px bg-[#252525]" />

            {/* Price */}
            <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-[25px] font-semibold text-[#7137dc] sm:text-[27px]">
                    ${product.price.toFixed(2)}
                </span>

                <span className="text-[14px] text-[#666] line-through">
                    ${product.oldPrice.toFixed(2)}
                </span>

                <span className="rounded-[5px] border border-[#7137dc]/50 bg-[#7137dc]/10 px-2 py-1 text-[11px] font-medium text-[#a06df0]">
                    {product.discount}% off
                </span>
            </div>

            {/* Rating */}
            <div className="mt-3 flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-[2px]">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                            key={star}
                            size={17}
                            fill="#f59e0b"
                            strokeWidth={0}
                            className="text-[#f59e0b]"
                        />
                    ))}
                </div>

                <span className="text-[13px] font-medium text-white">
                    {product.rating.toFixed(1)}
                </span>

                <span className="text-[13px] text-[#666]">
                    ({product.reviews} reviews)
                </span>
            </div>

            {/* Short Description */}
            <p className="mt-4 max-w-[680px] text-[14px] leading-[1.7] text-[#999] sm:text-[15px]">
                Experience unparalleled sound with 40mm premium drivers,
                40-hour battery life, and second-generation adaptive ANC.
                Crafted for audiophiles who accept no compromises.
            </p>

            {/* Features */}
            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
                <FeatureBadge
                    icon={<Truck size={21} />}
                    text="Free Shipping"
                />

                <FeatureBadge
                    icon={<CreditCard size={21} />}
                    text="Pay in 3 methods"
                />

                <FeatureBadge
                    icon={<RotateCcw size={21} />}
                    text="Easy Returns"
                />
            </div>

            <Variants product={product} />


            {/* Quantity */}
            <div className="mt-6">
                <p className="mb-2 text-[15px] text-[#999]">
                    Quantity
                </p>

                <div className="flex h-[46px] w-fit items-center gap-8 rounded-[9px] border border-[#683AD0] bg-[#111] px-3">
                    <button
                        type="button"
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-[#777] text-white transition hover:border-[#7438df] hover:bg-[#683AD0]/20"
                    >
                        <Minus size={14} />
                    </button>

                    <span className="min-w-[20px] text-center text-[14px] font-medium text-white">
                        01
                    </span>

                    <button
                        type="button"
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-[#777] text-white transition hover:border-[#7438df] hover:bg-[#683AD0]/20"
                    >
                        <Plus size={14} />
                    </button>
                </div>
            </div>

            {/* Actions */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <button
                    type="button"
                    className="flex min-h-[50px] items-center justify-center gap-2 rounded-[11px] bg-[#7137dc] px-5 text-[15px] font-medium text-white transition hover:bg-[#8249e8] active:scale-[0.99]"
                >
                    <ShoppingCart size={19} />
                    Add to cart
                </button>

                <button
                    type="button"
                    className="flex min-h-[50px] items-center justify-center gap-2 rounded-[11px] border border-[#7137dc] px-5 text-[15px] font-medium text-[#9a63ed] transition hover:bg-[#7137dc]/10 active:scale-[0.99]"
                >
                    <Zap size={17} />
                    Buy now
                </button>
            </div>
        </div>
    )
}