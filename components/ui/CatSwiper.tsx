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
    <div className="w-full flex flex-col gap-6 overflow-hidden p-2 md:p-5 lg:p-10">

<h2 className="font-banger text-xl tracking-wider flex flex-col text-green-700">

      Explore 
      <span  className="text-red-700 m-2 text-6xl">

      Categories
      </span>
</h2>

      
      <div className="w-full">
        <Swiper
          modules={[A11y]}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          
        >
          {AllCategories.map((item) => (
            <SwiperSlide
              key={item.id}
              className={`flex flex-col justify-center items-center p-5 h-[50vh] cursor-pointer ${item.bg} w-max rounded-sm`}
              onClick={() => router.push(item.link)}
          
              >
<div className="flex items-center justify-center w-full h-full flex-col">


          
              <div className="w-25 h-25 md:w-40 md:h-40 relative overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="auto"
                  
                  className="object-contain"
                />
              </div>

              <h2 className="font-banger text-center text-4xl tracking-wider  text-white">
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
            h-15 w-15 rounded-full
            border border-neutral-200
            bg-neutral-100
            flex items-center justify-center
            hover:bg-neutral-200
            transition-all
          "
        >
          <ChevronLeft size={25} className="text-neutral-800"/>
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="
            h-15 w-15  rounded-full
            border border-neutral-200
            bg-neutral-100
            flex items-center justify-center
            hover:bg-neutral-200
            transition-all
          "
        >
          <ChevronRight size={25} className="text-neutral-800" />
        </button>
      </div>

    </div>
  );
}

export default CatSwiper;
