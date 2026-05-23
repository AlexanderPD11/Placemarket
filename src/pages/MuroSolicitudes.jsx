import { useState } from 'react'

import {
  Search,
  SlidersHorizontal,
  MapPin,
  Clock3,
  Wallet,
  Sparkles,
  BadgeCheck,
  Briefcase,
  ArrowUpRight,
  Grid3X3,
  Rows3,
  Star,
} from 'lucide-react'

const solicitudes = [
  {
    id: 1,
    titulo: 'Toyota Corolla 2022',
    categoria: 'Vehículos',
    descripcion:
      'Busco Toyota Corolla 2022 automático en excelente estado.',
    ubicacion: 'Santo Domingo',
    presupuesto: 'RD$950,000',
    urgencia: 'Urgente',
    ofertas: 12,
    premium: true,
  },
  {
    id: 2,
    titulo: 'Diseñador UX/UI',
    categoria: 'Servicios',
    descripcion:
      'Necesitamos rediseño moderno para aplicación fintech.',
    ubicacion: 'Santiago',
    presupuesto: 'RD$80,000',
    urgencia: 'Moderado',
    ofertas: 7,
    premium: false,
  },
  {
    id: 3,
    titulo: 'Laptop para diseño gráfico',
    categoria: 'Tecnología',
    descripcion:
      'Busco MacBook Pro o laptop equivalente para Adobe Suite.',
    ubicacion: 'Punta Cana',
    presupuesto: 'RD$120,000',
    urgencia: 'Flexible',
    ofertas: 4,
    premium: true,
  },
]

function MuroSolicitudes() {

  const [vistaGrid, setVistaGrid] = useState(true)

  return (

    <div className="min-h-screen bg-gray-50 flex">

      {/* SIDEBAR */}

      <aside className="w-64 bg-white border-r border-gray-100 min-h-screen fixed left-0 top-0 p-6">

        <div className="flex items-center gap-3 mb-10">

          <div className="bg-blue-600 text-white p-2 rounded-2xl">
            <Briefcase size={18} />
          </div>

          <div>

            <h2 className="font-black text-gray-900">
              Placemarket
            </h2>

            <p className="text-xs text-gray-500">
              Muro de Solicitudes
            </p>

          </div>

        </div>

        <div className="space-y-2">

          {[
            'Todas las solicitudes',
            'Vehículos',
            'Tecnología',
            'Servicios',
            'Hogar',
            'Propiedades',
          ].map((item, i) => (

            <button
              key={i}
              className={`
                w-full
                text-left
                px-4
                py-3
                rounded-2xl
                text-sm
                font-medium
                transition

                ${
                  i === 0
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }
              `}
            >
              {item}
            </button>

          ))}

        </div>

        {/* PRO CARD */}

        <div className="mt-10 bg-gray-900 rounded-3xl p-5 text-white">

          <span className="bg-blue-600 px-2 py-1 rounded-full text-xs font-bold">
            PRO
          </span>

          <h3 className="text-xl font-black mt-4">
            Obtén más solicitudes
          </h3>

          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            Destaca tus ofertas y aumenta tus oportunidades.
          </p>

          <button className="w-full mt-5 bg-blue-600 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition">
            Mejorar cuenta
          </button>

        </div>

      </aside>

      {/* MAIN */}

      <main className="flex-1 ml-64">

        {/* TOPBAR */}

        <div className="bg-white border-b border-gray-100 px-8 py-5 sticky top-0 z-20">

          <div className="flex items-center justify-between">

            <div>

              <h1 className="text-3xl font-black text-gray-900">
                Muro de Solicitudes
              </h1>

              <p className="text-gray-500 mt-1">
                Encuentra clientes buscando exactamente lo que ofreces.
              </p>

            </div>

            <div className="flex items-center gap-3">

              <button
                onClick={() => setVistaGrid(true)}
                className={`
                  w-11
                  h-11
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  transition

                  ${
                    vistaGrid
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-500'
                  }
                `}
              >
                <Grid3X3 size={18} />
              </button>

              <button
                onClick={() => setVistaGrid(false)}
                className={`
                  w-11
                  h-11
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  transition

                  ${
                    !vistaGrid
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-500'
                  }
                `}
              >
                <Rows3 size={18} />
              </button>

            </div>

          </div>

          {/* SEARCH */}

          <div className="flex gap-4 mt-6">

            <div className="flex-1 relative">

              <Search
                size={18}
                className="absolute left-5 top-4 text-gray-400"
              />

              <input
                type="text"
                placeholder="Buscar solicitudes..."
                className="
                  w-full
                  bg-gray-50
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
                flex
                items-center
                gap-2
                border
                border-gray-200
                bg-white
                px-5
                rounded-2xl
                hover:border-blue-400
                transition
              "
            >

              <SlidersHorizontal size={18} />

              Filtros

            </button>

          </div>

        </div>

        {/* CONTENT */}

        <div className="p-8">

          {/* STATS */}

          <div className="grid grid-cols-4 gap-5 mb-8">

            {[
              {
                label: 'Solicitudes activas',
                value: '1,284',
              },
              {
                label: 'Nuevas hoy',
                value: '84',
              },
              {
                label: 'Ofertas enviadas',
                value: '27',
              },
              {
                label: 'Tasa de éxito',
                value: '68%',
              },
            ].map((item) => (

              <div
                key={item.label}
                className="
                  bg-white
                  border
                  border-gray-100
                  rounded-3xl
                  p-6
                  shadow-sm
                "
              >

                <p className="text-sm text-gray-500 mb-2">
                  {item.label}
                </p>

                <h3 className="text-3xl font-black text-gray-900">
                  {item.value}
                </h3>

              </div>

            ))}

          </div>

          {/* SOLICITUDES */}

          <div
            className={`
              ${
                vistaGrid
                  ? 'grid grid-cols-2 gap-6'
                  : 'space-y-5'
              }
            `}
          >

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
                  transition-all
                  hover:-translate-y-1
                "
              >

                <div className="flex items-start justify-between mb-6">

                  <div>

                    <div className="flex items-center gap-2 mb-3">

                      <span className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                        {item.categoria}
                      </span>

                      {item.premium && (

                        <span className="bg-yellow-50 text-yellow-600 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">

                          <Sparkles size={12} />

                          Premium

                        </span>

                      )}

                    </div>

                    <h2 className="text-2xl font-black text-gray-900">
                      {item.titulo}
                    </h2>

                  </div>

                  <button className="w-11 h-11 rounded-2xl border border-gray-200 flex items-center justify-center hover:border-blue-400 transition">

                    <ArrowUpRight size={18} />

                  </button>

                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.descripcion}
                </p>

                <div className="space-y-4 mb-7">

                  <div className="flex items-center gap-3 text-sm text-gray-500">

                    <MapPin size={16} />

                    {item.ubicacion}

                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-500">

                    <Wallet size={16} />

                    {item.presupuesto}

                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-500">

                    <Clock3 size={16} />

                    {item.urgencia}

                  </div>

                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">

                  <div className="flex items-center gap-2 text-sm text-gray-500">

                    <Star
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />

                    {item.ofertas} ofertas recibidas

                  </div>

                  <button className="bg-blue-600 text-white px-5 py-3 rounded-2xl text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-2">

                    Enviar oferta

                    <BadgeCheck size={16} />

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </main>

    </div>
  )
}

export default MuroSolicitudes