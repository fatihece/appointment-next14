"use client";

import { useRouter } from "next/navigation";
import { useAppContext, ActionTypes } from "@/app/context/AppContext";
import toast from "react-hot-toast";

const EmployeeList = ({ list }) => {
  const router = useRouter();
  const { state, dispatch } = useAppContext();

  const updateEmployee = (employee) => {
    dispatch({
      type: ActionTypes.UPDATE_SERVICE,
      payload: {
        employee: employee,
      },
    });
    toast.success("Hizmet ve personel basarili bir sekilde eklendi");
    router.push("/calendar");
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center mt-4 rounded-sm w-[250px]">
      {list.map((e) => (
        <div key={e.id}>
          <button
            onClick={() => updateEmployee(e.name)}
            className="group px-5 py-4 transition-colors bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer"
          >
            {" "}
            {e.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
