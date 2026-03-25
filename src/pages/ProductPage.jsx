// Página detalle del producto

import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ProductDetail from '../components/ProductDetail'
import Loading from '../components/Loading'

export default function ProductPage() {
  const { id } = useParams() // Obtiene el id de la URL /product/:id
  const navigate = useNavigate()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      setError(null)
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(data)
      } catch {
        setError('Producto no encontrado')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id]) // Se vuelve a ejecutar si el id cambia

  // Mientras carga mostramos el spinner
  if (loading) return <Loading />

  // Si hubo error o el producto no existe
  if (error || !product) return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <p className="text-red-500">{error || 'Producto no encontrado'}</p>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Volver al inicio
      </button>
    </div>
  )

  return <ProductDetail product={product} />
}