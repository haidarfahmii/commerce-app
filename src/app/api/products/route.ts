import Backendless from "@/utils/backendless";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await Backendless.Data.of("Products").find();

    return NextResponse.json(
      {
        success: true,
        message: "success get data products",
        data: response,
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
          error.message || "failed get data products, please try again later",
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
