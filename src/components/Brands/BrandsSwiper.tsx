"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CategoryCard from "../DesignCategories/CategoryCard";
import { Brand } from "@/utils/dtos";
import BrandCard from "./BrandCard";

interface BrandsSwiperProps {
    data: Brand[];
}

export default function BrandsSwiper({
    data,
}: BrandsSwiperProps) {
    return (
        <Swiper
            spaceBetween={16}
            slidesPerView="auto"
        >
            {data.map((item) => (
                <SwiperSlide
                    key={item.id}
                    className="
                        !h-[170px]
                        sm:!h-[200px]
                        lg:!h-[220px]

                        !w-[40%]
                        sm:!w-[30%]
                        md:!w-[25%]
                        lg:!w-[23%]
                        xl:!w-[31%]
                    "
                >
                    <BrandCard
                        item={item}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}