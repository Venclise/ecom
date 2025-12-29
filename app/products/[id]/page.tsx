
import FullProduct from "@/components/Product/FullProduct";

type Product = {
  _id: string
  title: string
  description: string
  price: number
  image: string
  category: string,
}

export default async function Page({
  params,
}: {
  params: { id: string }
}) {
  const { id } = await params
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/products/${id}`,
    {
      cache: "no-store",
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch product")
  }

  
  
   const product:Product =  await res.json()

  return (
    <div className=" p-10 lg:px-10 lg:py-3">
    <FullProduct product={product}/>
    </div>
  )
}
