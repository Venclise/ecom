import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="p-10 grid grid-cols-3  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4 gap-1.5 lg:gap-3 mt-12">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          
          className="rounded-xl  p-3 space-y-3 h-[25rem] w-[15rem] lg:w-[17rem] flex flex-col items-center justify-center"
        >
          {/* Image */}
          <Skeleton className="h-[80%] w-full rounded-lg" />

        
           <Skeleton className="h-4 w-3/4" /> 
           <Skeleton className="h-4 w-1/3" />
{/* 
     

   
          <Skeleton className="h-9 w-full rounded-md" /> */}
        </div>
      ))}
    </div>
  );
}
