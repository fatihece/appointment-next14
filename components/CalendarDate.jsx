"use client";
import React from "react";
import CalendarComponent from "@/components/Calendar";
import Time from "@/components/Time";
import { useAppContext } from "@/app/context/AppContext";

// import { useAppContext } from "@/app/context/AppContext";

const CalendarDate = () => {
  //   const { state, dispatch } = useAppContext();
  const { state, dispatch } = useAppContext();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen  shadow-lg">
      <h6 className="text-xl font-semibold mb-3">Tarih ve saat seçiniz</h6>

      <div
        className={`grid ${state.showTime ? "sm:grid-cols-2" : ""} gap-3  py-5`}
      >
        <CalendarComponent />
        {state.showTime && <Time />}
      </div>
    </section>
  );
};

export default CalendarDate;
