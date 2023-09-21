import { ReactNode } from "react";

export type TPortfolioProviderProps = {
  children: ReactNode;
};

export type TPortfolioContextValues = {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
};
