    import Inputs from '@/components/dashboard/Inputs'
import Products from '@/components/dashboard/Products'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

type Item = {
  _id: string
  title: string
  description: string
  price: number
  image: string
  category: string
}
    export default async function  page() {

       const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/products`,
    { cache: "no-store" }
  )

  if (!res.ok) return null

  const data: Item[] = await res.json()

    return (
        <div className="h-max w-full flex flex-col mt-24 p-5 justify-center items-center md:items-start">
            <h1 className='font-semibold text-black text-3xl'>
            Dashboard 
        </h1> 
        <div className='w-max flex items-center    '>

<Dialog >
  <DialogTrigger className='m-5 h-[10rem] bg-gray-100 hover:bg-gray-50 font-bold text-7xl w-[10rem] border-0 '>+</DialogTrigger>
  <DialogContent className='w-[100%] md:w-[50%] z-[100] py-2 '>
    <DialogHeader >
      <DialogTitle className='text-left'>Add a product</DialogTitle>
    </DialogHeader>
      <div className='w-full'>
       
      <Inputs />
    
      </div>
  </DialogContent>
</Dialog> 

<Link href="/dashboard/orders" className=' h-[10rem] w-[10rem]'>
<Button className='w-full h-full flex items-center cursor-pointer hover:underline'>View orders <ChevronRight /></Button>
</Link>
        </div>

<Products data={data}/>


        </div>
    )
    }
