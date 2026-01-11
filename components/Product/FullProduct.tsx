"use client"

import Image from 'next/image'
import { Button } from '../ui/button'
import { useCartStore } from "@/components/cart/CartHook";
import { toast } from 'sonner';
import Counter from '../cart/Counter';
import { Badge } from "@/components/ui/badge"
import { useRouter } from 'next/navigation';
import { clear } from 'console';

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
    const clearCart = useCartStore((s) => s.clearCart);
    const router = useRouter()

    const handleBuyNow = () => {
      clearCart(  )
         addToCart({
                               id: product._id,
                               title: product.title,
                               price: product.price,
                               img: product.image
                        })

    

   
    router.push("/checkout");
    }
    return (
  <div className="w-full mt-12 h-max lg:h-screen  flex items-center justify-around  flex-col lg:flex-row ">
        
    <div className="flex-1 ">

     {product.image && (
         <div className="w-[20rem] h-[20rem] lg:w-[35rem] lg:h-[25rem] relative bg-gray-100">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
              />
          </div>
        )}
        </div>
<div className="flex items-start justify-start gap-4 flex-col flex-1 mt-8">
    <div className='relative'>

<Badge variant="default" className='capitalize bg-green-700'>{product.category}</Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl ">
          {product.title}
        </h2>
    </div>

        <p className="font-mono text-2xl">
          ${product.price}
        </p>

        <p className="text-gray-600 text-sm tracking-tight ">
          {product.description}
        </p>

        <Counter
  id={product._id}
  title={product.title}
  price={product.price}
  img={product.image}
/>  

        <div className="flex  flex-col gap-6 mt-6 w-full ">
        
          <Button
            variant="default" 
            className="px-9 py-5  text-white hover:bg-green-700 rounded-sm  bg-green-700"
                onClick={() => {addToCart({
                               id: product._id,
                               title: product.title,
                               price: product.price,
                               img: product.image
                        }), toast.success("Successfully added to cart") }}
          >
            Add to cart
          </Button>
     
          <Button
            variant="outline" 
            className="px-9 py-5  "
                onClick={handleBuyNow}
          >
          Buy it now
          </Button>

</div>

        </div> 
       
    </div>
  )
}
