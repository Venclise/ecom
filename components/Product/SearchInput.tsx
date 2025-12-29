"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export default function SearchInput() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const category = searchParams.get("category")
  const initialSearch = searchParams.get("search") ?? ""

  const [value, setValue] = useState(initialSearch)

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const params = new URLSearchParams()

    if (value) params.set("search", value)
    if (category) params.set("category", category)

    router.push(`/products?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSearch} className="flex-2 flex items-center border px-3 rounded-sm ">
        <Search className="w-3 h-3 m-3"/>
      <Input
        placeholder="Search products..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-0  ring-0 outline-0 focus:ring-0"
      />
    </form>
  )
}
