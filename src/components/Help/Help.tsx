import { Headphones } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Help() {
    const t = useTranslations();

    return (
        <section className="flex flex-col gap-3 rounded-2xl border border-(--border-dark) bg-(--bg-tertiary) p-3 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-2.5">
                <div className="flex p-2 shrink-0 items-center justify-center rounded-full bg-(--main) text-(--text-white)">
                    <Headphones size={40} />
                </div>

                <div>
                    <p className="text-[16px] font-semibold text-(--text-primary)">
                        {t("needHelp")}
                    </p>

                    <p className="mt-0.5 text-[14px] text-(--text-muted)">
                        {t("supportDescription")}
                    </p>
                </div>
            </div>

            <Link
                href="/help"
                className="flex items-center justify-center rounded-[8px] border border-(--main) px-5 py-2 text-[18px] font-medium text-(--main) transition-colors hover:bg-[rgba(104,58,208,0.08)]"
            >
                {t("contactSupport")}
            </Link>
        </section>
    )
}
