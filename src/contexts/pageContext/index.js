import { createContext, useState } from "react";

export const PageContext = createContext();

export function PageContextProvider({ children }) {
  const [page, setPage] = useState("home");

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
}
