import Backendless from "@/utils/backendless";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();
    await Backendless.UserService.register({
      name,
      email,
      password,
      passwordConfirmation: password,
    });

    return NextResponse.json(
      {
        success: true,
        message: "User created successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
