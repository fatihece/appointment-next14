"use client";
import data from "/data.json";
import Link from "next/link";
import EmployeeList from "./EmployeeList";
import { useState } from "react";
import { useAppContext, ActionTypes } from "@/app/context/AppContext";
import { formatCurrency } from "@/utils/helper";
import { useRouter } from "next/navigation";

const Services = ({ service, name, slug, path, list, price }) => {
  const [showEmployee, setShowEmployee] = useState(false);
  const { state, dispatch } = useAppContext();
  const router = useRouter();
  const updateService = (newService) => {
    dispatch({
      type: ActionTypes.UPDATE_SERVICE,
      payload: {
        name: newService,
        // Diğer alanlar için herhangi bir değişiklik yapmadık, bu nedenle mevcut değerler korunacak
      },
    });
    if (!list.length) router.push("/calendar");

    setShowEmployee(true);
  };

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 w-[250px] transition-colors">
        <button
          className="flex-1 rounded-sm  border border-transparent px-5 py-4 transition-colors  cursor-pointer"
          rel="noopener noreferrer"
          onClick={() => updateService(service)}
        >
          <h2 className={`mb-3 text-xl font-semibold`}>{service}</h2>
          <p className={`m-0 max-w-[30ch]  `}>{formatCurrency(price)}</p>
        </button>
      </div>
      {showEmployee && <EmployeeList list={list} />}
    </section>
  );
};

export default Services;
