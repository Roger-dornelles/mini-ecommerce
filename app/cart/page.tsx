"use client";
import { CartProps, useCart } from "@/context/CartContext";

import { motion } from "framer-motion";

const CartPage = () => {
  const { cart, plus, minus } = useCart();

  return (
    <div className=" max-w-7xl mx-auto px-4 min-h-screen flex justify-center flex-col">
      {cart.length === 0 && (
        <div className="flex justify-center text-blue-500 font-medium">
          Não há produtos no carrinho
        </div>
      )}

      <div className="flex flex-wrap justify-center md:justify-start gap-6">
        {cart.length > 0 &&
          cart.map((product: CartProps) => {
            return (
              <motion.div
                key={product.id}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl cursor-pointer flex flex-col justify-between h-[300px] w-full max-w-[280px] sm:max-w-[300px]"
              >
                <div className="flex flex-col gap-2">
                  <div className="overflow-hidden rounded-lg h-32 bg-zinc-800">
                    <motion.img
                      src={product.image ?? ""}
                      whileHover={{ scale: 1.05 }}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-zinc-100 font-medium text-sm leading-tight line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-blue-400 font-bold text-lg mt-1">
                      R${" "}
                      {product.price.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                </div>

                <div className={`flex flex-row gap-2 `}>
                  <button
                    onClick={() => plus(product)}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 text-xs rounded-md transition-colors flex items-center justify-center gap-1 active:scale-95 mt-auto"
                  >
                    <span>+</span> 
                  </button>
                  <span className="m-auto pl-2 pr-2">{product.quantity}</span>
                  <button
                    onClick={() => minus(product)}
                    className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-2 text-xs rounded-md transition-colors flex items-center justify-center gap-1 active:scale-95 mt-auto cursor-pointer"
                  >
                    <span>-</span> 
                  </button>
                </div>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default CartPage;
