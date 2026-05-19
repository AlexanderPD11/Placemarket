import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50 px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg">
            <ShoppingBag size={18} />
          </div>
          <span className="text-lg font-bold text-gray-900">Placemarket</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <a href="#como-funciona" className="text-sm text-gray-600 hover:text-blue-600 transition">Cómo funciona</a>
          <a href="#categorias" className="text-sm text-gray-600 hover:text-blue-600 transition">Categorías</a>
          <Link to="/muro" className="text-sm text-gray-600 hover:text-blue-600 transition">Vendedores</Link>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition font-medium">Iniciar sesión</a>
        <Link to="/publicar" className="bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-700 transition">
          Publicar lo que busco
        </Link>
      </div>
    </nav>
  )
}

export default Navbar