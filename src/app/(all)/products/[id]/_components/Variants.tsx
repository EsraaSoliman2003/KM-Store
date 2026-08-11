import React, { useState } from 'react'

type Props = {
    product: any;
}

export default function Variants({ product }: Props) {
    const [selectedColor, setSelectedColor] = useState("Deep Purple");

    return (
        <>
            {/* Color */}
            <div className="mt-6">
                <div className="text-[15px] text-[#999]">
                    Color:{" "}
                    <span className="font-medium text-white">
                        {selectedColor}
                    </span>
                </div>

                <div className="mt-3 flex items-center gap-3">
                    {product.colors.map((color: { name: string, value: string }) => (
                        <button
                            key={color.name}
                            type="button"
                            title={color.name}
                            aria-label={`Select ${color.name}`}
                            onClick={() =>
                                setSelectedColor(color.name)
                            }
                            className={`h-[30px] w-[30px] rounded-full transition-all duration-200 ${selectedColor === color.name
                                ? "ring-2 ring-[#7438df] ring-offset-2 ring-offset-[#111]"
                                : "hover:scale-110"
                                }`}
                            style={{
                                backgroundColor: color.value,
                            }}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}