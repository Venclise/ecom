"use client"
import { create } from "zustand"

type CartItem = {
  id: number
  title: string
  img: string
  price: number
  qty: number
}



type CartStore = {
  cart: CartItem[]
  addToCart: (item: Omit<CartItem, "qty">) => void
  updateQty: (id: number, qty: number) => void
  removeFromCart: (id: number) => void
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      const exists = state.cart.find(p => p.id === item.id)
      if (exists) {
        return {
          cart: state.cart.map(p =>
            p.id === item.id ? { ...p, qty: p.qty + 1 } : p
          )
        }
      }
      return {
        cart: [...state.cart, { ...item, qty: 1 }]
      }
    }),

updateQty: (id, qty) =>
  set(state => ({
    cart: state.cart.map(item =>
      item.id === id
        ? { ...item, qty } 
        : item
    ),
  })),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter(item => item.id !== id)
    })),
}))
