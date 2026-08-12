import React from 'react';

export function FeatureBadge({
    icon,
    text,
}: {
    icon: React.ReactNode;
    text: string;
}) {
    return (
        <div className="flex px-4 py-2 items-center gap-1 rounded-[10px] border border-[var(--main)]/40 bg-[var(--main)]/10 text-[12px] text-[var(--text-secondary)]">
            <span className="text-[var(--main)]">{icon}</span>
            <span className="whitespace-nowrap">{text}</span>
        </div>
    );
}