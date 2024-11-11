import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    service_now_plan_id,
    plan_date,
    plan_time,
    customer_name,
    customer_phone,
  } = await request.json();

  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(
      `https://kervansaray.randevual.online/api/v1/web-resarvation/service-now-plan/add-resarvation`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({
          service_now_plan_id,
          plan_date,
          plan_time,
          customer_name,
          customer_phone,
        }),
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to add reservation. Status: ${response.status}` },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in reservation API route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
