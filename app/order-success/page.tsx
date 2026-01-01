"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function OrderSuccess() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  const [order, setOrder] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orderId) return;

    const fetchOrder = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/orders/${orderId}`);
        const data = await res.json();
        setOrder(data); // ✅ important: store data in state
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
    const interval = setInterval(fetchOrder,5000)
    return () => clearInterval(interval)
  }, [orderId]);

  if (loading) return <p>Loading...</p>;
  if (!order) return <p>Order not found.</p>;

  return (
    <div className="p-10 max-w-xl  flex items-center justify-center flex-col  bg-white shadow rounded-xl mt-24">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Order Placed!</h1>
      <p className="mb-4 flex gap-2 ">Thank you 
        <span className="font-semibold capitalize ">
        {order.customer.name}
        </span>
        ,
         your order has been successfully placed.</p>
      <p className="flex  gap-4">
Order Status:
<span className="font-semibold capitalize"> 

      {order.status}
</span>
      </p>


      <div className="text-left mt-6 border-t pt-4">
        <p><span className="font-semibold">Phone:</span> {order.customer.phone}</p>
        <p><span className="font-semibold">Address:</span> {order.customer.address}</p>
        <p className="font-semibold mt-2">Items:</p>
        {order.items.map((item: any, idx: number) => (
          <div key={idx} className="flex justify-between">
            <span>{item.title} × {item.qty}</span>
            <span>${item.price * item.qty}</span>
          </div>
        ))}
        <div className="flex justify-between font-bold mt-4 border-t pt-2">
          <span>Total:</span>
          <span>${order.total}</span>
        </div>
      </div>
      <p className="mt-4 text-sm">Our rider will call you shortly, if not then <a href="tel:+92300123123" className="underline text-blue-500 ml-2 mr-2">+92300123123</a>Call us</p>
    </div>
  );
}
