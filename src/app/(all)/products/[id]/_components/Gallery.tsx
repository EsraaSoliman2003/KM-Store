import React, { useState } from 'react'
type Prop = {
    product: any;
}

export default function Gallery({ product }: Prop) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="min-w-0">
            {/* Main Image */}
            <div className="relative mx-auto aspect-square w-full max-w-[470px] overflow-hidden rounded-[14px] border border-[#333] bg-[#0d0d0d] shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                <img
                    src={product.images[selectedImage]}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
            </div>

            {/* Thumbnails */}
            <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-3">
                {product.images.map((image: string, index: number) => (
                    <button
                        key={image}
                        type="button"
                        onClick={() => setSelectedImage(index)}
                        className={`relative aspect-square min-w-0 overflow-hidden rounded-[9px] border bg-[#111] transition-all duration-200 ${selectedImage === index
                            ? "border-[#7438df] shadow-[0_0_0_1px_#7438df]"
                            : "border-[#333] hover:border-[#666]"
                            }`}
                    >
                        <img
                            src={image}
                            alt={`${product.title} ${index + 1}`}
                            className="h-full w-full object-cover"
                        />

                        {selectedImage === index && (
                            <span className="absolute inset-0 bg-[#7438df]/5" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}
