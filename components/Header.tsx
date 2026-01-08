
import Link from 'next/link'
import React from 'react'
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
import { TextAlignJustify } from 'lucide-react'
import { links } from '@/constants'


export default function Header() {
  
  return (
    
    <div className='p-3 flex items-center fixed top-0 left-0 w-full justify-between  z-[99]  backdrop-filter backdrop-blur-xl bg-opacity-100' >
      <div className='flex items-center justify-center gap-3  '>
     <Sheet >
  <SheetTrigger className='cursor-pointer'>
    <TextAlignJustify className='w-7'/>
     
  </SheetTrigger>
  <SheetContent side='left' className='z-[100]'>
    <SheetHeader>
      <SheetTitle >
        <SheetClose asChild>

           <Link href="/">
        <span className='text-4xl text-green-700'>

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
                   <Link href={link}  className='w-full text-black   hover:bg-green-100 px-2 py-1 rounded-sm hover:text-green-700 transition-all' >
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
        <span className=' text-2xl text-green-600 font-bold '>

        Chewzy 
        </span>
        </Link>
    </div>

<Cart />

    </div>
  )
}
