import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  ShoppingBag,
  Bell,
  Search,
  Settings,
 Wallet,
  BadgeDollarSign,
  CheckCircle2,
  LayoutDashboard,
  Tag,
  Star,
  Eye,
  Plus,
  Clock,
  ChevronDown
} from 'lucide-react'

const menuItems = [
  {
    label: 'Dashboard',
    ruta: '/vendor-dashboard',
    icon: LayoutDashboard
  },

  {
    label: 'Solicitudes',
    ruta: '/muro',
    icon: ShoppingBag
  },

  {
    label: 'Ofertas',
    ruta: '/gestion-ofertas',
    icon: Tag
  },

  {
    label: 'Créditos',
    ruta: '/creditos',
    icon: Wallet
  },

  {
    label: 'Configuración',
    ruta: '/',
    icon: Settings
  }
]

const stats = [
  {
    title: 'Pedidos activos',
    value: '12',
    sub: '+2 esta semana',
    icon: ShoppingBag
  },

  {
    title: 'Ofertas recibidas',
    value: '48',
    sub: '+14%',
    icon: BadgeDollarSign
  },

  {
    title: 'Propuestas aceptadas',
    value: '26',
    sub: '+8%',
    icon: CheckCircle2
  },

  {
    title: 'Créditos utilizados',
    value: '185',
    sub: 'Últimos 30 días',
    icon: Wallet
  }
]

const pedidosIniciales = [
  {
    id: 1,
    titulo: 'Diseño de Logotipo Corporativo',
    fecha: 'Publicado hace 2 días',
    presupuesto: '$200 - $500',
    ofertas: 15,
    estado: 'ABIERTO',
    estadoColor: 'bg-green-100 text-green-600',

    expandido: true,

    ofertasDetalle: [
      {
        nombre: 'Alex Rivera',
        iniciales: 'AR',
        precio: '$350',
        entrega: 'Entrega en 3 días',
        rating: 4.8,
        reviews: 120,

        descripcion:
          'Tengo más de 5 años creando identidades visuales modernas para startups y marcas digitales.'
      },

      {
        nombre: 'Elena Gómez',
        iniciales: 'EG',
        precio: '$480',
        entrega: 'Entrega en 5 días',
        rating: 5.0,
        reviews: 42,

        descripcion:
          'Diseño premium incluyendo manual de marca completo y múltiples revisiones.'
      }
    ]
  },

  {
    id: 2,
    titulo: 'Desarrollo Web E-commerce',
    fecha: 'Publicado hace 5 días',
    presupuesto: '$1,500 - $3,000',
    ofertas: 8,
    estado: 'EN REVISIÓN',
    estadoColor: 'bg-yellow-100 text-yellow-600',

    expandido: false,

    ofertasDetalle: []
  },

  {
    id: 3,
    titulo: 'Campaña Redes Sociales',
    fecha: 'Publicado hace 1 semana',
    presupuesto: '$600',
    ofertas: 25,
    estado: 'ABIERTO',
    estadoColor: 'bg-green-100 text-green-600',

    expandido: false,

    ofertasDetalle: []
  }
]

