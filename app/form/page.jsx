"use client";
import React, { useState, useEffect } from "react";
import { useAppContext, ActionTypes } from "@/app/context/AppContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import Route from "@/components/ui/Route";
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const ContactPage = ({ params }) => {
  const { state, dispatch } = useAppContext();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  // const [touchedFields, setTouchedFields] = useState({
  //   name: false,
  //   phone: false,
  //   message: false,
  // });
  const router = useRouter();

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // useEffect(() => {
  //   validateForm();
  // }, [name, phone, message]);
  // // Validate form
  // const validateForm = (fieldName) => {
  //   let errors = {};

  //   if (!name && (touchedFields.name || fieldName === "name")) {
  //     errors.name = "Name is required.";
  //   }

  //   if (!phone && (touchedFields.phone || fieldName === "phone")) {
  //     errors.phone = "Phone is required.";
  //   } else if (
  //     !isValidPhone(phone) &&
  //     (touchedFields.phone || fieldName === "phone")
  //   ) {
  //     errors.phone = "Phone is invalid.";
  //   }

  //   if (!message && (touchedFields.message || fieldName === "message")) {
  //     errors.message = "Message is required.";
  //   } else if (
  //     message.length < 6 &&
  //     (touchedFields.message || fieldName === "message")
  //   ) {
  //     errors.message = "Message must be at least 6 characters.";
  //   }

  //   setErrors(errors);
  //   setIsFormValid(Object.keys(errors).length === 0);
  // };

  // const handleFieldFocus = (fieldName) => {
  //   setTouchedFields((prev) => ({ ...prev, [fieldName]: true }));
  //   validateForm(fieldName);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // setTouchedFields({
    //   name: true,
    //   phone: true,
    //   message: true,
    // });

    // if (isFormValid) {
    dispatch({
      type: "SET_CONTACT",
      payload: {
        name,
        phone,
        message,
      },
    });
    setName("");
    setPhone("");
    setMessage("");
    router.push("thank-you");
  };
  // };

  return (
    <section className="">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md shadow-lg my-12">
        <Route />
        <h6 className="text-xl font-semibold mb-3 text-center">
          Bilgilerinizi giriniz
        </h6>
        <form
          onSubmit={handleSubmit}
          className="space-y-8 w-[350px] md:w-[450px] mx-auto"
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Ad Soyad
            </label>
            <input
              type="text"
              id="name"
              value={name}
              // onFocus={() => handleFieldFocus("name")}
              onChange={(e) => setName(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Ad Soyad"
              required
            />
            {/* {errors.name && touchedFields.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )} */}
          </div>
          <div>
            <label
              htmlFor="tel"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Telefon
            </label>
            <input
              type="tel"
              id="tel"
              value={phone}
              // onFocus={() => handleFieldFocus("phone")}
              onChange={(e) => setPhone(e.target.value)}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Telefon"
              required
            />
            {/* {errors.phone && touchedFields.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )} */}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Mesajiniz
            </label>
            <textarea
              id="message"
              rows="6"
              value={message}
              // onFocus={() => handleFieldFocus("message")}
              onChange={(e) => setMessage(e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Mesajiniz"
            ></textarea>
            {/* {errors.message && touchedFields.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )} */}
          </div>
          <button
            type="submit"
            className="text-white w-full bg-mantis-700 hover:bg-mantis-800 focus:ring-4 focus:outline-none focus:ring-mantis-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-mantis-600 dark:hover:bg-mantis-700 dark:focus:ring-mantis-800"
            // disabled={!isFormValid}
          >
            Randevu Olustur
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
