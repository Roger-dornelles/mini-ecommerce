"use client";
import { CartProps, useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: Props) => {
  const { cart, plus, minus } = useCart();

  const totalCart = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-[400px] bg-zinc-950 border-l border-zinc-800 z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-blue-500" size={20} />
                <h2 className="text-white font-bold text-xl">Seu Carrinho</h2>
              </div>
              <button
                onClick={onClose}
                className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-zinc-500 gap-2">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p>O carrinho está vazio</p>
                </div>
              ) : (
                cart.map((product: CartProps) => (
                  <div
                    key={product.id}
                    className="flex gap-4 items-center bg-zinc-900/40 p-3 rounded-xl border border-zinc-900"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-zinc-800">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between h-20">
                      <h3 className="text-zinc-100 text-sm font-medium line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-blue-400 font-bold text-sm">
                        R${" "}
                        {product.price.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                        })}
                      </p>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center bg-zinc-800 rounded-lg p-1 border border-zinc-700">
                          <button
                            onClick={() => minus(product)}
                            className="p-1 hover:text-red-500 transition-colors cursor-pointer"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-white text-xs px-2 min-w-[24px] text-center font-bold">
                            {product.quantity}
                          </span>
                          <button
                            onClick={() => plus(product)}
                            className="p-1 hover:text-blue-500 transition-colors cursor-pointer"
                            data-testid="increment-button"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 border-t border-zinc-800 bg-zinc-950">
              <div className="flex justify-between text-zinc-400 mb-2 text-sm">
                <span>Itens:</span>
                <span>{cart.length}</span>
              </div>
              <div className="flex justify-between text-white font-bold text-lg mb-6">
                <span>Total:</span>
                <span className="text-blue-400">
                  R${" "}
                  {totalCart.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>
              <button
                className={`${cart.length === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-blue-500 transition-all active:scale-95"} w-full bg-blue-600 
                 text-white font-bold py-4 rounded-xl  shadow-lg shadow-blue-900/20 `}
                disabled={cart.length === 0}
              >
                Finalizar Compra
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
