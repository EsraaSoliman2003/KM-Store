// Stat.tsx
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type StatProps = {
    icon: React.ElementType;
    value: string;
    label: string;
    linkLabel: string;
    href: string;
};

export function Stat({
    icon: Icon,
    value,
    label,
    linkLabel,
    href,
}: StatProps) {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-1 md:space-y-2">
            <Icon
                size={24}
                className="text-(--main) mb-2 md:mb-4"
            />

            <p className="text-[24px] md:text-[28px] font-bold leading-none text-(--text-primary)">
                {value}
            </p>

            <p className="text-xs md:text-sm text-(--text-muted)">
                {label}
            </p>

            <Link
                href={href}
                className="text-[11px] md:text-[12px] text-(--main) flex items-center gap-1.5 md:gap-2 py-1.5 md:py-2 px-0 md:px-4"
            >
                <span className="border-b border-(--main)">
                    {linkLabel}
                </span>

                <ArrowRight size={16} className="md:size-[18px]" />
            </Link>
        </div>
    );
}