"use client";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const initialState = {
  company: "",
  service: {
    name: "",
    employee: "",
  },
  date: {
    date: "",
    time: "",
  },
  contact: {
    name: "",
    phone: "",
    message: "",
  },
};
// Action türleri
export const ActionTypes = {
  UPDATE_COMPANY: "UPDATE_COMPANY",
  UPDATE_SERVICE: "UPDATE_SERVICE",
  UPDATE_DATE: "UPDATE_DATE",
  UPDATE_CONTACT: "UPDATE_CONTACT",
  RESET_STATE: "RESET_STATE",
};

// Reducer fonksiyonu
const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_COMPANY:
      return { ...state, company: action.payload };
    case ActionTypes.UPDATE_SERVICE:
      return {
        ...state,
        service: {
          ...state.service,

          name:
            action.payload.name !== undefined
              ? action.payload.name
              : state.service.name,
          employee:
            action.payload.employee !== undefined
              ? action.payload.employee
              : state.service.employee,
        },
        // toast.success("Hizmet basarili bir sekilde eklendi")
      };
    case ActionTypes.UPDATE_DATE:
      return {
        ...state,
        date: {
          ...state.date,
          date: action.payload.date,
          time: action.payload.time,
        },
      };
    case ActionTypes.UPDATE_CONTACT:
      return { ...state, contact: action.payload };
    case ActionTypes.RESET_STATE:
      return initialState;
    default:
      return state;
  }
};

//1) Create the context
export const AppContext = createContext();

//step2:create the provider
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log("DATA", state);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
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
