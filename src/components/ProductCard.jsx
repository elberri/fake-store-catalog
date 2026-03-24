/* Tarjeta de los productos */
import { useNavigate } from 'react-router-dom'

export default function ProductCard({ product }) {
  const navigate = useNavigate()

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col gap-3">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain"
      />
      <div className="flex flex-col gap-1 flex-1">
        <p className="text-xs text-gray-400 uppercase">{product.category}</p>
        <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
        <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
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