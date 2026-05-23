import { Link } from 'react-router-dom'

import {
  ShoppingCart,
  Tag,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

import Button from './ui/Button'

function Benefits() {
  return (
    <section
      id="beneficios"
      className="
        relative
        py-28
        px-6
        bg-slate-50
        overflow-hidden
      "
    >

      {/* BACKGROUND */}
      <div
        className="
          absolute
          top-0
          left-0
          w-[500px]
          h-[500px]
          bg-blue-100
          opacity-30
          blur-3xl
          rounded-full
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          relative
          z-10
        "
      >

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">

          <span
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
            <Sparkles size={16} />
            Beneficios para todos
          </span>

          <h2
            className="
              text-5xl
              font-black
              text-gray-900
              mt-8
              leading-tight
            "
          >
            Una plataforma creada
            <span className="text-blue-600 block">
              para compradores y vendedores.
            </span>
          </h2>

          <p
            className="
              text-xl
              text-gray-500
              mt-6
              leading-relaxed
            "
          >
            Conectamos necesidades reales con personas
            y empresas listas para ofrecer soluciones.
          </p>

        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
          "
        >

          {/* BUYER CARD */}
          <div
            className="
              relative
              bg-white
              border
              border-gray-200
              rounded-[32px]
              p-10
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >

            {/* GLOW */}
            <div
              className="
                absolute
                top-0
                right-0
                w-64
                h-64
                bg-blue-100
                opacity-40
                blur-3xl
                rounded-full
              "
            />

            {/* ICON */}
            <div
              className="
                relative
                z-10
                bg-gradient-to-br
                from-blue-600
                to-cyan-500
                w-16
                h-16
                rounded-2xl
                flex
                items-center
                justify-center
                shadow-lg
                shadow-blue-200
              "
            >

              <ShoppingCart
                className="text-white"
                size={28}
              />

            </div>

            {/* CONTENT */}
            <div className="relative z-10 mt-8">

              <span
                className="
                  text-blue-600
                  font-semibold
                  text-sm
                "
              >
                PARA COMPRADORES
              </span>

              <h3
                className="
                  text-4xl
                  font-black
                  text-gray-900
                  mt-4
                  leading-tight
                "
              >
                Publica lo que necesitas.
              </h3>

              <p
                className="
                  text-gray-500
                  mt-6
                  text-lg
                  leading-relaxed
                "
              >
                Recibe ofertas competitivas de vendedores,
                técnicos y empresas listas para ayudarte.
              </p>

              {/* FEATURES */}
              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-gray-600">
                    Comparación rápida de ofertas
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-gray-600">
                    Menos tiempo buscando
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-gray-600">
                    Proveedores verificados
                  </span>
                </div>

              </div>

              {/* CTA */}
              <div className="mt-10">

                <Link to="/publicar">
                  <Button size="lg">

                    <div className="flex items-center gap-2">

                      Publicar necesidad

                      <ArrowRight size={18} />

                    </div>

                  </Button>
                </Link>

              </div>

            </div>

          </div>

          {/* SELLER CARD */}
          <div
            className="
              relative
              bg-gray-900
              rounded-[32px]
              p-10
              overflow-hidden
              shadow-2xl
            "
          >

            {/* GLOW */}
            <div
              className="
                absolute
                bottom-0
                left-0
                w-64
                h-64
                bg-cyan-500
                opacity-20
                blur-3xl
                rounded-full
              "
            />

            {/* ICON */}
            <div
              className="
                relative
                z-10
                bg-white
                w-16
                h-16
                rounded-2xl
                flex
                items-center
                justify-center
                shadow-lg
              "
            >

              <Tag
                className="text-gray-900"
                size={28}
              />

            </div>

            {/* CONTENT */}
            <div className="relative z-10 mt-8">

              <span
                className="
                  text-cyan-400
                  font-semibold
                  text-sm
                "
              >
                PARA VENDEDORES
              </span>

              <h3
                className="
                  text-4xl
                  font-black
                  text-white
                  mt-4
                  leading-tight
                "
              >
                Encuentra clientes reales.
              </h3>

              <p
                className="
                  text-gray-400
                  mt-6
                  text-lg
                  leading-relaxed
                "
              >
                Accede a compradores que ya están
                buscando exactamente lo que ofreces.
              </p>

              {/* FEATURES */}
              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-gray-300">
                    Leads con intención real
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-gray-300">
                    Más oportunidades de ventas
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-gray-300">
                    Crecimiento para negocios
                  </span>
                </div>

              </div>

              {/* CTA */}
              <div className="mt-10">

                <Link
                  to="/muro"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    bg-white
                    text-gray-900
                    px-7
                    py-4
                    rounded-xl
                    font-semibold
                    hover:bg-gray-100
                    transition
                  "
                >

                  Empezar a ofertar

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Benefits