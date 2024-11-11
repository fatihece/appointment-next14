import { getServiceByDate, getTennantData } from "@/lib/data-service";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
  const tennants = await getTennantData();
  const store = tennants?.output[0];
  const apiUrl = store?.api_url;
  console.log("SS", store);
  const reservationData = await getServiceByDate(apiUrl);

  const cookieStore = cookies();

  let tennantSlug = "";
  const tennantExists = cookieStore.has("tennant");

  if (tennantExists) {
    tennantSlug = cookieStore.get("tennant");
    console.log("ttt", tennantSlug);
    redirect(`/${tennantSlug.value}`);
  } else {
    cookieStore.set("tennant", store.url_alias);
    tennantSlug = store.url_alias;
    redirect(`/${tennantSlug}`);
  }
}
