import Header from "../_components/Header";
import { useTranslations } from "next-intl";
import Security from "./_components/Security";
import Preferences from "./_components/Preferences";
import DeleteAccount from "./_components/DeleteAccount";

export default function Page() {
  const t = useTranslations();

  return (
    <div className="min-w-0 mb-10">
      <Header
        title={t("accountSettings")}
        subTitle={t("accountSettingsSubtitle")}
      />

      <div className="space-y-4">
        {/* Security */}
        <Security />

        {/* Preferences */}
        <Preferences />

        {/* Delete Account */}
        <DeleteAccount />
      </div>
    </div>
  );
}
