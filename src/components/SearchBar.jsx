// Barra de búsqueda — se conecta con el filtro de productos.
import { Search } from "lucide-react";
import { useSearch } from "../context/SearchContext";

export default function SearchBar() {
  // Obtenemos el estado y la función para actualizarlo desde el contexto
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <div className="flex items-center bg-gray-100 border border-gray-300 rounded-xl px-3 py-1.5 gap-2 w-64">
      <Search size={16} className="text-gray-400 shrink-0" />
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="text-sm w-full focus:outline-none"
      />
    </div>
  );
}