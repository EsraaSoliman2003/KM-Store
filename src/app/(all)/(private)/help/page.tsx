import React from "react";
import Header from "../_components/Header";
import { useTranslations } from "next-intl";
import {
  ArrowLeft,
  ArrowRight,
  Banknote,
  CircleUserRound,
  FileText,
  Mail,
  MessageCircle,
  PackageCheck,
  RotateCcw,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export default function Page() {
  const t = useTranslations();

  const supportOptions = [
    {
      id: "chat",
      icon: MessageCircle,
      title: t("liveChat"),
      description: t("liveChatDescription"),
      badge: t("onlineNow"),
      button: t("startChat"),
      className: "bg-green-950/80",
      iconClassName:
        "border-green-400/40 bg-green-500/10 text-green-400",
      badgeClassName:
        "border-green-400 text-green-400",
      buttonClassName:
        "border-green-400 bg-green-500/10 text-green-400 hover:bg-green-500/20",
    },
    {
      id: "phone",
      icon: Smartphone,
      title: t("phoneSupport"),
      description: "+20 2 1234 5678",
      badge: t("supportHours"),
      button: t("startChat"),
      className: "bg-sky-950/80",
      iconClassName:
        "border-sky-400/40 bg-sky-500/10 text-sky-400",
      badgeClassName:
        "border-sky-400 text-sky-400",
      buttonClassName:
        "border-sky-400 bg-sky-500/10 text-sky-400 hover:bg-sky-500/20",
    },
    {
      id: "email",
      icon: Mail,
      title: t("emailSupport"),
      description: "support@technova.com",
      badge: t("replyWithin24h"),
      button: t("startChat"),
      className: "bg-purple-950/80",
      iconClassName:
        "border-purple-400/40 bg-purple-500/10 text-purple-400",
      badgeClassName:
        "border-purple-400 text-purple-400",
      buttonClassName:
        "border-purple-400 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20",
    },
  ];

  const helpTopics = [
    {
      id: "shipping",
      icon: PackageCheck,
      title: t("shippingAndDelivery"),
      description: t("shippingAndDeliveryDescription"),
    },
    {
      id: "returns",
      icon: RotateCcw,
      title: t("returnsAndRefunds"),
      description: t("returnsAndRefundsDescription"),
    },
    {
      id: "payments",
      icon: Banknote,
      title: t("payments"),
      description: t("paymentsDescription"),
    },
    {
      id: "warranty",
      icon: ShieldCheck,
      title: t("warrantyAndRepairs"),
      description: t("warrantyAndRepairsDescription"),
    },
    {
      id: "account",
      icon: CircleUserRound,
      title: t("accountAndLogin"),
      description: t("accountAndLoginDescription"),
    },
    {
      id: "order",
      icon: FileText,
      title: t("orderIssues"),
      description: t("orderIssuesDescription"),
    },
  ];

  return (
    <div className="min-w-0 mb-10">
      <Header
        title={t("helpCenter")}
        subTitle={t("helpCenterSubtitle")}
      />

      <div className="space-y-6">
        {/* Support Options */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {supportOptions.map((option) => {
            const Icon = option.icon;

            return (
              <div
                key={option.id}
                className={`flex min-h-[235px] flex-col rounded-[12px] p-4 ${option.className}`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-[12px] border ${option.iconClassName}`}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <h2 className="mt-4 text-[16px] font-semibold text-white">
                  {option.title}
                </h2>

                <p className="mt-1 text-[13px] text-white/60">
                  {option.description}
                </p>

                <span
                  className={`mt-2 flex w-fit items-center rounded-full border px-3 py-1.5 text-[11px] ${option.badgeClassName}`}
                >
                  {option.badge}
                </span>

                <button
                  type="button"
                  className={`mt-auto h-11 w-full rounded-[12px] border text-[18px] font-medium transition-colors ${option.buttonClassName}`}
                >
                  {option.button}
                </button>
              </div>
            );
          })}
        </div>

        {/* Quick Help */}
        <section className="overflow-hidden rounded-2xl border border-(--border-dark) bg-(--bg-primary)">
          <div className="border-b border-(--border-dark) px-3 py-3">
            <h2 className="text-[16px] font-semibold text-(--text-primary)">
              {t("quickHelpTopics")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {helpTopics.map((topic, index) => {
              const Icon = topic.icon;

              return (
                <button
                  key={topic.id}
                  type="button"
                  className={`group flex min-h-[72px] items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-white/[0.02] ${index < helpTopics.length - 2
                    ? "border-b border-(--border-dark)"
                    : ""
                    }`}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] border border-(--main)/60 bg-(--main)/10 text-(--main)">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0 w-full md:w-[200px]">
                    <h3 className="text-[14px] font-semibold text-(--text-primary)">
                      {topic.title}
                    </h3>

                    <p className="mt-0.5 truncate text-[12px] text-(--text-muted)">
                      {topic.description}
                    </p>
                  </div>

                  {t("dir") === "rtl"
                    ? <ArrowLeft
                      size={16}
                      className="shrink-0 text-(--text-muted) transition-transform group-hover:translate-x-0.5 group-hover:text-(--main)"
                    />
                    : <ArrowRight
                      size={16}
                      className="shrink-0 text-(--text-muted) transition-transform group-hover:translate-x-0.5 group-hover:text-(--main)"
                    />
                  }
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}