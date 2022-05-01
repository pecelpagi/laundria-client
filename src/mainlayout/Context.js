import React from "react";
import { useContextReducer } from "./context.utils";

export const ComponentContext = React.createContext();

const AppContext = ({ children }) => {
  const value = useContextReducer();

  return (
    <ComponentContext.Provider {...{ value }}>
      {children}
    </ComponentContext.Provider>
  );
};

export default AppContext;
