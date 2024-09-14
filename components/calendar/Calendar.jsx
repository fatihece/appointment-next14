"use client";
import { add, format } from "date-fns";
import { now, OPENING_HOURS_INTERVAL } from "@/constants/config";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppContext, ActionTypes } from "@/app/context/AppContext";
import Route from "../ui/Route";

const DynamicCalendar = dynamic(() => import("react-calendar"), { ssr: false });

const CalendarComponent = ({ reservation_name, employee_name, id }) => {
  const router = useRouter();
  const [date, setDate] = useState({ justDate: null, dateTime: null });
  const { state, dispatch } = useAppContext();
  console.log("?CALENDAR", state);
  // Format the date to a human-readable format
  const formatDate = (date) => {
    return date ? format(date, "MMMM d, yyyy") : "";
  };

  // Format the time to a human-readable format
  const formatTime = (time) => {
    return time ? format(time, "h:mm a") : "";
  };

  // Function to map day of the week (Monday = 1, ..., Sunday = 7)
  const getDayNumber = (date) => {
    const day = date.getDay();
    return day === 0 ? 7 : day; // Map Sunday (0) to 7, Monday to 1, etc.
  };

  // Update context with selected date, time, reservation details, and day number
  const updateDateAndTime = (justDate, dateTime) => {
    const day_number = getDayNumber(justDate); // Get day number from selected date
    console.log("????????".reservation_name, employee_name);
    dispatch({
      type: "UPDATE_DATE",
      payload: {
        date: formatDate(justDate), // Human-readable date format
        time: formatTime(dateTime), // Human-readable time format
        day_number, // Day number (1 = Monday, etc.)
        reservation_name: state.reservation_name, // Reservation details passed as props
        employee_name: state.employee_name, // Employee details
        id: state.id, // Reservation ID
      },
    });
  };

  // Generate available times based on selected date
  const getTimes = () => {
    if (!date.justDate) return;
    const { justDate } = date;

    const begining = add(justDate, { hours: 9 }); // Start at 9 AM
    const end = add(justDate, { hours: 17 }); // End at 5 PM
    const interval = 30; // 30-minute intervals

    const times = [];
    for (let i = begining; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }

    return times;
  };

  const times = getTimes();

  // When a time is selected, store it in localStorage and update the state
  useEffect(() => {
    if (date.dateTime) {
      localStorage.setItem("selectedTime", date.dateTime.toISOString());
      updateDateAndTime(date.justDate, date.dateTime); // Update with formatted date, time, and day_number
      router.push("/form"); // Redirect to form page after selecting time
    }
  }, [date.dateTime, router, date.justDate]);

  return (
    <section className="">
      <div className="flex flex-col h-screen items-center justify-center px-3 mx-auto max-w-screen-md shadow-lg">
        {!date.justDate && <Route />}
        <h6 className="text-xl font-semibold mb-3">Tarih ve saat seçiniz</h6>

        {date.justDate ? (
          <div className="flex justify-center max-w-screen-md flex-wrap gap-4">
            {times?.map((time, i) => (
              <div
                className="bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer px-4 py-3 w-[100px] text-center"
                key={`time-${i}`}
              >
                <button
                  onClick={() =>
                    setDate((prev) => ({ ...prev, dateTime: time }))
                  }
                  type="button"
                >
                  {formatTime(time)} {/* Format time as h:mm a */}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <DynamicCalendar
            minDate={now}
            className="REACT-CALENDAR p-2"
            view="month"
            onClickDay={(date) =>
              setDate((prev) => ({ ...prev, justDate: date }))
            }
            locale="tr-TR"
          />
        )}
      </div>
    </section>
  );
};

export default CalendarComponent;
