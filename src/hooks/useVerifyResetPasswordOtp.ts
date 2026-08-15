"use client";

import {
    useRef,
    useState,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { setCookie } from "cookies-next";

import {
    useAppDispatch,
} from "@/rtk/hooks";

import {
    forgotPassword,
    verifyResetPasswordOtp,
} from "@/rtk/slices/authSlice";

interface UseVerifyResetPasswordOtpReturn {
    otp: string[];
    loading: boolean;
    resending: boolean;
    inputRefs: React.MutableRefObject<
        (HTMLInputElement | null)[]
    >;
    countryCode: string;
    phone: string;
    handleChange: (
        value: string,
        index: number
    ) => void;
    handleKeyDown: (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => void;
    handlePaste: (
        e: React.ClipboardEvent<HTMLInputElement>
    ) => void;
    handleSubmit: (
        e: React.FormEvent<HTMLFormElement>
    ) => Promise<void>;
    handleResend: () => Promise<void>;
}

export const useVerifyResetPasswordOtp =
    (): UseVerifyResetPasswordOtpReturn => {
        const t = useTranslations();
        const router = useRouter();
        const searchParams = useSearchParams();
        const dispatch = useAppDispatch();

        const countryCode =
            searchParams.get("country_code") || "+20";

        const phone =
            searchParams.get("phone") || "";

        const [otp, setOtp] = useState<string[]>([
            "",
            "",
            "",
            "",
        ]);

        const [loading, setLoading] =
            useState(false);

        const [resending, setResending] =
            useState(false);

        const inputRefs = useRef<
            (HTMLInputElement | null)[]
        >([]);

        // ===========================
        // OTP Change
        // ===========================

        const handleChange = (
            value: string,
            index: number
        ) => {
            const digit = value
                .replace(/\D/g, "")
                .slice(-1);

            const newOtp = [...otp];

            newOtp[index] = digit;

            setOtp(newOtp);

            if (
                digit &&
                index < otp.length - 1
            ) {
                inputRefs.current[
                    index + 1
                ]?.focus();
            }
        };

        // ===========================
        // Backspace
        // ===========================

        const handleKeyDown = (
            e: React.KeyboardEvent<HTMLInputElement>,
            index: number
        ) => {
            if (
                e.key === "Backspace" &&
                !otp[index] &&
                index > 0
            ) {
                inputRefs.current[
                    index - 1
                ]?.focus();
            }
        };

        // ===========================
        // Paste OTP
        // ===========================

        const handlePaste = (
            e: React.ClipboardEvent<HTMLInputElement>
        ) => {
            e.preventDefault();

            const pasted = e.clipboardData
                .getData("text")
                .replace(/\D/g, "")
                .slice(0, 4);

            if (!pasted) return;

            const newOtp = Array(4).fill("");

            pasted
                .split("")
                .forEach((digit, index) => {
                    newOtp[index] = digit;
                });

            setOtp(newOtp);

            const nextIndex = Math.min(
                pasted.length,
                3
            );

            inputRefs.current[
                nextIndex
            ]?.focus();
        };

        // ===========================
        // Verify OTP
        // ===========================

        const handleSubmit = async (
            e: React.FormEvent<HTMLFormElement>
        ) => {
            e.preventDefault();

            const code = otp.join("");

            if (code.length !== 4) return;

            try {
                setLoading(true);

                const resultAction = await dispatch(
                    verifyResetPasswordOtp({
                        country_code: countryCode,
                        phone,
                        code,
                    })
                );

                if (
                    verifyResetPasswordOtp.rejected.match(
                        resultAction
                    )
                ) {
                    return;
                }

                const token =
                    resultAction.payload.data.token;

                // Store reset-password token
                setCookie("token", token, {
                    maxAge: 60 * 60 * 24,
                    path: "/",
                });

                toast.success(
                    t("otpVerified")
                );

                router.push(
                    `/reset-password?country_code=${encodeURIComponent(
                        countryCode
                    )}&phone=${encodeURIComponent(phone)}&code=${code}`
                );
            } catch {
                toast.error(
                    t("UnexpectedError")
                );
            } finally {
                setLoading(false);
            }
        };

        // ===========================
        // Resend OTP
        // ===========================

        const handleResend = async () => {
            try {
                setResending(true);

                const resultAction = await dispatch(
                    forgotPassword({
                        country_code: countryCode,
                        phone,
                    })
                );

                if (
                    forgotPassword.rejected.match(
                        resultAction
                    )
                ) {
                    return;
                }

                setOtp([
                    "",
                    "",
                    "",
                    "",
                ]);

                inputRefs.current[0]?.focus();

                toast.success(
                    t("otpResent")
                );
            } catch {
                toast.error(
                    t("UnexpectedError")
                );
            } finally {
                setResending(false);
            }
        };

        return {
            otp,
            loading,
            resending,
            inputRefs,
            countryCode,
            phone,
            handleChange,
            handleKeyDown,
            handlePaste,
            handleSubmit,
            handleResend,
        };
    };