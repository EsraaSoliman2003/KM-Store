"use client";

import { useTranslations } from "next-intl";
import React from "react";
import {
    FieldError,
    FieldValues,
    Path,
    UseFormRegister,
} from "react-hook-form";

interface SelectOption {
    value: string;
    label: string;
}

interface SelectFieldProps<T extends FieldValues> {
    name: Path<T>;
    register: UseFormRegister<T>;
    error?: FieldError;
}

export default function SelectField<T extends FieldValues>({
    name,
    register,
    error,
}: SelectFieldProps<T>) {
    const t = useTranslations();
    return (
        <div className="border-b border-(--border-dark) p-4">
            <label className="mb-2 block text-sm font-medium text-(--text-primary)">
                {t("addressType")}
            </label>

            <select
                {...register(name, {
                    required: t("required"),
                })}
                className="w-full rounded-lg border border-(--border-dark) bg-transparent px-3.5 py-2.5 text-sm text-(--text-primary) outline-none transition focus:border-(--main)"
            >
                {[{
                    value: "home",
                    label: t("home"),
                },
                {
                    value: "work",
                    label: t("work"),
                },
                {
                    value: "other",
                    label: t("other"),
                }].map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {error && (
                <p className="mt-1.5 text-xs text-red-500">
                    {error.message}
                </p>
            )}
        </div>
    );
}