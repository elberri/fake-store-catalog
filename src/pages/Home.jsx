import { useFetchProducts } from "../hooks/useFetchProducts";
import { useSearch } from "../context/SearchContext";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import { useParams, useNavigate } from 'react-router-dom'
import { SlidersHorizontal } from "lucide-react";

const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"]

export default function Home() {
  // Obtenemos los productos, estados y función de reintento desde el hook
  const { products, loading, error, retry } = useFetchProducts();
  // Obtenemos el término de búsqueda desde el contexto
  const { searchTerm } = useSearch();
  const { category } = useParams()
  const navigate = useNavigate()

  // Mientras la API responde, mostramos el spinner
  if (loading) return <Loading />;
  // Si la API falla, mostramos el error y un botón para reintentar
  if (error)
    return (
      <div className="flex flex-col items-center gap-4 py-20">
        <p className="text-red-500">{error}</p>
        <button
          onClick={retry}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Reintentar
        </button>
      </div>
    );

  const filteredProducts = products
    .filter(p => category ? p.category === category : true) // filtrado por categoría
    .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase())) // filtrado por búsqueda

  return (
    <main>
      {/* Hero Banner — sección principal */}
      {!category && (
      <section className="bg-gray-900 text-white px-6 py-20 flex flex-col gap-4">
        <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
          New Collection 2024
        </span>
        <h1 className="text-4xl font-bold leading-tight">
          Redefine Your <br />
          <span className="text-blue-500">Everyday Style</span>
        </h1>
        <p className="text-gray-300 text-sm max-w-sm">
          Explore our curated selection of premium electronics and high-fashion
          apparel tailored for the modern lifestyle.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            Shop Collection
          </button>
          <button className="bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-600 transition">
            View Deals
          </button>
        </div>
      </section>
      )}

      {/* Sección de productos */}
      <div className="px-4 max-w-6xl mx-auto">
          {/* Barra superior — título + filtro + sort */}
         <div className="flex items-center justify-between mb-4">
          <div>
          <h2 className="text-xl font-bold capitalize">{category || `Trending Now`}</h2>
          <p className="text-xs text-gray-400">Our most popular items this week</p>
        </div>

        <div className="flex items-center gap-2">
            {/* Ícono filtro + select de categoría */}
            <SlidersHorizontal size={16} className="text-gray-500" />
            <select
              value={category || ''}
              onChange={(e) => e.target.value ? navigate(`/products/category/${e.target.value}`) : navigate('/')}
              className="text-sm border border-gray-200 rounded-xl px-3 py-1.5 focus:outline-none focus:border-blue-500"
            >
              <option value="">Sort by: Newest</option>
              {categories.map(cat => (
                <option key={cat} value={cat} className="capitalize">{cat}</option>
              ))}
            </select>
          </div>
        </div>

       {/* Mensaje si no hay coincidencias */}
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center py-20 gap-2">
            <p className="text-gray-500">No se encontraron productos para</p>
            <p className="text-blue-600 font-semibold">"{searchTerm || category}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
