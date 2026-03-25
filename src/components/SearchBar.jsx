// Barra de búsqueda — se conecta con el filtro de productos.
import { Search } from 'lucide-react'
export default function SearchBar() {
  return (
    <div className="flex items-center bg-gray-100 border border-gray-300 rounded-xl px-3 py-1.5 gap-2 w-64">
      <Search size={16} className="text-gray-400 shrink-0" />
    <input
      type="text"
      placeholder="Search products..."
      className="border border-none rounded-xl px-4 py-1.5 text-sm w-64 focus:outline-none focus:border-blue-500"
    />
    </div>
  )
}