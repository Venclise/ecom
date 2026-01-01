"use client";

import { useEffect, useState } from "react";
import { Spinner } from "../ui/spinner";
import { Button } from "../ui/button";


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Check } from "lucide-react";

export default function Orders() {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/orders", {
          cache: "no-store",
        });
        const data = await res.json();
        setOrders(data);
      console.log(data)
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
    const interval = setInterval(fetchOrders, 5000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="flex items-center gap-2">
          <Spinner /> Loading..
        </p>
      </div>
    );
  }

  const pendingOrders = orders.filter(
    (order) => order.status === "pending"
  );
  const deliveredOrders = orders.filter(
    (order) => order.status === "delivered"
  );

  return (
    <div className="p-3 md:p-5 lg:p-10 flex  gap-8 flex-col">

      {/* ================= PENDING ORDERS ================= */}
      <div>
        <h2 className="font-semibold text-2xl mb-4">
          Pending Orders
        </h2>

        {pendingOrders.length === 0 && (
          <p className="text-gray-500 text-sm m-3">No pending orders</p>
        )}

        <div className="grid md:grid-cols-3 gap-4 mt-8 ">

            
          {pendingOrders.map((order) => (
         <div
  key={order._id}
  className="relative border rounded-xl p-5 bg-white shadow"
>

<div className="w-full h-max flex items-end justify-end">

             <Button
  onClick={async () => {
      await fetch("/api/orders", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: order._id }),
    });
    
    setOrders((prev) =>
        prev.map((o) =>
            o._id === order._id
    ? { ...o, status: "delivered" }
    : o
)
);
}}
 className=" h-10 w-10 rounded-full bg-green-700 hover:bg-green-700 text-white flex items-center justify-center cursor-pointer"
>
  <Check size={18} />
</Button>

</div>               
                  

              
              <div>
                <p className="text-sm">{order._id}</p>
                <p className="font-semibold capitalize">{order.customer?.name}</p>
                <p className="text-sm text-gray-600">
                   <span className="font-semibold text-black"  >Phone:</span>
               
                   <a href={`tel:${order.customer?.phone}`} className="underline">
                  {order.customer?.phone}

                   </a>
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                   <span className="font-semibold text-black"  >Address:</span>

                  {order.customer?.address}
                </p>
              </div>

              {/* Items */}
              <div className="mt-8 space-y-3 text-sm ">
          
                {order.items&&order.items.map((item: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex justify-between"
                  >
                    <span>
                      {item.title} × {item.qty}
                    </span>
                    <span>${item.price * item.qty}</span>
                  </div>
                ))} 
              </div>

              {/* Total */}
              <div className="mt-8 font-semibold flex justify-between border-t pt-2">
                <span>Total</span>
                <span>${order.total}</span>
              </div>
            </div>
          ))} 
          
        </div>
      </div>

      {/* ================= DELIVERED ORDERS ================= */}
      <div className="h-max w-full ">
        <h2 className="font-semibold text-2xl mb-4">
          Delivered Orders
        </h2>


        {deliveredOrders.length === 0 ?  (
            <p className="text-gray-500">No delivered orders</p>
        ) : (
            <>
            
            <p className="text-sm m-4">A list of all delivered order</p>

      

     

          <Table>
  
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Name</TableHead>
      <TableHead>Number</TableHead>
      <TableHead>Order id</TableHead>
      <TableHead className="text-right">Total</TableHead> 
    </TableRow>
  </TableHeader>

  <TableBody>

          {deliveredOrders.map((order) => (
             

                    <TableRow 
                    
              key={order._id}
                     >
      <TableCell className="font-medium">{order.customer?.name}</TableCell>
      <TableCell>{order.customer?.phone}</TableCell>
      <TableCell>{order._id}</TableCell>
      <TableCell className="text-right">${order.total}</TableCell>
    </TableRow>
            
           
          ))}
            
          </TableBody>
          </Table>
          </>
            )}
        </div>
      </div>

   
  );
}
