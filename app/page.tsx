import { Product } from "@/types/products";
import ProductCard from "../components/ProductCard";
import Link from "next/link";

const App = async () => {
  const getProducts = async () => {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.log("Erro ao buscar os produtos");
    }
    const data = await res.json();
    return data;
  };

  const data = await getProducts();

  return (
    <div className="flex flex-wrap justify-center max-w-6xl mx-auto p-4">
      {data &&
        data.map((product: Product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
          >
            <ProductCard product={product} />
          </Link>
        ))}
    </div>
  );
};

export default App;
