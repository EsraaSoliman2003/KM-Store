import React from 'react'
import { orbitProducts } from './data';

type Props = {
    activeProduct: any;
    setActiveProduct: (product: any) => void;
}

export default function Orbits({ activeProduct, setActiveProduct }: Props) {
    const handleCardClick = (item: any) => {
        setActiveProduct(item);
    };

    return (
        <div className="absolute -right-85 min-[1280px]:-right-70 min-[1400px]:-right-95 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
            <div
                className="
                    relative
                    h-[549px]
                    w-[357px]
                    rotate-90
                    rounded-[50%]
                    border-[8px]
                    border-[#D9D9D940]
                    shadow-[inset_0_0_80px_rgba(0,200,255,.05)]
                "
                style={{
                    clipPath: "inset(65% -20% -20% -20%)",
                }}
            >
                {orbitProducts.map((item, index) => {
                    const startAngle = 35;
                    const endAngle = 145;

                    const angle =
                        startAngle +
                        (index * (endAngle - startAngle)) / (orbitProducts.length - 1);

                    const rad = (angle * Math.PI) / 180;

                    const gap = index === 0 ? -15 : index === 1 ? -10 : index === 2 ? 1 : index === 3 ? 1 : index === 4 ? -10 : index === 5 ? -15 : 0

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
                                ? "border-2 border-cyan-400 shadow-[0_0_40px_rgba(0,200,255,.25)]"
                                : "hover:border-white/30"
                                }`}
                            style={{
                                backgroundColor: isActive ? "#171B27" : `${item.color}10`,
                                left: `calc(50% + ${x}px)`,
                                top: `calc(50% + ${y}px)`,
                                transform: `translate(-50%, -50%) rotate(${rotate}deg) scale(${isActive ? 1.15 : 1})`,
                            }}
                        >


                            <img
                                src={item.image}
                                alt={item.title}
                                className="relative h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
                                style={{
                                    transform: `rotate(${-rotate}deg)`,
                                }}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}