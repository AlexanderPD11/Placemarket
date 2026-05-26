import VendorLayout from '../../layouts/VendorLayout'
import { Link } from 'react-router-dom'

import {
  Tag,
  Clock3,
  CheckCircle2,
  XCircle,
  Eye,
  MessageSquare,
  Wallet,
  ArrowUpRight,
  Search,
  SlidersHorizontal,
} from 'lucide-react'

const ofertas = [
  {
    id: 1,
    titulo: 'Desarrollo de App de Delivery',
    comprador: 'Carlos Rodríguez',
    estado: 'En revisión',
    estadoColor: 'bg-yellow-50 text-yellow-600',
    precio: 'RD$85,000',
    creditos: 12,
    fecha: 'Enviada hace 15 min',
    mensaje:
      'Propuesta enviada con app móvil, panel administrativo y pasarela de pagos.',
    vistas: 3,
    respuestas: 1,
  },
  {
    id: 2,
    titulo: 'Toyota Corolla 2022 Full',
    comprador: 'María García',
    estado: 'Aceptada',
    estadoColor: 'bg-green-50 text-green-600',
    precio: 'RD$1,250,000',
    creditos: 5,
    fecha: 'Enviada ayer',
    mensaje:
      'Oferta aceptada. Contacto desbloqueado para continuar negociación.',
    vistas: 8,
    respuestas: 4,
  },
  {
    id: 3,
    titulo: 'Diseño de identidad corporativa',
    comprador: 'Tech Group',
    estado: 'No seleccionada',
    estadoColor: 'bg-red-50 text-red-500',
    precio: 'RD$18,000',
    creditos: 4,
    fecha: 'Hace 3 días',
    mensaje:
      'El comprador eligió otra propuesta. Puedes seguir enviando ofertas similares.',
    vistas: 2,
    respuestas: 0,
  },
]

const resumen = [
  {
    label: 'Ofertas enviadas',
    value: '84',
    icon: Tag,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    label: 'Aceptadas',
    value: '26',
    icon: CheckCircle2,
    color: 'bg-green-50 text-green-600',
  },
  {
    label: 'En revisión',
    value: '12',
    icon: Clock3,
    color: 'bg-yellow-50 text-yellow-600',
  },
  {
    label: 'No seleccionadas',
    value: '18',
    icon: XCircle,
    color: 'bg-red-50 text-red-500',
  },
]

function MisOfertas() {
  return (
    <VendorLayout>
      {/* HEADER */}

      <div className="mb-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              Mis Ofertas
            </h1>

            <p className="text-base text-gray-500 mt-3">
              Revisa el estado de tus propuestas enviadas y oportunidades en proceso.
            </p>
          </div>

          <Link
            to="/muro"
            className="bg-blue-600 text-white px-5 py-3 rounded-2xl text-sm font-bold hover:bg-blue-700 transition flex items-center gap-2"
          >
            Buscar solicitudes
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      {/* RESUMEN */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
        {resumen.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.label}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 ${item.color}`}
              >
                <Icon size={20} />
              </div>

              <p className="text-sm text-gray-500">
                {item.label}
              </p>

              <h3 className="text-3xl font-black text-gray-900 mt-2">
                {item.value}
              </h3>
            </div>
          )
        })}
      </div>

      {/* SEARCH */}

      <div className="bg-white border border-gray-100 rounded-[32px] p-6 shadow-sm mb-8">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search
              size={18}
              className="absolute left-5 top-4 text-gray-400"
            />

            <input
              type="text"
              placeholder="Buscar por solicitud, comprador o estado..."
              className="w-full border border-gray-200 rounded-2xl pl-12 pr-5 py-4 outline-none focus:border-blue-400"
            />
          </div>

          <button className="border border-gray-200 px-6 rounded-2xl flex items-center gap-2 text-sm font-semibold text-gray-700 hover:border-blue-400 hover:text-blue-600 transition">
            <SlidersHorizontal size={16} />
            Filtrar
          </button>
        </div>
      </div>

      {/* LISTA */}

      <div className="space-y-5">
        {ofertas.map((oferta) => (
          <div
            key={oferta.id}
            className="bg-white border border-gray-100 rounded-[32px] p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`px-4 py-1.5 rounded-full text-xs font-bold ${oferta.estadoColor}`}
                  >
                    {oferta.estado}
                  </span>

                  <span className="text-sm text-gray-400 flex items-center gap-1">
                    <Clock3 size={14} />
                    {oferta.fecha}
                  </span>
                </div>

                <h2 className="text-2xl font-black text-gray-900 mb-2">
                  {oferta.titulo}
                </h2>

                <p className="text-sm text-gray-400 mb-4">
                  Comprador:{' '}
                  <span className="text-blue-600 font-semibold">
                    {oferta.comprador}
                  </span>
                </p>

                <p className="text-gray-500 leading-relaxed max-w-3xl">
                  {oferta.mensaje}
                </p>

                <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <Eye size={15} />
                    {oferta.vistas} vistas
                  </span>

                  <span className="flex items-center gap-2">
                    <MessageSquare size={15} />
                    {oferta.respuestas} respuestas
                  </span>

                  <span className="flex items-center gap-2">
                    <Wallet size={15} />
                    {oferta.creditos} créditos usados
                  </span>
                </div>
              </div>

              <div className="text-right shrink-0">
                <p className="text-sm text-gray-400 mb-1">
                  Tu oferta
                </p>

                <h3 className="text-3xl font-black text-gray-900">
                  {oferta.precio}
                </h3>

                <Link
                  to="/mensajes"
                  className="mt-5 inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-2xl text-sm font-bold hover:bg-blue-700 transition"
                >
                  Ver conversación
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </VendorLayout>
  )
}

export default MisOfertas