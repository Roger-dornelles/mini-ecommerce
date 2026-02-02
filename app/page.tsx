"use client";
import { Product } from "@/types/products";
import ProductCard from "../components/ProductCard";
import Link from "next/link";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

const App = () => {
  const [data, setData] = useState<Product[] | null>(null);

  const { searchProduct } = useCart();

  const handleFetch = async () => {
    try {
      const url =
        searchProduct.length >= 3
          ? `/api/search/${searchProduct}`
          : `/api/products`;

      const res = await fetch(url, { cache: "no-store" });

      if (!res.ok) {
        toast.error("Erro ao carregar os produtos");

        return;
      }

      const result = await res.json();
      setData(result);
    } catch (error) {
      toast.error("Erro ao carregar os produtos");
    }
  };

  useEffect(() => {
    handleFetch();
  }, [searchProduct]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-wrap justify-center">
        {data && data.length > 0 ? (
          data.map((product: Product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
            >
              <ProductCard product={product} />
            </Link>
          ))
        ) : (
          <span className=" text-white w-full flex items-center justify-center mt-20">
            Nenhum produto encontrado.
          </span>
        )}
      </div>
    </div>
  );
};

export default App;
