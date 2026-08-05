import React from "react";

type Props = {};

export default function Timer({}: Props) {
    const timer = [
        ["02", "HRS"],
        ["30", "MIN"],
        ["34", "SEC"],
    ];

    return (
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:flex-nowrap">
            <span className="w-full text-center text-xs text-white/50 sm:w-auto sm:text-left">
                Ends in:
            </span>

            {timer.map(([num, label], index) => (
                <React.Fragment key={label}>
                    <div className="flex h-14 w-12 flex-col items-center justify-center rounded-md border border-(--main) bg-(--secondary) sm:h-16 sm:w-14 lg:h-18 lg:w-16">
                        <span className="text-lg font-semibold text-red-500 sm:text-xl lg:text-2xl">
                            {num}
                        </span>

                        <span className="text-[9px] text-white/40 sm:text-[10px]">
                            {label}
                        </span>
                    </div>

                    {index !== timer.length - 1 && (
                        <span className="text-lg font-bold text-(--main) sm:text-xl lg:text-2xl">
                            :
                        </span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}