"use client"

import Image from 'next/image'
import { Button } from '../ui/button'
import { useCartStore } from "@/components/cart/CartHook";
import { toast } from 'sonner';
import Counter from '../cart/Counter';
import { Badge } from "@/components/ui/badge"

type Product = {
  _id: any,
  title: string,
  description: string,
  price: number,
  image: string , 
  category: string,
}
export default function FullProduct({ product }: { product: Product }) {
      const addToCart = useCartStore(state => state.addToCart)
    
    return (
  <div className="w-full mt-12 h-max lg:h-screen  flex items-center justify-around  flex-col lg:flex-row ">
        
    <div className="flex-1 ">

     {product.image && (
         <div className="w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] relative bg-gray-100">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              />
          </div>
        )}
        </div>
<div className="flex items-center gap-4 flex-col flex-1 mt-8">
    <div className='relative'>

<Badge variant="default" className='capitalize bg-green-700'>{product.category}</Badge>
        <h2 className="text-6xl font-banger tracking-widest">
          {product.title}
        </h2>
    </div>

        <p className="font-banger text-2xl">
          ${product.price}
        </p>

        <p className="text-gray-600 text-sm tracking-tight text-center">
          {product.description}
        </p>

        <Counter
  id={product._id}
  title={product.title}
  price={product.price}
  img={product.image}
/>  

        <div className="flex lg:flex-col gap-6 mt-6 w-[70%] flex-row">
          <Button className="bg-green-700 hover:bg-green-600 px-9 py-5  rounded-sm font-banger tracking-wider">
            Buy now
          </Button>

          <Button
            variant="secondary"
            className="px-9 py-5  font-banger rounded-sm tracking-wider"
                onClick={() => {addToCart({
                               id: product._id,
                               title: product.title,
                               price: product.price,
                               img: product.image
                        }), toast.success("Successfully added to cart") }}
          >
            Add to cart
          </Button>
</div>

        </div> 
       
    </div>
  )
}
