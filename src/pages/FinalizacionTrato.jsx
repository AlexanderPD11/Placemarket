import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Search, CheckCircle, Calendar, FileText, Home } from 'lucide-react'

function FinalizacionTrato() {
  const [rating, setRating] = useState(4)
  const [resena, setResena] = useState('')

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg"><ShoppingBag size={16} /></div>
          <span className="font-black text-gray-900">Placemarket</span>
        </Link>
        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2 w-64">
          <Search size={14} className="text-gray-400" />
          <input type="text" placeholder="Buscar productos..." className="bg-transparent text-sm outline-none flex-1" />
        </div>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-blue-600">Explorar</a>
          <a href="#" className="hover:text-blue-600">Mis Tratos</a>
          <a href="#" className="hover:text-blue-600">Mensajes</a>
          <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
        </div>
      </nav>

      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        <div className="relative inline-block mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={40} className="text-green-500" strokeWidth={1.5} />
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"></div>
          <div className="absolute -bottom-1 -left-2 w-3 h-3 bg-blue-400 rounded-full"></div>
        </div>

        <h1 className="text-4xl font-black text-gray-900 mb-3">Trato Finalizado!</h1>
        <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
          La transaccion se ha completado correctamente. Ambas partes han confirmado la entrega y recepcion.
        </p>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm mt-8 text-left">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">Resumen de la Operacion</p>
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=200&q=80"
              alt="iPhone"
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div className="flex-1">
              <h3 className="font-black text-gray-900">iPhone 13 Pro Max - 256GB</h3>
              <p className="text-2xl font-black text-blue-600 mt-1">$850.00</p>
              <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                <Calendar size={12} /> 24 de Oct, 2023
              </p>
            </div>
            <span className="bg-green-100 text-green-600 text-xs font-bold px-3 py-1 rounded-full">PAGADO</span>
          </div>
          <button className="flex items-center gap-2 text-gray-500 text-sm mt-4 hover:text-blue-600 transition">
            <FileText size={14} /> Ver detalles
          </button>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mt-4 text-left">
          <h2 className="text-xl font-black text-gray-900 text-center mb-1">Califica tu experiencia</h2>
          <p className="text-sm text-gray-400 text-center mb-6">
            Como fue el trato con <span className="text-blue-600 font-semibold">Carlos M.</span>?
          </p>

          <div className="flex justify-center gap-3 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className="text-4xl transition-transform hover:scale-110"
              >
                <span className={star <= rating ? 'text-blue-600' : 'text-gray-200'}>★</span>
              </button>
            ))}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Resena (Opcional)</label>
            <textarea
              value={resena}
              onChange={(e) => setResena(e.target.value)}
              placeholder="Excelente vendedor, el producto esta impecable y la comunicacion fue rapida..."
              rows={4}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition resize-none"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition">
            Enviar Calificacion
          </button>
        </div>

        <div className="flex justify-between items-center mt-8">
          <button className="flex items-center gap-2 text-gray-500 text-sm hover:text-blue-600 transition">
            <FileText size={14} /> Ver Recibo de Operacion
          </button>
          <Link to="/" className="flex items-center gap-2 border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-semibold hover:border-blue-400 transition">
            <Home size={14} /> Volver al Inicio
          </Link>
        </div>

        <p className="text-xs text-gray-400 mt-10">© 2025 Placemarket - Tu mercado seguro</p>
      </div>
    </div>
  )
}

export default FinalizacionTrato