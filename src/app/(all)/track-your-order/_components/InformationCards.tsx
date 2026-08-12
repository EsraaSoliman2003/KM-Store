import {
    CircleUserRound,
    MapPin,
    Package,
    Truck,
    CalendarDays,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { wallpaper1, wallpaper2 } from "@/assets";
import Image from "next/image";

export default function InformationCards() {
    const t = useTranslations();

    return (
        <section className="mt-4 grid gap-4 md:grid-cols-2">
            {/* Delivery */}
            <div className="relative min-h-[230px] overflow-hidden rounded-[12px] border border-[#333] bg-[#191919]">
                <Image
                    src={wallpaper1}
                    alt=""
                    fill
                    className="object-cover"
                />

                <div className="relative z-10 flex min-h-[230px] items-center p-4 sm:p-5">
                    <div className="w-full">
                        <div className="flex items-center gap-3">
                            <div className="flex p-2 shrink-0 items-center justify-center rounded-full bg-[#683AD0]">
                                <MapPin size={24} />
                            </div>

                            <h3 className="text-sm font-semibold sm:text-lg">
                                {t("deliveryInformation")}
                            </h3>
                        </div>

                        <div className="pl-1 mt-4 space-y-2 text-md text-gray-300">
                            <p className="flex items-center gap-2">
                                <CircleUserRound
                                    size={20}
                                    className="shrink-0 text-gray-400"
                                />
                                Ahmed Hassan
                            </p>

                            <p className="flex items-center gap-2">
                                <MapPin
                                    size={20}
                                    className="shrink-0 text-gray-400"
                                />
                                Cairo, Egypt
                            </p>

                            <p className="flex flex-wrap items-center gap-2">
                                <CalendarDays
                                    size={20}
                                    className="shrink-0 text-gray-400"
                                />
                                {t("expectedDelivery")}:
                                <span className="font-semibold text-white">
                                    Aug 13, 2026
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shipping */}
            <div className="relative min-h-[230px] overflow-hidden rounded-[12px] border border-[#333] bg-[#191919]">
                <Image
                    src={wallpaper2}
                    alt=""
                    fill
                    className="object-cover"
                />

                <div className="relative z-10 flex min-h-[230px] items-center p-4 sm:p-5">
                    <div className="w-full">
                        <div className="flex items-center gap-3">
                            <div className="flex p-2 shrink-0 items-center justify-center rounded-full bg-[#683AD0]">
                                <Package size={24} />
                            </div>

                            <h3 className="text-sm font-semibold sm:text-lg">
                                {t("shippingDetails")}
                            </h3>
                        </div>

                        <div className="pl-1 mt-4 space-y-2 text-md text-gray-300">
                            <p className="flex items-center gap-2">
                                <CircleUserRound
                                    size={20}
                                    className="shrink-0 text-gray-400"
                                />
                                {t("standardDelivery")}
                            </p>

                            <p className="flex items-center gap-2">
                                <Package
                                    size={20}
                                    className="shrink-0 text-gray-400"
                                />
                                {t("trackingId", { id: "TRK-9283874" })}
                            </p>

                            <p className="flex items-center gap-2">
                                <Truck
                                    size={20}
                                    className="shrink-0 text-gray-400"
                                />
                                {t("carrierName", { name: "MK Express" })}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}