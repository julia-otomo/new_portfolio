import { createContext, useState } from "react";
import { TPortfolioContextValues, TPortfolioProviderProps } from "./@types";

export const PortfolioContext = createContext({} as TPortfolioContextValues);

export const PortfolioProvider = ({ children }: TPortfolioProviderProps) => {
  const [menu, setMenu] = useState(false);

  return (
    <PortfolioContext.Provider value={{ menu, setMenu }}>
      {children}
    </PortfolioContext.Provider>
  );
};
