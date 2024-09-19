"use client";
import { useAppContext } from "@/app/context/AppContext";
import Link from "next/link";

const ThankYou = () => {
	const { state, dispatch } = useAppContext();

	console.log("Thank You", state);
	return (
		<section className="container m-auto">
			<div className=" flex items-center justify-center px-3 flex-1">
				<div className="bg-green-50 border border-green-300 text-green-800 p-6 rounded-lg shadow-lg text-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="text-green-500 w-28 h-28 mx-auto"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="1">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<h1 className="text-2xl font-bold mt-4">Teşekkür ederiz!</h1>
					<p className="mt-2">
						Sayın {state.contact.name}, {state.date} {state.time} tarihinde{" "}
						{state.employee_name} ile randevunuz kaydedilmiştir.
					</p>

					<Link
						href="/"
						className="mt-8 px-4 py-2 bg-primary rounded-md text-white inline-block">
						Ana sayfaya dön
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ThankYou;
