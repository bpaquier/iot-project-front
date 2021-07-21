import { createContext, useState, useEffect, useContext } from "react";
export const FloorContext = createContext();

export function FloorContextProvider({ children }) {
  const [floor, setFloor] = useState(null);

  return (
    <FloorContext.Provider value={{ floor, setFloor }}>
      {children}
    </FloorContext.Provider>
  );
}
