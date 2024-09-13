import React from "react";
import { getFreeTimesByDate, getServiceByDate } from "@/lib/data-service";

const page = async () => {
  const data = await getServiceByDate();
  const times = await getFreeTimesByDate();
  console.log("TIMES", times);
  return (
    <section className="container mx-auto">
      <h2 className="text-center text-3xl my-16 font-bold">HOS GELDINIZ</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data.output.map((item, index) => (
          <div
            className="flex flex-col items-center  gap-3 bg-ruth-200 p-4 rounded-md shadow-lg transition-all hover:-translate-y-1  border-l-4 border-ruth-700"
            key={item.id}
          >
            <div className="text-ruth-700 font-semibold text-xl">
              {item.resarvation_now_plan_name}
            </div>
            <div className="font-bold">{item.employee_name}</div>

            <ul>
              <p className="text-center font-semibold  mb-1">HIZMETLER</p>
              {item.services.map((i, index) => (
                <li key={index} className="list-disc">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
