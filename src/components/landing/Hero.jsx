import { Link } from 'react-router-dom'

import {
  ShoppingBag,
  ArrowRight,
  Star,
  Clock3,
  ShieldCheck,
} from 'lucide-react'

import Button from "../ui/Button";

function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        pt-36
        pb-24
        px-6
      "
    >

      {/* BACKGROUND */}
      <div
        className="
          absolute
          top-0
          right-0
          w-[500px]
          h-[500px]
          bg-blue-100
          rounded-full
          blur-3xl
          opacity-40
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-16
          items-center
          relative
          z-10
        "
      >

        {/* LEFT */}
        <div>

          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              bg-blue-50
              border
              border-blue-100
              text-blue-600
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
            "
          >
            <Star size={14} />
            Marketplace Inteligente
          </div>

          {/* TITLE */}
          <h1
            className="
              text-5xl
              lg:text-7xl
              font-black
              text-gray-900
              leading-tight
              mt-8
            "
          >
            Tú publicas la necesidad.
            <span className="text-blue-600 block">
              Los expertos compiten.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              text-xl
              text-gray-500
              leading-relaxed
              mt-8
              max-w-2xl
            "
          >
            Publica lo que necesitas y recibe ofertas
            de vendedores, técnicos y proveedores
            listos para ayudarte rápidamente.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-10">

            <Link to="/publicar">
              <Button size="lg">
                Publicar necesidad
              </Button>
            </Link>

            <Link
              to="/muro"
              className="
                flex
                items-center
                gap-2
                border
                border-gray-300
                px-6
                py-4
                rounded-xl
                font-semibold
                text-gray-700
                hover:border-blue-500
                hover:text-blue-600
                transition
              "
            >
              Explorar solicitudes
              <ArrowRight size={18} />
            </Link>

          </div>

          {/* STATS */}
          <div
            className="
              flex
              flex-wrap
              gap-8
              mt-14
            "
          >

            <div>
              <h3 className="text-3xl font-black text-gray-900">
                +5K
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Solicitudes publicadas
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-gray-900">
                +2K
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Vendedores activos
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-gray-900">
                24/7
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Conexiones en tiempo real
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative hidden lg:block">

          {/* MAIN CARD */}
          <div
            className="
              bg-white
              border
              border-gray-200
              rounded-3xl
              p-8
              shadow-2xl
              relative
              overflow-hidden
            "
          >

            {/* HEADER */}
            <div className="flex items-center justify-between mb-8">

              <div className="flex items-center gap-3">

                <div
                  className="
                    bg-blue-600
                    p-3
                    rounded-2xl
                  "
                >
                  <ShoppingBag
                    size={22}
                    className="text-white"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Nueva solicitud
                  </h3>

                  <p className="text-sm text-gray-500">
                    Hace 2 minutos
                  </p>
                </div>

              </div>

              <span
                className="
                  bg-green-100
                  text-green-600
                  text-xs
                  font-bold
                  px-3
                  py-1
                  rounded-full
                "
              >
                ACTIVA
              </span>

            </div>

            {/* CONTENT */}
            <div>

              <h2
                className="
                  text-2xl
                  font-bold
                  text-gray-900
                  leading-snug
                "
              >
                Necesito instalación de paneles solares
              </h2>

              <p className="text-gray-500 mt-4 leading-relaxed">
                Busco empresa o técnico especializado
                para instalación residencial en Santo Domingo.
              </p>

            </div>

            {/* INFO */}
            <div className="grid grid-cols-2 gap-4 mt-8">

              <div
                className="
                  bg-gray-50
                  rounded-2xl
                  p-4
                "
              >
                <p className="text-gray-400 text-sm">
                  Presupuesto
                </p>

                <h4 className="font-bold text-gray-900 mt-1">
                  RD$120,000
                </h4>
              </div>

              <div
                className="
                  bg-gray-50
                  rounded-2xl
                  p-4
                "
              >
                <p className="text-gray-400 text-sm">
                  Ofertas
                </p>

                <h4 className="font-bold text-gray-900 mt-1">
                  12 recibidas
                </h4>
              </div>

            </div>

          </div>

          {/* FLOATING CARD 1 */}
          <div
            className="
              absolute
              -left-10
              top-10
              bg-white
              border
              border-gray-200
              rounded-2xl
              shadow-xl
              p-4
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  bg-green-100
                  p-2
                  rounded-xl
                "
              >
                <ShieldCheck
                  size={18}
                  className="text-green-600"
                />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Vendedores verificados
                </h4>

                <p className="text-xs text-gray-500">
                  Mayor confianza
                </p>
              </div>

            </div>

          </div>

          {/* FLOATING CARD 2 */}
          <div
            className="
              absolute
              -right-8
              bottom-10
              bg-white
              border
              border-gray-200
              rounded-2xl
              shadow-xl
              p-4
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  bg-blue-100
                  p-2
                  rounded-xl
                "
              >
                <Clock3
                  size={18}
                  className="text-blue-600"
                />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Respuestas rápidas
                </h4>

                <p className="text-xs text-gray-500">
                  En pocos minutos
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero