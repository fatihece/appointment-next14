"use client";
import { now, OPENING_HOURS_INTERVAL } from "@/constants/config";
import {
  add,
  format,
  formatISO,
  isBefore,
  parse,
  secondsToMinutes,
} from "date-fns";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppContext, ActionTypes } from "@/app/context/AppContext";
import Route from "../ui/Route";
import { useTranslations } from "next-intl";
const DynamicCalendar = dynamic(() => import("react-calendar"), { ssr: false });

const CalendarComponent = () => {
  const router = useRouter();
  const [date, setDate] = useState({ justDate: null, dateTime: null });
  const { state, dispatch } = useAppContext();
  const t = useTranslations("Index");
  const updateDateAndTime = (justDate, dateTime) => {
    dispatch({
      type: ActionTypes.UPDATE_DATE,
      payload: {
        date: justDate,
        time: dateTime,
      },
    });
  };

  const getTimes = () => {
    if (!date.justDate) return;
    const { justDate } = date;

    const begining = add(justDate, { hours: 9 });
    const end = add(justDate, { hours: 17 });
    const interval = 30;

    const times = [];

    for (let i = begining; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }

    return times;
  };

  const times = getTimes();
  useEffect(() => {
    if (date.dateTime) {
      localStorage.setItem("selectedTime", date.dateTime.toISOString());
      updateDateAndTime(date.justDate, date.dateTime);
      router.push("/form");
    }
  }, [date.dateTime, router, date.justDate]);

  return (
    <section className="">
      <div className="flex flex-col h-screen items-center justify-center px-3  mx-auto max-w-screen-md shadow-lg">
        {!date.justDate && <Route />}
        <h6 className="text-xl font-semibold mb-3">{t("choose_date")}</h6>
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
                  {format(time, "kk:mm")}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <DynamicCalendar
            minDate={now}
            className="REACT-CALENDAR p-2"
            view="month"
            //   tileDisabled={({ date }) => closedDays.includes(formatISO(date))}
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
