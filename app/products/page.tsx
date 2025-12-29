import ProductCard from "@/components/ProductCard"
import CategoryFilter from "@/components/Product/CategoryFilter"
import { headers } from "next/headers"
import SearchInput from "@/components/Product/SearchInput"

export default async function Page({
  searchParams,
}: {
  searchParams: { category?: string ,search?:string}
}) {
  const {category,search} = await searchParams
  const query = new URLSearchParams()

  if (category) query.set("category",category)
    if(search) query.set("search",search)


  const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

const res = await fetch(
  `${baseUrl}/api/products?${query.toString()}`,
  { cache: "no-store" }
)

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }







  const data = await res.json()

  return (
    <div className="w-full h-max mt-24 flex items-center justify-center flex-col md:p-5  ">
      <div className="flex items-center gap-2 w-full p-3 lg:w-[80%] mx-auto ">

      <SearchInput />
      <CategoryFilter />
      </div>
    <div className=" px-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-2 gap-3 mt-12 ">
      {data.map((item: any) => (
        <ProductCard key={item._id} item={item} />
      ))}
    </div>
      </div>
  )
}
