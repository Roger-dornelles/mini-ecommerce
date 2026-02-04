import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/products";

const baseUrl = process.env.NEXT_PUBLIC_URL_LOCAL || "http://localhost:3000";

const viewProduct = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const getProduct = async (): Promise<Product | null> => {
    try {
      const res = await fetch(`${baseUrl}/api/products/${id}`, {
        cache: "no-store",
      });

      if (!res.ok) throw new Error("Erro ao buscar os produtos");
      const data: Product = await res.json();
      return data;
    } catch (error) {
      return null;
    }
  };

  const product = await getProduct();

  if (!product) {
    return (
      <div className="mt-24 text-center text-white font-medium">
        Produto não encontrado.
      </div>
    );
  }

  return (
    <main className="min-h-screen mt-20  bg-zinc-950">
      <div className="max-w-7xl flex flex-col items-center m-auto">
        <div className="w-full max-w-100 text-left">
          <h1 data-testid="title" className="text-white text-xl font-bold">
            Detalhes do Produto
          </h1>
        </div>

        <div className="w-full max-w-100 -mt-12">
          <ProductCard product={product} isCart={true} />
        </div>
      </div>
    </main>
  );
};

export default viewProduct;
