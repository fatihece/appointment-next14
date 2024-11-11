import { notFound } from "next/navigation";
const baseUrl = process.env.NEXT_PUBLIC_DEV_URL;

export async function getServiceByDate(apiUrl) {
  const completeApiUrl = `https://${apiUrl}`;
  const apiServiceUrl = `${baseUrl}/api/services?apiUrl=${encodeURIComponent(completeApiUrl)}`;

  try {
    const res = await fetch(apiServiceUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch ALL Services. Status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.log("Error in getServiceByDate:", error);
    notFound();
  }
}

export async function getFreeTimesByDate(day_number, id, apiUrl) {
  const headers = {
    "Content-type": "application/json; charset=UTF-8",
  };

  try {
    const res = await fetch(
      `${baseUrl}/api/getFreeTimes?day_number=${day_number}&service_now_plan_id=${id}&apiUrl=${encodeURIComponent(apiUrl)}`,
      { headers },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch Times by Date. Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Error in getFreeTimesByDate:", error);
    throw error;
  }
}

export async function getFooterData() {
  const headers = {
    "Content-type": "application/json; charset=UTF-8",
  };
  try {
    const res = await fetch(`${baseUrl}/api/footer`, {
      headers,
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch Footer Data. Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log("Error in Footer Data:", error);
  }
}

export async function getTennantData() {
  const apiUrl = `${baseUrl}/api/tennants`;

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`Failed to fetch Tennants. Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.log("Error in getTennantData:", error);
  }
}
