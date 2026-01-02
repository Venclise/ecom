
import ProductCard from "@/components/ProductCard";

export default async function ProductsGrid({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  const query = new URLSearchParams();
  if (category) query.set("category", category);
  if (search) query.set("search", search);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const res = await fetch(
    `${baseUrl}/api/products`,
    {
      cache: "no-store",
    }
  );

 

  if (!res.ok) {
    return (
      <div className="w-full py-20 text-center">
        <p>An error occurred. Please try again.</p>
      </div>
    );
  }

  const data = await res.json();


return (
    <div className="px-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1.5 lg:gap-3 mt-12">
      {data.map((item: any) => (
        <ProductCard key={item._id} item={item} />
      ))}
    </div>
  );
}
