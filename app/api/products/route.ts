import cloudinary from "../lib/cloudinary"
import { connectDB } from "../lib/db"
import { Product } from "../models/product"


export async function GET(req: Request) {
  await connectDB()

  const { searchParams } = new URL(req.url)
  const category = searchParams.get("category")
  const search  = searchParams.get("search")

 const query:any = {}
 if (category) {
  query.category = category
 
}
if(search) {
  query.title = {$regex:search,$options: "i"}
}

  const products = await Product.find(query).limit(5).select("title image price")

  return Response.json(products)
}


export async function POST(req: Request) {
  await connectDB()

  const formData = await req.formData()

  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const price = Number(formData.get("price"))
  const img = formData.get("img") as File | null
  const category = formData.get("category") as string

if (!title || description === "" || isNaN(price) || !img || !category) {
 
    return Response.json(
      { error: "Missing required fields" },
      { status: 400 }
    )
  }

  const buffer = Buffer.from(await img.arrayBuffer())

  const uploadResult: any = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "products" }, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
      .end(buffer)
  })

  const product = await Product.create({
    title,
    description,
    price,
    image: uploadResult.secure_url,
    category,
  })

  return Response.json(product, { status: 201 })
}
