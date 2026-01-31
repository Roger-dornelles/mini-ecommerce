"use client";

import { ShoppingCart, Store, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Store className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold text-blue-500 tracking-tight">
            STORE
          </span>
        </Link>

        <div className="hidden md:flex items-center bg-white/5 border border-white/10 px-4 py-2 rounded-full w-96">
          <Search className="text-zinc-500" size={18} />
          <input
            type="text"
            placeholder="Buscar "
            className="bg-transparent border-none outline-none text-sm ml-2 text-white w-full"
          />
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex gap-6 text-sm font-medium text-zinc-400">
            <Link href="/" className="hover:text-white transition-colors">
              Produtos
            </Link>
          </nav>

          <Link href="/cart" className="relative group p-2">
            <ShoppingCart
              className="text-white group-hover:text-blue-400 transition-colors"
              size={26}
            />

            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  className="absolute -top-1 -right-1 bg-blue-600 text-white text-[11px] font-bold h-5 w-5 rounded-full flex items-center justify-center border-2 border-zinc-950"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </div>
      </div>
    </header>
  );
}
