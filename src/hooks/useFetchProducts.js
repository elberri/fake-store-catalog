import { useState, useEffect } from 'react'
import axios from 'axios'

export function useFetchProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProducts = async () => {
    setLoading(true)
    setError(null)
    try {
      const { data } = await axios.get('https://fakestoreapi.com/products')
      setProducts(data)
    } catch {
      setError('Error al cargar los productos')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, loading, error, retry: fetchProducts }
}