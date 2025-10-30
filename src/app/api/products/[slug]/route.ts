import Backendless from "@/utils/backendless";
import { NextRequest, NextResponse } from "next/server";
import { slugToSearchText } from "@/utils/slug";

export async function GET(
  request: NextRequest,
  props: { params: Promise<{ slug: string }> }
) {
  try {
    const params = await props.params;
    const { slug } = params;

    console.log("🔍 Looking for product with slug:", slug);

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          message: "slug is required",
          data: null,
        },
        {
          status: 400,
        }
      );
    }

    // Convert slug to search text (e.g., "tray-table" -> "tray table")
    const searchText = slugToSearchText(slug);
    console.log("🔍 Converted slug to search text:", searchText);

    const queryBuilder = Backendless.DataQueryBuilder.create();
    queryBuilder.setWhereClause(`LOWER(name) = '${searchText.toLowerCase()}'`);

    const response = await Backendless.Data.of("Products").find(queryBuilder);

    console.log("📦 Backendless response:", response);
    console.log("📊 Response length:", response?.length);

    if (!response || response.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Product not found",
          data: null,
        },
        {
          status: 404,
        }
      );
    }

    console.log("✅ Product found:", response[0]);

    return NextResponse.json(
      {
        success: true,
        message: "Success get product detail",
        data: response[0],
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message:
          error.message || "Failed get product detail, please try again later",
        data: null,
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
