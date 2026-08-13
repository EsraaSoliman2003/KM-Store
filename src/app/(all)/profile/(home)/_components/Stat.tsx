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
        <div className="flex flex-col items-center justify-center text-center space-y-2">
            <Icon
                size={24}
                className="text-(--main) mb-4"
            />

            <p className="text-[28px] font-bold leading-none text-(--text-primary)">
                {value}
            </p>

            <p className="text-sm text-(--text-muted)">
                {label}
            </p>

            <Link
                href={href}
                className="text-[12px] text-(--main) flex items-center gap-2 py-2 px-4"
            >
                <span className="border-b border-(--main)">
                    {linkLabel}
                </span>
                <ArrowRight size={18} />
            </Link>
        </div>
    );
}