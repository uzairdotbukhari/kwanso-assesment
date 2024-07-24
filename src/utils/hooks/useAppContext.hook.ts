import { useContext } from "react";
import { AppContext, AppContextType } from "../context/app.context";

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
