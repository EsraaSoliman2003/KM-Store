import React from "react";
import Image from "next/image";
import { orbitProducts } from "../../../fakeData/data";
import { useTranslations } from "next-intl";

type Props = {
    activeProduct: any;
    setActiveProduct: (product: any) => void;
};

export default function Orbits({
    activeProduct,
    setActiveProduct,
}: Props) {
    const t = useTranslations();

    const handleCardClick = (item: any) => {
        setActiveProduct(item);
    };

    const isRtl = t("dir") === "rtl";

    return (
        <div
            className={`absolute top-1/2 z-50 hidden -translate-y-1/2 lg:block ${isRtl
                ? "-left-85 min-[1280px]:-left-70 min-[1400px]:-left-95"
                : "-right-85 min-[1280px]:-right-70 min-[1400px]:-right-95"
                }`}
        >
            <div
                className={`relative h-[549px] w-[357px] rounded-[50%] border-[8px] shadow-[inset_0_0_80px_rgba(0,200,255,.05)] ${isRtl ? "-rotate-90" : "rotate-90"
                    }`}
                style={{
                    borderColor: `rgba(var(--border-color-rgb), 0.4)`,
                    clipPath: "inset(65% -20% -20% -20%)",
                }}
            >
                {orbitProducts.map((item, index) => {
                    const startAngle = isRtl ? 145 : 35;
                    const endAngle = isRtl ? 35 : 145;

                    const angle =
                        startAngle +
                        (index * (endAngle - startAngle)) /
                        (orbitProducts.length - 1);

                    const rad = (angle * Math.PI) / 180;

                    const gap =
                        index === 0
                            ? -15
                            : index === 1
                                ? -10
                                : index === 2
                                    ? 1
                                    : index === 3
                                        ? 1
                                        : index === 4
                                            ? -10
                                            : index === 5
                                                ? -15
                                                : 0;

                    const radiusX = 240 + gap;
                    const radiusY = 320 + gap;

                    const x = +(Math.cos(rad) * radiusX).toFixed(3);
                    const y = +(Math.sin(rad) * radiusY).toFixed(3);

                    const rotate = +(
                        Math.atan2(
                            Math.cos(rad) * radiusY,
                            -Math.sin(rad) * radiusX
                        ) *
                        (180 / Math.PI) +
                        90
                    ).toFixed(3);

                    const isActive = activeProduct.id === item.id;

                    return (
                        <div
                            key={item.id}
                            onClick={() => handleCardClick(item)}
                            className={`group absolute flex h-18 w-14 cursor-pointer items-center justify-center rounded-[10px] backdrop-blur-xl transition-all duration-500 hover:z-10 ${isActive
                                ? "border-2 shadow-[0_0_40px_rgba(0,200,255,.25)]"
                                : "hover:border-[rgba(var(--border-color-rgb),0.3)]"
                                }`}
                            style={{
                                backgroundColor: isActive
                                    ? "var(--bg-tertiary)"
                                    : `${item.color}25`,
                                borderColor: isActive
                                    ? activeProduct.color
                                    : undefined,
                                left: `calc(50% + ${x}px)`,
                                top: `calc(50% + ${y}px)`,
                                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                            }}
                        >
                            <div className="relative h-15 w-10">
                                <Image
                                    src={item.image}
                                    alt={t(item.title)}
                                    fill
                                    sizes="40px"
                                    loading="eager"
                                    className="object-contain transition-transform duration-300"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}