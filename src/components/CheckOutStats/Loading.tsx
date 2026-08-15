import React from 'react'

export default function Loading() {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="relative mb-5 h-20 w-20">
                {/* Track */}
                <div className="absolute inset-0 rounded-full border-[9px] border-[#303030]" />

                {/* Animated gradient loader */}
                <div className="payment-loader absolute inset-0">
                    <div className="payment-loader-gradient" />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-[22px] font-bold leading-tight text-[#E5E5E5]">
                Processing Payment
            </h2>

            {/* Description */}
            <p className="mt-2 max-w-[300px] text-[16px] leading-6 text-[#A3A3A3]">
                please don’t close window
                <br />
                while we process your payment
            </p>
        </div>
    )
}
