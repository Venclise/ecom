"use client"
import Image from "next/image"
import ProductActions from "./ProductAction"
import { useState } from "react"
import { Button } from "../ui/button"

type Item = {
  _id: string
  title: string
  description: string
  price: number
  image: string
  category: string
}
export default  function Products({data}:{data:Item[]}) {
  const [visibleCount,setVisibleCount] = useState(7)


  
  return (
    <div className="w-full h-max flex items-center  flex-col justify-center ">
    <div className="flex justify-center flex-wrap md:gap-2 md:p-2 gap-5 ">
    
       {data.slice(0,visibleCount).map((product) => (
        <div
          key={product._id}
          className="w-[20rem] lg:w-[15rem] h-[25rem] bg-gray-50 p-2 relative rounded flex items-center justify-center flex-col"
        >
          <div className="absolute right-0 top-0 z-[10]">

          <ProductActions id={product._id} />
          </div>
<div className="relative h-[80%] w-full ">

          {product.image && (
            <Image
            src={product.image}
            alt={product.title}
           fill 

            className="object-contain"
            />
          )}
          </div>
<div className="flex items-center flex-col gap-4">

          <h2 className="font-bold text-2xl">{product.title}</h2>
          <p className="text-sm text-neutral-700 line-clamp-1">{product.description}</p>
          <span className="font-bold text-xl">${product.price}</span>
</div>
        </div>
      ))} 
    </div>
    {visibleCount < data.length && (
      <Button className="mt-6 text-blue-500 cursor-pointer  underline hover:text-blue-500 " variant="ghost"  onClick={() => setVisibleCount((prev) => prev + 7)}>Load 7+ more</Button>
    )}
    </div>

  )
}
