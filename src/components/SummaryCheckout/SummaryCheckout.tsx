import { visa } from "@/assets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Success from "./Success";
import Loading from "./Loading";
import Failed from "./Failed";

type Prop = {
  state: number;
}

export default function SummaryCheckout({ state }: Prop) {
  const t = useTranslations();

  return (
    <div className="space-y-4">
      <div className={`flex w-full flex-col gap-6 rounded-2xl border border-[var(--border-dark)] bg-[var(--bg-tertiary)] p-4 h-fit`}>
        <h2 className="text-lg font-bold text-[var(--text-primary)]">
          {t("orderSummary")}
        </h2>

        <div className="space-y-4 border-b border-[var(--border-dark)] pb-5">
          <div className="flex items-center justify-between gap-4 text-sm">
            <span className="text-[var(--text-muted)] text-[16px]">
              {t("subtotal")} (3) {t("items")}
            </span>
            <span className="shrink-0 font-semibold text-[var(--text-primary)] text-[18px]">
              EGP 1626.95
            </span>
          </div>
          <div className="flex items-center justify-between gap-4 text-sm">
            <span className="text-[var(--text-muted)] text-[16px]">
              {t("shippingFee")}
            </span>
            <span className="shrink-0 font-semibold text-[var(--main)] text-[18px]">
              {t("free")}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-lg text-[var(--text-muted)]">{t("total")}</span>
          <span className="shrink-0 font-semibold text-xl">
            EGP 1626.95
          </span>
        </div>
      </div>

      <div className={`flex w-full flex-col gap-6 rounded-2xl border border-[var(--border-dark)] bg-[var(--bg-tertiary)] p-4 h-fit`}>
        <h2 className="text-lg font-bold text-[var(--text-primary)]">
          {t("orderDetailsPaymentMethod")}
        </h2>

        <div className="flex gap-4 mb-1">
          <div className="relative h-12 w-23.5">
            <Image
              src={visa}
              alt=""
              fill
              className="object-contain"
            />
          </div>


          <div className="min-w-0 flex-1">
            <div className="truncate text-[16px] font-semibold text-(--text-primary)]">
              {t("visaEndingIn")}{" "}
              {"4242"}
            </div>

            <p className="mt-0.5 text-[14px] text-(--text-muted)">
              {t("expires")} {"12/27"}
            </p>
          </div>

        </div>
      </div>

      {state === 1 ? (
        <Loading />
      ) : state === 2 ? (
        <Success />
      ) : (
        <Failed />
      )}
    </div>
  );
}