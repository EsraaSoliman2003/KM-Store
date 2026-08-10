import { useTranslations } from "next-intl";

export default function Summary() {
  const t = useTranslations();

  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl border border-[#2d2d2d] bg-[#151515] p-5 sm:p-6">
      {/* Header */}
      <h2 className="text-xl font-bold text-white">
        {t("Order Summary")}
      </h2>

      {/* Details */}
      <div className="space-y-4 border-b border-white/20 pb-5">
        <div className="flex items-center justify-between gap-4 text-sm sm:text-[18px]">
          <span className="text-gray-400">
            {t("Subtotal")} (3 items)
          </span>

          <span className="shrink-0 font-bold text-white">
            EGP 1626.95
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm sm:text-[18px]">
          <span className="text-gray-400">
            {t("Shipping Fee")}
          </span>

          <span className="shrink-0 font-bold text-[#7C3AED]">
            {t("Free")}
          </span>
        </div>
      </div>

      {/* Total */}
      <div className="flex items-center justify-between gap-4 text-xl font-bold text-white sm:text-2xl">
        <span>{t("Total")}</span>

        <span className="shrink-0">
          EGP 1626.95
        </span>
      </div>

      {/* Checkout */}
      <button
        type="button"
        className="h-12 w-full rounded-2xl bg-[#683AD0] text-base text-white transition hover:bg-[#5a30bd] md:h-13 sm:text-lg"
      >
        {t("Proceed to Checkout")}
      </button>
    </div>
  );
}