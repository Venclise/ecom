
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div className='h-max w-full p-10 flex items-center justify-center  flex-col text-center mt-12' >
        <h1 className='font-banger text-7xl tracking-widest  '>
              <span className='font-semibold text-green-700'>Let's</span> <br />
              <span className='font-semibold text-red-700 text-[14rem]'>Eat</span> <br/>
             
        </h1>

        <div className='h-[30rem] w-[30rem] relative '>
            <Image src="/burg2.png" alt="Burger" fill className="w-full h-full object-contain" />
        </div>
        <Link href="/products">

        <Button className='cursor-pointer rounded-full hover:gap-5  hover:bg-green-700 bg-green-700 text-white font-banger tracking-widest  w-max h-[2.5rem]'>
             View Menu  <ChevronRight />
        </Button>
        </Link>
    </div>
  )
}
