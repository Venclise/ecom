import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Hero() {
  return (
    <div className='h-max w-full  p-10   mt-16    flex items-center justify-center flex-col  md:flex-row lg:gap-8 '>
         <Link href="/products" className="transition-all text-white   underline  flex flex-col   h-[60vh] lg:h-screen w-full md:w-[50%] ">
      <div className="bg-[#fe3a3a] h-[70vh] lg:h-full w-full p-2  ">
          <div className="w-full h-[90%] relative">
               <Image src="/deals.png" alt="Burger" fill/>
         </div> 
         <div className="w-full flex items-end justify-end h-max">

         <span className="text-white font-semibold flex items-center mt-4">
            View Deals 
             <ChevronRight className="w-5 h-5 text-white"/>
         </span>
         </div>
      </div>
         </Link>

         <Link href="/products/695f4199917d69ed4140f96e" className="transition-all  underline    flex flex-col  border   h-[60vh] lg:h-screen  w-full md:w-[50%] ">

       <div className="bg-[#fefdfd]  h-[60vh] lg:h-full w-full p-2">

          <div className="w-full h-[90%] relative">
               <Image src="/buy2pizza.png" alt="Burger" fill/>
         </div> 
        
      <div className="w-full flex items-end justify-end h-max">

         <span className=" font-semibold flex items-center mt-4">
            View Deal
             <ChevronRight className="w-5 h-5 "/>
         </span>
         </div>
        
      </div>
      </Link>
         <Link href="/products" className="transition-all   underline text-white   flex flex-col    h-[60vh] lg:h-screen w w-full md:w-[50%] ">

       <div className="bg-[#F9D02C]  h-full  w-full md:w-full p-2">

          <div className="w-full h-[90%] relative">
               <Image src="/exp.png" alt="Burger" fill/>
         </div> 
     
         <div className="w-full flex items-end justify-end h-max">

         <span className=" font-semibold flex items-center mt-4 text-white">
            View Menu 
             <ChevronRight className="w-5 h-5 "/>
         </span>
         </div>
      </div>
         </Link>
    </div>
  )
}
