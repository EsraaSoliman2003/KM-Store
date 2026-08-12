"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { LogOut } from "lucide-react";
import { useAppSelector } from "@/rtk/hooks";
import { logoutUser } from "@/rtk/slices/authSlice";
import { useLogout } from "@/hooks/useLogout";

export default function Page() {
  const t = useTranslations();
  const { loading, profile } = useAppSelector(
    (state) => state.profile
  );

  const user = profile?.data.user;

  const logOut = useLogout();

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-gray-500">{t("loading")}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-gray-500">{t("noProfileDataFound")}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-900">
        {/* Profile Header */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#683AD0] text-2xl font-bold text-white">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                user.name.charAt(0).toUpperCase()
              )}
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {user.name}
              </h1>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                {user.email || t("noEmail")}
              </p>
            </div>
          </div>

          {/* Logout Button */}
          <button
            type="button"
            onClick={logOut}
            className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-600"
          >
            <LogOut size={18} />
            <span>{t("logout")}</span>
          </button>
        </div>

        {/* User Information */}
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("name")}
            </p>

            <p className="font-medium text-gray-900 dark:text-white">
              {user.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("phoneNumber")}
            </p>

            <p className="font-medium text-gray-900 dark:text-white">
              {user.country_code} {user.phone}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("email")}
            </p>

            <p className="font-medium text-gray-900 dark:text-white">
              {user.email || t("notProvided")}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t("location")}
            </p>

            <p className="font-medium text-gray-900 dark:text-white">
              {user.latitude && user.longitude
                ? `${user.latitude}, ${user.longitude}`
                : t("notProvided")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}