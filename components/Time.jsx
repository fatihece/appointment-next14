"use client";
import React, { useEffect, useState } from "react";

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
		<section className="flex items-center justify-center min-h-screen">
			<div className="flex flex-col items-center justify-center w-full max-w-screen-md gap-4 p-4">
				<Route />

				<h6 className="text-xl font-semibold mb-4 text-center">Lütfen bir saat seçiniz</h6>

				<div className="flex flex-wrap justify-center gap-4 w-full">
					{availableTimes.length > 0 ? (
						availableTimes.map((time, i) => (
							<div
								className="bg-mantis-100 border border-mantis-200 rounded-lg shadow hover:bg-mantis-200 cursor-pointer px-4 py-3 w-[100px] text-center"
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
						<div className="text-center">Bu tarih için müsait zaman yok.</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Time;
