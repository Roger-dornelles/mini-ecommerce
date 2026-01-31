"use client";

import { Product } from "@/types/products";
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface CartProps extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartProps[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  cartCount: number;
  plus: (product: CartProps) => void;
  minus: (product: CartProps) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartProps[]>([]);

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (!existingItem) {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const plus = (product: CartProps) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item as CartProps).quantity + 1 }
            : item,
        ),
      );
    }
  };

  const minus = (product: CartProps) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem && existingItem.quantity > 1) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    } else if (existingItem && existingItem.quantity === 1) {
      removeFromCart(product);
    }
  };

  const removeFromCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart((prev) => prev.filter((item) => item.id !== product.id));
    }
  };

  const cartCount = cart.length;

  return (
    <CartContext.Provider
      value={{ cart, addToCart, cartCount, removeFromCart, plus, minus }}
    >
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