function GestionOfertas() {

  const [pedidos, setPedidos] = useState(pedidosIniciales)

  const toggleExpand = (id) => {

    setPedidos(
      pedidos.map((pedido) =>
        pedido.id === id
          ? { ...pedido, expandido: !pedido.expandido }
          : pedido
      )
    )
  }

  return (

    <div className="min-h-screen bg-gray-50 flex">

      {/* SIDEBAR */}

      <aside className="w-56 bg-white border-r border-gray-100 min-h-screen flex flex-col shrink-0 fixed left-0 top-0 bottom-0">

        <div className="p-6 border-b border-gray-100">

          <Link to="/" className="flex items-center gap-2">

            <div className="bg-blue-600 text-white p-1.5 rounded-lg">
              <ShoppingBag size={16} />
            </div>

            <span className="font-black text-blue-600 text-lg">
              Placemarket
            </span>

          </Link>

        </div>

        <nav className="flex-1 p-4 space-y-1">

          {menuItems.map((item) => {

            const Icon = item.icon

            return (

              <Link
                key={item.label}
                to={item.ruta}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                  item.label === 'Ofertas'
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >

                <Icon size={18} strokeWidth={1.5} />

                {item.label}

              </Link>
            )
          })}

        </nav>

        <div className="p-4 border-t border-gray-100">

          <div className="bg-blue-600 rounded-2xl p-4 text-white">

            <p className="text-xs uppercase tracking-wide text-blue-200 font-bold mb-1">
              PRO BUYER
            </p>

            <p className="font-black text-sm mb-3">
              Gestiona ofertas con prioridad
            </p>

            <button className="w-full bg-white text-blue-600 py-2 rounded-xl text-xs font-bold hover:bg-blue-50 transition">
              Mejorar Cuenta
            </button>

          </div>

        </div>

      </aside>

      {/* MAIN */}

      <main className="flex-1 ml-56">

        {/* TOPBAR */}

        <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-10">

          <div>

            <h1 className="text-xl font-black text-gray-900">
              Gestión de Ofertas
            </h1>

            <p className="text-sm text-gray-400 mt-0.5">
              Administra propuestas y desbloquea contactos.
            </p>

          </div>

          <div className="flex items-center gap-3">

            <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-2 w-72">

              <Search size={16} className="text-gray-400" />

              <input
                type="text"
                placeholder="Buscar pedidos..."
                className="bg-transparent text-sm outline-none flex-1 text-gray-700"
              />

            </div>

            <button className="border border-gray-200 text-gray-700 px-4 py-2 rounded-xl text-sm font-semibold hover:border-gray-300 transition">
              Recargar créditos
            </button>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-2">
              <Plus size={14} />
              Upgrade PRO
            </button>

            <Bell size={18} className="text-gray-400" />

            <div className="w-9 h-9 bg-gray-200 rounded-full"></div>

          </div>

        </div>

        <div className="p-8">

          {/* STATS */}

          <div className="grid grid-cols-4 gap-4 mb-8">

            {stats.map((stat) => {

              const Icon = stat.icon

              return (

                <div
                  key={stat.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
                >

                  <div className="flex items-start justify-between mb-4">

                    <div className="bg-blue-50 p-2.5 rounded-xl">

                      <Icon
                        size={18}
                        className="text-blue-600"
                      />

                    </div>

                    <span className="text-xs font-bold text-green-500">
                      {stat.sub}
                    </span>

                  </div>

                  <p className="text-sm text-gray-500 font-medium mb-1">
                    {stat.title}
                  </p>

                  <p className="text-3xl font-black text-gray-900">
                    {stat.value}
                  </p>

                </div>
              )
            })}

          </div>

          {/* HEADER */}

          <div className="flex justify-between items-center mb-6">

            <div>

              <h2 className="text-2xl font-black text-gray-900">
                Pedidos activos
              </h2>

              <p className="text-sm text-gray-400 mt-1">
                Revisa y administra todas las propuestas recibidas.
              </p>

            </div>

            <button className="flex items-center gap-2 border border-gray-200 text-gray-600 px-4 py-2 rounded-xl text-sm font-medium hover:border-gray-300 transition">

              Últimos 7 días

              <ChevronDown size={14} />

            </button>

          </div>

          {/* PEDIDOS */}

          <div className="space-y-6">

            {pedidos.map((pedido) => (

              <div
                key={pedido.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >

                {/* TOP */}

                <div className="p-6 border-b border-gray-100">

                  <div className="flex items-start justify-between gap-6">

                    <div>

                      <div className="flex items-center gap-3 mb-3">

                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${pedido.estadoColor}`}>
                          {pedido.estado}
                        </span>

                        <span className="text-xs text-gray-400 flex items-center gap-1">

                          <Clock size={12} />

                          {pedido.fecha}

                        </span>

                      </div>

                      <h3 className="text-2xl font-black text-gray-900">
                        {pedido.titulo}
                      </h3>

                    </div>

                    <div className="text-right shrink-0">

                      <p className="text-xs uppercase tracking-wide text-gray-400 font-bold mb-1">
                        Presupuesto
                      </p>

                      <p className="text-3xl font-black text-blue-600">
                        {pedido.presupuesto}
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center justify-between mt-6">

                    <div className="flex items-center gap-3">

                      <span className="bg-blue-50 text-blue-600 text-sm font-bold px-4 py-2 rounded-xl flex items-center gap-2">

                        <Eye size={14} />

                        {pedido.ofertas} ofertas recibidas

                      </span>

                    </div>

                    <button
                      onClick={() => toggleExpand(pedido.id)}
                      className="text-blue-600 text-sm font-semibold hover:underline"
                    >

                      {pedido.expandido
                        ? 'Ocultar ofertas'
                        : 'Ver ofertas'}

                    </button>

                  </div>

                </div>

                {/* OFERTAS */}

                {pedido.expandido && pedido.ofertasDetalle.length > 0 && (

                  <div className="p-6 bg-gray-50 space-y-4">

                    {pedido.ofertasDetalle.map((oferta, index) => (

                      <div
                        key={index}
                        className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm"
                      >

                        <div className="flex justify-between items-start gap-5">

                          {/* LEFT */}

                          <div className="flex gap-4 flex-1">

                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shrink-0">

                              {oferta.iniciales}

                            </div>

                            <div className="flex-1">

                              <div className="flex items-center gap-3 flex-wrap">

                                <h4 className="font-black text-gray-900">
                                  {oferta.nombre}
                                </h4>

                                <div className="flex items-center gap-1">

                                  {[...Array(5)].map((_, i) => (

                                    <Star
                                      key={i}
                                      size={12}
                                      className={
                                        i < Math.floor(oferta.rating)
                                          ? 'text-yellow-400 fill-yellow-400'
                                          : 'text-gray-200 fill-gray-200'
                                      }
                                    />
                                  ))}

                                  <span className="text-xs text-gray-400 ml-1">
                                    {oferta.rating} ({oferta.reviews})
                                  </span>

                                </div>

                              </div>

                              <p className="text-sm text-gray-500 leading-relaxed mt-3">

                                {oferta.descripcion}

                              </p>

                              <div className="flex items-center gap-2 mt-4 flex-wrap">

                                <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
                                  {oferta.entrega}
                                </span>

                                <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                                  Profesional verificado
                                </span>

                              </div>

                            </div>

                          </div>

                          {/* RIGHT */}

                          <div className="text-right shrink-0">

                            <p className="text-3xl font-black text-blue-600">
                              {oferta.precio}
                            </p>

                          </div>

                        </div>

                        {/* ALERT */}

                        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mt-5">

                          <p className="text-sm text-blue-700 leading-relaxed">

                            El contacto del proveedor permanece protegido
                            hasta que aceptes o desbloquees esta propuesta.

                          </p>

                        </div>

                        {/* ACTIONS */}

                        <div className="flex gap-3 mt-5">

                          <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition">

                            Desbloquear contacto

                          </button>

                          <button className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-xl text-sm font-semibold hover:bg-blue-50 transition">

                            Aceptar propuesta

                          </button>

                        </div>

                      </div>

                    ))}

                  </div>

                )}

              </div>

            ))}

          </div>

          {/* FOOTER */}

          <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-100">

            <p className="text-xs text-gray-400">
              © 2025 Placemarket. Empowering Professional Commerce.
            </p>

            <div className="flex gap-6 text-xs text-gray-400">

              <a href="#" className="hover:text-blue-600 transition">
                Términos
              </a>

              <a href="#" className="hover:text-blue-600 transition">
                Privacidad
              </a>

              <a href="#" className="hover:text-blue-600 transition">
                Centro de Ayuda
              </a>

            </div>

          </div>

        </div>

      </main>

    </div>
  )
}

export default GestionOfertas