"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { updateProfile } from "@/rtk/slices/profileSlice";
import Header from "../../_components/Header";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./style.css";

import { parsePhoneNumberFromString } from "libphonenumber-js";
import { EditProfileSchemaType, getEditProfileSchema } from "@/validation/editProfileSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

type FormValues = {
    name: string;
    email: string;
    phone: string;
};

export default function Page() {
    const t = useTranslations();
    const dispatch = useAppDispatch();

    const { profile, updating, loading } = useAppSelector(
        (s) => s.profile
    );

    const user = profile?.data.user;

    const [countryCode, setCountryCode] = useState("+20");

    const schema = getEditProfileSchema(t);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<EditProfileSchemaType>({
        resolver: zodResolver(schema),
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    });

    useEffect(() => {
        if (user) {
            const userCountryCode = user.country_code || "+20";

            reset({
                name: user.name || "",
                email: user.email || "",
                phone: user.phone
                    ? `${userCountryCode}${user.phone}`
                    : "",
            });

            setCountryCode(userCountryCode);
        }
    }, [user, reset]);

    const onSubmit = async (data: EditProfileSchemaType) => {
        try {
            const parsedPhone = parsePhoneNumberFromString(data.phone);

            if (!parsedPhone) {
                toast.error(t("phone_v"));
                return;
            }

            const parsedCountryCode = `+${parsedPhone.countryCallingCode}`;
            const phoneNumber = parsedPhone.nationalNumber;

            await dispatch(
                updateProfile({
                    name: data.name,
                    email: data.email,
                    phone: phoneNumber,
                    country_code: parsedCountryCode,
                })
            ).unwrap();

            toast.success(t("profileUpdatedSuccessfully"));
            window.history.back()
        } catch (error) {
            toast.error(t("UnexpectedError"));
        }
    };

    if (loading) {
        return (
            <div className="flex min-h-100 items-center justify-center">
                <p className="text-[14px] text-(--text-muted)">
                    {t("loading")}
                </p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex min-h-100 items-center justify-center">
                <p className="text-[14px] text-(--text-muted)">
                    {t("noProfileDataFound")}
                </p>
            </div>
        );
    }

    return (
        <div className="min-w-0 mb-10">
            <Header
                title={t("editProfile")}
                subTitle={t("managePersonalInformation")}
            />

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-2xl border border-(--border-dark) bg-(--bg-tertiary)"
            >
                <div className="p-5 sm:p-6">

                    {/* Name */}
                    <div className="mb-5">
                        <label className="mb-2 block text-sm font-medium">
                            {t("name")}
                        </label>

                        <input
                            type="text"
                            {...register("name", {
                                required: t("nameRequired"),
                            })}
                            className="w-full rounded-xl border border-(--border-dark) bg-transparent px-4 py-3 text-sm outline-none focus:border-(--main)"
                        />

                        {errors.name && (
                            <p className="mt-1 text-xs text-red-500">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="mb-5">
                        <label className="mb-2 block text-sm font-medium">
                            {t("email")}
                        </label>

                        <input
                            type="email"
                            {...register("email")}
                            placeholder={t("noEmail")}
                            className="w-full rounded-xl border border-(--border-dark) bg-transparent px-4 py-3 text-sm outline-none focus:border-(--main)"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                            {t("phoneNumber") || "Phone Number"}
                        </label>

                        <PhoneInput
                            country="eg"
                            value={
                                user.phone
                                    ? `${countryCode}${user.phone}`
                                    : ""
                            }
                            onChange={(value) => {
                                const fullPhone = `+${value}`;

                                setValue("phone", fullPhone, {
                                    shouldValidate: true,
                                    shouldDirty: true,
                                });

                                const parsedPhone =
                                    parsePhoneNumberFromString(fullPhone);

                                if (parsedPhone) {
                                    setCountryCode(
                                        `+${parsedPhone.countryCallingCode}`
                                    );
                                }
                            }}
                            enableSearch={false}
                            containerClass="!w-full"
                            placeholder={t("phonePlaceholder")}
                        />

                        {errors.phone && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 border-t border-(--border-dark) p-5 sm:p-6">
                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="rounded-xl border border-(--border-dark) px-5 py-2.5 text-sm font-medium"
                    >
                        {t("cancel")}
                    </button>

                    <button
                        type="submit"
                        disabled={updating}
                        className="rounded-xl bg-(--main) px-5 py-2.5 text-sm font-medium text-white disabled:opacity-50"
                    >
                        {updating ? t("loading") : t("save")}
                    </button>
                </div>
            </form>
        </div>
    );
}