"use client";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/app/context/AppContext";
import toast from "react-hot-toast";

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
            }
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
