"use client";
import React, { useState } from "react";
import { useAppContext } from "@/app/context/AppContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import Route from "./Route";

const Form = () => {
  const [contact, setContact] = useState({
    fullname: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    fullname: "",
    phone: "",
  });

  const { dispatch } = useAppContext();
  const router = useRouter();

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
      newErrors.fullname = "Lütfen adınızı girin";
      formIsValid = false;
    }
    if (!contact.phone) {
      newErrors.phone = "Lütfen telefon numaranızı girin";
      formIsValid = false;
    } else if (!/^\d{11}$/.test(contact.phone)) {
      newErrors.phone = "Geçerli bir telefon numarası girin (11 haneli)";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Dispatch contact details to context
    dispatch({
      type: "SET_CONTACT",
      payload: {
        name: contact.fullname,
        phone: contact.phone,
      },
    });

    router.push("/thank-you");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Route />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 max-w-md w-full p-6 bg-white shadow-lg rounded-lg"
      >
        <h6 className="text-xl font-semibold mb-3 text-center">
          Bilgilerinizi giriniz
        </h6>
        <div className="flex flex-col">
          <label htmlFor="fullname" className="mb-1 font-medium text-gray-700">
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
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="05554443322"
            value={contact.phone}
            onChange={handleChange}
            className={`border p-2 rounded-md ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:border-mantis-500`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-mantis-600 text-white p-2 rounded-md hover:bg-mantis-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
