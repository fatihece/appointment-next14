import { NextResponse } from "next/server";

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const apiUrl = searchParams.get("apiUrl"); // API URL'sini query parametre olarak al

	if (!apiUrl) {
		return NextResponse.json({ error: "API URL is required." }, { status: 400 });
	}

	try {
		const res = await fetch(
			`https://${apiUrl}/v1/web-resarvation/service-now-plan/get-by-date-number?day_number=1`,
		);

		if (!res.ok) {
			throw new Error(`Failed to fetch ALL Services. Status: ${res.status}`);
		}

		const data = await res.json();
		return NextResponse.json(data);
	} catch (error) {
		console.error("Error in services API route:", error);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
	}
}
