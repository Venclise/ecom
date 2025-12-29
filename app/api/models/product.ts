import mongoose, { Schema, models } from "mongoose"

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    price: {
      type: Number,
      required: true,
    },
image :{
  type: String,
required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    category: String,
  },
  { timestamps: true }
)

export const Product =
  models.Product || mongoose.model("Product", ProductSchema)
