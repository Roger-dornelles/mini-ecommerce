import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const products = await result.json();

    return NextResponse.json(products.products);
  } catch (error) {
    NextResponse.json(
      { message: "Erro ao buscar os produtos" },
      { status: 500 },
    );
  }
}
