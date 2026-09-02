import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

export default function Timer({}: Props) {
    const t = useTranslations();

    const timer = [
        ["02", "hours"],
        ["30", "minutes"],
        ["34", "seconds"],
    ];

    return (
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:flex-nowrap">
            {/* Ends in */}
            <span
                className="
                    w-full text-center
                    text-xs font-medium
                    tracking-wide
                    text-(--text-secondary)
                    sm:w-auto sm:text-left
                "
            >
                {t("endsIn")}
            </span>

            {timer.map(([num, label], index) => (
                <React.Fragment key={label}>
                    <div
                        className="
                            group relative
                            flex h-14 w-[52px]
                            flex-col items-center justify-center
                            overflow-hidden
                            rounded-lg

                            border border-(--main)/20
                            bg-(--main)/[0.06]

                            shadow-[0_3px_15px_rgba(104,58,208,0.08)]

                            transition-all duration-300

                            hover:-translate-y-0.5
                            hover:border-(--main)/40
                            hover:bg-(--main)/[0.10]
                            hover:shadow-[0_6px_20px_rgba(104,58,208,0.15)]

                            sm:h-16 sm:w-[58px]
                            lg:h-[70px] lg:w-[66px]

                            dark:border-white/10
                            dark:bg-white/[0.07]
                            dark:shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                            dark:hover:border-(--main)/40
                            dark:hover:bg-(--main)/10
                        "
                    >
                        {/* Glow */}
                        <div
                            className="
                                pointer-events-none
                                absolute -top-5
                                h-10 w-10
                                rounded-full
                                bg-(--main)
                                opacity-[0.08]
                                blur-xl
                                transition-opacity
                                group-hover:opacity-20
                                dark:opacity-10
                                dark:group-hover:opacity-25
                            "
                        />

                        {/* Number */}
                        <span
                            className="
                                relative z-10
                                text-lg font-bold
                                leading-none
                                tracking-tight
                                text-(--main)

                                sm:text-xl
                                lg:text-2xl

                                dark:text-white
                                dark:drop-shadow-[0_2px_8px_var(--main-glow)]
                            "
                        >
                            {num}
                        </span>

                        {/* Label */}
                        <span
                            className="
                                relative z-10
                                mt-1
                                text-[8px]
                                font-medium
                                uppercase
                                tracking-wider
                                text-(--text-muted)

                                sm:text-[9px]
                                lg:text-[10px]

                                dark:text-white/45
                            "
                        >
                            {t(label)}
                        </span>
                    </div>

                    {/* Colon */}
                    {index !== timer.length - 1 && (
                        <span
                            className="
                                mb-1
                                text-base font-bold
                                text-(--main)
                                opacity-70

                                sm:text-lg
                                lg:text-xl
                            "
                        >
                            :
                        </span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}