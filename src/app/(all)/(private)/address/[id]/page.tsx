"use client";

import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { getAddressById } from "@/rtk/slices/addressSlice";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import {
    Check,
    Edit3,
    MapPin,
    Phone,
    User,
    MapPinned,
    Hash,
} from "lucide-react";
import React, { useEffect } from "react";
import EmptyState from "@/components/EmptyState/EmptyState";
import Header from "../../_components/Header";
import Link from "next/link";

export default function Page() {
    const dispatch = useAppDispatch();
    const params = useParams();
    const router = useRouter();
    const t = useTranslations();

    const id = Number(params.id);

    const { address, loading } = useAppSelector(
        (state) => state.address
    );

    useEffect(() => {
        if (!Number.isNaN(id)) {
            dispatch(getAddressById(id));
        }
    }, [dispatch, id]);

    if (loading) {
        return (
            <div className="min-w-0 mb-10">
                <div className="animate-pulse">
                    <div className="mb-6 h-8 w-40 rounded-lg bg-(--bg-secondary)" />

                    <div className="rounded-2xl border border-(--border-dark) bg-(--bg-primary) p-5 sm:p-6">
                        <div className="mb-8 flex items-center gap-3">
                            <div className="h-12 w-12 rounded-xl bg-(--bg-secondary)" />

                            <div className="space-y-2">
                                <div className="h-4 w-32 rounded bg-(--bg-secondary)" />
                                <div className="h-3 w-20 rounded bg-(--bg-secondary)" />
                            </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="h-3 w-24 rounded bg-(--bg-secondary)" />
                                    <div className="h-10 w-full rounded-lg bg-(--bg-secondary)" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!address) {
        return (
            <section className="flex min-h-[60vh] items-center justify-center pb-5 md:pb-10">
                <div className="min-w-0 flex-1">
                    <EmptyState
                        title={t("addressNotFound")}
                        description={t("addressNotFoundDescription")}
                    />
                </div>
            </section>
        );
    }
    return (
        <section className="pb-5 md:pb-10">
            {/* Header */}
            <Header
                title={t("addressDetails")}
                subTitle={t("viewAddressDetails")}
            />

            {/* Address Card */}
            <div className="overflow-hidden rounded-2xl border border-(--border-dark) bg-(--bg-primary)">
                {/* Card Header */}
                <div className="border-b border-(--border-dark) p-5 sm:p-6">
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(104,58,208,0.10)]">
                            <MapPin
                                size={24}
                                className="text-(--main)"
                            />
                        </div>

                        <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                                <h2 className="text-base font-semibold text-(--text-primary)">
                                    {address.address_type}
                                </h2>

                                {address.is_default && (
                                    <span className="flex items-center gap-1 rounded-full border border-(--main) bg-[rgba(104,58,208,0.10)] px-2.5 py-1 text-[11px] font-medium text-(--main)">
                                        <Check size={12} />
                                        {t("default")}
                                    </span>
                                )}
                            </div>

                            <p className="mt-1 text-xs text-(--text-muted)">
                                {t("addressInformation")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6">
                    <div className="grid gap-5 sm:grid-cols-2">
                        {/* Name */}
                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <User
                                    size={16}
                                    className="text-(--main)"
                                />
                                <span className="text-xs font-medium text-(--text-muted)">
                                    {t("name")}
                                </span>
                            </div>

                            <div className="rounded-lg border border-(--border-dark) bg-(--bg-secondary) px-4 py-3">
                                <p className="text-sm font-medium text-(--text-primary)">
                                    {address.name}
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <Phone
                                    size={16}
                                    className="text-(--main)"
                                />
                                <span className="text-xs font-medium text-(--text-muted)">
                                    {t("phone")}
                                </span>
                            </div>

                            <div className="rounded-lg border border-(--border-dark) bg-(--bg-secondary) px-4 py-3">
                                <p className="text-sm font-medium text-(--text-primary)">
                                    {address.phone}
                                </p>
                            </div>
                        </div>

                        {/* City */}
                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <MapPinned
                                    size={16}
                                    className="text-(--main)"
                                />
                                <span className="text-xs font-medium text-(--text-muted)">
                                    {t("city")}
                                </span>
                            </div>

                            <div className="rounded-lg border border-(--border-dark) bg-(--bg-secondary) px-4 py-3">
                                <p className="text-sm font-medium text-(--text-primary)">
                                    {address.city}
                                </p>
                            </div>
                        </div>

                        {/* Postal Code */}
                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                <Hash
                                    size={16}
                                    className="text-(--main)"
                                />
                                <span className="text-xs font-medium text-(--text-muted)">
                                    {t("postalCode")}
                                </span>
                            </div>

                            <div className="rounded-lg border border-(--border-dark) bg-(--bg-secondary) px-4 py-3">
                                <p className="text-sm font-medium text-(--text-primary)">
                                    {address.postal_code}
                                </p>
                            </div>
                        </div>

                        {/* National Address */}
                        <div className="sm:col-span-2">
                            <div className="mb-2 flex items-center gap-2">
                                <MapPin
                                    size={16}
                                    className="text-(--main)"
                                />
                                <span className="text-xs font-medium text-(--text-muted)">
                                    {t("nationalAddress")}
                                </span>
                            </div>

                            <div className="rounded-lg border border-(--border-dark) bg-(--bg-secondary) px-4 py-3">
                                <p className="text-sm font-medium leading-6 text-(--text-primary)">
                                    {address.national_address}
                                </p>
                            </div>
                        </div>

                        {/* Detailed Address */}
                        <div className="sm:col-span-2">
                            <div className="mb-2 flex items-center gap-2">
                                <MapPin
                                    size={16}
                                    className="text-(--main)"
                                />
                                <span className="text-xs font-medium text-(--text-muted)">
                                    {t("detailedAddress")}
                                </span>
                            </div>

                            <div className="rounded-lg border border-(--border-dark) bg-(--bg-secondary) px-4 py-3">
                                <p className="text-sm font-medium leading-6 text-(--text-primary)">
                                    {address.detailed_address}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex justify-end gap-3 border-t border-(--border-dark) pt-5">
                        {/* Back */}
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="
                                rounded-lg
                                border border-(--border-dark)
                                px-5 py-2.5
                                text-sm font-medium
                                text-(--text-primary)
                                transition-all duration-200
                                hover:border-(--main)
                                hover:text-(--main)
                            "
                        >
                            {t("back")}
                        </button>

                        {/* Edit */}
                        <Link
                            href={`/address/${address.id}/edit`}
                            className="
                                flex items-center gap-2
                                rounded-lg
                                bg-(--main)
                                px-5 py-2.5
                                text-sm font-medium
                                text-(--white)
                                transition-all duration-200
                                hover:opacity-90
                            "
                        >
                            <Edit3 size={16} />
                            {t("edit")}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}