import { NextResponse } from "next/server";
import { prisma } from "@/utils/prismaDb";

export async function GET(req) {
  try {
    const query = req.query.query;
    if (!query) {
      return new NextResponse(JSON.stringify({ error: "Query parameter is required" }), {
        status: 400,
      });
    }

    const products = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
        ],
      },
      orderBy: { id: "desc" },
    });

    return new  NextResponse(JSON.stringify(products),{status:200})
  } catch (error) {
    console.error("Database query failed:", error);
    return new NextResponse(JSON.stringify({ error: "Something went wrong..." }), {
      status: 500,
    });
  }
}

