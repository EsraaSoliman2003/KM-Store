import React from 'react'
import { useTranslations } from 'next-intl';
import { getSteps } from './steps';

export default function Timeline() {
    const t = useTranslations();
    const steps = getSteps(t);

    return (
        <div className="mt-6">
            {/* ================= MOBILE TIMELINE ================= */}
            <div className="sm:hidden">
                <div className="relative">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isLast = index === steps.length - 1;

                        return (
                            <div
                                key={step.title}
                                className="relative flex min-h-[60px] items-start"
                            >
                                {/* Vertical Line */}
                                {!isLast && (
                                    <div
                                        className={`absolute left-[9px] top-6 h-[44px] w-px ${index < 3
                                                ? "bg-[#683AD0]"
                                                : "border-l border-dashed border-[#555]"
                                            }`}
                                    />
                                )}

                                {/* Icon */}
                                <div
                                    className={`relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${step.active
                                            ? "border-[#683AD0] bg-transparent"
                                            : step.completed
                                                ? "border-[#683AD0] bg-[#683AD0]"
                                                : "border-[#999] bg-[#191919]"
                                        }`}
                                >
                                    <Icon
                                        size={11}
                                        className={
                                            step.completed
                                                ? "text-white"
                                                : step.active
                                                    ? "text-[#9b6cff]"
                                                    : "text-gray-400"
                                        }
                                    />
                                </div>

                                {/* Content */}
                                <div className="ml-5 flex min-w-0 flex-1 items-start justify-between gap-4">
                                    <p
                                        className={`text-sm font-medium ${step.active
                                                ? "text-[#9b6cff]"
                                                : "text-gray-300"
                                            }`}
                                    >
                                        {step.title}
                                    </p>

                                    <p
                                        className={`shrink-0 text-xs ${step.active
                                                ? "text-[#9b6cff]"
                                                : "text-gray-500"
                                            }`}
                                    >
                                        {step.date}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ================= DESKTOP TIMELINE ================= */}
            <div className="hidden overflow-x-auto pb-2 sm:block">
                <div className="flex min-w-[680px] items-start">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isLast = index === steps.length - 1;

                        return (
                            <React.Fragment key={step.title}>
                                <div className="flex w-[105px] shrink-0 flex-col items-center text-center">
                                    {/* Icon */}
                                    <div
                                        className={`flex h-8 w-8 items-center justify-center rounded-full text-white ${step.active
                                                ? "bg-[#683AD0] shadow-[0_0_15px_rgba(104,58,208,.7)]"
                                                : step.completed
                                                    ? "bg-[#683AD0]"
                                                    : "bg-(--border-dark)"
                                            }`}
                                    >
                                        <Icon size={14} />
                                    </div>

                                    {/* Title */}
                                    <p
                                        className={`mt-2 text-lg font-medium ${step.active
                                                ? "text-[#9b6cff]"
                                                : "text-gray-300"
                                            }`}
                                    >
                                        {step.title}
                                    </p>

                                    {/* Date */}
                                    <p
                                        className={`mt-0.5 text-sm ${step.active
                                                ? "text-[#9b6cff]"
                                                : "text-gray-500"
                                            }`}
                                    >
                                        {step.date}
                                    </p>
                                </div>

                                {/* Connector */}
                                {!isLast && (
                                    <div
                                        className={`mt-4 h-px flex-1 ${index < 3
                                                ? "bg-[#683AD0]"
                                                : "border-t border-dashed border-[#555]"
                                            }`}
                                    />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
