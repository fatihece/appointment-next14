import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getServiceByDate() {
  try {
    const res = await fetch(
      `${BASE_URL}/v1/web-resarvation/service-now-plan/get-by-date-number?day_number=1`
    );

    //bathfitizmit.randevual.online/api/v1/web-resarvation/service-now-plan/get-by-date-number
    // For testing
    // await new Promise((res) => setTimeout(res, 2000));

    if (!res.ok) {
      throw new Error(`Failed to fetch ALL Services. Status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.log("Error in getServiceByDate:", error);
    notFound();
  }
}
export async function getFreeTimesByDate() {
  const headers = {
    "Content-type": "application/json; charset=UTF-8",
  };
  try {
    const res = await fetch(
      `${BASE_URL}/v1/web-resarvation/service-now-plan/get-free-times-for-resarvation-now-by-date-number
?day_number=1&service_now_plan_id=2`,
      { headers }
    );
    //bathfitizmit.randevual.online/api/v1/web-resarvation/service-now-plan/get-free-times-for-resarvation-now-by-date-number

    // For testing
    // await new Promise((res) => setTimeout(res, 2000));

    https: if (!res.ok) {
      throw new Error(`Failed to fetch Times by Date. Status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.log("Error in getServiceByDate:", error);
    notFound();
  }
}