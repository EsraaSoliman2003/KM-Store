import { phone } from '@/assets'
import Image from 'next/image'

export default function ProductSummary() {
    return (
        <section className="rounded-[12px] border border-[#333] bg-[#191919]">
            <div className="flex items-center gap-3 p-3 sm:gap-5 sm:p-0">
                {/* Image */}
                <div className="relative h-[90px] w-[75px] shrink-0 overflow-hidden rounded-[10px] sm:h-[200px] sm:w-[200px]">
                    <Image
                        src={phone}
                        alt="iPhone 15 Pro Max"
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Details */}
                <div className="flex min-w-0 flex-1 items-center justify-between gap-3 sm:pl-0! sm:p-5">
                    {/* Product Info */}
                    <div className="min-w-0 flex-1">
                        <h2 className="truncate text-sm font-semibold capitalize sm:text-lg">
                            iPhone 15 pro max
                        </h2>

                        <p className="mt-1 truncate text-xs text-gray-400 sm:mt-1.5 sm:text-sm">
                            Deep purple · 256 GB
                        </p>

                        {/* Mobile Qty + Total */}
                        <div className="mt-1 flex items-center justify-between gap-2 sm:hidden flex-end items-end">
                            <span className="inline-flex h-fit shrink-0 rounded-full border border-[#683AD0]/60 bg-[#683AD0]/10 px-2.5 py-1 text-[10px] font-medium text-[#b99cff]">
                                Qty · 1
                            </span>

                            <div className="shrink-0">
                                <p className="text-[10px] font-medium uppercase tracking-wide text-gray-500">
                                    Total:
                                </p>

                                <p className="mt-0.5 whitespace-nowrap text-sm font-semibold text-white">
                                    1199.00 $
                                </p>
                            </div>
                        </div>

                        {/* Desktop Qty */}
                        <span className="mt-3 hidden h-fit w-fit rounded-full border border-[#683AD0]/60 bg-[#683AD0]/10 px-3 py-1 text-xs font-medium text-[#b99cff] sm:inline-flex">
                            Qty · 1
                        </span>
                    </div>

                    {/* Desktop Total */}
                    <div className="hidden shrink-0 sm:block sm:min-w-[120px]">
                        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                            Total:
                        </p>

                        <p className="mt-1 whitespace-nowrap text-lg font-semibold text-white">
                            1199.00 $
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
