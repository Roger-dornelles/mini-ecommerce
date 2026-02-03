import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ text: string }> },
) {
  try {
    const { text } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    const products = await res.json();

    const filtered = products.products.filter((p: any) =>
      p.name.toLowerCase().includes(text.toLowerCase()),
    );

    return NextResponse.json(filtered);
  } catch (error) {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
