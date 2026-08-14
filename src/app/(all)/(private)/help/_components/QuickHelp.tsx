import React from 'react'
import { helpTopics } from './data';
import { useTranslations } from 'next-intl';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function QuickHelp() {
    const t = useTranslations();

    return (
        <section className="overflow-hidden rounded-2xl border border-(--border-dark) bg-(--bg-primary)">
            <div className="border-b border-(--border-dark) px-3 py-3">
                <h2 className="text-[16px] font-semibold text-(--text-primary)">
                    {t("quickHelpTopics")}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                {helpTopics.map((topic, index) => {
                    const Icon = topic.icon;

                    return (
                        <button
                            key={topic.id}
                            type="button"
                            className={`group flex min-h-[72px] items-center gap-3 px-4 py-3 text-start transition-colors hover:bg-white/[0.02] ${index < helpTopics.length - 2
                                ? "border-b border-(--border-dark)"
                                : ""
                                }`}
                        >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] border border-(--main)/60 bg-(--main)/10 text-(--main)">
                                <Icon size={18} strokeWidth={1.7} />
                            </div>

                            <div className="min-w-0 w-full md:w-[200px]">
                                <h3 className="text-[14px] font-semibold text-(--text-primary)">
                                    {t(topic.title)}
                                </h3>

                                <p className="mt-0.5 truncate text-[12px] text-(--text-muted)">
                                    {t(topic.description)}
                                </p>
                            </div>

                            {t("dir") === "rtl"
                                ? <ArrowLeft
                                    size={16}
                                    className="shrink-0 text-(--text-muted) transition-transform group-hover:translate-x-0.5 group-hover:text-(--main)"
                                />
                                : <ArrowRight
                                    size={16}
                                    className="shrink-0 text-(--text-muted) transition-transform group-hover:translate-x-0.5 group-hover:text-(--main)"
                                />
                            }
                        </button>
                    );
                })}
            </div>
        </section>
    )
}
