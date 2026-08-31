"use client";

import { Trash2 } from "lucide-react";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { deleteAddress } from "@/rtk/slices/addressSlice";

type Props = {
    addressId: number;
};

export default function TrashButton({ addressId }: Props) {
    const dispatch = useAppDispatch();

    const { deletingAddressId } = useAppSelector(
        (state) => state.address
    );

    const isLoading = deletingAddressId === addressId;

    const handleDelete = async () => {
        if (isLoading) return;

        try {
            await dispatch(deleteAddress(addressId)).unwrap();
        } catch (error) {
            console.error("Failed to delete address:", error);
        }
    };

    return (
        <button
            type="button"
            aria-label="Delete address"
            disabled={isLoading}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleDelete();
            }}
            className="
                flex h-[43px] w-[43px] shrink-0
                items-center justify-center
                rounded-[8px]
                border border-red-500/30
                text-red-500
                transition-all duration-300
                hover:border-red-500
                hover:bg-red-500/10
                hover:text-red-400
                disabled:pointer-events-none
                disabled:opacity-60
            "
        >
            {isLoading ? (
                <div
                    className="
                        h-4 w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-red-500/30
                        border-t-red-500
                    "
                />
            ) : (
                <Trash2 size={20} />
            )}
        </button>
    );
}