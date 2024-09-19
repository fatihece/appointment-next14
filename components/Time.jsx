"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getFreeTimesByDate } from "@/lib/data-service";
import { useAppContext } from "@/app/context/AppContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Route from "./Route";

const Time = () => {
	const router = useRouter();
	const { state, dispatch } = useAppContext();
	const [availableTimes, setAvailableTimes] = useState([]);

	// Fetch available times when the component is mounted
	useEffect(() => {
		if (state.day_number && state.id) {
			const fetchAvailableTimes = async () => {
				try {
					const times = await getFreeTimesByDate(state.day_number, state.id);
					setAvailableTimes(times.output.avilable_times || []);
				} catch (error) {
					console.error("Error fetching available times:", error);
				}
			};

			fetchAvailableTimes();
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
			<div className="flex-1 flex flex-col items-center justify-center  max-w-screen-md gap-4 p-4 mx-auto">
				<Route />

				<h6 className="text-xl font-semibold mb-4 text-center">Lütfen bir saat seçiniz</h6>

				<div className="flex flex-wrap justify-center gap-4 w-full">
					{availableTimes.length > 0 ? (
						availableTimes.map((time, i) => (
							<div
								className="bg-blue-50 border border-blue-200 rounded-lg shadow hover:bg-blue-100 cursor-pointer px-4 py-3 w-20 text-center"
								key={`time-${i}`}>
								<button
									onClick={() => handleTimeSelection(time)}
									type="button"
									className="w-full">
									{time}
								</button>
							</div>
						))
					) : (
						<div className="bg-[#fff3cd] border border-[#ffeeba] p-5 rounded-sm flex flex-col items-center">
							<p className="text-[#85604] text-center">
								{" "}
								<strong>Seçilen gün</strong> için uygun bir randevu bulunamadı,
								lütfen başka bir gün seçin.
							</p>
							<Link
								href="calendar"
								className="text-black/60 rounded hover:underline hover:text-black inline-block">
								Tarihe git
							</Link>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Time;
