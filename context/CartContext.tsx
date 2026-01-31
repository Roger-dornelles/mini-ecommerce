"use client";

import { Product } from "@/types/products";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const cartCount = cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
}
