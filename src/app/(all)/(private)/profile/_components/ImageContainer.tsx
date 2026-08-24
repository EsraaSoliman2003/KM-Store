"use client";

import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { updateProfile } from "@/rtk/slices/profileSlice";
import { Camera, User } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

export default function ImageContainer() {
    const dispatch = useAppDispatch();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const { profile, updating } = useAppSelector((s) => s.profile);

    const user = profile?.data?.user;

    const handleCameraClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];

        if (!file) return;

        await dispatch(
            updateProfile({
                avatar: file,
            })
        );

        // Allow selecting the same image again
        e.target.value = "";
    };

    return (
        <div className="relative h-18 w-18 shrink-0 sm:h-22 sm:w-22">
            {/* ================= PROFILE IMAGE ================= */}
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-(--main) text-(--text-white)">
                {user?.avatar ? (
                    <Image
                        src={user.avatar}
                        alt={user.name || "Profile"}
                        fill
                        sizes="88px"
                        className="object-cover"
                    />
                ) : (
                    <User
                        size={32}
                        className="sm:size-9"
                    />
                )}
            </div>

            {/* ================= HIDDEN FILE INPUT ================= */}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
            />

            {/* ================= CAMERA BUTTON ================= */}
            <button
                type="button"
                onClick={handleCameraClick}
                disabled={updating}
                className="
                    absolute
                    bottom-0
                    right-0
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#8B5CF6]
                    text-white
                    shadow-md
                    transition-transform
                    hover:scale-110
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    sm:h-8
                    sm:w-8
                "
                aria-label="Change profile picture"
            >
                <Camera
                    size={15}
                    className="sm:size-4"
                />
            </button>
        </div>
    );
}