import React from 'react'
import { supportOptions } from './data';
import { useTranslations } from 'next-intl';

export default function SupportOptions() {
    const t = useTranslations();
    
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {supportOptions.map((option) => {
                const Icon = option.icon;

                return (
                    <div
                        key={option.id}
                        className={`flex min-h-[235px] flex-col rounded-[12px] p-4 ${option.className}`}
                    >
                        <div
                            className={`flex h-11 w-11 items-center justify-center rounded-[12px] border ${option.iconClassName}`}
                        >
                            <Icon size={22} strokeWidth={1.8} />
                        </div>

                        <h2 className="mt-4 text-[16px] font-semibold text-white">
                            {t(option.title)}
                        </h2>

                        <p className="mt-1 text-[13px] text-white/60">
                            {t(option.description)}
                        </p>

                        <span
                            className={`mt-2 flex w-fit items-center rounded-full border px-3 py-1.5 text-[11px] ${option.badgeClassName}`}
                        >
                            {t(option.badge)}
                        </span>

                        <button
                            type="button"
                            className={`mt-auto h-11 w-full rounded-[12px] border text-[18px] font-medium transition-colors ${option.buttonClassName}`}
                        >
                            {t(option.button)}
                        </button>
                    </div>
                );
            })}
        </div>
    )
}
