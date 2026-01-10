"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import React, { useState } from "react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

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
    <form onSubmit={handleSearch} className="flex-2  ">
       <InputGroup>
  <InputGroupInput 
     placeholder="Search products..."
        value={value}
        onChange={(e:any) => setValue(e.target.value)}
        
   />
  <InputGroupAddon>
    <Search />
  </InputGroupAddon>
  <InputGroupAddon align="inline-end">
    <InputGroupButton>Search</InputGroupButton>
  </InputGroupAddon>
</InputGroup>
    
    </form>
  )
}
