"use client";

import React from "react";
import { FaGoogle } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch } from "@/rtk/hooks";
import { googleLogin } from "@/rtk/slices/authSlice";

interface GoogleJwtPayload {
    sub: string;
    name?: string;
    email?: string;
    picture?: string;
}

export default function GoogleButton() {
    const dispatch = useAppDispatch();

    const handleGoogleSuccess = async (
        credentialResponse: any
    ) => {
        try {
            if (!credentialResponse.credential) {
                return;
            }

            const decoded = jwtDecode<GoogleJwtPayload>(
                credentialResponse.credential
            );

            if (!decoded.sub || !decoded.email) {
                console.error("Invalid Google account data");
                return;
            }

            await dispatch(
                googleLogin({
                    google_id: decoded.sub,
                    name: decoded.name ?? "",
                    email: decoded.email,
                    avatar: decoded.picture ?? "",
                    country_code: "+20",
                })
            ).unwrap();
        } catch (error) {
            console.error("Google login failed:", error);
        }
    };

    return (
        <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-[8px] border border-(--border-dark) transition hover:border-[#259DF3]">
            <FaGoogle
                size={20}
                className="pointer-events-none absolute z-10 text-[#DB4437]"
            />
            <div className="bg-transparent">
                <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={() => {
                        console.error("Google Login Failed");
                    }}
                    type="icon"
                    shape="square"
                    size="large"
                    theme="outline"
                />
            </div>
        </div>
    );
}