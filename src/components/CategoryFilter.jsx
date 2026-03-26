import { useNavigate, useParams } from 'react-router-dom'

const categories = ["electronics", "Jewelry", "men's", "women's"]

export default function CategoryFilter() {
  const navigate = useNavigate()
  const { category } = useParams() // categoría activa desde la URL

  return (
    <div className="flex flex-wrap gap-2 px-4 py-4 max-w-6xl mx-auto">

      {/* Botón "Todos" para limpiar el filtro */}
      <button
        onClick={() => navigate('/')}
        className={`px-4 py-2 rounded-xl text-sm font-semibold transition
          ${!category
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
      >
        Todos
      </button>

      {/* Botones de cada categoría */}
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => navigate(`/products/category/${cat}`)}
          className={`px-4 py-2 rounded-xl text-sm font-semibold capitalize transition
            ${category === cat
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
        >
          {cat}
        </button>
      ))}

    </div>
  )
}