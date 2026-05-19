import { Link } from 'react-router-dom'
import { ShoppingCart, Tag } from 'lucide-react'

function Benefits() {
  return (
    <section id="beneficios" className="py-24 px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-gray-50 rounded-2xl p-10 shadow-lg">
            <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <ShoppingCart className="text-white" size={22} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-3">Soy Comprador</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Ahorra horas de búsqueda. Publica hoy mismo y recibe ofertas personalizadas en minutos.
            </p>
            <Link to="/publicar" className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition inline-block">
              Publicar mi necesidad
            </Link>
          </div>

          <div className="bg-gray-900 rounded-2xl p-10 shadow-lg">
            <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Tag className="text-gray-900" size={22} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-black text-white mb-3">Soy Vendedor</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Encuentra clientes con intención de compra real. Deja de buscar leads y empieza a ofertar.
            </p>
            <Link to="/muro" className="border border-white text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-gray-900 transition inline-block">
              Empezar a ofertar
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Benefits