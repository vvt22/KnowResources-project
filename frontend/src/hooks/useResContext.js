import { ResContext } from "../context/ResContext";
import { useContext } from "react";

export const useResContext = () => {
  const context = useContext(ResContext);

  if (!context) {
    throw Error("useResContext must be used inside a ResContextProvider");
  }

  return context;
};
