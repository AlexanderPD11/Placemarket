import { Link } from 'react-router-dom'
import {
  ShoppingBag,
  Bell,
  User,
} from 'lucide-react'

import Button from './ui/Button'

function Navbar() {
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-white/80
        backdrop-blur-xl
        border-b
        border-gray-200
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >

        {/* LEFT */}
        <div className="flex items-center gap-10">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >

            <div
              className="
                bg-gradient-to-br
                from-blue-600
                to-cyan-500
                p-2.5
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
              <h1 className="text-gray-900 font-bold text-xl">
                Placemarket
              </h1>

              <p className="text-gray-500 text-xs">
                Marketplace inteligente
              </p>
            </div>

          </Link>

          {/* LINKS */}
          <div className="hidden lg:flex items-center gap-8">

            <a
              href="#como-funciona"
              className="
                text-gray-600
                hover:text-blue-600
                transition
                text-sm
                font-medium
              "
            >
              Cómo funciona
            </a>

            <a
              href="#categorias"
              className="
                text-gray-600
                hover:text-blue-600
                transition
                text-sm
                font-medium
              "
            >
              Categorías
            </a>

            <Link
              to="/muro"
              className="
                text-gray-600
                hover:text-blue-600
                transition
                text-sm
                font-medium
              "
            >
              Solicitudes
            </Link>

          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* ICONS */}
          <div className="hidden md:flex items-center gap-3">

            <button
              className="
                bg-gray-100
                border
                border-gray-200
                p-2.5
                rounded-xl
                hover:bg-gray-200
                transition
              "
            >
              <Bell
                size={18}
                className="text-gray-700"
              />
            </button>

            <button
              className="
                bg-gray-100
                border
                border-gray-200
                p-2.5
                rounded-xl
                hover:bg-gray-200
                transition
              "
            >
              <User
                size={18}
                className="text-gray-700"
              />
            </button>

          </div>

          {/* LOGIN */}
          <button
            className="
              hidden
              md:block
              text-gray-600
              hover:text-blue-600
              text-sm
              font-medium
              transition
            "
          >
            Iniciar sesión
          </button>

          {/* CTA */}
          <Link to="/publicar">
            <Button>
              Publicar necesidad
            </Button>
          </Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar