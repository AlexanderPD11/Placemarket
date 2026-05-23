import {
  Wallet,
  TrendingUp,
  CreditCard,
  Sparkles,
  ArrowUpRight,
  Check,
  Clock3,
  Shield,
  BarChart3,
  Plus,
  ShoppingBag,
  Bell,
  Settings,
} from 'lucide-react'

import { Link } from 'react-router-dom'

const stats = [
  {
    title: 'Créditos disponibles',
    value: '1,250',
    sub: '+120 este mes',
    icon: Wallet,
  },
  {
    title: 'Créditos consumidos',
    value: '480',
    sub: 'Últimos 30 días',
    icon: TrendingUp,
  },
  {
    title: 'Solicitudes desbloqueadas',
    value: '96',
    sub: 'Marketplace completo',
    icon: Sparkles,
  },
  
]

const paquetes = [
  {
    nombre: 'Starter',
    creditos: '250',
    precio: 'RD$500',
    destacado: false,
  },
  {
    nombre: 'Professional',
    creditos: '750',
    precio: 'RD$1,200',
    destacado: true,
  },
  {
    nombre: 'Enterprise',
    creditos: '2,500',
    precio: 'RD$3,900',
    destacado: false,
  },
]

const actividad = [
  {
    titulo: 'Oferta enviada — Toyota Corolla 2022',
    fecha: 'Hace 25 minutos',
    creditos: '-5 créditos',
  },
  {
    titulo: 'Compra de créditos Professional',
    fecha: 'Ayer',
    creditos: '+750 créditos',
  },
  {
    titulo: 'Solicitud desbloqueada — Diseño UX/UI',
    fecha: 'Hace 2 días',
    creditos: '-8 créditos',
  },
]

