import {
  FileText,
  Inbox,
  Trophy,
  ArrowRight,
} from 'lucide-react'

const steps = [
  {
    number: "01",
    title: "Publica tu necesidad",
    description:
      "Describe exactamente lo que buscas, agrega presupuesto y detalles importantes.",
    icon: FileText,
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
  },

  {
    number: "02",
    title: "Recibe ofertas",
    description:
      "Empresas, técnicos y vendedores envían propuestas competitivas rápidamente.",
    icon: Inbox,
    color: "from-purple-500 to-pink-400",
    bg: "bg-purple-50",
  },

  {
    number: "03",
    title: "Elige la mejor opción",
    description:
      "Compara ofertas, conversa con vendedores y cierra el mejor trato.",
    icon: Trophy,
    color: "from-orange-500 to-yellow-400",
    bg: "bg-orange-50",
  },
]

function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="
        relative
        py-28
        px-6
        bg-gradient-to-b
        from-white
        to-slate-50
        overflow-hidden
      "
    >

      {/* BACKGROUND BLUR */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
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
        <div className="text-center max-w-3xl mx-auto">

          <span
            className="
              inline-flex
              items-center
              gap-2
              bg-blue-50
              text-blue-600
              border
              border-blue-100
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
            "
          >
            Marketplace inverso
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
            Publica una necesidad.
            <span className="text-blue-600 block">
              Recibe soluciones.
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
            Un proceso rápido, inteligente y competitivo
            para conectar compradores con vendedores.
          </p>

        </div>

        {/* STEPS */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
            mt-20
          "
        >

          {steps.map((step, index) => {

            const Icon = step.icon

            return (
              <div
                key={step.number}
                className="
                  relative
                  bg-white
                  border
                  border-gray-200
                  rounded-3xl
                  p-8
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                "
              >

                {/* STEP NUMBER */}
                <div
                  className="
                    absolute
                    top-6
                    right-6
                    text-5xl
                    font-black
                    text-gray-100
                  "
                >
                  {step.number}
                </div>

                {/* ICON */}
                <div
                  className={`
                    w-16
                    h-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-gradient-to-br
                    ${step.color}
                    shadow-lg
                    mb-8
                  `}
                >

                  <Icon
                    size={30}
                    className="text-white"
                  />

                </div>

                {/* CONTENT */}
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-gray-900
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    text-gray-500
                    mt-4
                    leading-relaxed
                    text-lg
                  "
                >
                  {step.description}
                </p>

                {/* ARROW */}
                <div className="mt-8 flex items-center gap-2">

                  <span
                    className="
                      text-blue-600
                      font-semibold
                      text-sm
                    "
                  >
                    Continuar
                  </span>

                  <ArrowRight
                    size={16}
                    className="text-blue-600"
                  />

                </div>

                {/* CONNECTION LINE */}
                {index < steps.length - 1 && (
                  <div
                    className="
                      hidden
                      md:block
                      absolute
                      top-1/2
                      -right-4
                      w-8
                      h-[2px]
                      bg-gradient-to-r
                      from-blue-300
                      to-transparent
                    "
                  />
                )}

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default HowItWorks