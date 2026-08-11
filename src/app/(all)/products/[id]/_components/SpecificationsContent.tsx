export function SpecificationsContent() {
    const specifications = [
        ["Driver", "40mm Premium Neodymium"],
        ["Frequency Response", "20Hz – 40kHz"],
        ["Noise Cancellation", "42dB Adaptive ANC"],
        ["Bluetooth", "5.3"],
        ["Codecs", "aptX HD, LDAC, AAC, SBC"],
        ["Battery Life", "Up to 40 hours"],
        ["Charging", "USB-C Fast Charging"],
        ["Weight", "265g"],
    ];

    return (
        <div className="">
            <h2 className="text-[24px] font-semibold text-[#7c42dd]">
                Technical Specifications
            </h2>

            <div className="mt-4 overflow-hidden rounded-[8px] border border-[#333]">
                {specifications.map(([label, value]) => (
                    <div
                        key={label}
                        className="grid grid-cols-2 border-b border-[#333] last:border-0"
                    >
                        <div className="bg-[#202020] px-4 py-3 text-[14px] font-medium text-[#888] sm:px-5 sm:text-[15px]">
                            {label}
                        </div>

                        <div className="px-4 py-3 text-[14px] text-[#ccc] sm:px-5 sm:text-[15px]">
                            {value}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}