function TiendaCreditos() {

  return (

    <div className="min-h-screen bg-gray-50 flex">

      {/* SIDEBAR */}

      <aside className="w-64 bg-white border-r border-gray-100 fixed left-0 top-0 bottom-0 p-6">

        <Link
          to="/"
          className="flex items-center gap-3 mb-10"
        >

          <div className="bg-blue-600 text-white p-2 rounded-2xl">
            <ShoppingBag size={18} />
          </div>

          <div>

            <h2 className="font-black text-gray-900">
              Placemarket
            </h2>

            <p className="text-xs text-gray-500">
              Vendor Space
            </p>

          </div>

        </Link>

        <div className="space-y-2">

          {[
            'Dashboard',
            'Solicitudes',
            'Créditos',
            'Ofertas',
            'Mensajes',
            'Configuración',
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
                  item === 'Créditos'
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
            Duplica tus oportunidades
          </h3>

          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            Obtén prioridad en solicitudes y más visibilidad.
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
                Créditos y Facturación
              </h1>

              <p className="text-gray-500 mt-1">
                Gestiona tus créditos y desbloquea más oportunidades.
              </p>

            </div>

            <div className="flex items-center gap-3">

              <button className="border border-gray-200 px-5 py-3 rounded-2xl text-sm font-semibold hover:border-blue-400 transition flex items-center gap-2">

                <CreditCard size={16} />

                Métodos de pago

              </button>

              <button className="bg-blue-600 text-white px-5 py-3 rounded-2xl text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-2">

                <Plus size={16} />

                Comprar créditos

              </button>

              <button className="w-11 h-11 rounded-2xl border border-gray-200 flex items-center justify-center">
                <Bell size={18} />
              </button>

              <button className="w-11 h-11 rounded-2xl border border-gray-200 flex items-center justify-center">
                <Settings size={18} />
              </button>

            </div>

          </div>

        </div>

        {/* CONTENT */}

        <div className="p-8">

         {/* BALANCE CARD */}

<div
  className="
    bg-white
    border
    border-gray-100
    rounded-[32px]
    p-8
    shadow-sm
    mb-8
  "
>

  <div className="flex items-center justify-between">

    <div>

      <span
        className="
          inline-flex
          items-center
          gap-2
          bg-blue-50
          text-blue-600
          px-4
          py-2
          rounded-full
          text-xs
          font-bold
          mb-5
        "
      >

        <div className="w-2 h-2 rounded-full bg-blue-600" />

        Balance disponible

      </span>

      <h2
        className="
          text-5xl
          font-black
          text-gray-900
          tracking-tight
        "
      >
        1,250
      </h2>

      <p className="text-gray-500 mt-2 text-sm">
        Créditos listos para enviar ofertas y desbloquear contactos.
      </p>

    </div>

    <div
      className="
        w-20
        h-20
        rounded-3xl
        bg-blue-50
        flex
        items-center
        justify-center
      "
    >

      <Wallet
        size={34}
        className="text-blue-600"
      />

    </div>

  </div>

  <div className="flex gap-4 mt-8">

    <button
      className="
        bg-blue-600
        text-white
        px-6
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

      Comprar créditos

      <ArrowUpRight size={18} />

    </button>

    <button
      className="
        border
        border-gray-200
        px-6
        py-3.5
        rounded-2xl
        font-semibold
        text-gray-700
        hover:border-blue-400
        hover:text-blue-600
        transition
      "
    >

      Ver historial

    </button>

  </div>

</div>
          {/* STATS */}

          <div className="grid grid-cols-4 gap-5 mb-8">

            {stats.map((item) => {

              const Icon = item.icon

              return (

                <div
                  key={item.title}
                  className="
                    bg-white
                    border
                    border-gray-100
                    rounded-3xl
                    p-6
                    shadow-sm
                  "
                >

                  <div className="flex items-center justify-between mb-5">

                    <div className="bg-blue-50 p-3 rounded-2xl">

                      <Icon
                        size={20}
                        className="text-blue-600"
                      />

                    </div>

                    <span className="text-xs font-bold text-green-500">
                      {item.sub}
                    </span>

                  </div>

                  <p className="text-sm text-gray-500 mb-2">
                    {item.title}
                  </p>

                  <h3 className="text-3xl font-black text-gray-900">
                    {item.value}
                  </h3>

                </div>

              )

            })}

          </div>

          {/* GRID */}

          <div className="grid grid-cols-3 gap-6">

            {/* LEFT */}

            <div className="col-span-2 space-y-6">

              {/* PACKAGES */}

              <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">

                <div className="flex items-center justify-between mb-8">

                  <div>

                    <h2 className="text-2xl font-black text-gray-900">
                      Paquetes de créditos
                    </h2>

                    <p className="text-gray-500 mt-1">
                      Compra créditos y desbloquea solicitudes.
                    </p>

                  </div>

                  <button className="border border-gray-200 px-4 py-2 rounded-2xl text-sm hover:border-blue-400 transition">
                    Ver precios
                  </button>

                </div>

                <div className="grid grid-cols-3 gap-5">

                  {paquetes.map((item) => (

                    <div
                      key={item.nombre}
                      className={`
                        rounded-3xl
                        border
                        p-6
                        transition
                        relative

                        ${
                          item.destacado
                            ? 'border-blue-600 shadow-lg'
                            : 'border-gray-200'
                        }
                      `}
                    >

                      {item.destacado && (

                        <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          POPULAR
                        </span>

                      )}

                      <h3 className="text-xl font-black text-gray-900">
                        {item.nombre}
                      </h3>

                      <div className="mt-6">

                        <span className="text-5xl font-black text-gray-900">
                          {item.creditos}
                        </span>

                        <p className="text-gray-500 mt-1">
                          créditos
                        </p>

                      </div>

                      <div className="mt-6 mb-6">

                        <span className="text-3xl font-black text-blue-600">
                          {item.precio}
                        </span>

                      </div>

                      <button className={`
                        w-full
                        py-3
                        rounded-2xl
                        font-semibold
                        transition

                        ${
                          item.destacado
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }
                      `}>

                        Comprar ahora

                      </button>

                    </div>

                  ))}

                </div>

              </div>

              {/* ACTIVITY */}

              <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">

                <div className="flex items-center justify-between mb-8">

                  <div>

                    <h2 className="text-2xl font-black text-gray-900">
                      Actividad reciente
                    </h2>

                    <p className="text-gray-500 mt-1">
                      Movimientos de créditos y compras.
                    </p>

                  </div>

                  <Clock3 className="text-gray-400" />

                </div>

                <div className="space-y-5">

                  {actividad.map((item, i) => (

                    <div
                      key={i}
                      className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-gray-100
                        pb-5
                        last:border-0
                        last:pb-0
                      "
                    >

                      <div>

                        <h3 className="font-semibold text-gray-900">
                          {item.titulo}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          {item.fecha}
                        </p>

                      </div>

                      <span className="font-bold text-blue-600">
                        {item.creditos}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="space-y-6">

              {/* PRO */}

              <div className="bg-gray-900 rounded-[32px] p-7 text-white">

                <span className="bg-blue-600 text-xs px-2 py-1 rounded-full font-bold">
                  SELLER PRO
                </span>

                <h2 className="text-3xl font-black mt-5 leading-tight">
                  Obtén prioridad en solicitudes
                </h2>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  Los vendedores PRO aparecen primero y reciben más contactos.
                </p>

                <div className="space-y-4 mt-7">

                  {[
                    'Prioridad en resultados',
                    'Más visibilidad',
                    'Analíticas avanzadas',
                    'Badge verificado',
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <div className="bg-blue-600 p-1 rounded-full">

                        <Check size={12} />

                      </div>

                      <span className="text-sm text-gray-300">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

                <button className="w-full mt-8 bg-blue-600 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition">

                  Mejorar a PRO

                </button>

              </div>

              {/* ANALYTICS */}

              <div className="bg-white border border-gray-100 rounded-[32px] p-7 shadow-sm">

                <div className="flex items-center justify-between mb-6">

                  <div>

                    <h3 className="text-xl font-black text-gray-900">
                      Consumo mensual
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Últimos 6 meses
                    </p>

                  </div>

                  <BarChart3 className="text-blue-600" />

                </div>

                <div className="flex items-end gap-3 h-48">

                  {[45, 90, 60, 120, 85, 140].map((h, i) => (

                    <div
                      key={i}
                      className="flex-1 flex flex-col items-center"
                    >

                      <div
                        className={`
                          w-full
                          rounded-t-2xl

                          ${
                            i === 5
                              ? 'bg-blue-600'
                              : 'bg-blue-100'
                          }
                        `}
                        style={{
                          height: `${h}px`,
                        }}
                      />

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  )
}

export default TiendaCreditos