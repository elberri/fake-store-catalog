// Barra de búsqueda — se conecta con el filtro de productos.

export default function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Search products..."
      className="border border-gray-300 rounded-xl px-4 py-1.5 text-sm w-64 focus:outline-none focus:border-blue-500"
    />
  )
}