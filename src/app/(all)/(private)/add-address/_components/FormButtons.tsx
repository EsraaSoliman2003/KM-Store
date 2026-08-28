"use client";

import React from "react";

interface FormButtonsProps {
    creating: boolean;
    cancelText: string;
    submitText: string;
    loadingText: string;
    onCancel: () => void;
}

export default function FormButtons({
    creating,
    cancelText,
    submitText,
    loadingText,
    onCancel,
}: FormButtonsProps) {
    return (
        <div className="flex justify-end gap-3 px-4 py-4">
            <button
                type="button"
                onClick={onCancel}
                disabled={creating}
                className="rounded-lg border border-(--border-dark) px-5 py-2.5 text-sm font-medium text-(--text-primary) transition hover:bg-(--main)/5 disabled:cursor-not-allowed disabled:opacity-50"
            >
                {cancelText}
            </button>

            <button
                type="submit"
                disabled={creating}
                className="rounded-lg bg-(--main) px-6 py-2.5 text-sm font-medium text-(--white) transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
                {creating ? loadingText : submitText}
            </button>
        </div>
    );
}