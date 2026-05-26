import VendorLayout from '../../layouts/VendorLayout'

import { Link } from 'react-router-dom'

import {
  ArrowLeft,
  MapPin,
  Clock3,
  Wallet,
  Sparkles,
  Eye,
  MessageSquare,
  Paperclip,
  ShieldCheck,
  ChevronRight,
  Star,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react'

function DetalleSolicitud() {

  return (

    <VendorLayout>

      {/* HEADER */}

      <div className="mb-10">

        <Link
          to="/muro"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            text-gray-500
            hover:text-blue-600
            transition
            mb-5
          "
        >

          <ArrowLeft size={16} />

          Volver al muro

        </Link>

        <div className="flex items-end justify-between">

          <div>

            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              Detalle de Solicitud
            </h1>

            <p className="text-base text-gray-500 mt-3">
              Revisa los detalles y envía una oferta profesional.
            </p>

          </div>

          <div
            className="
              bg-blue-50
              px-5
              py-3
              rounded-2xl
              text-blue-600
              font-bold
              text-sm
              flex
              items-center
              gap-2
            "
          >

            <Wallet size={16} />

            1,250 créditos disponibles

          </div>

        </div>

      </div>

      {/* CONTENT */}

      <div className="grid grid-cols-3 gap-8">

        {/* LEFT */}

        <div className="col-span-2 space-y-6">

          {/* HERO */}

          <div
            className="
              bg-white
              border
              border-gray-100
              rounded-[32px]
              p-8
              shadow-sm
            "
          >

            <div className="flex items-start justify-between mb-6">

              <div>

                <div className="flex items-center gap-3 mb-5">

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

                    Tecnología

                  </span>

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

                </div>

                <h1
                  className="
                    text-4xl
                    font-black
                    text-gray-900
                    leading-tight
                    mb-5
                  "
                >

                  Desarrollo de aplicación de delivery

                </h1>

                <p
                  className="
                    text-lg
                    text-gray-500
                    leading-relaxed
                    max-w-4xl
                  "
                >

                  Busco empresa o desarrollador profesional para crear
                  una plataforma completa de delivery con aplicación móvil,
                  panel administrativo y sistema de pagos integrado.

                </p>

              </div>

            </div>

            {/* STATS */}

            <div className="flex flex-wrap gap-6 mt-8">

              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin size={16} />
                Santo Domingo
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Clock3 size={16} />
                Publicado hace 12 minutos
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Eye size={16} />
                84 visualizaciones
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <MessageSquare size={16} />
                12 ofertas recibidas
              </div>

            </div>

          </div>

          {/* DESCRIPTION */}

          <div
            className="
              bg-white
              border
              border-gray-100
              rounded-[32px]
              p-8
              shadow-sm
            "
          >

            <h2 className="text-2xl font-black text-gray-900 mb-6">
              Descripción completa
            </h2>

            <div
              className="
                space-y-5
                text-gray-600
                leading-relaxed
              "
            >

              <p>
                El proyecto incluye una aplicación móvil para clientes,
                dashboard administrativo, sistema de geolocalización,
                notificaciones push y panel para repartidores.
              </p>

              <p>
                Se requiere experiencia previa en aplicaciones similares,
                integración de pagos y backend escalable.
              </p>

              <p>
                Preferiblemente desarrolladores con portafolio demostrable
                y disponibilidad inmediata.
              </p>

            </div>

          </div>

          {/* REQUIREMENTS */}

          <div
            className="
              bg-white
              border
              border-gray-100
              rounded-[32px]
              p-8
              shadow-sm
            "
          >

            <h2 className="text-2xl font-black text-gray-900 mb-6">
              Requisitos
            </h2>

            <div className="space-y-4">

              {[
                'Experiencia mínima de 3 años',
                'Portafolio verificable',
                'Conocimiento en React Native',
                'Backend escalable',
                'Integración con Stripe o PayPal',
              ].map((item) => (

                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    text-gray-700
                  "
                >

                  <CheckCircle2
                    size={18}
                    className="text-blue-600 shrink-0"
                  />

                  {item}

                </div>

              ))}

            </div>

          </div>

          {/* FILES */}

          <div
            className="
              bg-white
              border
              border-gray-100
              rounded-[32px]
              p-8
              shadow-sm
            "
          >

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-2xl font-black text-gray-900">
                Archivos adjuntos
              </h2>

              <span className="text-sm text-gray-400">
                3 archivos
              </span>

            </div>

            <div className="space-y-4">

              {[
                'Brief-Proyecto.pdf',
                'Mockup-App.fig',
                'Requerimientos.docx',
              ].map((file) => (

                <button
                  key={file}
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-2xl
                    p-5
                    flex
                    items-center
                    justify-between
                    hover:border-blue-400
                    hover:bg-blue-50/40
                    transition
                  "
                >

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-blue-50
                        flex
                        items-center
                        justify-center
                      "
                    >

                      <Paperclip
                        size={18}
                        className="text-blue-600"
                      />

                    </div>

                    <div className="text-left">

                      <p className="font-semibold text-gray-900">
                        {file}
                      </p>

                      <p className="text-sm text-gray-400">
                        Descargar archivo
                      </p>

                    </div>

                  </div>

                  <ChevronRight
                    size={18}
                    className="text-gray-400"
                  />

                </button>

              ))}

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="space-y-6">

          {/* PRICE */}

          <div
            className="
              bg-white
              border
              border-gray-100
              rounded-[32px]
              p-7
              shadow-sm
              sticky
              top-8
            "
          >

            <p className="text-sm text-gray-400 mb-2">
              Presupuesto estimado
            </p>

            <h2
              className="
                text-5xl
                font-black
                text-gray-900
                mb-6
              "
            >

              RD$85K

            </h2>

            <div
              className="
                bg-blue-50
                border
                border-blue-100
                rounded-2xl
                p-5
                mb-6
              "
            >

              <div className="flex items-center justify-between mb-2">

                <span className="text-sm font-semibold text-blue-700">
                  Créditos requeridos
                </span>

                <span className="text-2xl font-black text-blue-600">
                  12
                </span>

              </div>

              <p className="text-sm text-blue-600">
                Se descontarán al enviar tu oferta.
              </p>

            </div>

            <Link
              to="/enviar-oferta"
              className="
                w-full
                bg-blue-600
                text-white
                py-4
                rounded-2xl
                font-bold
                hover:bg-blue-700
                transition
                flex
                items-center
                justify-center
                gap-2
                mb-4
              "
            >

              Enviar oferta

              <ArrowUpRight size={18} />

            </Link>

            <button
              className="
                w-full
                border
                border-gray-200
                py-4
                rounded-2xl
                font-semibold
                text-gray-700
                hover:border-blue-400
                hover:text-blue-600
                transition
              "
            >

              Guardar solicitud

            </button>

            {/* BUYER */}

            <div className="border-t border-gray-100 mt-8 pt-8">

              <div className="flex items-center gap-4 mb-5">

                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-blue-600
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                  "
                >

                  CR

                </div>

                <div>

                  <h3 className="font-black text-gray-900">
                    Carlos Rodríguez
                  </h3>

                  <p className="text-sm text-gray-400">
                    Comprador verificado
                  </p>

                </div>

              </div>

              <div className="space-y-4">

                <div className="flex items-center justify-between">

                  <span className="text-gray-500 text-sm">
                    Solicitudes publicadas
                  </span>

                  <span className="font-bold text-gray-900">
                    28
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-gray-500 text-sm">
                    Contrataciones realizadas
                  </span>

                  <span className="font-bold text-gray-900">
                    14
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-gray-500 text-sm">
                    Rating promedio
                  </span>

                  <div className="flex items-center gap-1">

                    <Star
                      size={14}
                      className="text-yellow-400 fill-yellow-400"
                    />

                    <span className="font-bold text-gray-900">
                      4.9
                    </span>

                  </div>

                </div>

              </div>

            </div>

            {/* SAFE */}

            <div
              className="
                mt-8
                bg-gray-50
                rounded-2xl
                p-5
                border
                border-gray-100
              "
            >

              <div className="flex gap-3">

                <ShieldCheck
                  size={20}
                  className="text-blue-600 shrink-0 mt-0.5"
                />

                <div>

                  <p className="font-semibold text-gray-900 mb-1">
                    Seguridad Placemarket
                  </p>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    Nunca compartas pagos fuera de la plataforma
                    antes de validar al comprador.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </VendorLayout>
  )
}

export default DetalleSolicitud