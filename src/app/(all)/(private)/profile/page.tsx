"use client";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/rtk/hooks";
import Header from "../_components/Header";
import ProfileStats from "./_components/ProfileStats";
import Info from "./_components/Info";
import Help from "../../../../components/Help/Help";

export default function Page() {
  const t = useTranslations();
  const { loading, profile } = useAppSelector((s) => s.profile);

  const user = profile?.data.user;

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
        title={t("myProfile")}
        subTitle={t("managePersonalInformation")}
        actionText={t("editProfile")}
        href="/profile/edit"
      />
      <ProfileStats />
      <Info />
      <Help />
    </div>
  );
}
