"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getFreeTimesByDate } from "@/lib/data-service";
import { useAppContext } from "@/app/context/AppContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Route from "./Route";
import { LoadingSpinner } from "./LoadingSpinner";

const Time = () => {
	const router = useRouter();
	const { state, dispatch } = useAppContext();
	const [availableTimes, setAvailableTimes] = useState([]);
	const [loading, setLoading] = useState(true);

	// Fetch available times when the component is mounted
	useEffect(() => {
		if (state.day_number && state.id) {
			const fetchAvailableTimes = async () => {
				try {
					const times = await getFreeTimesByDate(state.day_number, state.id);
					setAvailableTimes(times.output.avilable_times || []);
					setLoading(false);
				} catch (error) {
					console.error("Error fetching available times:", error);
					setLoading(false);
				}
			};

			fetchAvailableTimes();
		} else {
			setLoading(false); // Set loading to false if no state is provided
		}
	}, [state.day_number, state.id]);

	const handleTimeSelection = (time) => {
		dispatch({
			type: "GET_TIME",
			payload: {
				time,
			},
		});
		toast.success(`Tarih ${time} olarak seçildi!`, {
			position: "top-center",
			autoClose: 3000, // Closes after 3 seconds
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		router.push("form");
	};

	return (
		<section className="container mx-auto">
			<div className="flex-1 flex flex-col items-center justify-center max-w-screen-md gap-4 p-4 mx-auto">
				<Route />
				<h6 className="text-xl font-semibold mb-3">Lütfen bir saat seçiniz</h6>
				{/* <p className="mb-3 text-neutral-400">
					({state.employee_name} /{state.reservation_name}
				</p>
				<p className=" text-neutral-400 text-center -mt-2">{state.date} )</p> */}
				<div className="mb-4 text-neutral-700 p-4  flex flex-col text-sm bg-neutral-50 border border-neutral-100">
					<div>
						<strong>Personel: </strong> {state.employee_name}
					</div>
					<div>
						<strong>Islem:</strong> {state.reservation_name}
					</div>
					<div>
						<strong>Tarih:</strong>
						{state.date}
					</div>
				</div>
				{loading ? (
					<LoadingSpinner />
				) : (
					<div className="flex flex-wrap justify-center gap-4 w-full">
						{availableTimes.length > 0 ? (
							availableTimes.map((time, i) => (
								<div
									className="bg-blue-50 border border-blue-200 rounded-lg shadow hover:bg-blue-100 cursor-pointer px-4 py-3 w-[120px]  sm:w-20 text-center"
									key={`time-${i}`}>
									<button
										onClick={() => handleTimeSelection(time)}
										type="button"
										className="w-full text-2xl sm:text-base">
										{time}
									</button>
								</div>
							))
						) : (
							<div className="bg-[#fff3cd] border border-[#ffeeba] p-5 rounded-sm flex flex-col items-center">
								<p className="text-[#85604] text-center">
									<strong>Seçilen gün</strong> için uygun bir randevu bulunamadı,
									lütfen başka bir gün seçin.
								</p>
								<Link
									href="calendar"
									className="text-white rounded hover:underline inline-block bg-primary px-3 py-2 mt-3">
									Tarihe git
								</Link>
							</div>
						)}
					</div>
				)}
			</div>
		</section>
	);
};

export default Time;
