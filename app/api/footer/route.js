import { NextResponse } from "next/server";

const FOOTER_DATA_URL = process.env.FOOTER_DATA_URL;

export async function GET() {
  const headers = {
    "Content-type": "application/json; charset=UTF-8",
  };
  try {
    const res = await fetch(FOOTER_DATA_URL, { headers });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Failed to fetch Footer Data. Status: ${res.status}` },
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
