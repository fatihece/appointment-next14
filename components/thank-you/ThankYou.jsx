"use client";
import { useAppContext } from "@/app/context/AppContext";
import { formatDate } from "@/utils/helper";
import { useTranslations } from "next-intl";

const ThankYou = () => {
  const { state, dispatch } = useAppContext();
  const appDate = formatDate(state.date.time);
  const t = useTranslations("ThankYou");
  return (
    <div className="flex items-center justify-center h-screen px-3">
      <div className="p-4 rounded shadow-xl">
        <div className="flex flex-col items-center space-y-2 md:p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-600 w-28 h-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-2xl sm:text-4xl font-bold">{t("thanks")}</h1>

          <p className="text-lg sm:text-2xl font-semibold px-5 text-center">
            {/* Sayin {state.contact.name} randevunuz basarili bir sekilde
            olusturuldu. */}
            {t("done", { name: state.contact.name })}
          </p>
          <p className=" sm:text-xl text-center">
            {/* <strong>{state.contact.phone}</strong> nolu telefona bilgilendirme
            mesaji gonderildi. */}
            {t("phone")}
          </p>
          <h3 className="sm:text-xl font-medium">
            {/* Randevu bilgileriniz asagida siralanmistir. */}
            {t("app_info")}
          </h3>
          <ul className="sm:text-xl dive-stone-200 divide-y border-b border-t">
            <li className="py-2">
              <strong>{t("company")} :</strong> {state.company}
            </li>
            <li className="py-2">
              <strong>{t("service")} :</strong> {state.service.name}
            </li>
            <li className="py-2">
              <strong>{t("employee")} :</strong>{" "}
              {state.service.employee === "" ? " - " : state.service.employee}
            </li>
            <li className="py-2">
              <strong>{t("date")} :</strong> {appDate}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
