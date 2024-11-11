import { NextResponse } from "next/server";

// get all tennants
export async function GET(request) {
  const BASE_URL = process.env.NEXT_PUBLIC_PROD_URL;
  const headers = {
    "Content-type": "application/json; charset=UTF-8",
  };
  try {
    const res = await fetch(`${BASE_URL}/v1/tenant/get-all-tenants-data`, {
      headers,
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Failed to fetch Tennants. Status: ${res.status}` },
        { status: res.status },
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
