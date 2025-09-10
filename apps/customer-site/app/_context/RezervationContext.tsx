"use client";
import { createContext, ReactNode, useContext, useState } from "react";

const RezervationContext = createContext<any>(null);
const initialState = {
  from: undefined,
  to: undefined,
};

function RezervationProvider({ children }: { children: ReactNode }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);
  return (
    <RezervationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </RezervationContext.Provider>
  );
}

function useRezervation() {
  const context = useContext(RezervationContext);
  if (context === undefined) {
    throw new Error("کانتکس بیرون از provider است.");
  }
  return context;
}

export { RezervationProvider, useRezervation };
