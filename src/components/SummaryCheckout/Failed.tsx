import { useTranslations } from 'next-intl'
import Link from 'next/link';

export default function Failed() {
    const t = useTranslations();

    return (
        <div className="mt-7 flex w-full max-w-[400px] flex-col gap-3 px-4 sm:mt-8 sm:px-0">
            {/* Track Order */}
            <button
                className="h-11 w-full rounded-[12px] flex justify-center items-center border border-[var(--main)] px-4 text-sm font-medium text-[var(--main)] transition-all duration-200 hover:bg-[var(--main)]/10 active:scale-[0.99] sm:h-12"
            >
                {t("tryAgain")}
            </button>

            {/* Continue Shopping */}
            <Link
                href={"/checkout"}
                className="h-11 w-full rounded-[12px] flex justify-center items-center bg-[var(--main)] px-4 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[var(--main-hover)] hover:shadow-md active:scale-[0.99] sm:h-12"
            >
                {t("changePaymentMethod")}
            </Link>
        </div>
    )
}
