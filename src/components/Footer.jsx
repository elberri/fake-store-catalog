import { Share2, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Columna 1 — Marca */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-gray-900">LUXE.</h2>
          <p className="text-sm text-gray-500">
            Your one-stop destination for premium lifestyle products, from
            jewelry to electronics. Quality guaranteed.
          </p>
          <div className="flex gap-3 mt-2">
            <button className="text-gray-400 hover:text-blue-600 transition">
              <Share2 size={18} />
            </button>
            <button className="text-gray-400 hover:text-blue-600 transition">
              <MessageCircle size={18} />
            </button>
          </div>
        </div>

        {/* Columna 2 — Categorías */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
            Categories
          </h3>
          <ul className="flex flex-col gap-2">
            {["Electronics", "Jewelry", "Men's Fashion", "Women's Fashion"].map(
              (item) => (
                <li
                  key={item}
                  className="text-sm text-gray-500 hover:text-blue-600 cursor-pointer transition"
                >
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Columna 3 — Soporte */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
            Support
          </h3>
          <ul className="flex flex-col gap-2">
            {[
              "Help Center",
              "Shipping Policy",
              "Returns & Refunds",
              "Order Tracking",
            ].map((item) => (
              <li
                key={item}
                className="text-sm text-gray-500 hover:text-blue-600 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 4 — Newsletter */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest">
            Newsletter
          </h3>
          <p className="text-sm text-gray-500">
            Get the latest updates on new arrivals and sales.
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="border bg-gray-100 border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white text-sm py-2 rounded-xl hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-gray-100 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400">
            © 2024 Luxe Store. Powered by FakeStore API.
          </p>
          <div className="flex gap-4">
            {["Terms of Service", "Privacy Policy", "Cookies"].map((item) => (
              <span
                key={item}
                className="text-xs text-gray-400 hover:text-blue-600 cursor-pointer transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
