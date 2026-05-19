import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Bell, ShoppingBag, MapPin, Clock, Eye } from 'lucide-react'

const solicitudes = [
  {
    id: 1,
    badge: 'NUEVO REQUERIMIENTO',
    badgeColor: 'bg-blue-100 text-blue-600',
    tiempo: 'Hace 15 min',
    presupuesto: '28.500',
    titulo: 'Busco Toyota Corolla 2022 Hybrid',
    categoria: 'Vehiculos',
    subcategoria: 'Ocasion',
    ubicacion: 'Santo Domingo (Zona Norte)',
    descripcion: 'Busco una unidad bien cuidada, preferiblemente acabado Sport o Style Plus. Menos de 40.000km y con historial de revisiones.',
    vendedores: 4,
    creditos: 5,
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&q=80'
  },
  {
    id: 2,
    badge: 'URGENTE',
    badgeColor: 'bg-orange-100 text-orange-600',
    tiempo: 'Hace 3 horas',
    presupuesto: '450.000',
    titulo: 'Busco Casa en zona norte',
    categoria: 'Inmobiliaria',
    subcategoria: 'Compra',
    ubicacion: 'Santo Domingo Oeste',
    descripcion: 'Familia busca chalet adosado o piso amplio con terraza. Minimo 3 habitaciones y 2 banos. Valoramos cercania a transporte publico.',
    vendedores: 128,
    creditos: 15,
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&q=80'
  },
  {
    id: 3,
    badge: 'NUEVO REQUERIMIENTO',
    badgeColor: 'bg-blue-100 text-blue-600',
    tiempo: 'Hace 5 horas',
    presupuesto: '1.200',
    titulo: 'Busco iPhone 15 Pro Max 256GB',
    categoria: 'Tecnologia',
    subcategoria: 'Electronica',
    ubicacion: 'Santiago',
    descripcion: 'Busco iPhone 15 Pro Max en color titanio natural o negro. Preferiblemente nuevo o como nuevo con garantia.',
    vendedores: 12,
    creditos: 3,
    img: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&q=80'
  }
]

const categoriasFiltro = ['Todo', 'Vehiculos', 'Inmuebles', 'Tecnologia', 'Reformas', 'Servicios']

function MuroSolicitudes() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todo')
  const [presupuesto, setPresupuesto] = useState('cualquiera')

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
        <div className="bg-blue-600 text-white p-1.5 rounded-lg">
        <ShoppingBag size={16} />
        </div>
        <div>
    <span className="font-black text-gray-900">Placemarket</span>
    <p className="text-xs text-gray-400">Panel Vendedor</p>
  </div>
</Link>
        </div>
        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2 w-80">
          <Search size={16} className="text-gray-400" />
          <input type="text" placeholder="¿Qué estás buscando vender hoy?..." className="bg-transparent text-sm outline-none flex-1 text-gray-600" />
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 rounded-full px-4 py-2 text-center">
            <p className="text-xs text-gray-400 uppercase font-bold">Saldo Actual</p>
            <p className="text-sm font-black text-gray-900">850 Creditos</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
            + Recargar
          </button>
          <Bell size={20} className="text-gray-400" />
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </nav>

      <div className="flex">
        <aside className="w-64 min-h-screen bg-white border-r border-gray-100 p-6 shrink-0">
          <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-6">
            Filtros Avanzados
          </h3>
          <div className="mb-6">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Categorias de Interes</p>
            {['Vehiculos', 'Inmobiliaria', 'Electronica', 'Servicios Hogar'].map((cat) => (
              <label key={cat} className="flex items-center gap-2 mb-2 cursor-pointer">
                <input type="checkbox" defaultChecked={cat === 'Vehiculos' || cat === 'Electronica'} className="accent-blue-600" />
                <span className="text-sm text-gray-600">{cat}</span>
              </label>
            ))}
          </div>
          <div className="mb-6">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Presupuesto del Comprador</p>
            {['Cualquier presupuesto', 'Menos de $5.000', '$5.000 - $50.000'].map((op) => (
              <label key={op} className="flex items-center gap-2 mb-2 cursor-pointer">
                <input type="radio" name="presupuesto" defaultChecked={op === 'Cualquier presupuesto'} className="accent-blue-600" />
                <span className="text-sm text-gray-600">{op}</span>
              </label>
            ))}
          </div>
          <div className="mb-6">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Ubicacion</p>
            <select className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-blue-400 bg-white">
              <option>Toda la Republica</option>
              <option>Santo Domingo</option>
              <option>Santiago</option>
            </select>
          </div>
          <button className="w-full bg-gray-900 text-white py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition">
            Aplicar Filtros
          </button>
          <div className="mt-6 bg-blue-600 rounded-2xl p-4 text-white">
            <h4 className="font-bold mb-2">Potencia tus ventas</h4>
            <p className="text-xs text-blue-200 mb-3">Accede a requerimientos premium antes que nadie con una suscripcion PRO.</p>
            <button className="w-full bg-white text-blue-600 py-2 rounded-xl text-sm font-semibold">Saber mas</button>
          </div>
        </aside>

        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-2xl font-black text-gray-900">Muro de Solicitudes</h1>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                Hay {solicitudes.length * 47} compradores buscando productos en este momento
              </p>
            </div>
            <div className="flex gap-2">
              <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold">Mas Recientes</button>
              <button className="border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold hover:border-blue-400 transition">Urgentes</button>
            </div>
          </div>

          <div className="flex gap-2 mb-6 mt-4 flex-wrap">
            {categoriasFiltro.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${categoriaActiva === cat ? 'bg-blue-600 text-white' : 'border border-gray-200 text-gray-600 hover:border-blue-400'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {solicitudes.map((s) => (
              <div key={s.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${s.badgeColor}`}>{s.badge}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={12} /> {s.tiempo}</span>
                    <span className="ml-auto text-xs text-gray-400 uppercase font-bold">Presupuesto Max.</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-black text-gray-900">{s.titulo}</h3>
                    <span className="text-2xl font-black text-gray-900 ml-4">${s.presupuesto}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><ShoppingBag size={12} /> {s.categoria} • {s.subcategoria}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {s.ubicacion}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">{s.descripcion}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Eye size={12} /> {s.vendedores} vendedores ya han ofertado
                    </span>
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-2">
                      Ofertar ahora
                      <span className="bg-blue-500 rounded-full px-2 py-0.5 text-xs">{s.creditos}</span>
                    </button>
                  </div>
                </div>
                <img src={s.img} alt={s.titulo} className="w-32 h-32 rounded-xl object-cover shrink-0" />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default MuroSolicitudes