"use client";

import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { AllCategories } from "@/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";




function CatSwiper() {
 
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
 const router = useRouter()
  return (
    <div className="w-full flex flex-col gap-4 overflow-hidden p-5 lg:px-20 mt-12 ">
      
      <span  className="text-black  text-4xl md:text-6xl font-semibold flex flex-col gap-2">
        <span className="text-2xl">Explore</span>
      Categories
      </span>


      
      <div className="w-full mx-auto">
        <Swiper
          modules={[A11y]}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          
        >
          {AllCategories.map((item) => (
            <SwiperSlide
              key={item.id}
              className={`flex flex-col justify-center items-center  h-[50vh] cursor-pointer  w-full rounded-sm mx-auto `}
              onClick={() => router.push(item.link)}
          
              >
<div className="flex items-center justify-center w-full h-full flex-col hover:bg-gray-50 p-3 rounded-md ">


          
              <div className="w-25 h-25  relative overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h2 className=" text-center text-sm capitalize text-black font-semibold">
                {item.title}
              </h2>

            
</div>
        
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     
      <div className="flex items-end justify-end gap-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="
            h-10 w-10 rounded-full
            border border-neutral-200
            bg-neutral-100
            flex items-center justify-center
            hover:bg-neutral-200
            transition-all
            lg:hidden
          "
        >
          <ChevronLeft size={20} className="text-neutral-800"/>
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="
            h-10 w-10  rounded-full
            border border-neutral-200
            bg-neutral-100
            flex items-center justify-center
            hover:bg-neutral-200
            transition-all
            lg:hidden
          "
        >
          <ChevronRight size={20} className="text-neutral-800" />
        </button>
      </div>

    </div>
  );
}

export default CatSwiper;
