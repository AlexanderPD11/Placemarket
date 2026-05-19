import { useState } from 'react'
import { ArrowLeft, ArrowRight, MapPin, CheckCircle, Car, Home, Monitor, Wrench, Shirt, Dumbbell, ShoppingBag, MoreHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'

const categorias = [
  { id: 'vehiculos', label: 'Vehículos', icon: Car, img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80' },
  { id: 'propiedades', label: 'Propiedades', icon: Home, img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80' },
  { id: 'tecnologia', label: 'Tecnología', icon: Monitor, img: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80' },
  { id: 'servicios', label: 'Servicios', icon: Wrench, img: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&q=80' },
  { id: 'ropa', label: 'Ropa', icon: Shirt, img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80' },
  { id: 'deportes', label: 'Deportes', icon: Dumbbell, img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80' },
  { id: 'hogar', label: 'Hogar', icon: ShoppingBag, img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80' },
  { id: 'otros', label: 'Otros', icon: MoreHorizontal, img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&q=80' },
]

const pasos = ['¿Qué buscas?', 'Detalles técnicos', 'Presupuesto']

function PublicarNecesidad() {
  const [paso, setPaso] = useState(1)
  const [form, setForm] = useState({
    categoria: 'vehiculos',
    marca: '',
    modelo: '',
    anio: 'Nuevo',
    ubicacion: '',
    presupuesto: '',
    descripcion: ''
  })

  const actualizar = (campo, valor) => setForm({ ...form, [campo]: valor })
  const progreso = Math.round((paso / 3) * 100)

  return (
    <div className="min-h-screen bg-white">

      <nav className="border-b border-gray-100 px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg">
            <ShoppingBag size={16} />
          </div>
          <span className="font-black text-gray-900">Placemarket</span>
        </Link>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-blue-600 transition">Mis Compras</a>
          <a href="#" className="hover:text-blue-600 transition">Ofertas Recibidas</a>
          <a href="#" className="hover:text-blue-600 transition">Mensajes</a>
        </div>
        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-12">

        <Link to="/" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition mb-6 text-sm font-medium">
          <ArrowLeft size={16} /> Volver al inicio
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-black text-gray-900">Publicar nueva necesidad de compra</h1>
          <p className="text-gray-500 mt-2">Completa los detalles para que los vendedores puedan ofrecerte lo que buscas.</p>
        </div>

        <div className="border border-gray-100 rounded-2xl p-6 mb-8 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wide">Progreso del formulario</p>
              <p className="text-sm text-gray-500 mt-0.5">Paso {paso} de 3: {pasos[paso - 1]}</p>
            </div>
            <span className="text-2xl font-black text-gray-900">{progreso}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progreso}%` }}
            />
          </div>
        </div>

        {paso === 1 && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                ¿Qué estás buscando?
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categorias.map((cat) => {
                const Icon = cat.icon
                return (
                  <button
                    key={cat.id}
                    onClick={() => actualizar('categoria', cat.id)}
                    className={`relative h-32 rounded-2xl overflow-hidden text-left transition-all ${form.categoria === cat.id ? 'ring-4 ring-blue-600 ring-offset-2' : 'opacity-80 hover:opacity-100'}`}
                  >
                    <img
                      src={cat.img}
                      alt={cat.label}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                    <div className="absolute bottom-0 left-0 p-3">
                      <Icon className="text-white mb-1" size={18} strokeWidth={1.5} />
                      <span className="text-white font-bold text-sm block">{cat.label}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {paso === 2 && (
          <div className="border border-gray-100 rounded-2xl p-8 mb-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-6">
              <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              Detalles técnicos
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1.5">Marca / Fabricante</label>
                <input
                  type="text"
                  placeholder="Ej: Toyota, Apple, Nike"
                  value={form.marca}
                  onChange={(e) => actualizar('marca', e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1.5">Modelo / Versión</label>
                <input
                  type="text"
                  placeholder="Ej: Corolla 2024, iPhone 15 Pro"
                  value={form.modelo}
                  onChange={(e) => actualizar('modelo', e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1.5">Año o Antigüedad máxima</label>
                <select
                  value={form.anio}
                  onChange={(e) => actualizar('anio', e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition bg-white"
                >
                  <option>Nuevo</option>
                  <option>Menos de 1 año</option>
                  <option>1 - 3 años</option>
                  <option>3 - 5 años</option>
                  <option>Más de 5 años</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1.5">Ubicación de entrega</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Ciudad, Estado"
                    value={form.ubicacion}
                    onChange={(e) => actualizar('ubicacion', e.target.value)}
                    className="w-full border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm outline-none focus:border-blue-400 transition"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {paso === 3 && (
          <div className="border border-gray-100 rounded-2xl p-8 mb-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-6">
              <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              Presupuesto y descripción
            </h2>
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1.5">Presupuesto estimado (USD)</label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-400 font-medium text-sm">$</span>
                <input
                  type="number"
                  placeholder="0.00"
                  value={form.presupuesto}
                  onChange={(e) => actualizar('presupuesto', e.target.value)}
                  className="w-full border border-gray-200 rounded-xl pl-8 pr-4 py-3 text-sm outline-none focus:border-blue-400 transition"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1.5">Descripción adicional</label>
              <textarea
                placeholder="Describe detalles específicos como color, estado, urgencia de compra o accesorios necesarios..."
                value={form.descripcion}
                onChange={(e) => actualizar('descripcion', e.target.value)}
                rows={5}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition resize-none"
              />
              <p className="text-xs text-gray-400 mt-1">Sé lo más específico posible para recibir mejores ofertas</p>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          {paso > 1 ? (
            <button
              onClick={() => setPaso(paso - 1)}
              className="flex items-center gap-2 border border-gray-200 text-gray-600 px-6 py-3 rounded-full text-sm font-medium hover:border-gray-300 transition"
            >
              <ArrowLeft size={16} /> Anterior
            </button>
          ) : <div />}
          {paso < 3 ? (
            <button
              onClick={() => setPaso(paso + 1)}
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
            >
              Siguiente <ArrowRight size={16} />
            </button>
          ) : (
            <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
              Publicar Necesidad <CheckCircle size={16} />
            </button>
          )}
        </div>

        <div className="text-center mt-8 text-xs text-gray-400">
          © 2025 Placemarket. Todos los derechos reservados.
          <span className="mx-2">·</span>
          <a href="#" className="hover:text-blue-600">Términos y Condiciones</a>
          <span className="mx-2">·</span>
          <a href="#" className="hover:text-blue-600">Privacidad</a>
        </div>

      </div>
    </div>
  )
}

export default PublicarNecesidad