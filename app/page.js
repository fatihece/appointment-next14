import { getFreeTimesByDate, getServiceByDate } from "@/lib/data-service";

import ReservationList from "@/components/ReservationList";
export default async function Home() {
	const data = await getServiceByDate();
	const times = await getFreeTimesByDate(1, 2);
	// console.log("DATAA", data);
	console.log("TIMES", times);

	return (
		<section className="min-h-screen">
			<div className="container">
				<h2 className="text-center text-3xl my-16 font-bold">HOS GELDINIZ</h2>
				<ReservationList data={data} />
			</div>
		</section>
	);
}
