import { createContext, useContext, useState } from "react";

// Creamos el contexto
const SearchContext = createContext();

// Hook personalizado para consumir el contexto fácilmente
export function useSearch() {
  return useContext(SearchContext);
}

// Provider que envuelve la app y expone el estado
export function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}
