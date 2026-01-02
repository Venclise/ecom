import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="px-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1.5 lg:gap-3 mt-12">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl border p-3 space-y-3"
        >
          {/* Image */}
          <Skeleton className="h-32 w-full rounded-lg" />

          {/* Title */}
          <Skeleton className="h-4 w-3/4" />
{/* 
     
          <Skeleton className="h-4 w-1/3" />

   
          <Skeleton className="h-9 w-full rounded-md" /> */}
        </div>
      ))}
    </div>
  );
}
