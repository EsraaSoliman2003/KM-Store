import { useTranslations } from "next-intl";

export function SpecificationsContent() {
    const t = useTranslations();

    const specifications = [
        [t("specDriver"), t("specDriverValue")],
        [t("specFrequencyResponse"), t("specFrequencyResponseValue")],
        [t("specNoiseCancellation"), t("specNoiseCancellationValue")],
        [t("specBluetooth"), t("specBluetoothValue")],
        [t("specCodecs"), t("specCodecsValue")],
        [t("specBatteryLife"), t("specBatteryLifeValue")],
        [t("specCharging"), t("specChargingValue")],
        [t("specWeight"), t("specWeightValue")],
    ];

    return (
        <div className="">
            <h2 className="text-[24px] font-semibold text-[#7c42dd]">
                {t("technicalSpecifications")}
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