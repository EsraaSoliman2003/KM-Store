"use client";

import { Heart } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { toggleWishlist } from "@/rtk/slices/wishlistSlice";
import { useRouter } from "next/navigation";

type Props = {
    productId: number;
    isFavorite: boolean;
    className?: string;
    iconClassName?: string;
};

export default function FavoriteButton({
    productId,
    isFavorite,
    className = "",
    iconClassName = "",
}: Props) {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const { togglingProductId } = useAppSelector(
        (state) => state.wishlist
    );

    const { token } = useAppSelector((s) => s.auth)

    const [favorite, setFavorite] = useState(isFavorite);

    // Keep local state synced with the product data
    useEffect(() => {
        setFavorite(isFavorite);
    }, [isFavorite]);

    const isLoading = togglingProductId === productId;

    const handleToggle = async () => {
        if (!token) {
            router.push("/login")
            return;
        }
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
            className={`
                flex items-center justify-center
                border border-(--border-color)
                bg-[rgba(var(--bg-primary-rgb),0.7)]
                text-(--text-muted)
                backdrop-blur-sm
                transition-all duration-300
                hover:scale-105
                hover:border-(--main)
                hover:text-(--main)
                disabled:pointer-events-none
                disabled:opacity-60
                ${className}
            `}
        >
            {isLoading ? (
                <div
                    className={`
                        h-4 w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-(--border-color)
                        border-t-(--main)
                        ${iconClassName}
                    `}
                />
            ) : (
                <Heart
                    className={`
                        ${favorite
                            ? "fill-(--main) text-(--main)"
                            : ""
                        }
                        ${iconClassName}
                    `}
                />
            )}
        </button>
    );
}