import { ArrowRight, Headphones } from "lucide-react";
import React from "react";

export default function Help() {
    return (
        <section className="mt-4 rounded-xl border border-[#333] bg-[#191919] p-4 sm:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
                {/* Content */}
                <div className="flex min-w-0 items-center gap-3">
                    <div className="rounded-full bg-[#683AD0] p-2">
                        <Headphones size={32} />
                    </div>

                    <div className="min-w-0">
                        <h3 className="font-semibold text-lg">
                            Need Help?
                        </h3>

                        <p className="leading-relaxed text-gray-500 text-sm">
                            If you have any questions about your order, our support
                            team is here to help
                        </p>
                    </div>
                </div>

                {/* Button */}
                <button
                    type="button"
                    className="flex w-full sm:w-fit shrink-0 items-center justify-center gap-2 rounded-full border border-[#683AD0] py-2 px-6 text-lg font-medium text-[#9b6cff] transition hover:bg-[#683AD0]/10"
                >
                    Contact Support
                    <ArrowRight size={24} />
                </button>
            </div>
        </section>
    );
}