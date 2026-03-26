/* Tarjeta de los productos */
import { useNavigate } from 'react-router-dom'
import { Star } from 'lucide-react'

export default function ProductCard({ product }) {
  const navigate = useNavigate()

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col gap-3">
      <img
        src={product.image}
        alt={product.title}
        onClick={() => navigate(`/product/${product.id}`)}
        className="w-full h-48 object-contain"
      />
      <div className="flex flex-col gap-1 flex-1">
        <p className="text-xs text-blue-600 uppercase">{product.category}</p>
        <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
        <div className="flex items-center justify-between mt-auto pt-2">
        <p className="font-bold">${product.price.toFixed(2)}</p>
        {product.rating && (
          <div className="flex items-center gap-1 text-yellow-400">
            <Star size={12} fill="currentColor" />
            <span className="text-xs font-semibold text-gray-700">
              {product.rating.rate}
            </span>
            </div>
        )}
        </div>
      </div>
      <button
        onClick={() => navigate(`/product/${product.id}`)}
        className="bg-gray-900 text-white text-sm py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  )
}