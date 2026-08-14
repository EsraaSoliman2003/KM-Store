import React from "react";
import Header from "../_components/Header";
import { useTranslations } from "next-intl";
import { Plus } from "lucide-react";
import Link from "next/link";
import AddressCard from "./_components/AddressCard";

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
          <AddressCard key={item.id} item={item} />
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