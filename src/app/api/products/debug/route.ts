import Backendless from "@/utils/backendless";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("🔍 Fetching all products for debugging...");

    const response = await Backendless.Data.of("Products").find();

    console.log("📦 Total products found:", response.length);

    // Extract important fields for debugging
    const productsInfo = response.map((product: any) => ({
      objectId: product.objectId,
      name: product.name,
      slug: product.slug || "❌ NO SLUG",
      hasSlug: !!product.slug,
    }));

    console.log("Products info:", JSON.stringify(productsInfo, null, 2));

    return NextResponse.json(
      {
        success: true,
        message: "Debug info",
        totalProducts: response.length,
        products: productsInfo,
        fullData: response, // Complete data for inspection
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.error("💥 Error fetching products:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to fetch products",
        error: {
          message: error.message,
          stack:
            process.env.NODE_ENV === "development" ? error.stack : undefined,
        },
      },
      {
        status: 500,
      }
    );
  }
}
