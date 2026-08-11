"use client";

import React, { useState } from "react";
import { DescriptionContent } from "./DescriptionContent";
import { SpecificationsContent } from "./SpecificationsContent";
import { ReviewsContent } from "./ReviewsContent";

type Prop = {
    product: any;
}

export default function Tabs({ product }: Prop) {
    const [activeTab, setActiveTab] = useState("Description");

    const tabs = ["Description", "Specifications", "Reviews"];
    return (
        <section>
            <div className="flex w-full gap-5 border-b border-[#484848] sm:gap-8">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        type="button"
                        onClick={() => setActiveTab(tab)}
                        className={`relative flex-1 py-2 text-center text-[16px] sm:text-[20px] transition sm:flex-none ${activeTab === tab
                            ? "font-medium text-[#7b3fe1]"
                            : "text-[#858585] hover:text-white"
                            }`}
                    >
                        {tab}

                        {activeTab === tab && (
                            <span className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-[#7b3fe1]" />
                        )}
                    </button>
                ))}
            </div>

            {/* ================= TAB CONTENT ================= */}
            <div className="pt-8">
                {activeTab === "Description" && (
                    <DescriptionContent />
                )}

                {activeTab === "Specifications" && (
                    <SpecificationsContent />
                )}

                {activeTab === "Reviews" && (
                    <ReviewsContent reviews={product.reviews} />
                )}
            </div>
        </section>
    )
}
