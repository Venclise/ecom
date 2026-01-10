"use client"
import Link from 'next/link'
import Cart from './cart/Cart'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { links } from '@/constants'
import { usePathname } from 'next/navigation'


export default function Header() {
  const path = usePathname()


  
  
  return (
    
    <div className="p-3 flex items-center fixed top-0 left-0 w-full justify-between  z-[99]   backdrop-blur-2xl " >
      <div className='flex items-center justify-center gap-4  '>
     <Sheet >
  <SheetTrigger className='cursor-pointer w-[2.5rem] h-[2.5rem] flex flex-col items-center justify-center gap-1 hover:bg-gray-100 rounded-md transition-all py-2 px-1'>
    <span className='w-[70%] h-[2px] bg-black'></span>
    <span className='w-[70%] h-[2px] bg-black'></span>

     
  </SheetTrigger>
  <SheetContent side='left' className='z-[100]'>
    <SheetHeader>
      <SheetTitle >
        <SheetClose asChild>

           <Link href="/">
              <span className=' text-2xl text-green-600 font-banger tracking-widest '>


   Chewzy
        </span>
        </Link>
        </SheetClose>
      </SheetTitle>
      <div className='h-screen flex items-center  '>

      <SheetDescription className='flex flex-col items-start justify-start gap-4 p-5 w-full'>
           {
              links.map(({id,title,link}) => {
             
                return (
                       <SheetClose asChild key={id}>
                   <Link href={link}  className={`w-full text-black   hover:bg-green-100 px-2 py-1 rounded-sm hover:text-green-700 transition-all ${   path === link  ? "bg-green-700 hover:bg-green-700 hover:text-white text-white" : "bg-none"}`} >
                    <span className='text-2xl font-semibold  capitalize '>
                        {title}.
                    </span>
                    </Link>
                       </SheetClose>
                 )
                })
           }
      </SheetDescription>
                </div>
    </SheetHeader>
  </SheetContent>
</Sheet>
        <Link href="/">
        <span className=' text-2xl text-green-600 font-banger tracking-widest '>

        Chewzy 
        </span>
        </Link>
    </div>

<Cart />

    </div>
  )
}
