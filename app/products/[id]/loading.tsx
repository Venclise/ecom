
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="p-10 h-screen flex items-center justify-between w-full gap-10 ">
      {/* Image */}
      <div className="h-[22rem] w-[50%]">

      <Skeleton className=" h-full w-full rounded-xl" />
      </div>

    
      <div className="flex flex-col w-[50%] gap-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-10 w-1/3 rounded-md" />
      </div>
    </div>
  );
}
