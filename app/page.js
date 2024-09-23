import { getFreeTimesByDate, getServiceByDate } from "@/lib/data-service";

import ReservationList from "@/components/ReservationList";

export default async function Home() {
	const data = await getServiceByDate();
	const times = await getFreeTimesByDate(1, 2);

	return (
		<section className="flex-1">
			<div className="container">
				<h2 className="text-center text-2xl mt-16 mb-5 font-bold">Hoş Geldiniz</h2>
				<ReservationList data={data} />
			</div>
		</section>
	);
}
