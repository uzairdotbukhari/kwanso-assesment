import { createContext } from "react";

export interface AppContextType {
  gender: ProfileGender;
  setGender: (gender: ProfileGender) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
