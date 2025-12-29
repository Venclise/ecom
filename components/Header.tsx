
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
import { Menu } from 'lucide-react'
import { links } from '@/constants'

export default function Header() {
  return (
    
    <div className='p-5 flex items-center fixed top-0 left-0 w-full justify-between  z-[99]  backdrop-filter backdrop-blur-lg bg-opacity-100' >
      <div className='flex items-center justify-center gap-3  '>
     <Sheet >
  <SheetTrigger className='cursor-pointer'>
      <Menu className='w-8 h-8'/>
  </SheetTrigger>
  <SheetContent side='left' className='z-[100]'>
    <SheetHeader>
      <SheetTitle >
        <SheetClose asChild>

           <Link href="/">
        <span className='font-banger tracking-wider text-4xl text-green-700'>

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
                       <SheetClose asChild>
                   <Link href={link} key={id} className='w-full text-gray-700 hover:bg-green-100 px-2 py-1 rounded-sm hover:text-green-700 transition-all' >
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
        <span className='font-banger text-4xl text-green-700 tracking-wider'>

        Chewzy 
        </span>
        </Link>
    </div>

<Cart />

    </div>
  )
}
