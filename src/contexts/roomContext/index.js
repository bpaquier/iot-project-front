import { createContext, useState } from "react";

export const RoomContext = createContext();

export function RoomContextProvider({ children }) {
  const [room, setRoom] = useState(null);

  return (
    <RoomContext.Provider value={{ room, setRoom }}>
      {children}
    </RoomContext.Provider>
  );
}
