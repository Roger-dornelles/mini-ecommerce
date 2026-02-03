import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { message: "Erro ao buscar os dados" },
        { status: res.status },
      );
    }

    const products = await res.json();

    const product = products.products.find(
      (p: { id: string | number }) => String(p.id) === id,
    );

    if (!product) {
      return NextResponse.json(
        { message: "Produto não encontrado" },
        { status: 404 },
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { message: "Erro interno no servidor" },
      { status: 500 },
    );
  }
}
