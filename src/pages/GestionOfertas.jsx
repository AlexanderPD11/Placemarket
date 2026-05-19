import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Search, Bell, Settings, Plus, Filter, Mail, Star } from 'lucide-react'

const stats = [
  { label: 'Pedidos Activos', value: '12', sub: '+2 esta semana', icon: ShoppingBag, color: 'text-blue-600' },
  { label: 'Ofertas Recibidas', value: '48', sub: '4.0 promedio por pedido', icon: Mail, color: 'text-blue-600' },
  { label: 'Presupuesto Total', value: '$4,500.00', sub: 'Proyectado Mensual', icon: ShoppingBag, color: 'text-blue-600' },
]

const pedidos = [
  {
    id: 1,
    titulo: 'Diseño de Logotipo Corporativo',
    fecha: 'Publicado hace 2 dias',
    presupuesto: '$200 - $500',
    ofertas: 15,
    estado: 'ABIERTO',
    estadoColor: 'bg-green-100 text-green-600',
    expandido: true,
    ofertasDetalle: [
      { nombre: 'Alex Rivera', iniciales: 'AR', precio: '$350.00', entrega: 'ENTREGA EN 3 DIAS', rating: 4.8, reviews: 120, descripcion: 'Tengo mas de 5 anos de experiencia disenando identidades visuales para startups tecnologicas. Ofrezco 3 conceptos iniciales y revisiones ilimitadas.' },
      { nombre: 'Elena Gomez', iniciales: 'EG', precio: '$480.00', entrega: 'ENTREGA EN 5 DIAS', rating: 5.0, reviews: 42, descripcion: 'Diseno premium con manual de marca completo incluido. Me especializo en minimalismo y legibilidad para medios digitales e impresos.' },
    ]
  },
  {
    id: 2,
    titulo: 'Desarrollo Web E-commerce',
    fecha: 'Publicado hace 5 dias',
    presupuesto: '$1,500 - $3,000',
    ofertas: 8,
    estado: 'EN REVISION',
    estadoColor: 'bg-yellow-100 text-yellow-600',
    expandido: false,
    ofertasDetalle: []
  },
  {
    id: 3,
    titulo: 'Campana Redes Sociales',
    fecha: 'Publicado hace 1 semana',
    presupuesto: '$600',
    ofertas: 25,
    estado: 'ABIERTO',
    estadoColor: 'bg-green-100 text-green-600',
    expandido: false,
    ofertasDetalle: []
  },
]
function GestionOfertas() {
  const [pedidosState, setPedidosState] = useState(pedidos)

  const toggleExpand = (id) => {
    setPedidosState(pedidosState.map(p => p.id === id ? { ...p, expandido: !p.expandido } : p))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg"><ShoppingBag size={16} /></div>
          <span className="font-black text-gray-900">Placemarket</span>
        </Link>
        <div className="flex gap-6 text-sm">
          <a href="#" className="text-gray-400">Dashboard</a>
          <a href="#" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">Mis Pedidos</a>
          <a href="#" className="text-gray-400">Mensajes</a>
          <a href="#" className="text-gray-400">Perfil</a>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2">
            <Search size={14} className="text-gray-400" />
            <input type="text" placeholder="Buscar pedidos..." className="text-sm outline-none w-32" />
          </div>
          <Bell size={18} className="text-gray-400" />
          <Settings size={18} className="text-gray-400" />
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-xs font-bold text-blue-600 uppercase tracking-wide">Centro de Control</p>
            <h1 className="text-3xl font-black text-gray-900 mt-1">Gestion de Ofertas</h1>
            <p className="text-gray-500 mt-1">Revisa y gestiona las propuestas de vendedores para tus pedidos activos.</p>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-blue-700 transition">
            <Plus size={16} /> Crear Nuevo Pedido
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-10">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={16} className={stat.color} />
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">{stat.label}</p>
                </div>
                <p className="text-3xl font-black text-gray-900">{stat.value}</p>
                <p className="text-xs text-blue-500 mt-1">{stat.sub}</p>
              </div>
            )
          })}
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-black text-gray-900">Mis Pedidos Activos</h2>
          <button className="border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:border-blue-400 transition">
            <Filter size={14} /> Filtrar
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-5 px-6 py-3 border-b border-gray-100 text-xs font-bold text-gray-400 uppercase tracking-wide">
            <span className="col-span-2">Pedido</span>
            <span>Presupuesto</span>
            <span>Ofertas</span>
            <span>Estado</span>
          </div>

          {pedidosState.map((pedido) => (
            <div key={pedido.id} className="border-b border-gray-50 last:border-0">
              <div className="grid grid-cols-5 px-6 py-4 items-center">
                <div className="col-span-2">
                  <p className="font-bold text-gray-900 text-sm">{pedido.titulo}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{pedido.fecha}</p>
                </div>
                <span className="text-sm text-gray-600">{pedido.presupuesto}</span>
                <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full w-fit flex items-center gap-1">
                  <Mail size={10} /> {pedido.ofertas} Ofertas
                </span>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${pedido.estadoColor}`}>{pedido.estado}</span>
                  <button onClick={() => toggleExpand(pedido.id)} className="text-blue-600 text-xs font-semibold hover:underline">
                    Ver Ofertas &gt;
                  </button>
                </div>
              </div>

              {pedido.expandido && pedido.ofertasDetalle.length > 0 && (
                <div className="bg-blue-50 px-6 py-4 mx-4 mb-4 rounded-2xl">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      Ofertas Recibidas para: <span className="text-blue-600">{pedido.titulo}</span>
                    </p>
                    <p className="text-xs text-gray-400">Mostrando las mejores propuestas</p>
                  </div>
                  <div className="space-y-3">
                    {pedido.ofertasDetalle.map((oferta, i) => (
                      <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">{oferta.iniciales}</div>
                            <div>
                              <p className="font-bold text-gray-900 text-sm">{oferta.nombre}</p>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, j) => (
                                  <Star key={j} size={10} className={j < Math.floor(oferta.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'} />
                                ))}
                                <span className="text-xs text-gray-400">{oferta.rating} ({oferta.reviews} res)</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-black text-blue-600">{oferta.precio}</p>
                            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{oferta.entrega}</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mb-3 italic">"{oferta.descripcion}"</p>
                        <div className="flex gap-2">
                          <button className="flex-1 bg-blue-600 text-white py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition">Aceptar Oferta</button>
                          <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-xl text-sm font-semibold hover:bg-blue-50 transition">Chat con Vendedor</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="px-6 py-4 text-center">
            <button className="text-blue-600 text-sm font-semibold hover:underline">Cargar mas pedidos</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GestionOfertas