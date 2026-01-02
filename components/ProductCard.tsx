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
      <div className="h-[25rem] w-[15rem] lg:w-[17rem]  flex flex-col justify-between items-center  md:p-3 lg:p-5 ">
        <div className="h-[70%] w-[70%] lg:w-full relative bg-gray-50 ">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain w-full h-full " 
          />
        </div>
        <div className="w-full flex items-center flex-col justify-center bg-white ">
          <h1 className="font-banger text-2xl tracking-wider">{item.title}</h1>
          <h2 className="font-semibold">${item.price}</h2>
        </div>
      </div>
    </Link>
  );
}
