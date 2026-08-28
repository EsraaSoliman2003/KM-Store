"use client";

import React from "react";
import {
    FieldError,
    FieldValues,
    Path,
    UseFormRegister,
} from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
    label: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    error?: FieldError;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
    textarea?: boolean;
    rows?: number;
    required?: string;
}

export default function FormField<T extends FieldValues>({
    label,
    name,
    register,
    error,
    placeholder,
    type = "text",
    textarea = false,
    rows = 3,
    required,
}: FormFieldProps<T>) {
    const inputClassName = `w-full rounded-lg border bg-transparent px-3.5 py-2.5 text-sm text-(--text-primary) outline-none transition placeholder:text-gray-400 focus:border-(--main) ${
        error ? "border-red-500" : "border-(--border-dark)"
    }`;

    return (
        <div className="border-b border-(--border-dark) p-4">
            <label className="mb-2 block text-sm font-medium text-(--text-primary)">
                {label}
            </label>

            {textarea ? (
                <textarea
                    {...register(name, {
                        required,
                    })}
                    rows={rows}
                    placeholder={placeholder}
                    className={`${inputClassName} resize-none`}
                />
            ) : (
                <input
                    type={type}
                    {...register(name, {
                        required,
                    })}
                    placeholder={placeholder}
                    className={inputClassName}
                />
            )}

            {error && (
                <p className="mt-1.5 text-xs text-red-500">
                    {error.message}
                </p>
            )}
        </div>
    );
}