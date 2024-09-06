"use client";
import data from "/data.json";
import Link from "next/link";
import Route from "@/components/ui/Route";
import Services from "@/components/services/Services";
import { useEffect } from "react";
import { useAppContext, ActionTypes } from "@/app/context/AppContext";

const HomePage = ({ store, slug }) => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    const updateCompany = (companyName) => {
      dispatch({
        type: ActionTypes.UPDATE_COMPANY,
        payload: companyName,
      });
    };
    // Sayfa yüklendiğinde company bilgisini güncelle
    updateCompany(store?.name);
  }, [store, dispatch]); // store prop'u değiştiğinde bu useEffect tekrar çalışacak

  return (
    <>
      <section className="flex h-screen items-center mt-20 gap-4 flex-col max-w-screen-md mx-auto">
        <Route />

        <h3 className="text-4xl font-bold text-center uppercase">
          {store?.name}
        </h3>

        <div className="flex justify-between items-center">
          <h3 className="uppercase font-semibold text-2xl my-3">SERVISLER</h3>
        </div>

        <div className="flex flex-col md:flex-row gap-4 text-center ">
          {store?.services.map((s) => (
            <Services
              service={s.name}
              key={s.id}
              slug={s.slug}
              path={slug}
              list={s.employees}
              price={s.price}
            >
              {s.name}
            </Services>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
