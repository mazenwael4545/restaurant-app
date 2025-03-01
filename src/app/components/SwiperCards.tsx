"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const SwiperCards = ({ items }: { items: { src: string }[] }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>();

  return (
    <div>
      <Swiper
        onSwiper={(swiper: any) => setSwiper(swiper)}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <Image src={item.src} alt={"slide"} width={1500} height={1500} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center mt-5 justify-center gap-2">
        {items.map((item, i) => (
          <div
            onClick={() => swiper?.slideTo(i)}
            className={`w-3 h-3 rounded-full bg-white hover:bg-black/20 duration-150 cursor-pointer`}
            key={item.src}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SwiperCards;
