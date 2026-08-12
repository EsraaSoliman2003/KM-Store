import { useTranslations } from "next-intl";

export default function Coupon() {
  const t = useTranslations();

  return (
    <div className="w-full rounded-2xl border border-[#2d2d2d] bg-[#151515] p-5 sm:p-6">
      <h2 className="mb-4 text-lg font-bold text-white sm:text-xl">
        {t("couponTitle")}
      </h2>

      <div className="flex h-14 w-full overflow-hidden rounded-2xl border border-[#484848]">
        <input
          type="text"
          placeholder={t("couponCode")}
          className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-gray-500 sm:text-md"
        />

        <button
          type="button"
          className="shrink-0 bg-[#683AD0] px-5 text-sm font-medium text-white transition hover:bg-[#5a30bd] sm:px-6 sm:text-md"
        >
          {t("apply")}
        </button>
      </div>
    </div>
  );
}