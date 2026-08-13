import { Edit3 } from 'lucide-react';
import { useTranslations } from 'next-intl'
import Link from 'next/link';



export default function Header({
    title,
    subTitle,
    actionText,
    href
}: {
    title: string;
    subTitle: string;
    actionText?: string;
    href?: string
}) {
    const t = useTranslations();
    return (
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
                <h1 className="text-[21px] font-bold leading-tight text-(--text-primary) sm:text-[24px]">
                    {title}
                </h1>

                <p className="mt-1 text-[11px] text-(--text-secondary) sm:text-[14px]">
                    {subTitle}
                </p>
            </div>

            {(actionText && href) && (
                <Link
                    href={href}
                    className="flex w-fit items-center justify-center gap-2 rounded-[5px] border border-(--main) px-6 py-2 text-[16px] font-medium text-(--main) transition-colors hover:bg-[rgba(104,58,208,0.08)]"
                >
                    <Edit3 size={24} />
                    {actionText}
                </Link>
            )}
        </div>
    )
}
