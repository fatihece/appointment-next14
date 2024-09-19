"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { useAppContext } from "@/app/context/AppContext";

const ReservationList = ({ data }) => {
	const router = useRouter();
	const { dispatch } = useAppContext();

	const handleSelect = (reservation_name, employee_name, id) => {
		// Dispatch the action to set the selected reservation and employee
		dispatch({
			type: "SET_RESERVATION",
			payload: {
				reservation_name,
				employee_name,
				id,
			},
		});
		toast.success(`${reservation_name} için ${employee_name} seçildi!`, {
			position: "top-center",
			autoClose: 3000, // Closes after 3 seconds
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		router.push("/calendar");
	};

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 px-3 sm:px-0">
			{data.output.map((item) => {
				console.log(item);

				/* return (
					<div
						className="flex flex-col gap-3 bg-mantis-200 p-4 rounded-sm shadow-lg transition-all hover:-translate-y-1 border-l-4 border-mantis-700"
						key={item.id}>
						<button
							className="flex flex-col"
							onClick={() =>
								handleSelect(
									item.resarvation_now_plan_name,
									item.employee_name,
									item.id,
								)
							}>
							<div className="text-mantis-700 font-semibold text-xl">
								{item.resarvation_now_plan_name}
							</div>
							<div className="font-bold">{item.employee_name}</div>
						</button>
					</div>
				); */

				return (
					<button
						key={item.id}
						className="bg-white p-4 border border-neutral-200 rounded-md flex flex-col select-none transition group hover:bg-blue-100 hover:border-blue-100 active:text-white active:bg-blue-500 active:border-blue-500"
						onClick={() =>
							handleSelect(
								item.resarvation_now_plan_name,
								item.employee_name,
								item.id,
							)
						}>
						<div className="flex gap-4 w-full">
							<div className="w-16 h-16 inline-flex items-center justify-center text-center rounded-md border border-neutral-200 text-blue-500 transition group-hover:border-blue-200 group-active:border-white/40 group-active:text-white">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="48"
									height="48"
									viewBox="0 0 24 24">
									<path
										fill="currentColor"
										fillOpacity=".25"
										d="M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0"
									/>
									<circle cx="12" cy="10" r="4" fill="currentColor" />
									<path
										fill="currentColor"
										fillRule="evenodd"
										d="M18.22 18.246c.06.097.041.22-.04.297A8.969 8.969 0 0 1 12 21a8.969 8.969 0 0 1-6.18-2.457a.239.239 0 0 1-.04-.297C6.942 16.318 9.291 15 12 15c2.708 0 5.057 1.318 6.22 3.246"
										clipRule="evenodd"
									/>
								</svg>
							</div>

							<div
								className="flex flex-col items-start mt-2
              ">
								<strong className="capitalize text-lg">{item.employee_name}</strong>
								<div className="opacity-50">{item.resarvation_now_plan_name}</div>
							</div>

							<div className="mr-auto"></div>

							<div className="self-center opacity-40">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="36"
									height="36"
									viewBox="0 0 24 24">
									<path
										fill="currentColor"
										d="m13.412 12.5l-1.766 1.766q-.14.14-.13.334q.009.194.15.335q.14.14.347.14t.34-.14l2.37-2.37q.243-.242.243-.565t-.243-.565l-2.388-2.389q-.14-.14-.335-.14t-.334.14t-.141.348t.14.34l1.747 1.766H9q-.213 0-.356.144t-.144.357t.144.356T9 12.5zM12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path>
								</svg>
							</div>
						</div>
					</button>
				);
			})}
		</div>
	);
};

export default ReservationList;
