import { Link } from 'react-router-dom'
import { ShoppingBag, Search, CheckCircle, Star, Shield } from 'lucide-react'

const reseñas = [
  {
    iniciales: 'RL',
    nombre: 'Ricardo Lopez',
    rating: 5,
    tiempo: 'Hace 2 semanas',
    texto: 'Excelente servicio. Juan fue muy profesional y la entrega de los insumos se realizo incluso antes de lo acordado. El embalaje fue impecable.'
  },
  {
    iniciales: 'MC',
    nombre: 'Mariana Costa',
    rating: 5,
    tiempo: 'Hace 1 mes',
    texto: 'Buena comunicacion. Hubo un pequeno retraso por parte del transporte pero el vendedor siempre estuvo en contacto y resolvio mis dudas rapidamente.'
  },
  {
    iniciales: 'JS',
    nombre: 'Jorge Sanchez',
    rating: 4,
    tiempo: 'Hace 2 meses',
    texto: 'El mejor vendedor con el que he trabajado en la plataforma. Precios competitivos y calidad certificada. Muy recomendado para compras industriales.'
  },
]

const distribucion = [
  { estrellas: 5, porcentaje: 80 },
  { estrellas: 4, porcentaje: 15 },
  { estrellas: 3, porcentaje: 3 },
  { estrellas: 2, porcentaje: 0 },
  { estrellas: 1, porcentaje: 2 },
]
function PerfilVendedor() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg"><ShoppingBag size={16} /></div>
          <span className="font-black text-gray-900">Placemarket</span>
        </Link>
        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2 w-64">
          <Search size={16} className="text-gray-400" />
          <input type="text" placeholder="Buscar vendedores..." className="bg-transparent text-sm outline-none flex-1" />
        </div>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-blue-600">Explorar</a>
          <a href="#" className="hover:text-blue-600">Mis Ofertas</a>
          <a href="#" className="hover:text-blue-600">Mensajes</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">Mi Cuenta</button>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl font-black">JP</div>
                <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                  <CheckCircle size={12} className="text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-black text-gray-900">Juan Perez - Insumos Industriales</h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                    <CheckCircle size={14} /> Vendedor Verificado
                  </span>
                  <span className="text-gray-400 text-sm">• Miembro desde hace 3 anos</span>
                </div>
                <div className="flex gap-2 mt-3">
                  {['Equipamiento Pesado', 'Logistica Nacional', 'Ventas B2B'].map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="border border-gray-200 text-gray-700 px-5 py-2 rounded-full text-sm font-semibold hover:border-blue-400 transition">Contactar</button>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">Aceptar Oferta</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Ofertas ganadas', value: '124', sub: '+12 este mes', icon: ShoppingBag },
            { label: 'Calificacion', value: '4.8/5', sub: 'Basado en 45 reseñas', icon: Star },
            { label: 'Respuesta', value: '< 2 horas', sub: 'Muy alta disponibilidad', icon: Shield },
          ].map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={16} className="text-blue-600" strokeWidth={1.5} />
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </div>
                <p className="text-2xl font-black text-gray-900">{stat.value}</p>
                <p className="text-xs text-blue-500 mt-1">{stat.sub}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-6">
          <h2 className="text-lg font-black text-gray-900 mb-6">Resenas de compradores</h2>
          <div className="flex gap-8 mb-6">
            <div className="text-center">
              <p className="text-5xl font-black text-gray-900">4.8</p>
              <div className="flex gap-1 justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'} />
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-1">45 reseñas totales</p>
            </div>
            <div className="flex-1 space-y-2">
              {distribucion.map((d) => (
                <div key={d.estrellas} className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 w-2">{d.estrellas}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${d.porcentaje}%` }} />
                  </div>
                  <span className="text-xs text-gray-400 w-6">{d.porcentaje}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {reseñas.map((r, i) => (
              <div key={i} className="border-t border-gray-50 pt-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">{r.iniciales}</div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{r.nombre}</p>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} size={10} className={j < r.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{r.tiempo}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{r.texto}</p>
              </div>
            ))}
          </div>
          <button className="w-full text-center text-blue-600 text-sm font-semibold mt-4 hover:underline">Ver todas las reseñas (45)</button>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-2 rounded-xl">
              <Shield size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">Compra Protegida</p>
              <p className="text-xs text-gray-500">Tu dinero esta seguro. No liberamos el pago al vendedor hasta que confirmes la recepcion de tu pedido.</p>
            </div>
          </div>
          <button className="border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold hover:border-blue-400 transition whitespace-nowrap ml-4">Saber mas</button>
        </div>

        <div className="text-center mt-8 text-xs text-gray-400">
          © 2025 Placemarket. Todos los derechos reservados.
          <span className="mx-2">·</span>
          <a href="#" className="hover:text-blue-600">Privacidad</a>
          <span className="mx-2">·</span>
          <a href="#" className="hover:text-blue-600">Terminos</a>
          <span className="mx-2">·</span>
          <a href="#" className="hover:text-blue-600">Soporte</a>
        </div>
      </div>
    </div>
  )
}

export default PerfilVendedor