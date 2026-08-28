"use client";

import React, { useEffect } from "react";
import Header from "../_components/Header";
import { useTranslations } from "next-intl";
import { Plus } from "lucide-react";
import Link from "next/link";
import AddressCard from "./_components/AddressCard";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import { getAddresses } from "@/rtk/slices/addressSlice";
import EmptyState from "@/components/EmptyState/EmptyState";
import AddressCardSkeleton from "@/skeleton/AddressCardSkeleton";

export default function Page() {
  const t = useTranslations();
  const dispatch = useAppDispatch();

  const { addresses, loading } = useAppSelector(
    (state) => state.address
  );

  useEffect(() => {
    dispatch(getAddresses());
  }, [dispatch]);

  return (
    <div className="mb-10 min-w-0">
      <Header
        title={t("address")}
        subTitle={t("subTitleAddress")}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {loading ? (
          <>
            <AddressCardSkeleton />
            <AddressCardSkeleton />
          </>
        ) : addresses.length > 0 ? (
          <>
            {addresses.map((item) => (
              <AddressCard
                key={item.id}
                item={item}
              />
            ))}

            <Link
              href="/add-address"
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
          </>
        ) : (
          <div className="md:col-span-2">
            <EmptyState
              title={t("noAddresses")}
              description={t("noAddressesDescription")}
            />

            <div className="mt-4 flex justify-center">
              <Link
                href="/add-address"
                className="flex items-center gap-2 rounded-lg bg-(--main) px-5 py-2.5 text-sm font-medium text-(--white) transition hover:opacity-90"
              >
                <Plus size={18} />
                {t("addNewAddress")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}