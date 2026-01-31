import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products`,
      {},
    );

    const products = await result.json();

    return NextResponse.json(products);
  } catch (error) {
    NextResponse.json(
      { message: "Erro ao buscar os produtos" },
      { status: 500 },
    );
  }
}
