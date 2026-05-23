import {
  Mail,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

import Button from './ui/Button'

function CTA() {
  return (
    <section
      id="registro"
      className="
        relative
        py-32
        px-6
        overflow-hidden
        bg-white
      "
    >

      {/* BACKGROUND */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-blue-600
          via-indigo-600
          to-cyan-500
        "
      />

      {/* BLUR EFFECT */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          bg-white
          opacity-10
          blur-3xl
          rounded-full
        "
      />

      <div
        className="
          relative
          z-10
          max-w-5xl
          mx-auto
        "
      >

        <div
          className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            rounded-[40px]
            px-8
            py-16
            lg:px-16
            text-center
            shadow-2xl
          "
        >

          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              bg-white/10
              border
              border-white/20
              text-white
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
            "
          >
            <Sparkles size={16} />
            Próximamente disponible
          </div>

          {/* TITLE */}
          <h2
            className="
              text-5xl
              lg:text-6xl
              font-black
              text-white
              mt-8
              leading-tight
            "
          >
            Cambia la forma
            <span className="block">
              de comprar y vender.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              text-xl
              text-blue-100
              mt-8
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            Únete a Placemarket y conecta necesidades
            con vendedores reales en minutos.
          </p>

          {/* FORM */}
          <div
            className="
              mt-12
              flex
              flex-col
              lg:flex-row
              items-center
              justify-center
              gap-4
              max-w-3xl
              mx-auto
            "
          >

            {/* INPUT */}
            <div
              className="
                flex
                items-center
                gap-4
                bg-white
                rounded-2xl
                px-6
                py-5
                w-full
                shadow-xl
              "
            >

              <Mail
                className="text-gray-400"
                size={22}
              />

              <input
                type="email"
                placeholder="Ingresa tu correo electrónico"
                className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-gray-900
                  text-lg
                "
              />

            </div>

            {/* BUTTON */}
            <Button
              size="lg"
              className="
                bg-white
                !text-blue-600
                hover:!bg-blue-50
                w-full
                lg:w-auto
                whitespace-nowrap
              "
            >
              <div className="flex items-center gap-2">

                Unirme ahora

                <ArrowRight size={18} />

              </div>
            </Button>

          </div>

          {/* FOOTER */}
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-8
              mt-12
              text-blue-100
              text-sm
            "
          >

            <span>
              ✔ Sin spam
            </span>

            <span>
              ✔ Acceso anticipado
            </span>

            <span>
              ✔ Gratis al lanzamiento
            </span>

          </div>

        </div>

      </div>
    </section>
  )
}

export default CTA