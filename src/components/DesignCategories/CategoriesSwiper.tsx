"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CategoryCard from "./CategoryCard";
import { Category } from "@/utils/dtos";

interface CategoriesSwiperProps {
  data: Category[];
}

export default function CategoriesSwiper({
  data,
}: CategoriesSwiperProps) {
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
          <CategoryCard
            item={item}
            className="h-full w-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}