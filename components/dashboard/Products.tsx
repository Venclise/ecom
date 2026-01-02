import Image from "next/image"
import ProductActions from "./ProductAction"

type Item = {
  _id: string
  title: string
  description: string
  price: number
  image: string
  category: string
}
export default async function Products() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/products`,
    { cache: "no-store" }
  )
  if (!res.ok) {
    console.log("Something went wrong")
    return null
  }
  const data: Item[] = await res.json()

  
  return (
    <div className="flex items-center justify-center flex-wrap md:gap-2 md:p-2 gap-5 ">
    
       {data.map((product) => (
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
  )
}
