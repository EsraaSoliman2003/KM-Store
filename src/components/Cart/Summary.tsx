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
    <div className={`flex w-full flex-col gap-6 rounded-2xl border border-[#2d2d2d] bg-[#151515] p-5 sm:p-6 ${className}`}>
      {/* Header */}
      <h2 className="text-xl font-bold text-white">
        {t("orderSummary")}
      </h2>

      {/* Details */}
      <div className="space-y-4 border-b border-white/20 pb-5">
        <div className="flex items-center justify-between gap-4 text-sm sm:text-[18px]">
          <span className="text-gray-400">
            {t("subtotal")} (3) {t("items")}
          </span>

          <span className="shrink-0 font-bold text-white">
            EGP 1626.95
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm sm:text-[18px]">
          <span className="text-gray-400">
            {t("shippingFee")}
          </span>

          <span className="shrink-0 font-bold text-[#7C3AED]">
            {t("free")}
          </span>
        </div>
      </div>

      {/* Total */}
      <div className="flex items-center justify-between gap-4 text-xl font-bold text-white sm:text-2xl">
        <span>{t("total")}</span>

        <span className="shrink-0">
          EGP 1626.95
        </span>
      </div>

      {/* Checkout */}
      <Link
        href={href}
        className="h-12 w-full rounded-2xl bg-[#683AD0] text-base text-white transition hover:bg-[#5a30bd] md:h-13 sm:text-lg flex justify-center items-center"
      >
        {t(text)}
      </Link>
    </div>
  );
}