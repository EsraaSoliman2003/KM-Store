import React from "react";
import Header from "../_components/Header";
import { useTranslations } from "next-intl";
import {
  Edit3,
  MapPin,
  Plus,
  Trash2,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  const t = useTranslations();

  const addresses = [
    {
      id: 1,
      title: "Home",
      isDefault: true,
      address: "123 El Tahrir Street, Maadi",
      city: "Cairo, Egypt 11728",
      phone: "Phone: +20 100 123 4567",
    },
    {
      id: 2,
      title: "Work",
      isDefault: false,
      address: "123 El Tahrir Street, Maadi",
      city: "Cairo, Egypt 11728",
      phone: "Phone: +20 100 123 4567",
    },
    {
      id: 3,
      title: "Parents",
      isDefault: false,
      address: "123 El Tahrir Street, Maadi",
      city: "Cairo, Egypt 11728",
      phone: "Phone: +20 100 123 4567",
    },
  ];

  return (
    <div className="min-w-0 mb-10">
      <Header
        title={t("address")}
        subTitle={t("subTitleAddress")}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {addresses.map((item) => (
          <div
            key={item.id}
            className="flex min-h-[220px] flex-col rounded-2xl border border-(--border-dark) bg-(--bg-primary) p-4"
          >
            {/* Header */}
            <div className="flex items-center gap-2">
              <MapPin
                size={24}
                strokeWidth={2}
                className="shrink-0 text-(--main)"
              />

              <p className="text-[16px] font-semibold text-(--text-primary)">
                {item.title}
              </p>

              {item.isDefault && (
                <span className="rounded-full border border-(--main) bg-[rgba(104,58,208,0.12)] px-3 py-1.5 text-[12px] font-medium text-(--text-primary)">
                  {t("default")}
                </span>
              )}
            </div>

            {/* Address */}
            <div className="mt-6 flex-1">
              <p className="text-[13px] leading-5 text-(--text-muted)">
                {item.address}
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
                href="/"
                className="flex h-[43px] flex-1 items-center justify-center gap-2 rounded-[8px] border border-(--main) px-4 text-[16px] font-medium text-(--main) transition-colors hover:bg-[rgba(104,58,208,0.08)]"
              >
                <Edit3 size={18} />
                {t("edit")}
              </Link>

              {!item.isDefault && (
                <>
                  <button
                    type="button"
                    className="h-[43px] flex-1 rounded-[8px] bg-(--main) px-4 text-[16px] font-medium text-(--white) transition-opacity hover:opacity-90"
                  >
                    {t("setAsDefault")}
                  </button>

                  <button
                    type="button"
                    aria-label="Delete address"
                    className="flex h-[43px] w-[30px] shrink-0 items-center justify-center text-red-500 transition-colors hover:text-red-400"
                  >
                    <Trash2 size={21} />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}

        {/* Add New Address */}
        <Link
          href="/"
          className="flex min-h-[220px] items-center justify-center rounded-2xl border border-(--border-dark) bg-(--bg-primary) transition-colors hover:border-(--main)"
        >
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md border border-(--main) text-(--main)">
              <Plus size={20} />
            </div>

            <span className="text-[16px] font-semibold text-(--text-primary)">
              {t("addNewAddress")}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}