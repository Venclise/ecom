import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";
import { Order } from "../../models/order";

export async function GET(

  {params}: {params: Promise<{ id: string }>}
) {
  try {
    await connectDB();

    const { id } = await params;
    const order = await Order.findById(id);

    if (!order) {
      return NextResponse.json({ message: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to fetch order" }, { status: 500 });
  }
}
