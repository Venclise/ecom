import { connectDB } from "../../lib/db"
import { Product } from "../../models/product"
import { NextResponse } from "next/server"
import { uploadToCloudinary } from "../../lib/cloudinary"


export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB()

    const { id } = await params

    const deletedProduct = await Product.findByIdAndDelete(id)

    if (!deletedProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Failed to delete product" },
      { status: 500 }
    )
  }
}
import mongoose from "mongoose"

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB()

    const {id} = await params

   

    const product = await Product.findById(id)

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(product)
  } catch (err) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    )
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB()

    const { title, price, description,category } = await req.json()
const {id} = await params
    const updatedProduct = await Product.findByIdAndUpdate(
     id,
      { title, price, description,category },
      { new: true }
    )

    if (!updatedProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      )
    }

    return NextResponse.json(updatedProduct)
  } catch (err) {
    console.error("PATCH ERROR:", err)
    return NextResponse.json(
      { message: "Update failed" },
      { status: 500 }
    )
  }
}
