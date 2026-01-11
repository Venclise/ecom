export const dynamic = "force-dynamic";

import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/Product/CategoryFilter";
import SearchInput from "@/components/Product/SearchInput";

export default async function Page({
  searchParams,
}: {
  searchParams?: { category?: string; search?: string };
}) {
  const query = new URLSearchParams();

 const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

  if (searchParams?.category) {
    query.set("category", searchParams.category);
  }

  if (searchParams?.search) {
    query.set("search", searchParams.search);
  }

const res = await fetch(
  `/api/products?${query.toString()}`,
  { cache: "no-store" }
);

  if (!res.ok) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>Failed to load products.</p>
      </div>
    );
  }



  
  
  const data = await res.json();
  
  
  if (!Array.isArray(data) && data.length === 0) {
    return (
      <div className="mt-20 text-center text-gray-500">
        <p className="text-lg font-medium">It’s empty 😕</p>
        <p className="text-sm mt-1">
          No products match your search or category.
        </p>
      </div>
    );
  }
  return (
    <div className="w-full mt-24 py-5 bg-amber-200" >
     
      <div className="flex gap-2 w-full p-5 lg:w-[80%] mx-auto">
        <SearchInput />
        <CategoryFilter />
      </div> 

     
      
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  xl:grid-cols-5 gap-2 mt-12"> 
        <div className="bg-black w-full h-max">
          {data.map((item: any) => (
            <ProductCard key={item._id} item={item} />
          ))}
          </div>
        </div>
      
    </div>
  );
}
