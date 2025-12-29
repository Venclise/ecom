"use client";

import { Button } from "../ui/button";
import { useCartStore } from "../cart/CartHook";

type CounterProps = {
  id: number;
  title?: string;
  price?: number;
  img?: string;
};

export default function Counter({
  id,
  title = "",
  price = 0,
  img = "",
}: CounterProps) {
  const item = useCartStore((state) =>
    state.cart.find((i) => i.id === id)
  );

  const addToCart = useCartStore((state) => state.addToCart);
  const updateQty = useCartStore((state) => state.updateQty);

  const qty = item?.qty ?? 0;

  const increment = () => {
    if (item) {
      updateQty(id, item.qty + 1);
    } else {
      // ✅ NO qty here
      addToCart({
        id,
        title,
        price,
        img,
      });
    }
  };

  const decrement = () => {
    if (!item) return;
    updateQty(id, Math.max(1, item.qty - 1));
  };

  return (
    <div className="flex items-center border border-gray-200 rounded-md">
      <Button
        variant="outline"
        className="rounded-none border-gray-100 text-xl"
        onClick={increment}
      >
        +
      </Button>

      <span className="font-mono w-[2.5rem] text-center">
        {qty}
      </span>

      <Button
        variant="outline"
        className="rounded-none border-gray-100 text-xl"
        onClick={decrement}
        disabled={qty <= 1}
      >
        -
      </Button>
    </div>
  );
}
