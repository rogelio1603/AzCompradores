import React from "react";

const GlobalContext = React.createContext();

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    default:
      throw new Error("The action is not valid");
  }
};

export function GlobalProvider({ children }) {
  const [state, dispatch] = React.useReducer(GlobalReducer, {
    theme: false,
  });

  const value = [state, dispatch];

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  const context = React.useContext(GlobalContext);

  if (context === undefined) {
    throw new Error("You need the Global Provider");
  }

  return context;
};
