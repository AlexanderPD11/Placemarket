import VendorLayout from '../../layouts/VendorLayout'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Search,
  SlidersHorizontal,
  MapPin,
  Clock3,
  Sparkles,
  ArrowUpRight,
  Bookmark,
  Wallet,
  Eye,
  BadgeCheck,
} from 'lucide-react'

const filtros = [
  'Todas',
  'Tecnología',
  'Vehículos',
  'Servicios',
  'Hogar',
  'Diseño',
]

const solicitudes = [
  {
    id: 1,
    titulo: 'Desarrollo de App de Delivery',
    categoria: 'Tecnología',
    ubicacion: 'Santo Domingo',
    presupuesto: 'RD$85,000',
    creditos: 12,
    tiempo: 'Hace 12 min',
    urgente: true,
    premium: true,
    descripcion:
      'Necesito una aplicación móvil completa con panel administrativo y pasarela de pagos.',
    vistas: 84,
    ofertas: 12,
  },

  {
    id: 2,
    titulo: 'Toyota Corolla 2022 Full',
    categoria: 'Vehículos',
    ubicacion: 'Santiago',
    presupuesto: 'RD$1,250,000',
    creditos: 5,
    tiempo: 'Hace 1 hora',
    urgente: false,
    premium: false,
    descripcion:
      'Busco dealer o vendedor con disponibilidad inmediata y financiamiento.',
    vistas: 32,
    ofertas: 4,
  },

  {
    id: 3,
    titulo: 'Diseño de identidad corporativa',
    categoria: 'Diseño',
    ubicacion: 'Distrito Nacional',
    presupuesto: 'RD$18,000',
    creditos: 4,
    tiempo: 'Hace 2 horas',
    urgente: true,
    premium: false,
    descripcion:
      'Necesito logo profesional, manual de marca y piezas para redes sociales.',
    vistas: 67,
    ofertas: 9,
  },
]

function MuroSolicitudes() {
  const [filtroActivo, setFiltroActivo] = useState('Todas')

  return (
    
    <VendorLayout>
     

      {/* TOPBAR */}

      <div className="mb-12 pt-4">

        <div className="flex items-end justify-between">

          <div>

            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              Muro de Solicitudes
            </h1>

            <p className="text-base text-gray-500 mt-3">
              Encuentra oportunidades activas y envía ofertas.
            </p>

          </div>

          <div className="flex items-center gap-4">

            <button
              className="
                border
                border-gray-200
                bg-white
                px-4
                py-2.5
                rounded-2xl
                text-sm
                font-semibold
                text-gray-700
                hover:border-blue-400
                hover:text-blue-600
                transition
              "
            >
              Mis ofertas
            </button>

            <div
              className="
                bg-blue-50
                text-blue-600
                px-5
                py-2.5
                rounded-2xl
                text-sm
                font-bold
                flex
                items-center
                gap-2
              "
            >

              <Wallet size={16} />

              1,250 créditos

            </div>

          </div>

        </div>

      </div>

      {/* SEARCH */}

      <div
        className="
          bg-white
          border
          border-gray-100
          rounded-[32px]
          p-6
          shadow-sm
          mb-8
        "
      >

        <div className="flex gap-4">

          <div className="flex-1 relative">

            <Search
              size={18}
              className="
                absolute
                left-5
                top-4
                text-gray-400
              "
            />

            <input
              type="text"
              placeholder="Buscar solicitudes..."
              className="
                w-full
                border
                border-gray-200
                rounded-2xl
                pl-12
                pr-5
                py-4
                outline-none
                focus:border-blue-400
              "
            />

          </div>

          <button
            className="
              border
              border-gray-200
              px-6
              rounded-2xl
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-gray-700
              hover:border-blue-400
              transition
            "
          >

            <SlidersHorizontal size={16} />

            Filtros

          </button>

        </div>

        {/* FILTERS */}

        <div className="flex gap-3 mt-6 flex-wrap">

          {filtros.map((filtro) => (

            <button
              key={filtro}
              onClick={() => setFiltroActivo(filtro)}
              className={`
                px-5
                py-2.5
                rounded-full
                text-sm
                font-semibold
                transition

                ${
                  filtroActivo === filtro
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }
              `}
            >

              {filtro}

            </button>

          ))}

        </div>

      </div>

      {/* LIST */}

      <div className="space-y-5">

        {solicitudes.map((item) => (

          <div
            key={item.id}
            className="
              bg-white
              border
              border-gray-100
              rounded-[32px]
              p-7
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >

            {/* TOP */}

            <div className="flex items-start justify-between mb-6">

              <div className="flex-1">

                <div className="flex items-center gap-3 mb-4">

                  <span
                    className="
                      bg-blue-50
                      text-blue-600
                      px-4
                      py-1.5
                      rounded-full
                      text-xs
                      font-bold
                    "
                  >

                    {item.categoria}

                  </span>

                  {item.urgente && (

                    <span
                      className="
                        bg-red-50
                        text-red-500
                        px-4
                        py-1.5
                        rounded-full
                        text-xs
                        font-bold
                      "
                    >

                      URGENTE

                    </span>

                  )}

                  {item.premium && (

                    <span
                      className="
                        bg-amber-50
                        text-amber-600
                        px-4
                        py-1.5
                        rounded-full
                        text-xs
                        font-bold
                        flex
                        items-center
                        gap-1
                      "
                    >

                      <Sparkles size={12} />

                      PREMIUM

                    </span>

                  )}

                </div>

                <h2
                  className="
                    text-2xl
                    font-black
                    text-gray-900
                    mb-3
                  "
                >

                  {item.titulo}

                </h2>

                <p
                  className="
                    text-gray-500
                    leading-relaxed
                    max-w-3xl
                  "
                >

                  {item.descripcion}

                </p>

              </div>

              <button
                className="
                  w-12
                  h-12
                  rounded-2xl
                  border
                  border-gray-200
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-blue-600
                  hover:border-blue-400
                  transition
                "
              >

                <Bookmark size={18} />

              </button>

            </div>

            {/* INFO */}

            <div className="flex items-center gap-6 flex-wrap mb-7">

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin size={15} />
                {item.ubicacion}
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock3 size={15} />
                {item.tiempo}
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Eye size={15} />
                {item.vistas} vistas
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <BadgeCheck size={15} />
                {item.ofertas} ofertas
              </div>

            </div>

            {/* FOOTER */}

            <div
              className="
                flex
                items-center
                justify-between
                border-t
                border-gray-100
                pt-6
              "
            >

              <div>

                <p className="text-sm text-gray-400 mb-1">
                  Presupuesto estimado
                </p>

                <h3
                  className="
                    text-3xl
                    font-black
                    text-gray-900
                  "
                >

                  {item.presupuesto}

                </h3>

              </div>

              <div className="flex items-center gap-4">

                <div
                  className="
                    bg-gray-100
                    px-5
                    py-3
                    rounded-2xl
                    text-sm
                    font-bold
                    text-gray-700
                  "
                >

                  {item.creditos} créditos

                </div>

                <Link
                  to={`/solicitud/${item.id}`}
                  className="
                    bg-blue-600
                    text-white
                    px-7
                    py-3.5
                    rounded-2xl
                    font-semibold
                    hover:bg-blue-700
                    transition
                    flex
                    items-center
                    gap-2
                  "
                >

                  Ver solicitud

                  <ArrowUpRight size={18} />

                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </VendorLayout>
  )
}

export default MuroSolicitudes