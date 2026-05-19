import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Search, Plus, MapPin, Calendar, Filter, Lightbulb } from 'lucide-react'

const publicaciones = [
  {
    id: 1,
    titulo: 'Toyota Hilux 2021 o superior',
    estado: 'ACTIVA',
    estadoColor: 'bg-green-100 text-green-600',
    fecha: '15 Oct, 2023',
    ubicacion: 'Santiago, RM',
    ofertas: 8,
    nuevas: false,
    img: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=200&q=80'
  },
  {
    id: 2,
    titulo: 'Lote de Repuestos para Flota Camiones',
    estado: 'ACTIVA',
    estadoColor: 'bg-green-100 text-green-600',
    fecha: '12 Oct, 2023',
    ubicacion: 'Concepcion, Biobio',
    ofertas: 15,
    nuevas: true,
    img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=200&q=80'
  },
  {
    id: 3,
    titulo: 'Arriendo Bulldozer por 3 Meses',
    estado: 'ACTIVA',
    estadoColor: 'bg-green-100 text-green-600',
    fecha: '05 Oct, 2023',
    ubicacion: 'Antofagasta',
    ofertas: 0,
    nuevas: false,
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&q=80'
  },
]
function MisPublicaciones() {
  const [tabActiva, setTabActiva] = useState('activas')

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg"><ShoppingBag size={16} /></div>
          <span className="font-black text-gray-900">Placemarket</span>
        </Link>
        <div className="flex gap-6 text-sm">
          <a href="#" className="text-gray-400">Dashboard</a>
          <a href="#" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">Mis Publicaciones</a>
          <a href="#" className="text-gray-400">Mensajes</a>
          <a href="#" className="text-gray-400">Configuracion</a>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2">
            <Search size={14} className="text-gray-400" />
            <input type="text" placeholder="Buscar..." className="text-sm outline-none w-24" />
          </div>
          <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs font-bold">U</div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link to="/" className="hover:text-blue-600">Inicio</Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Mis Publicaciones</span>
        </div>

        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900">Mis Publicaciones y Ofertas</h1>
            <p className="text-gray-500 mt-1">Gestiona tus solicitudes de compra y revisa las propuestas recibidas.</p>
          </div>
          <Link to="/publicar" className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 transition">
            <Plus size={16} /> Crear Nueva Publicacion
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
          <div className="flex border-b border-gray-100">
            {[
              { id: 'activas', label: 'ACTIVAS', count: 12 },
              { id: 'finalizadas', label: 'FINALIZADAS', count: null },
              { id: 'borradores', label: 'BORRADORES', count: null },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setTabActiva(tab.id)}
                className={`px-6 py-4 text-sm font-bold transition flex items-center gap-2 ${tabActiva === tab.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {tab.label}
                {tab.count && <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">{tab.count}</span>}
              </button>
            ))}
          </div>

          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-2.5">
              <Search size={16} className="text-gray-400" />
              <input type="text" placeholder="Buscar por titulo de necesidad, vehiculo o servicio..." className="bg-transparent text-sm outline-none flex-1 text-gray-600" />
              <button className="flex items-center gap-1 text-xs text-gray-500 font-medium border border-gray-200 px-3 py-1.5 rounded-lg hover:border-blue-400 transition">
                <Filter size={12} /> Filtros
              </button>
            </div>
          </div>

          <div className="divide-y divide-gray-50">
            {publicaciones.map((pub) => (
              <div key={pub.id} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition">
                <img src={pub.img} alt={pub.titulo} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 text-sm">{pub.titulo}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${pub.estadoColor}`}>{pub.estado}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Calendar size={10} /> Publicado el {pub.fecha}</span>
                    <span className="flex items-center gap-1"><MapPin size={10} /> {pub.ubicacion}</span>
                  </div>
                </div>
                <div className="text-center relative">
                  <p className="text-2xl font-black text-gray-900">{pub.ofertas}</p>
                  <p className="text-xs text-gray-400 uppercase font-bold">Ofertas</p>
                  {pub.nuevas && <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-600 rounded-full"></span>}
                </div>
                <Link to="/ofertas" className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-1 whitespace-nowrap">
                  Ver Detalle →
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-2 rounded-xl">
              <Lightbulb size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">Necesitas ayuda con tus publicaciones?</p>
              <p className="text-xs text-gray-500">Descarga nuestra guia para compradores o contacta a soporte tecnico.</p>
            </div>
          </div>
          <button className="text-blue-600 text-sm font-semibold hover:underline whitespace-nowrap ml-4">Ver Centro de Ayuda</button>
        </div>

        <div className="text-center mt-8 text-xs text-gray-400">
          © 2023 Placemarket. Todos los derechos reservados.
          <span className="mx-2">·</span>
          <a href="#" className="hover:text-blue-600">Terminos y Condiciones</a>
          <span className="mx-2">·</span>
          <a href="#" className="hover:text-blue-600">Privacidad</a>
        </div>
      </div>
    </div>
  )
}

export default MisPublicaciones