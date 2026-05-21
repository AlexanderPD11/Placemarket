import { Link } from 'react-router-dom'
import { ShoppingBag, Users, Store, MessageSquare, Bell, CreditCard, User, FileText, CheckCircle, BarChart2, DollarSign, HeadphonesIcon } from 'lucide-react'

const pantallas = [
  {
    categoria: '🛒 Experiencia del Comprador',
    items: [
      { nombre: 'Landing Page', descripcion: 'Pagina principal del marketplace', ruta: '/', icon: ShoppingBag, color: 'bg-blue-50 text-blue-600' },
      { nombre: 'Publicar Necesidad', descripcion: 'Formulario paso a paso para publicar', ruta: '/publicar', icon: FileText, color: 'bg-indigo-50 text-indigo-600' },
      { nombre: 'Gestion de Ofertas', descripcion: 'Panel para comparar ofertas recibidas', ruta: '/ofertas', icon: Users, color: 'bg-purple-50 text-purple-600' },
      { nombre: 'Mis Publicaciones', descripcion: 'Historial de todas las solicitudes', ruta: '/mis-publicaciones', icon: FileText, color: 'bg-pink-50 text-pink-600' },
    ]
  },
 {
  categoria: '🏪 Experiencia del Vendedor',
  items: [
    { nombre: 'Muro de Solicitudes', descripcion: 'Feed de necesidades de compradores', ruta: '/muro', icon: Store, color: 'bg-orange-50 text-orange-600' },

    { nombre: 'Tienda de Creditos', descripcion: 'Sistema de creditos para ofertar', ruta: '/creditos', icon: CreditCard, color: 'bg-yellow-50 text-yellow-600' },

    { nombre: 'Perfil Vendedor', descripcion: 'Perfil publico con reputacion y resenas', ruta: '/perfil', icon: User, color: 'bg-green-50 text-green-600' },

    { nombre: 'Centro de Verificacion', descripcion: 'Sistema de niveles y verificacion profesional del vendedor', ruta: '/verificacion', icon: CheckCircle, color: 'bg-blue-50 text-blue-600' },
  ]
},
  {
    categoria: '💬 Negociacion y Cierre',
    items: [
      { nombre: 'Centro de Mensajes', descripcion: 'Chat directo entre comprador y vendedor', ruta: '/mensajes', icon: MessageSquare, color: 'bg-teal-50 text-teal-600' },
      { nombre: 'Finalizacion de Trato', descripcion: 'Confirmacion y calificacion del trato', ruta: '/trato', icon: CheckCircle, color: 'bg-cyan-50 text-cyan-600' },
      { nombre: 'Notificaciones', descripcion: 'Centro de alertas en tiempo real', ruta: '/notificaciones', icon: Bell, color: 'bg-blue-50 text-blue-600' },
    ]
  },
  {
    categoria: '⚙️ Panel Administrativo',
    items: [
      { nombre: 'Dashboard Admin', descripcion: 'Metricas clave del negocio', ruta: '/admin', icon: BarChart2, color: 'bg-gray-100 text-gray-600' },
      { nombre: 'Reporte de Ingresos', descripcion: 'Detalle financiero y transacciones', ruta: '/admin/ingresos', icon: DollarSign, color: 'bg-green-50 text-green-600' },
      { nombre: 'Centro de Soporte', descripcion: 'Gestion de tickets e incidencias', ruta: '/admin/soporte', icon: HeadphonesIcon, color: 'bg-red-50 text-red-600' },
    ]
  },
]

function Demo() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg">
            <ShoppingBag size={16} />
          </div>
          <span className="font-black text-gray-900">Placemarket</span>
        </Link>
        <span className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full">DEMO — Vista previa del proyecto</span>
        <Link to="/" className="text-sm text-gray-500 hover:text-blue-600 transition">← Volver al inicio</Link>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-gray-900">Mapa de Pantallas</h1>
          <p className="text-gray-500 mt-3 text-lg">Vista completa de todas las pantallas del proyecto Placemarket</p>
          <div className="flex justify-center gap-4 mt-4 text-sm text-gray-400">
            <span>✅ 13 pantallas construidas</span>
            <span>•</span>
            <span>🚧 Backend en desarrollo</span>
            <span>•</span>
            <span>📱 Version movil proximamente</span>
          </div>
        </div>

        <div className="space-y-10">
          {pantallas.map((seccion) => (
            <div key={seccion.categoria}>
              <h2 className="text-lg font-black text-gray-900 mb-4">{seccion.categoria}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {seccion.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.ruta}
                      to={item.ruta}
                      className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition flex items-center gap-4 group"
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition">{item.nombre}</h3>
                        <p className="text-sm text-gray-500 mt-0.5">{item.descripcion}</p>
                      </div>
                      <span className="text-gray-300 group-hover:text-blue-400 transition text-lg">→</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-black mb-2">Proximos pasos</h2>
          <p className="text-blue-200 mb-6">El frontend esta completo. Ahora conectamos el backend para que todo funcione con datos reales.</p>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-blue-500 rounded-xl p-4">
              <p className="font-bold mb-1">Fase 1 ✅</p>
              <p className="text-blue-200">Frontend completo con 13 pantallas</p>
            </div>
            <div className="bg-blue-500 rounded-xl p-4">
              <p className="font-bold mb-1">Fase 2 🔄</p>
              <p className="text-blue-200">Backend con Supabase y autenticacion</p>
            </div>
            <div className="bg-blue-500 rounded-xl p-4">
              <p className="font-bold mb-1">Fase 3 ⏳</p>
              <p className="text-blue-200">Dominio propio y lanzamiento</p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">© 2025 Placemarket. Todos los derechos reservados.</p>
      </div>
    </div>
  )
}

export default Demo