import { Button } from '@/components/ui/button'
import { ChevronRight, MapPin } from 'lucide-react'
import  Link from 'next/link'

export default function Find() {
  return (
    <div className="w-full h-[50vh] mt-12 flex-col flex items-center justify-center p-10 gap-8" >
<div className='flex flex-col gap-8 items-center justify-center'>

<h1 className='font-semibold text-6xl flex items-center justify-center gap-4  text-center text-red-700'>Find us on  
     <span className=" text-green-700 font-bold tracking-tighter">Maps</span>
     <MapPin className='text-black h-15 w-10'/>  
</h1>

<Link target="_blank" href="https://www.google.com/maps/place/Slough,+UK/@51.5069913,-0.6575064,12z/data=!3m1!4b1!4m15!1m8!3m7!1s0x47d8a00baf21de75:0x52963a5addd52a99!2sLondon,+UK!3b1!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw!3m5!1s0x487663427e9e92a9:0xb16ca352b90b0206!8m2!3d51.5105384!4d-0.5950406!16zL20vMGM5Y3c?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D">
<Button className=' bg-green-700 rounded-full   hover:bg-green-700 cursor-pointer hover:gap-4' >
       Find Us  <ChevronRight className='w-5 h-5 ml-2   '/>
</Button>
</Link>
</div>
       
    </div>
  )
}
