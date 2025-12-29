import { Button } from '@/components/ui/button'
import  Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Find() {
  return (
    <div className="w-full h-screen flex-col lg:flex-row flex items-center justify-between p-10 gap-4">
<div className='flex flex-col gap-4 items-center justify-center'>

<h1 className='font-semibold text-5xl font-banger tracking-wider text-gray-800'>Find us on  <br />
     <span className="m-2 font-sans text-green-700 font-bold tracking-tighter">Google Maps</span>
</h1>
<Link target="_blank" href="https://www.google.com/maps/place/Slough,+UK/@51.5069913,-0.6575064,12z/data=!3m1!4b1!4m15!1m8!3m7!1s0x47d8a00baf21de75:0x52963a5addd52a99!2sLondon,+UK!3b1!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw!3m5!1s0x487663427e9e92a9:0xb16ca352b90b0206!8m2!3d51.5105384!4d-0.5950406!16zL20vMGM5Y3c?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D">

<Button className='py-6 bg-green-700 rounded-full font-banger tracking-wider hover:bg-green-700 cursor-pointer'>
       Find us on Google maps
</Button>
</Link>
</div>
        <div  className="w-full lg:w-[50%] h-[20rem] relative">
      <Image src="/maps.avif" className="w-full h-full object-cover" alt="Find us on Google Maps" fill/>
        </div>
    </div>
  )
}
