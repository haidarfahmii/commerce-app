import Backendless from "@/utils/backendless";
import { data } from "framer-motion/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await Backendless.Data.of("Products").find();

    return NextResponse.json(
      {
        success: true,
        message: "Berhasil mengambil data produk",
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
          error.message || "Gagal mengambil data produk, coba lagi nanti...",
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
