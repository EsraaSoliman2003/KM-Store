type SettingRowProps = {
    icon: React.ElementType;
    title: string;
    description: string;
    action: React.ReactNode;
    last?: boolean;
};

export function SettingRow({
    icon: Icon,
    title,
    description,
    action,
    last = false,
}: SettingRowProps) {
    return (
        <div
            className={`flex min-h-[58px] items-center gap-3 px-3 py-2.5 ${!last ? "border-b border-(--border-dark)" : ""
                }`}
        >
            <Icon
                size={20}
                className="shrink-0 text-(--main)"
            />

            <div className="min-w-0 flex-1">
                <p className="text-[16px] font-medium text-(--text-primary)">
                    {title}
                </p>

                <p className="mt-0.5 truncate text-[14px] text-(--text-muted)">
                    {description}
                </p>
            </div>

            <div className="shrink-0">{action}</div>
        </div>
    );
}