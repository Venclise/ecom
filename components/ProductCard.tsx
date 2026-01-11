import Image from "next/image";
import Link from "next/link";

type Item = {
  _id: string;
  title: string;
  description: string;
  price: number;
  stock?: number;
  image: string;
  category: string;
};

export default function ProductCard({ item }: { item: Item }) {
  return (
    <Link href={`products/${item._id}`}>

       
       <div className=" h-[25rem] lg:h-[30rem] transition-all">
        <div className="h-[80%] w-[100%]   relative bg-gray-50 ">
           <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain w-full h-full"  
          /> 
        </div>
        <div className="w-full flex items-center flex-col gap-2  justify-center bg-white ">
        
          <h1 className=" tracking-wider text-md font-light   uppercase">{item.title}</h1>
          <h2 className="text-sm font-extralight text-gray-700">Rs.{item.price}</h2>
        </div>
      </div>
    </Link>
  );
}
