import Backendless from "@/utils/backendless";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: {
    slug: string;
  };
}

export async function GET(req: NextRequest, { params }: Params) {
  try {
    const { slug } = await params;

    const queryBuilder = Backendless.DataQueryBuilder.create();
    queryBuilder.setWhereClause(`slug='${slug}'`);

    const response = await Backendless.Data.of("Products").findFirst(
      queryBuilder
    );

    if (!response) {
      return NextResponse.json(
        {
          success: false,
          message: `failed get data detail products with slug ${slug}`,
          data: null,
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: `Get detail product with slug ${slug} successfull`,
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
