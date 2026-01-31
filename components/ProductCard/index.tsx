"use client";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

const ProductCard = ({ product }: any) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{
        y: -4,
        boxShadow: "0px 8px 20px rgba(0,0,0,0.4)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl flex flex-col justify-between h-full w-full mt-15"
    >
      <div>
        <div className="overflow-hidden rounded-md aspect-square bg-zinc-800">
          <motion.img
            src={product.image}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-zinc-100 mt-2 font-medium text-sm md:text-base line-clamp-2 min-h-10 leading-tight">
          {product.name}
        </h3>

        <p className="text-blue-400 font-bold text-lg mt-1">
          R${" "}
          {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </p>
      </div>

      <button
        onClick={() => addToCart(product)}
        className={`mt-3 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 text-sm rounded-lg transition-colors 
          duration-200 flex items-center justify-center gap-1 active:scale-95 cursor-pointer`}
      >
        <span>+</span> Adicionar
      </button>
    </motion.div>
  );
};

export default ProductCard;
