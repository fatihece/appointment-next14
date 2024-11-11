"use client";
import React, { useState } from "react";

import { useAppContext } from "@/app/context/AppContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import Route from "./Route";
import { countryCodes } from "@/constants/config";

const Form = ({ slug }) => {
  const { state, dispatch } = useAppContext();
  const [contact, setContact] = useState({
    fullname: "",
    phone: "",
    countryCode: "+90",
  });
  const [errors, setErrors] = useState({
    fullname: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const formatPhoneNumber = (phone) => {
    const { countryCode, phone: rawPhone } = contact;
    if (!rawPhone.startsWith(countryCode)) {
      return `${countryCode}${rawPhone}`;
    }
    return rawPhone;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));

    // Hatalari temizle
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = { fullname: "", phone: "" };

    if (!contact.fullname) {
      newErrors.fullname = "Lütfen adınızı giriniz";
      formIsValid = false;
    }
    if (!contact.phone) {
      newErrors.phone = "Lütfen telefon numaranızı giriniz";
      formIsValid = false;
    } else if (!/^\d{10}$/.test(contact.phone)) {
      newErrors.phone = "Geçerli bir telefon numarası giriniz (10 haneli)";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     if (!validateForm()) return;

  //     // Dispatch contact details to context
  //     dispatch({
  //       type: "SET_CONTACT",
  //       payload: {
  //         name: contact.fullname,
  //         phone: formatPhoneNumber(contact.phone),
  //       },
  //     });

  //     setIsSubmitting(true);

  //     try {
  //       //   await new Promise((res) => setTimeout(res, 2000));
  //       const response = await fetch(
  //         `https://kervansaray.randevual.online/api/v1/web-resarvation/service-now-plan/add-resarvation`,
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             service_now_plan_id: state.id,
  //             plan_date: state.date,
  //             plan_time: state.time,
  //             customer_name: contact.fullname,
  //             customer_phone: formatPhoneNumber(contact.phone),
  //           }),
  //         }
  //       );

  //       // await new Promise((res) => setTimeout(res, 2000));
  //       if (response.ok) {
  //         return router.push("tesekkurler");
  //       } else {
  //         console.error(
  //           "Rezervasyon sırasında bir hata oluştu:",
  //           response.status
  //         );
  //         toast.error(`Rezervasyon sırasında bir hata oluştu!`, {
  //           position: "top-center",
  //           autoClose: 3000, // Closes after 3 seconds
  //           hideProgressBar: true,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Rezervasyon sırasında bir hata oluştu:", error);
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   };
  const baseUrl = process.env.NEXT_PUBLIC_DEV_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    dispatch({
      type: "SET_CONTACT",
      payload: {
        name: contact.fullname,
        phone: formatPhoneNumber(contact.phone),
      },
    });

    setIsSubmitting(true);

    try {
      const response = await fetch(`${baseUrl}/api/reservation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_now_plan_id: state.id,
          plan_date: state.date,
          plan_time: state.time,
          customer_name: contact.fullname,
          customer_phone: formatPhoneNumber(contact.phone),
        }),
      });

      if (response.ok) {
        return router.push(`/${slug}/tesekkurler`);
      } else {
        console.error(
          "Rezervasyon sırasında bir hata oluştu:",
          response.status,
        );
        toast.error(`Rezervasyon sırasında bir hata oluştu!`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error("Rezervasyon sırasında bir hata oluştu:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center flex-1 mt-5  max-w-screen-md mx-auto">
        <Route />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 max-w-md w-full p-6 bg-white shadow-lg rounded-lg"
        >
          <h6 className="text-xl font-semibold mb-3 text-center">
            Bilgilerinizi giriniz
          </h6>
          <div className="mb-4 text-neutral-700 p-4 flex flex-col text-sm bg-neutral-50 border border-neutral-100">
            <div>
              <strong>Personel: </strong> {state.employee_name}
            </div>
            <div>
              <strong>Islem:</strong> {state.reservation_name}
            </div>
            <div>
              <strong>Tarih:</strong>
              {state.date}
            </div>
            <div>
              <strong>Zaman:</strong>
              {state.time}
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="fullname"
              className="mb-1 font-medium text-gray-700"
            >
              Ad Soyad
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Ad Soyad"
              value={contact.fullname}
              onChange={handleChange}
              className={`border p-2 rounded-md ${
                errors.fullname ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-mantis-500`}
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm mt-1">{errors.fullname}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-1 font-medium text-gray-700">
              Telefon Numarasi
            </label>
            <div className="flex space-x-2">
              <select
                id="countryCode"
                name="countryCode"
                value={contact.countryCode}
                onChange={handleChange}
                className={`border p-2 rounded-md ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-mantis-500`}
              >
                {countryCodes?.map((country, index) => (
                  <option key={`${country.code}-${index}`} value={country.code}>
                    {country.code}
                  </option>
                ))}
              </select>

              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="5554443322"
                value={contact.phone}
                onChange={handleChange}
                className={`border p-2 rounded-md w-full ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-mantis-500`}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <button
            className="bg-primary px-2 py-3 rounded-md text-white  hover:bg-mantis-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Randevu Olusturuluyor..." : "Randevu Olustur"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
