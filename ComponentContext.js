//https://codeguida.com/post/1818
// AdminContext.js
import React, { createContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "LANGUAGE":
      // console.log("***store/reducer/action=", action);
      return { ...state, language: action.payload };
    case "INCREASE":
      return { ...state, count: state.count + 1 };
    case "DECREASE":
      return { ...state, count: state.count - 1 };
    case "INCREASE_BY":
      return { ...state, count: state.count + 15 };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const initialState = {
  language: "en",
  count: 0
};

export const ComponentContext = createContext(initialState);

// export const AdminProvider = props => {
export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ComponentContext.Provider value={{ state, dispatch }}>
      {/* {props.children} */}
      {children}
    </ComponentContext.Provider>
  );
};
