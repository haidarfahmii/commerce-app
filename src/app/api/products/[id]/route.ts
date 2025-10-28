import Backendless from "@/utils/backendless";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { id: string } }) {
  try {
    const id = params.id;
    const response = await Backendless.Data.of("Products").findById(id);

    return NextResponse.json(
      {
        success: true,
        message: "Success get product",
        data: response,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to get product",
        data: null,
      },
      { status: 500 }
    );
  }
}
