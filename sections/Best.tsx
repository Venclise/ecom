import BestSwiper from '@/components/BestSwiper'
import { BestSellers, offers } from '@/constants'
import Image from 'next/image'
import React from 'react'

export default function Best() {
  return (
    <div className='w-full h-max md:h-screen p-7 flex-col md:flex-row flex items-center justify-center mt-12 md:mt-24 '>
      <h2 className='font-banger text-6xl tracking-wider text-green-700 leading-20   '>
          Our Best Sellers
      </h2>
      
     <BestSwiper />
    </div>
  )
}
