"use client";

import { useAppSelector } from "@/rtk/hooks";
import Image from "next/image";

type Props = {
    index: number;
};

export default function HomeBanner({ index }: Props) {
    const { sections } = useAppSelector((s) => s.home);
    if (!sections?.banners.length) return null;

    const banner = sections?.banners[index];

    if (!banner) return null;

    return (
        <section className="container">
            <div className="relative overflow-hidden rounded-2xl h-50 md:h-90 lg:h-120">
                <Image
                    src={banner.image}
                    alt={String(banner.id) || "Banner"}
                    fill
                    className="object-cover"
                    priority={index === 0}
                />
            </div>
        </section>
    );
}