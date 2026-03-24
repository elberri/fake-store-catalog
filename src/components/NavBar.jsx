import { useNavigate } from 'react-router-dom'
import { Search, Heart, ShoppingBag, User } from 'lucide-react'
import SearchBar from './SearchBar'

export default function Navbar() {
  const navigate = useNavigate()

  const categories = ["electronics", "jewelry", "men's clothing", "women's clothing"]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

        {/* Logo */}
        <h1
          onClick={() => navigate('/')}
          className="text-xl font-bold text-gray-900 cursor-pointer shrink-0"
        >
          LUXE.
        </h1>

        {/* Links de categorías */}
        <nav className="hidden sm:flex items-center gap-4">
          {categories.map(category => (
            <span
              key={category}
              className="text-sm text-gray-600 capitalize cursor-pointer hover:text-blue-600 transition"
            >
              {category}
            </span>
          ))}
        </nav>

        {/* Barra de búsqueda */}
        <SearchBar />

        {/* Iconos de acción */}
        <div className="flex items-center gap-3 shrink-0">

          {/* Favoritos */}
          <button className="text-gray-600 hover:text-blue-600 transition">
            <Heart size={20} />
          </button>

          {/* Carrito con contador */}
          <button className="relative text-gray-600 hover:text-blue-600 transition">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          {/* Perfil */}
          <button className="text-gray-600 hover:text-blue-600 transition">
            <User size={20} />
          </button>

        </div>

      </div>
    </header>
  )
}