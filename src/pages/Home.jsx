import { useFetchProducts } from "../hooks/useFetchProducts";
import { useSearch } from "../context/SearchContext";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

export default function Home() {
  // Obtenemos los productos, estados y función de reintento desde el hook
  const { products, loading, error, retry } = useFetchProducts();
  // Obtenemos el término de búsqueda desde el contexto
  const { searchTerm } = useSearch();

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

  // Filtramos los productos por nombre sin recargar la API
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main>
      {/* Hero Banner — sección principal */}
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

      {/* Grid de productos */}
      <div className="p-4 max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-4">New Arrivals</h2>

       {/* Mensaje si no hay coincidencias */}
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center py-20 gap-2">
            <p className="text-gray-500">No se encontraron productos para</p>
            <p className="text-blue-600 font-semibold">"{searchTerm}"</p>
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
