import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const day_number = searchParams.get("day_number");
  const id = searchParams.get("service_now_plan_id");
  const apiUrl = searchParams.get("apiUrl"); // Burada da apiUrl'yi query parametresi olarak alıyoruz.

  if (!apiUrl || !day_number || !id) {
    return NextResponse.json(
      { error: "Missing required query parameters" },
      { status: 400 },
    );
  }

  const headers = {
    "Content-type": "application/json; charset=UTF-8",
  };

  try {
    const res = await fetch(
      `https://${apiUrl}/v1/web-resarvation/service-now-plan/get-free-times-for-resarvation-now-by-date-number?day_number=${day_number}&service_now_plan_id=${id}`,
      { headers },
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: `Failed to fetch Times by Date. Status: ${res.status}` },
        { status: res.status },
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching free times:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
