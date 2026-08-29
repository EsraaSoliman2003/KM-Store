"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProductCard from "../ProductCard/ProductCard";
import { Product } from "@/utils/dtos";

interface ProductsSwiperProps {
    data: Product[];
}

export default function ProductsSwiper({
    data,
}: ProductsSwiperProps) {
    return (
        <Swiper
            spaceBetween={16}
            slidesPerView="auto"
        >
            {data.map((product) => (
                <SwiperSlide
                    key={product.id}
                    className="
                        !h-auto

                        !w-[47%]
                        sm:!w-[31%]
                        md:!w-[25%]
                        lg:!w-[23%]
                        xl:!w-[24%]
                    "
                >
                    <ProductCard product={product} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}