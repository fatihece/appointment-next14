"use client";
import { useAppContext } from "@/app/context/AppContext";
import Link from "next/link";

const ThankYou = () => {
	const { state, dispatch } = useAppContext();

	console.log("Thank You", state);
	return (
		<>
			<div className="flex items-center justify-center h-screen px-3">
				<div className="p-4 px-6 rounded shadow-xl bg-mantis-100">
					<div className="flex flex-col items-center space-y-2 md:p-5">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="text-mantis-500 w-28 h-28"
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
						<h1 className="text-2xl sm:text-4xl font-bold">Tesekkur ederiz!</h1>
						<p>service_now_plan_id : {state.id}</p>
						<p>plan_date: {state.date}</p>
						<p>plan_Time: {state.time}</p>
						<p>Name: {state.contact.name}</p>
						<p>Phone: {state.contact.phone}</p>
						<Link
							href="/"
							className="px-2 py-2 bg-mantis-500 rounded-md text-white mt-4">
							Ana sayfaya don
						</Link>
						{/* <p className="text-lg sm:text-2xl font-semibold px-5 text-center">
            Sayin {state.contact.name} randevunuz basarili bir sekilde
            olusturuldu.
          </p>
          <p className=" sm:text-xl text-center">
            <strong>{state.contact.phone}</strong> nolu telefona bilgilendirme
            mesaji gonderildi.
          </p>
          <h3 className="sm:text-xl font-medium">
            Randevu bilgileriniz asagida siralanmistir.
          </h3>
          <ul className="sm:text-xl dive-stone-200 divide-y border-b border-t">
            <li className="py-2">
              <strong>Firma :</strong> {state.company}
            </li>
            <li className="py-2">
              <strong>Hizmet:</strong> {state.service.name}
            </li>
            <li className="py-2">
              <strong>Personel:</strong>{" "}
              {state.service.employee === "" ? " - " : state.service.employee}
            </li>
            <li className="py-2">
              <strong>Tarih :</strong>
            </li>
          </ul> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default ThankYou;
