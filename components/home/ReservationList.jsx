"use client";
import { useRouter } from "next/navigation";

import { useAppContext, ActionTypes } from "@/app/context/AppContext";
const ReservationList = ({ data }) => {
  const router = useRouter();
  const { dispatch } = useAppContext(); // Access the dispatch function

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

    // Navigate to '/calendar'
    router.push("/calendar");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {data.output.map((item) => (
        <div
          className="flex flex-col gap-3 bg-mantis-200 p-4 rounded-sm shadow-lg transition-all hover:-translate-y-1 border-l-4 border-mantis-700"
          key={item.id}
        >
          <button
            className="flex flex-col"
            onClick={() =>
              handleSelect(
                item.resarvation_now_plan_name,
                item.employee_name,
                item.id
              )
            } // Update state and navigate
          >
            <div className="text-mantis-700 font-semibold text-xl">
              {item.resarvation_now_plan_name}
            </div>
            <div className="font-bold">{item.employee_name}</div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ReservationList;
