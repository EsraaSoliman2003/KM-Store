"use client";

import { Heart } from "lucide-react";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { toggleWishlist } from "@/rtk/slices/wishlistSlice";

type Props = {
    productId: number;
    isFavorite: boolean;
};

export default function FavoriteButton({
    productId,
    isFavorite,
}: Props) {
    const dispatch = useAppDispatch();

    const { togglingProductId } = useAppSelector(
        (state) => state.wishlist
    );

    const [favorite, setFavorite] = useState(isFavorite);

    const isLoading = togglingProductId === productId;

    const handleToggle = async () => {
        if (isLoading) return;

        try {
            const result = await dispatch(
                toggleWishlist(productId)
            ).unwrap();

            setFavorite(result.data.is_in_wishlist);
        } catch (error) {
            console.error("Failed to toggle wishlist:", error);
        }
    };

    return (
        <button
            type="button"
            disabled={isLoading}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleToggle();
            }}
            className="
                absolute right-2 top-2
                flex items-center justify-center
                rounded-[8px]
                border border-(--border-color)
                bg-[rgba(var(--bg-primary-rgb),0.7)]
                p-1.5
                text-(--text-primary)
                backdrop-blur-sm
                transition-all duration-300
                hover:scale-110
                hover:border-(--main)
                hover:bg-(--main)
                hover:text-(--text-white)
                disabled:pointer-events-none
                disabled:opacity-60
                sm:right-3 sm:top-3 sm:p-2
            "
        >
            {isLoading ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-(--border-color) border-t-(--main) sm:h-5 sm:w-5" />
            ) : (
                <Heart
                    size={16}
                    className={`sm:h-5 sm:w-5 ${favorite
                            ? "fill-(--main) text-(--main)"
                            : ""
                        }`}
                />
            )}
        </button>
    );
}