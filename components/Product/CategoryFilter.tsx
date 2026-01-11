"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"

import { categories } from "@/constants"
import { Filter } from "lucide-react"

export default function CategoryFilter() {
  const router = useRouter()
   const searchParams = useSearchParams()
   const path = usePathname()

   const activeCategory = searchParams.get("category") ?? "all"

   const handleChange = (value: string) => {
     if (value === "all") {
       router.push("/products")
     } else {
      router.push(`/products?category=${value}`)
     }
   }

  return (

    <div className="mt-8 w-full h-max p-5 flex items-center justify-center gap-4 md:gap-6 border-t border-b">
          {categories.map((cat) => (
         <p key={cat} className={`${activeCategory === cat ? "text-blue-500" : "text-gray-600" } text-sm cursor-pointer hover:text-blue-500 transition-all`} onClick={() => handleChange(cat)}>
             {cat.toUpperCase()}
           </p>
         ))}
    </div>
  )
}
