import VendorLayout from '../../layouts/VendorLayout'

import {
  Wallet,
  CreditCard,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  Clock3,
  BadgeDollarSign,
} from 'lucide-react'

const paquetes = [
  {
    nombre: 'Starter',
    creditos: '250',
    precio: 'RD$1,500',
    descripcion: 'Ideal para vendedores que están comenzando.',
    destacado: false,
    beneficios: ['Hasta 50 ofertas básicas', 'Acceso al muro', 'Soporte estándar'],
  },
  {
    nombre: 'Professional',
    creditos: '750',
    precio: 'RD$3,900',
    descripcion: 'Para vendedores activos que buscan más oportunidades.',
    destacado: true,
    beneficios: ['Hasta 150 ofertas básicas', 'Mejor costo por crédito', 'Prioridad moderada'],
  },
  {
    nombre: 'Business',
    creditos: '1,800',
    precio: 'RD$8,500',
    descripcion: 'Para equipos y vendedores de alto volumen.',
    destacado: false,
    beneficios: ['Alto volumen de ofertas', 'Soporte prioritario', 'Reportes avanzados'],
  },
]

const historial = [
  {
    accion: 'Oferta enviada',
    detalle: 'Desarrollo de App de Delivery',
    creditos: '-12',
    fecha: 'Hoy, 10:32 AM',
  },
  {
    accion: 'Recarga de créditos',
    detalle: 'Paquete Professional',
    creditos: '+750',
    fecha: 'Ayer, 4:18 PM',
  },
  {
    accion: 'Solicitud premium',
    detalle: 'Toyota Corolla 2022 Full',
    creditos: '-5',
    fecha: 'Lun, 2:12 PM',
  },
]

function TiendaCreditos() {
  return (
    <VendorLayout>

      {/* HEADER */}

      <div className="mb-10">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

          <div>

            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              Créditos
            </h1>

            <p className="text-base text-gray-500 mt-3 max-w-2xl">
              Compra créditos para enviar ofertas, desbloquear oportunidades y acceder a solicitudes premium.
            </p>

          </div>

          <div className="bg-blue-50 text-blue-600 px-6 py-4 rounded-2xl flex items-center gap-3">

            <Wallet size={22} />

            <div>

              <p className="text-xs uppercase font-bold text-blue-400">
                Saldo actual
              </p>

              <p className="text-2xl font-black">
                1,250 créditos
              </p>

            </div>

          </div>

        </div>

      </div>

    

      {/* PACKAGES */}

      <div className="mb-8">

        <div className="flex items-center justify-between mb-6">

          <div>


          </div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {paquetes.map((paquete) => (

            <div
              key={paquete.nombre}
              className={`
                bg-white
                border
                rounded-[32px]
                p-7
                shadow-sm
                relative
                transition
                hover:shadow-lg
                ${paquete.destacado ? 'border-blue-300 ring-4 ring-blue-50' : 'border-gray-100'}
              `}
            >

              {paquete.destacado && (

                <div className="absolute -top-4 left-7 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">

                  <Sparkles size={12} />

                  Más popular

                </div>

              )}

              <h3 className="text-xl font-black text-gray-900">
                {paquete.nombre}
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                {paquete.descripcion}
              </p>

              <div className="mt-7">

                <p className="text-sm text-gray-400">
                  Créditos incluidos
                </p>

                <h2 className="text-5xl font-black text-gray-900 mt-1">
                  {paquete.creditos}
                </h2>

              </div>

              <p className="text-3xl font-black text-blue-600 mt-5">
                {paquete.precio}
              </p>

              <button
                className={`
                  w-full
                  py-4
                  rounded-2xl
                  font-bold
                  mt-7
                  transition
                  flex
                  items-center
                  justify-center
                  gap-2

                  ${
                    paquete.destacado
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-600'
                  }
                `}
              >

                Comprar paquete

                <ArrowUpRight size={18} />

              </button>

              <div className="space-y-3 mt-7">

                {paquete.beneficios.map((beneficio) => (

                  <div
                    key={beneficio}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >

                    <CheckCircle2
                      size={16}
                      className="text-blue-600 shrink-0"
                    />

                    {beneficio}

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* BOTTOM GRID */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* HISTORY */}

        <div className="lg:col-span-2 bg-white border border-gray-100 rounded-[32px] p-7 shadow-sm">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-2xl font-black text-gray-900">
                Historial de créditos
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Últimos movimientos de tu cuenta.
              </p>

            </div>

            <button className="border border-gray-200 px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 hover:border-blue-400 hover:text-blue-600 transition">
              Ver todo
            </button>

          </div>

          <div className="space-y-4">

            {historial.map((item) => (

              <div
                key={`${item.accion}-${item.fecha}`}
                className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0"
              >

                <div className="flex items-center gap-4">

                  <div
                    className={`
                      w-11
                      h-11
                      rounded-2xl
                      flex
                      items-center
                      justify-center

                      ${item.creditos.startsWith('+') ? 'bg-green-50' : 'bg-blue-50'}
                    `}
                  >

                    {item.creditos.startsWith('+') ? (
                      <CreditCard className="text-green-600" size={20} />
                    ) : (
                      <Clock3 className="text-blue-600" size={20} />
                    )}

                  </div>

                  <div>

                    <p className="font-bold text-gray-900">
                      {item.accion}
                    </p>

                    <p className="text-sm text-gray-500 mt-0.5">
                      {item.detalle}
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <p
                    className={`
                      font-black
                      ${item.creditos.startsWith('+')
                         ? 'text-green-600'
                         : 'text-red-500'}
                   `}
                  >
                    {item.creditos}

                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    {item.fecha}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* INFO */}

        <div className="space-y-6">

          <div className="bg-blue-600 rounded-[32px] p-7 text-white shadow-sm">

            <ShieldCheck size={28} />

            <h3 className="text-2xl font-black mt-5">
              ¿Cómo funcionan?
            </h3>

            <p className="text-blue-100 text-sm mt-3 leading-relaxed">
              Los créditos se consumen al enviar ofertas o acceder a solicitudes premium. Cada solicitud muestra el costo antes de participar.
            </p>

          </div>

          <div className="bg-white border border-gray-100 rounded-[32px] p-7 shadow-sm">

            <h3 className="text-xl font-black text-gray-900">
              Recomendación
            </h3>

            <p className="text-sm text-gray-500 mt-3 leading-relaxed">
              Mantén siempre saldo disponible para responder rápido a oportunidades urgentes o premium.
            </p>

            <button className="w-full bg-gray-900 text-white py-3 rounded-2xl font-bold mt-6 hover:bg-black transition">
              Activar recarga automática
            </button>

          </div>

        </div>

      </div>

    </VendorLayout>
  )
}

export default TiendaCreditos