import {
  Mail,
  Globe,
  ShoppingBag,
  ArrowRight,
} from 'lucide-react'

const Instagram = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const Facebook = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

function Footer() {
  return (
    <footer
      className="
        relative
        bg-white
        border-t
        border-gray-200
        overflow-hidden
      "
    >

      {/* BACKGROUND */}
      <div
        className="
          absolute
          bottom-0
          right-0
          w-[400px]
          h-[400px]
          bg-blue-100
          opacity-30
          blur-3xl
          rounded-full
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          pt-24
          pb-10
        "
      >

        {/* TOP */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-12
            pb-16
          "
        >

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-3">

              <div
                className="
                  bg-gradient-to-br
                  from-blue-600
                  to-cyan-500
                  p-3
                  rounded-2xl
                  shadow-lg
                  shadow-blue-200
                "
              >
                <ShoppingBag
                  size={20}
                  className="text-white"
                />
              </div>

              <div>

                <h3
                  className="
                    text-xl
                    font-black
                    text-gray-900
                  "
                >
                  Placemarket
                </h3>

                <p className="text-sm text-gray-500">
                  Marketplace inteligente
                </p>

              </div>

            </div>

            <p
              className="
                text-gray-500
                mt-6
                leading-relaxed
              "
            >
              Conectamos compradores y vendedores
              mediante solicitudes reales y ofertas
              competitivas en tiempo real.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-8">

              <button
                className="
                  w-10
                  h-10
                  rounded-xl
                  border
                  border-gray-200
                  flex
                  items-center
                  justify-center
                  text-gray-500
                  hover:text-blue-600
                  hover:border-blue-200
                  transition
                "
              >
                <Globe size={18} />
              </button>

              <button
                className="
                  w-10
                  h-10
                  rounded-xl
                  border
                  border-gray-200
                  flex
                  items-center
                  justify-center
                  text-gray-500
                  hover:text-pink-500
                  hover:border-pink-200
                  transition
                "
              >
                <Instagram />
              </button>

              <button
                className="
                  w-10
                  h-10
                  rounded-xl
                  border
                  border-gray-200
                  flex
                  items-center
                  justify-center
                  text-gray-500
                  hover:text-blue-700
                  hover:border-blue-200
                  transition
                "
              >
                <Facebook />
              </button>

            </div>

          </div>

          {/* PLATFORM */}
          <div>

            <h4
              className="
                font-bold
                text-gray-900
                mb-6
              "
            >
              Plataforma
            </h4>

            <ul className="space-y-4">

              <li>
                <a
                  href="#"
                  className="
                    text-gray-500
                    hover:text-blue-600
                    transition
                  "
                >
                  Cómo funciona
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-gray-500
                    hover:text-blue-600
                    transition
                  "
                >
                  Publicar solicitud
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-gray-500
                    hover:text-blue-600
                    transition
                  "
                >
                  Seguridad
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-gray-500
                    hover:text-blue-600
                    transition
                  "
                >
                  Créditos
                </a>
              </li>

            </ul>

          </div>

          {/* COMPANY */}
          <div>

            <h4
              className="
                font-bold
                text-gray-900
                mb-6
              "
            >
              Compañía
            </h4>

            <ul className="space-y-4">

              <li>
                <a
                  href="#"
                  className="
                    text-gray-500
                    hover:text-blue-600
                    transition
                  "
                >
                  Sobre nosotros
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-gray-500
                    hover:text-blue-600
                    transition
                  "
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-gray-500
                    hover:text-blue-600
                    transition
                  "
                >
                  Contacto
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="
                    text-gray-500
                    hover:text-blue-600
                    transition
                  "
                >
                  Soporte
                </a>
              </li>

            </ul>

          </div>

          {/* NEWSLETTER */}
          <div>

            <h4
              className="
                font-bold
                text-gray-900
                mb-6
              "
            >
              Mantente informado
            </h4>

            <p
              className="
                text-gray-500
                leading-relaxed
                mb-6
              "
            >
              Recibe novedades y acceso anticipado
              a nuevas funciones.
            </p>

            <div
              className="
                bg-gray-50
                border
                border-gray-200
                rounded-2xl
                p-2
                flex
                items-center
                gap-2
              "
            >

              <Mail
                size={18}
                className="text-gray-400 ml-2"
              />

              <input
                type="email"
                placeholder="Tu correo"
                className="
                  flex-1
                  bg-transparent
                  outline-none
                  text-sm
                "
              />

              <button
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  w-10
                  h-10
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  transition
                "
              >
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
            border-t
            border-gray-200
            pt-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >

          <p className="text-gray-400 text-sm">
            © 2025 Placemarket. Todos los derechos reservados.
          </p>

          <div className="flex gap-6 text-sm">

            <a
              href="#"
              className="
                text-gray-400
                hover:text-blue-600
                transition
              "
            >
              Privacidad
            </a>

            <a
              href="#"
              className="
                text-gray-400
                hover:text-blue-600
                transition
              "
            >
              Términos
            </a>

            <a
              href="#"
              className="
                text-gray-400
                hover:text-blue-600
                transition
              "
            >
              Cookies
            </a>

          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer