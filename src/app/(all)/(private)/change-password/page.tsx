"use client";

import React, { useState } from "react";
import {
    ArrowLeft,
    Eye,
    EyeOff,
    LockKeyhole,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { updatePassword } from "@/rtk/slices/profileSlice";
import {
    getPasswordSchema,
    PasswordSchemaType,
} from "@/validation/passwordSchema";
import { toast } from "sonner";

export default function Page() {
    const t = useTranslations();
    const router = useRouter();
    const dispatch = useAppDispatch();

    const { updating } = useAppSelector((state) => state.profile);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const schema = getPasswordSchema(t);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<PasswordSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            password: "",
            password_confirmation: "",
        },
    });

    const onSubmit = async (data: PasswordSchemaType) => {
        try {
            await dispatch(
                updatePassword({
                    password: data.password,
                    password_confirmation: data.password_confirmation,
                })
            ).unwrap();

            reset();

            toast.success(t("passwordUpdatedSuccessfully"));

            router.back();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="overflow-hidden rounded-2xl border border-(--border-dark) bg-(--bg-tertiary)">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-(--border-dark) px-4 py-4.5">
                <div>
                    <h1 className="text-[16px] font-semibold text-(--text-primary)">
                        {t("changePassword")}
                    </h1>

                    <p className="mt-0.5 text-xs text-gray-500">
                        {t("updatePasswordDescription")}
                    </p>
                </div>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="divide-y divide-(--border-dark)"
            >
                {/* Password */}
                <div className="px-4 py-5">
                    <label className="mb-2 block text-sm font-medium text-(--text-primary)">
                        {t("password")}
                    </label>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            {...register("password")}
                            placeholder={t("enterNewPassword")}
                            className={`w-full rounded-lg border bg-transparent px-4 py-3 pr-11 text-sm text-(--text-primary) outline-none transition placeholder:text-gray-400 focus:border-(--main) ${errors.password
                                    ? "border-red-500"
                                    : "border-(--border-dark)"
                                }`}
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-(--main)"
                            aria-label={
                                showPassword
                                    ? "Hide password"
                                    : "Show password"
                            }
                        >
                            {showPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>
                    </div>

                    {errors.password && (
                        <p className="mt-1.5 text-xs text-red-500">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                {/* Confirm Password */}
                <div className="px-4 py-5">
                    <label className="mb-2 block text-sm font-medium text-(--text-primary)">
                        {t("passwordConfirmation")}
                    </label>

                    <div className="relative">
                        <input
                            type={showConfirmation ? "text" : "password"}
                            {...register("password_confirmation")}
                            placeholder={t("confirmNewPassword")}
                            className={`w-full rounded-lg border bg-transparent px-4 py-3 pr-11 text-sm text-(--text-primary) outline-none transition placeholder:text-gray-400 focus:border-(--main) ${errors.password_confirmation
                                    ? "border-red-500"
                                    : "border-(--border-dark)"
                                }`}
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmation((prev) => !prev)
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-(--main)"
                            aria-label={
                                showConfirmation
                                    ? "Hide password confirmation"
                                    : "Show password confirmation"
                            }
                        >
                            {showConfirmation ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </button>
                    </div>

                    {errors.password_confirmation && (
                        <p className="mt-1.5 text-xs text-red-500">
                            {errors.password_confirmation.message}
                        </p>
                    )}
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3 px-4 py-4">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        disabled={updating}
                        className="rounded-lg border border-(--border-dark) px-5 py-2.5 text-sm font-medium text-(--text-primary) transition hover:bg-(--main)/5 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {t("cancel")}
                    </button>

                    <button
                        type="submit"
                        disabled={updating}
                        className="rounded-lg bg-(--main) px-6 py-2.5 text-sm font-medium text-(--white) transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {updating ? t("updating") : t("update")}
                    </button>
                </div>
            </form>
        </section>
    );
}