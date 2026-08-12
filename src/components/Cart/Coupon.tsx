import { useTranslations } from "next-intl";

export default function Coupon() {
  const t = useTranslations();

  return (
    <div className="w-full rounded-2xl border border-[var(--border-dark)] bg-[var(--bg-tertiary)] p-5 sm:p-6">
      <h2 className="mb-4 text-lg font-bold text-[var(--text-primary)] sm:text-xl">
        {t("couponTitle")}
      </h2>

      <div className="flex h-14 w-full overflow-hidden rounded-2xl border border-[var(--border-dark)]">
        <input
          type="text"
          placeholder={t("couponCode")}
          className="min-w-0 flex-1 bg-transparent px-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] sm:text-md"
        />

        <button
          type="button"
          className="shrink-0 bg-[var(--main)] px-5 text-sm font-medium text-[var(--text-white)] transition hover:bg-[var(--main-hover)] sm:px-6 sm:text-md"
        >
          {t("apply")}
        </button>
      </div>
    </div>
  );
}