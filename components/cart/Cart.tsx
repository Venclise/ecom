"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, Trash } from "lucide-react";
import Image from "next/image";
import Counter from "./Counter";
import { Button } from "../ui/button";
import { useCartStore } from "./CartHook";





export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeItem = useCartStore((state) => state.removeFromCart)

   const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )
  return (
    <div>
      <Sheet >
        <SheetTrigger className="bg-transparent hover:bg-gray-100 p-2 rounded-lg text-sm cursor-pointer ">
          <ShoppingCart className="w-5 h-5" />
        </SheetTrigger>
        <SheetContent className="z-[100] overflow-y-scroll p-2">
          <SheetHeader>
            <SheetTitle className="font-banger text-center text-4xl tracking-wider ">
              Cart
            </SheetTitle>

            {
              cart.length < 1 &&
            <div className="h-screen w-full flex items-center justify-center">
              <p className="font-normal text-sm text-neutral-700 ">Cart is empty..</p>
              </div>
            }
              
              {cart.length&&cart?.map(({ title, img, id, price,qty }) => {
                return (
                <div className="mt-12 relative p-2" key={id}>
                  <Button
                  onClick={() => removeItem(id)}
                    variant="ghost"
                    size="icon-sm"
                    className="absolute cursor-pointer  right-0 top-0 h-1 w-1 p-1 text-red-500 hover:text-red-500"
                  >
                    <Trash />
                  </Button>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <div className="p-3 bg-gray-100 rounded-xl">
                        <Image src={img} alt={title} height="60" width="60" />
                      </div>
                      <p className="font-banger tracking-wider text-ellipsis ">{title}</p>
                    </div>
                    <div className="flex items-end justify-end p-1 gap-1 flex-col">
                    
                      <span className="font-semibold text-sm mr-3 ">
                        ${price * qty}
                      </span>
                 
  <Counter
    key={id}
    id={id}
    title={title}
    price={price}
    img={img}
  />


                    </div>
                  </div>
                </div>
              );
            })}
           
            </SheetHeader>
{cart?.length && (
  <>
    <span className="text-right">Total:${total}</span>

<Button>
      Checkout
</Button>
  </>
)}
        </SheetContent>
      </Sheet>
    </div>
  );
}
