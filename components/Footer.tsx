import { links } from '@/constants'
import { Globe, Instagram } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const Year = new Date().getFullYear()
  return (
    <div className='w-full flex flex-col p-10 bg-gray-50 '>

<div className='flex flex-col gap-3'>

        <Link href="/">
        <span className='font-banger text-4xl text-green-700'>

   Chewzy
        </span>
        </Link>

        <p className='text-xs font-semibold text-gray-700'>
          Copyright {Year} All Right's Reserved
        </p>
</div>
<div className='flex flex-col items-center justify-center gap-2'>

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
