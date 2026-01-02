import { Suspense } from "react";
import CategoryFilter from "@/components/Product/CategoryFilter";
import SearchInput from "@/components/Product/SearchInput";
import ProductsGrid from "./ProductsGrid";


export default async function Page({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  const { category, search } = await searchParams;

  return (
    <div className="w-full h-max mt-24 flex flex-col items-center md:p-5">
      {/* Filters (instant render) */}
      <div className="flex items-center gap-2 w-full p-5 lg:w-[80%] mx-auto">
        <SearchInput />
        <CategoryFilter />
      </div>

      {/* Products (streamed) */}
      <Suspense fallback={null}>
        <ProductsGrid category={category} search={search} />
      </Suspense>
    </div>
  );
}
