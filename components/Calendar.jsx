"use client";
import { format } from "date-fns";
import { now } from "@/constants/config";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

import { useAppContext, ActionTypes } from "@/app/context/AppContext";
import Route from "./Route";
import toast from "react-hot-toast";

const DynamicCalendar = dynamic(() => import("react-calendar"), { ssr: false });

const CalendarComponent = () => {
	const router = useRouter();
	const { state, dispatch } = useAppContext();

	// Get day number from selected date (1 = Monday, etc.)
	const getDayNumber = (date) => {
		const day = date.getDay();
		return day === 0 ? 7 : day; // Map Sunday (0) to 7
	};

	// Update the context with selected date, day number, reservation name, and employee name
	const updateDateAndTime = (justDate) => {
		const day_number = getDayNumber(justDate);
		const formattedDate = format(justDate, "dd-MM-yyyy");
		dispatch({
			type: "UPDATE_DATE",
			payload: {
				date: formattedDate,
				day_number,
				reservation_name: state.reservation_name,
				employee_name: state.employee_name,
				id: state.id,
			},
		});
		toast.success(`Tarih ${formattedDate} olarak seçildi!`, {
			position: "top-center",
			autoClose: 3000, // Closes after 3 seconds
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		router.push("/time");
	};

	return (
		<section className="flex-1">
			<div className="flex flex-col mt-5 items-center justify-center px-3 mx-auto max-w-screen-md ">
				<Route />
				<h6 className="text-xl font-semibold mb-3">Lütfen bir tarih seçiniz</h6>
				<div className="mb-3 text-neutral-700 p-4 flex flex-col text-sm bg-neutral-50 border border-neutral-100">
					<div>
						<strong>Personel: </strong> {state.employee_name}
					</div>
					<div>
						<strong>Islem:</strong> {state.reservation_name}
					</div>
				</div>

				<DynamicCalendar
					minDate={now}
					className="REACT-CALENDAR p-2"
					view="month"
					onClickDay={(date) => updateDateAndTime(date)}
					locale="tr-TR"
				/>
			</div>
		</section>
	);
};

export default CalendarComponent;
