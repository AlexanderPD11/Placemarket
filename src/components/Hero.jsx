import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'

function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center px-8 pt-20">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div>
          <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
            Marketplace Inverso
          </span>
          <h1 className="text-5xl font-black text-gray-900 mt-6 leading-tight">
            Tú pides, los expertos <span className="text-blue-600">ofertan.</span>
          </h1>
          <p className="text-gray-500 mt-6 text-lg leading-relaxed">
            Publica lo que necesitas y deja que los mejores proveedores compitan por ofrecerte el mejor precio y calidad. Sin búsquedas infinitas, solo resultados.
          </p>
          <div className="flex gap-4 mt-8">
            <Link to="/publicar" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition text-sm">
              Publicar lo que busco
            </Link>
            <a href="#vendedores" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-blue-400 transition text-sm">
              Empezar a ofertar
            </a>
          </div>
          <div className="flex items-center gap-3 mt-8">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-indigo-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">+5k</div>
            </div>
            <span className="text-sm text-gray-500">Miles de expertos listos para ayudarte</span>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="bg-gray-900 rounded-2xl overflow-hidden h-80 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center text-white opacity-30">
                <ShoppingBag size={64} />
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white rounded-xl p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">$</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Nueva Oferta</p>
                  <p className="text-sm font-bold text-gray-900">$1,200.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero