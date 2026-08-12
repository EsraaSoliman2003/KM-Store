import { useTranslations } from "next-intl";
import Link from "next/link";

type Prop = {
  text?: string;
  className?: string;
  href?: string;
}

export default function Summary({ text = "proceedToCheckout", className, href = "/checkout" }: Prop) {
  const t = useTranslations();

  return (
    <div className={`flex w-full flex-col gap-6 rounded-2xl border border-[var(--border-dark)] bg-[var(--bg-tertiary)] p-5 sm:p-6 ${className}`}>
      <h2 className="text-xl font-bold text-[var(--text-primary)]">
        {t("orderSummary")}
      </h2>

      <div className="space-y-4 border-b border-[var(--border-dark)] pb-5">
        <div className="flex items-center justify-between gap-4 text-sm sm:text-[18px]">
          <span className="text-[var(--text-muted)]">
            {t("subtotal")} (3) {t("items")}
          </span>
          <span className="shrink-0 font-bold text-[var(--text-primary)]">
            EGP 1626.95
          </span>
        </div>
        <div className="flex items-center justify-between gap-4 text-sm sm:text-[18px]">
          <span className="text-[var(--text-muted)]">
            {t("shippingFee")}
          </span>
          <span className="shrink-0 font-bold text-[var(--main)]">
            {t("free")}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
        <span>{t("total")}</span>
        <span className="shrink-0">
          EGP 1626.95
        </span>
      </div>

      <Link
        href={href}
        className="flex h-12 w-full items-center justify-center rounded-2xl bg-[var(--main)] text-base text-[var(--text-white)] transition hover:bg-[var(--main-hover)] md:h-13 sm:text-lg"
      >
        {t(text)}
      </Link>
    </div>
  );
}