import { links } from '@/constants'
import { Globe, Instagram, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const Year = new Date().getFullYear()
  return (
    <div className='w-full flex flex-col p-10 bg-gray-50 border-t '>

<div className='flex  lg:flex-row flex-col gap-8 w-full justify-between'>

<div className='flex flex-col gap-3 w-max'>

        <Link href="/">
           <span className=' text-2xl text-green-600 font-banger tracking-widest '>


   Chewzy
        </span>
        </Link>

        <p className='text-xs font-semibold text-gray-700'>
          Copyright  {Year} All Right's Reserved
        </p>
</div>
<div className='flex flex-col lg:items-end lg:justify-end w-max gap-2'>
  <div className='flex items-center gap-2'>
   <Phone className='w-4 h-4'/>
  <a href="tel:+92300123123" className='underline text-sm'>+92300123123</a>
  </div>
   <div className='flex items-center gap-4'>
   <MapPin className='w-4 h-4'/>
      <span className='text-sm'>
          Shop no 1 New Street My city
      </span>
  </div>
</div>
</div>
     
<p className='text-xs md:text-sm   justify-center w-full gap-2 flex flex-col mt-12 items-center '>
Made with ❤️ by 
{" "}

Zunnurain

<strong>  
 <Link className='flex items-center gap-1 underline' href="https://zunnurain.vercel.app/">
<Globe className='w-3 h-3'/> Visit my site
  </Link>
</strong >
or 
<strong  >

<Link className="flex underline items-center gap-2" href="https://www.instagram.com/zunnurain_za/">
 <Instagram className='w-3 h-3 '/>
 Visit my Instagram
 </Link>
</strong>
</p> 
</div>
  )
}
