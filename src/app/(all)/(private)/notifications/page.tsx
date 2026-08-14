import React from "react";
import Header from "../_components/Header";
import { useTranslations } from "next-intl";
import { iconConfig, notifications } from "./_components/data";

export default function Page() {
  const t = useTranslations();



  return (
    <div className="min-w-0 mb-10">
      <Header
        title={t("notifications")}
        subTitle={t("notificationsSubtitle")}
      />

      <div className="space-y-2">
        {notifications.map((notification, index) => {
          const config = iconConfig[notification.type];
          const Icon = config.icon;

          return (
            <div
              key={notification.id}
              className="flex min-h-[50px] items-center gap-3 rounded-md border border-(--border-dark) bg-(--bg-primary) px-2.5 py-2 transition-colors hover:border-(--main)"
            >
              {/* Icon */}
              <div
                className={`flex p-2 shrink-0 items-center justify-center rounded-md border ${config.className}`}
              >
                <Icon size={24} />
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="truncate text-[16px] font-semibold text-(--text-primary)">
                    {t(notification.title)}
                  </h3>

                  {index === 0 && (<span className="h-2 w-2 shrink-0 rounded-full bg-(--main)" />)}
                </div>

                <p className="mt-0.5 truncate text-[14px] text-(--text-muted)">
                  {t(notification.description)}
                </p>
              </div>

              {/* Time */}
              <span className="shrink-0 text-[12px] text-(--text-muted)">
                {t(notification.time)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}