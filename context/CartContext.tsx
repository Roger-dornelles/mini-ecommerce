"use client";

import { Product } from "@/types/products";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "react-toastify";

export interface CartProps extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartProps[];
  setCart: React.Dispatch<React.SetStateAction<CartProps[]>>;
  searchProduct: string;
  setSearchProduct: React.Dispatch<React.SetStateAction<string>>;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  cartCount: number;
  plus: (product: CartProps) => void;
  minus: (product: CartProps) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [searchProduct, setSearchProduct] = useState<string>("");

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (!existingItem) {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
      toast.success("Produto adicionado ao carrinho!");
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
      toast.warning("Produto removido do carrinho!");
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
      value={{
        cart,
        setCart,
        addToCart,
        cartCount,
        removeFromCart,
        plus,
        minus,
        searchProduct,
        setSearchProduct,
      }}
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
