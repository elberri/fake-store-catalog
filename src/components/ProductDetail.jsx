import { useNavigate } from 'react-router-dom'
import { Star, ArrowLeft, ShoppingCart } from 'lucide-react'

export default function ProductDetail({ product }) {
  const navigate = useNavigate()

  return (
    <div className="max-w-4xl mx-auto p-6">

      {/* Botón volver */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition mb-6"
      >
        <ArrowLeft size={18} />
        <span className="text-sm">Volver</span>
      </button>

      <div className="flex flex-col md:flex-row gap-8">

        {/* Imagen grande */}
        <div className="flex-1 flex items-center justify-center bg-white rounded-2xl shadow-sm p-8">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-80 object-contain"
          />
        </div>

        {/* Info del producto */}
        <div className="flex-1 flex flex-col gap-4">

          {/* Categoría */}
          <span className="text-xs text-blue-600 uppercase font-semibold tracking-widest">
            {product.category}
          </span>

          {/* Nombre completo */}
          <h1 className="text-2xl font-bold text-gray-900">
            {product.title}
          </h1>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={16} fill="currentColor" />
                <span className="text-sm font-semibold text-gray-700">
                  {product.rating.rate}
                </span>
              </div>
              <span className="text-sm text-gray-400">
                ({product.rating.count} valoraciones)
              </span>
            </div>
          )}

          {/* Precio */}
          <p className="text-3xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </p>

          {/* Descripción */}
          <p className="text-sm text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">

            {/* Volver */}
            <button
              onClick={() => navigate(-1)}
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl hover:border-blue-600 hover:text-blue-600 transition"
            >
              Atrás
            </button>

            {/* Añadir al carrito*/}
            <button
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
            >
              <ShoppingCart size={18} />
              Añadir al carrito
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}