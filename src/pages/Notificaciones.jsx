import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Search, Bell, Settings, Tag, Star, CheckCircle, Info, MapPin, ChevronDown } from 'lucide-react'

const notificaciones = [
  {
    id: 1,
    icono: Tag,
    iconoBg: 'bg-blue-600',
    titulo: 'Has recibido una nueva oferta de',
    destacado: 'Juan Perez',
    subtitulo: "La oferta es por tu 'Camara Pro XT' • hace 2 minutos",
    accion: 'Ver Oferta',
    nuevo: true,
  },
  {
    id: 2,
    icono: Star,
    iconoBg: 'bg-orange-400',
    titulo: 'Tu paquete de creditos ha sido activado',
    destacado: null,
    subtitulo: 'Ya puedes publicar 10 nuevos anuncios! • hace 1 hora',
    accion: 'Ver Saldo',
    nuevo: false,
  },
  {
    id: 3,
    icono: CheckCircle,
    iconoBg: 'bg-green-500',
    titulo: 'Maria Garcia ha aceptado tu propuesta',
    destacado: null,
    subtitulo: 'El pago ha sido verificado. Contacta al comprador. • hace 3 horas',
    accion: 'Ir al Chat',
    nuevo: false,
  },
  {
    id: 4,
    icono: Info,
    iconoBg: 'bg-blue-500',
    titulo: 'Mejora tu seguridad activando 2FA',
    destacado: null,
    subtitulo: 'Protege tu cuenta y tus ventas con el segundo factor • hace 1 dia',
    accion: 'Configurar',
    nuevo: false,
  },
  {
    id: 5,
    icono: MapPin,
    iconoBg: 'bg-purple-500',
    titulo: 'Eres nivel',
    destacado: 'Vendedor Pro!',
    subtitulo: 'Has alcanzado 50 ventas exitosas. Nuevos beneficios disponibles. • hace 2 dias',
    accion: 'Beneficios',
    nuevo: false,
  },
]

function Notificaciones() {
  const [tabActiva, setTabActiva] = useState('todas')

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg"><ShoppingBag size={16} /></div>
          <span className="font-black text-gray-900">Placemarket</span>
        </Link>
        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2 w-64">
          <Search size={14} className="text-gray-400" />
          <input type="text" placeholder="Buscar..." className="bg-transparent text-sm outline-none flex-1" />
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-gray-500 hover:text-blue-600">Dashboard</a>
          <a href="#" className="text-sm text-gray-500 hover:text-blue-600">Mis Ofertas</a>
          <a href="#" className="text-sm text-gray-500 hover:text-blue-600">Creditos</a>
          <div className="relative">
            <Bell size={20} className="text-gray-400" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
          <Settings size={20} className="text-gray-400" />
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 flex justify-between items-center border-b border-gray-100">
            <div>
              <h1 className="text-2xl font-black text-gray-900">Centro de Notificaciones</h1>
              <p className="text-gray-500 text-sm mt-1">Gestiona tus alertas de ofertas y cuenta en tiempo real.</p>
            </div>
            <button className="flex items-center gap-2 text-blue-600 text-sm font-semibold hover:underline">
              Marcar todas como leidas <CheckCircle size={16} />
            </button>
          </div>

          <div className="flex border-b border-gray-100">
            {[
              { id: 'todas', label: 'Todas', count: 12 },
              { id: 'noleidas', label: 'No leidas', count: null },
              { id: 'sistema', label: 'Sistema', count: null },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setTabActiva(tab.id)}
                className={`px-6 py-3 text-sm font-semibold transition flex items-center gap-2 ${tabActiva === tab.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {tab.label}
                {tab.count && <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">{tab.count}</span>}
              </button>
            ))}
          </div>

          <div className="divide-y divide-gray-50">
            {notificaciones.map((notif) => {
              const Icon = notif.icono
              return (
                <div key={notif.id} className={`flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition ${notif.nuevo ? 'bg-blue-50' : ''}`}>
                  <div className="relative shrink-0">
                    <div className={`w-10 h-10 ${notif.iconoBg} rounded-xl flex items-center justify-center`}>
                      <Icon size={18} className="text-white" strokeWidth={1.5} />
                    </div>
                    {notif.nuevo && <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-700">
                      {notif.titulo}{' '}
                      {notif.destacado && <span className="text-blue-600 font-semibold">{notif.destacado}</span>}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{notif.subtitulo}</p>
                  </div>
                  <button className="border border-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-xs font-semibold hover:border-blue-400 hover:text-blue-600 transition whitespace-nowrap shrink-0">
                    {notif.accion}
                  </button>
                </div>
              )
            })}
          </div>

          <div className="px-6 py-4 text-center border-t border-gray-100">
            <button className="flex items-center gap-2 text-gray-500 text-sm font-semibold mx-auto hover:text-blue-600 transition">
              Cargar notificaciones anteriores <ChevronDown size={16} />
            </button>
          </div>
        </div>

        <div className="text-center mt-8 text-xs text-gray-400">
          © 2025 Placemarket - Notificaciones en tiempo real
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:text-blue-600">Configuracion</a>
            <a href="#" className="hover:text-blue-600">Ayuda</a>
            <a href="#" className="hover:text-blue-600">Privacidad</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notificaciones