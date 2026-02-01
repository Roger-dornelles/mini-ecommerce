"use client";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/products";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  isCart?: boolean;
}

const ProductCard = ({ product, isCart = false }: ProductCardProps) => {
  const { addToCart } = useCart();
  return (
    <motion.div
      whileHover={{
        y: isCart ? 0 : -4,
        boxShadow: "0px 8px 20px rgba(0,0,0,0.4)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex flex-col justify-between h-full w-full mt-15"
    >
      <div>
        <div className="overflow-hidden rounded-md  bg-zinc-800">
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

      <div className="mt-4">
        {isCart && (
          <>
            <h3 className="text-zinc-100 -mt-1 mb-1 font-medium text-sm md:text-base  min-h-10 ">
              {product.description}
            </h3>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 mt-2 rounded-lg transition-colors duration-200 cursor-pointer"
              onClick={() => addToCart(product)}
            >
              Adicionar ao Carrinho
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
