"use client";
import { createContext, useContext, useEffect, useReducer, useState } from "react";

const initialState = {
	id: 1,
	reservation_name: "",
	day_number: 1,
	employee_name: "",
	available_times: [],
	date: null,
	time: null,
	contact: {
		name: "",
		phone: "",
	},
};

// Reducer fonksiyonu
// const reducer = (state, action) => {
//   console.log("action", action);
//   switch (action.type) {
//     case ActionTypes.GET_SERVICE:
//       return {
//         ...state,
//         id: action.payload.id,
//         reservation_name: action.payload.resarvation_now_plan_name,
//         day_number: 1,
//         employee_name: action.payload.employee_name,
//       };
//     case ActionTypes.UPDATE_DATE:
//       return {
//         ...state,
//         date: {
//           ...state.date,
//           date: action.payload.date,
//           time: action.payload.time,
//         },
//       };
//     case ActionTypes.UPDATE_CONTACT:
//       return { ...state, contact: action.payload };
//     case ActionTypes.RESET_STATE:
//       return initialState;
//     default:
//       return state;
//   }
// };

const reservationReducer = (state, action) => {
	console.log("ACTION", action);
	switch (action.type) {
		case "SET_RESERVATION":
			return { ...state, ...action.payload };
		case "UPDATE_DATE":
			return {
				...state,
				date: action.payload.date,
				day_number: action.payload.day_number, // Update day number (1 = Monday, etc.)
				reservation_name: action.payload.reservation_name,
				employee_name: action.payload.employee_name,
				id: action.payload.id,
			};
		case "GET_TIME":
			return {
				...state,
				time: action.payload.time, // Update selected time
			};
		case "SET_CONTACT":
			return { ...state, contact: { ...state.contact, ...action.payload } };
		default:
			return state;
	}
};

//1) Create the context
export const AppContext = createContext();

//step2:create the provider
export function AppProvider({ children }) {
	const [state, dispatch] = useReducer(reservationReducer, initialState);
	// console.log("DATA", state);

	return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

//3 create the Use context hook
export function useAppContext() {
	// use the useContext hook to access the context data
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppContext must be used within an AppProvider");
	}
	return context;
}
//4 Integrate the AppProvider in the Upermost component
