import React from "react";
import {
    FiBatteryCharging,
    FiHeadphones,
    FiSmartphone,
    FiZap,
} from "react-icons/fi";
import { useTranslations } from "next-intl";

type Props = {
    activeProduct: any;
};

export default function FloatCards({ activeProduct }: Props) {
    const t = useTranslations();
    const isRtl = t("dir") === "rtl";

    const defaultStyle = {
        border: `1px solid ${activeProduct.color}40`,
        backgroundColor: `${activeProduct.color}12`,
        boxShadow: `0 0 30px ${activeProduct.color}25`,
    };

    const handleMouseEnter = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        e.currentTarget.style.border = `1px solid ${activeProduct.color}80`;
        e.currentTarget.style.boxShadow = `0 0 50px ${activeProduct.color}50`;
    };

    const handleMouseLeave = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        e.currentTarget.style.border = `1px solid ${activeProduct.color}40`;
        e.currentTarget.style.boxShadow = `0 0 30px ${activeProduct.color}25`;
    };

    return (
        <div className="pointer-events-none absolute inset-0">
            {/* Top Left */}
            <div
                className={`pointer-events-auto absolute top-6 animate-float rounded-2xl px-4 py-3 backdrop-blur-xl transition-all duration-300
                ${
                    isRtl
                        ? "right-2 xl:right-10 xl:top-[0%]"
                        : "left-2 xl:left-10 xl:top-[0%]"
                }`}
                style={defaultStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex items-center gap-3 whitespace-nowrap">
                    <FiHeadphones size={20} color={activeProduct.color} />
                    <p className="text-sm font-semibold text-white">
                        AirPods Pro 3
                    </p>
                </div>
            </div>

            {/* Top Right */}
            <div
                className={`pointer-events-auto absolute top-18 animate-float-reverse rounded-2xl px-4 py-3 backdrop-blur-xl transition-all duration-300
                ${
                    isRtl
                        ? "left-2 xl:-right-40 xl:left-auto xl:top-[25%]"
                        : "right-2 xl:-left-40 xl:right-auto xl:top-[25%]"
                }`}
                style={defaultStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex items-center gap-3 whitespace-nowrap">
                    <FiBatteryCharging size={20} color={activeProduct.color} />
                    <p className="text-sm font-semibold text-white">
                        Fast Charge
                    </p>
                </div>
            </div>

            {/* Bottom Left */}
            <div
                className={`pointer-events-auto absolute bottom-18 animate-float rounded-2xl px-4 py-3 backdrop-blur-xl transition-all duration-300
                ${
                    isRtl
                        ? "right-2 xl:-right-35 xl:bottom-[30%]"
                        : "left-2 xl:-left-35 xl:bottom-[30%]"
                }`}
                style={defaultStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex items-center gap-3 whitespace-nowrap">
                    <FiZap size={20} color={activeProduct.color} />
                    <p className="text-sm font-semibold text-white">
                        65W MagSafe
                    </p>
                </div>
            </div>

            {/* Bottom Right */}
            <div
                className={`pointer-events-auto absolute bottom-6 animate-float-reverse rounded-2xl px-4 py-3 backdrop-blur-xl transition-all duration-300
                ${
                    isRtl
                        ? "left-2 xl:right-10 xl:left-auto xl:bottom-[0%]"
                        : "right-2 xl:left-10 xl:right-auto xl:bottom-[0%]"
                }`}
                style={defaultStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex items-center gap-3 whitespace-nowrap">
                    <FiSmartphone size={20} color={activeProduct.color} />
                    <p className="text-sm font-semibold text-white">
                        Dynamic Island
                    </p>
                </div>
            </div>
        </div>
    );
}