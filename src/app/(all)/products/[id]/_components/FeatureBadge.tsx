export function FeatureBadge({
    icon,
    text,
}: {
    icon: React.ReactNode;
    text: string;
}) {
    return (
        <div className="flex px-4 py-2 items-center gap-1 rounded-[10px] border border-[#5b4379] bg-[#241b2e] text-[12px] text-[#c5c5c5]">
            <span className="text-[#d1b6f6]">{icon}</span>
            <span className="whitespace-nowrap">{text}</span>
        </div>
    );
}
