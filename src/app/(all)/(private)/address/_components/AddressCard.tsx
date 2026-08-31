import { Address } from '@/utils/dtos';
import { Edit3, Eye, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import TrashButton from './TrashButton';

type Props = {
    item: Address;
};

export default function AddressCard({ item }: Props) {
    const t = useTranslations();

    return (
        <div className="flex min-h-[220px] flex-col rounded-2xl border border-(--border-dark) bg-(--bg-primary) p-4">
            {/* Header */}
            <div className="flex items-center gap-2">
                <MapPin
                    size={24}
                    strokeWidth={2}
                    className="shrink-0 text-(--main)"
                />

                <p className="text-[16px] font-semibold text-(--text-primary)">
                    {item.address_type}
                </p>

                {item.is_default && (
                    <span className="rounded-full border border-(--main) bg-[rgba(104,58,208,0.12)] px-3 py-1.5 text-[12px] font-medium text-(--text-primary)">
                        {t("default")}
                    </span>
                )}

                {/* View */}
                <Link
                    href={`/address/${item.id}`}
                    className="
                        ml-auto
                        flex items-center gap-1.5
                        rounded-lg
                        border border-(--border-dark)
                        px-3 py-1.5
                        text-[12px] font-medium
                        text-(--text-muted)
                        transition-all duration-200
                        hover:border-(--main)
                        hover:bg-[rgba(104,58,208,0.08)]
                        hover:text-(--main)
                    "
                >
                    <Eye size={15} />
                    {t("view")}
                </Link>
            </div>

            {/* Address */}
            <div className="mt-6 flex-1">
                <p className="text-[13px] leading-5 text-(--text-muted)">
                    {item.detailed_address}-{item.national_address}-{item.postal_code}
                </p>

                <p className="text-[13px] leading-5 text-(--text-muted)">
                    {item.city}
                </p>

                <p className="text-[13px] leading-5 text-(--text-muted)">
                    {item.phone}
                </p>
            </div>

            {/* Actions */}
            <div className="mt-5 flex items-center gap-4">
                <Link
                    href={`/address/${item.id}/edit`}
                    className="
                        flex h-[43px] flex-1 items-center justify-center gap-2
                        rounded-[8px]
                        border border-(--main)
                        px-4
                        text-[16px] font-medium
                        text-(--main)
                        transition-colors
                        hover:bg-[rgba(104,58,208,0.08)]
                    "
                >
                    <Edit3 size={18} />
                    {t("edit")}
                </Link>

                {!item.is_default && (
                    <>
                        <button
                            type="button"
                            className="
                                h-[43px] flex-1
                                rounded-[8px]
                                bg-(--main)
                                px-4
                                text-[16px] font-medium
                                text-(--white)
                                transition-opacity
                                hover:opacity-90
                            "
                        >
                            {t("setAsDefault")}
                        </button>

                        <TrashButton addressId={item.id} />
                    </>
                )}
            </div>
        </div>
    );
}