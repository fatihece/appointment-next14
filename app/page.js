import Link from "next/link";

import { getFreeTimesByDate, getServiceByDate } from "@/lib/data-service";

import ReservationList from "@/components/home/ReservationList";
export default async function Home() {
  const data = await getServiceByDate();
  const times = await getFreeTimesByDate();
  // console.log("DATAA", data);
  // console.log("TIMES", times);
  return (
    <section className="container mx-auto">
      <h2 className="text-center text-3xl my-16 font-bold">HOS GELDINIZ</h2>

      <ReservationList data={data} />
    </section>
  );
}
