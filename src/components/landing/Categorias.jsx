import {
  Car,
  Home,
  Monitor,
  Wrench,
  Shirt,
  Dumbbell,
  ShoppingBag,
  MoreHorizontal,
  ArrowRight,
} from 'lucide-react'

const categorias = [
  {
    icon: Car,
    label: "Vehículos",
    sub: "Autos, motos y repuestos",
    gradient: "from-blue-500 to-cyan-400",
  },

  {
    icon: Home,
    label: "Propiedades",
    sub: "Ventas, alquileres y terrenos",
    gradient: "from-purple-500 to-pink-400",
  },

  {
    icon: Monitor,
    label: "Tecnología",
    sub: "Laptops, celulares y gadgets",
    gradient: "from-indigo-500 to-blue-400",
  },

  {
    icon: Wrench,
    label: "Servicios",
    sub: "Hogar, técnicos y digitales",
    gradient: "from-orange-500 to-yellow-400",
  },

  {
    icon: Shirt,
    label: "Moda",
    sub: "Ropa, accesorios y calzado",
    gradient: "from-pink-500 to-rose-400",
  },

  {
    icon: Dumbbell,
    label: "Deportes",
    sub: "Equipos y suplementos",
    gradient: "from-green-500 to-emerald-400",
  },

  {
    icon: ShoppingBag,
    label: "Hogar",
    sub: "Muebles y decoración",
    gradient: "from-cyan-500 to-sky-400",
  },

  {
    icon: MoreHorizontal,
    label: "Otros",
    sub: "Todo tipo de solicitudes",
    gradient: "from-slate-500 to-slate-400",
  },
]

function Categorias() {
  return (
    <section
      id="categorias"
      className="
        relative
        py-28
        px-6
        bg-white
        overflow-hidden
      "
    >

      {/* BACKGROUND */}
      <div
        className="
          absolute
          bottom-0
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
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-6
            mb-16
          "
        >

          <div>

            <span
              className="
                inline-flex
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
              Explora categorías
            </span>

            <h2
              className="
                text-5xl
                font-black
                text-gray-900
                mt-6
                leading-tight
              "
            >
              Encuentra expertos
              <span className="text-blue-600 block">
                en cualquier sector.
              </span>
            </h2>

            <p
              className="
                text-xl
                text-gray-500
                mt-6
                max-w-2xl
              "
            >
              Desde servicios técnicos hasta tecnología,
              propiedades y negocios especializados.
            </p>

          </div>

          <button
            className="
              flex
              items-center
              gap-2
              text-blue-600
              font-semibold
              hover:gap-4
              transition-all
            "
          >
            Ver todas
            <ArrowRight size={18} />
          </button>

        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >

          {categorias.map((cat) => {

            const Icon = cat.icon

            return (
              <div
                key={cat.label}
                className="
                  group
                  relative
                  bg-white
                  border
                  border-gray-200
                  rounded-3xl
                  p-7
                  shadow-sm
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  cursor-pointer
                  overflow-hidden
                "
              >

                {/* HOVER EFFECT */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    opacity-0
                    group-hover:opacity-5
                    transition
                  "
                />

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
                    ${cat.gradient}
                    shadow-lg
                  `}
                >

                  <Icon
                    size={28}
                    className="text-white"
                  />

                </div>

                {/* CONTENT */}
                <div className="mt-8">

                  <h3
                    className="
                      text-xl
                      font-bold
                      text-gray-900
                    "
                  >
                    {cat.label}
                  </h3>

                  <p
                    className="
                      text-gray-500
                      mt-3
                      leading-relaxed
                    "
                  >
                    {cat.sub}
                  </p>

                </div>

                {/* FOOTER */}
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    mt-8
                    text-blue-600
                    font-semibold
                    text-sm
                  "
                >

                  Explorar categoría

                  <ArrowRight
                    size={16}
                    className="
                      group-hover:translate-x-1
                      transition
                    "
                  />

                </div>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default Categorias