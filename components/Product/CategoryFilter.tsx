"use client"

import { useRouter, useSearchParams } from "next/navigation"
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

  const activeCategory = searchParams.get("category") ?? "all"

  const handleChange = (value: string) => {
    if (value === "all") {
      router.push("/products")
    } else {
      router.push(`/products?category=${value}`)
    }
  }

  return (
    <Select value={activeCategory} onValueChange={handleChange}>
      <SelectTrigger className="w-max px-5 " >
        <Filter />
        <SelectValue placeholder="ALL" />
      </SelectTrigger>

      <SelectContent>
        {categories.map((cat) => (
          <SelectItem key={cat} value={cat}>
            {cat.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
