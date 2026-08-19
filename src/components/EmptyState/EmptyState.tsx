import { PackageOpen } from "lucide-react";

type Props = {
    title: string;
    description?: string;
};

export default function EmptyState({
    title,
    description,
}: Props) {
    return (
        <div className="col-span-full flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-dashed border-(--border-color) bg-(--main)/[0.02] px-6 py-10 text-center">
            {/* Icon */}
            <div className="relative mb-6">
                <div className="absolute -inset-4 rounded-full bg-(--main)/5 blur-xl" />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-(--main)/10 bg-(--main)/10 shadow-sm">
                    <PackageOpen
                        size={38}
                        strokeWidth={1.6}
                        className="text-(--main)"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="max-w-md">
                <h3 className="text-xl font-semibold tracking-tight text-(--text-primary)">
                    {title}
                </h3>

                {description && (
                    <p className="mt-2 text-sm leading-6 text-(--text-secondary)">
                        {description}
                    </p>
                )}
            </div>

            {/* Decorative dots */}
            <div className="mt-6 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-(--main)/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-(--main)/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-(--main)/60" />
            </div>
        </div>
    );
}