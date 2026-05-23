import {
  Star,
  MapPin,
  ShieldCheck,
  Clock3,
  Briefcase,
  MessageSquare,
  CheckCircle,
  Award,
  ShoppingBag
} from 'lucide-react'

import { Link } from 'react-router-dom'

function PerfilVendedor() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* NAVBAR */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-3">

          <div className="bg-blue-600 text-white p-2 rounded-xl">
            <ShoppingBag size={18} />
          </div>

          <div>
            <span className="font-black text-gray-900 text-lg">
              Placemarket
            </span>

            <p className="text-xs text-gray-400">
              Perfil Profesional
            </p>
          </div>
        </Link>

      
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* HEADER */}
        <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">

          <div className="flex flex-col lg:flex-row gap-8">

            {/* FOTO */}
            <div className="shrink-0">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
                alt="Vendedor"
                className="w-40 h-40 rounded-3xl object-cover"
              />
            </div>

            {/* INFO */}
            <div className="flex-1">

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

                <div>

                  <div className="flex items-center gap-3 flex-wrap">

                    <h1 className="text-4xl font-black text-gray-900">
                      Carlos Mendoza
                    </h1>

                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                      TOP VENDEDOR
                    </span>
                  </div>

                  <p className="text-gray-500 mt-3 text-lg">
                    Especialista en vehículos premium y tecnología.
                  </p>

                  <div className="flex flex-wrap items-center gap-5 mt-5 text-sm text-gray-500">

                    <span className="flex items-center gap-1">
                      <MapPin size={15} />
                      Santo Domingo, República Dominicana
                    </span>

                    <span className="flex items-center gap-1">
                      <Clock3 size={15} />
                      Responde en menos de 10 min
                    </span>

                    <span className="flex items-center gap-1">
                      <ShieldCheck size={15} />
                      Verificado
                    </span>
                  </div>
                </div>

                {/* RATING */}
                <div className="bg-gray-50 rounded-3xl p-6 min-w-[220px]">

                  <div className="flex items-center gap-2 mb-2">

                    <Star
                      className="text-yellow-400 fill-yellow-400"
                      size={22}
                    />

                    <span className="text-3xl font-black text-gray-900">
                      4.9
                    </span>
                  </div>

                  <p className="text-sm text-gray-500">
                    Basado en 248 opiniones verificadas
                  </p>

                  <div className="mt-5 space-y-2">

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">
                        Entregas exitosas
                      </span>

                      <span className="font-bold text-gray-900">
                        98%
                      </span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">
                        Tiempo respuesta
                      </span>

                      <span className="font-bold text-gray-900">
                        8 min
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="text-sm text-gray-400">
                    Ventas
                  </p>

                  <h3 className="text-2xl font-black text-gray-900 mt-1">
                    1,284
                  </h3>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="text-sm text-gray-400">
                    Clientes
                  </p>

                  <h3 className="text-2xl font-black text-gray-900 mt-1">
                    892
                  </h3>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="text-sm text-gray-400">
                    Ofertas activas
                  </p>

                  <h3 className="text-2xl font-black text-gray-900 mt-1">
                    54
                  </h3>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="text-sm text-gray-400">
                    Experiencia
                  </p>

                  <h3 className="text-2xl font-black text-gray-900 mt-1">
                    6 años
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENIDO */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

          {/* IZQUIERDA */}
          <div className="lg:col-span-2 space-y-6">

            {/* SOBRE MI */}
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">

              <h2 className="text-2xl font-black text-gray-900 mb-4">
                Sobre mí
              </h2>

              <p className="text-gray-500 leading-relaxed">
                Profesional especializado en compra, venta y localización de
                vehículos premium y productos tecnológicos. Ayudo a clientes
                a encontrar exactamente lo que necesitan al mejor precio y
                con procesos rápidos y seguros.
              </p>
            </div>

            {/* EXPERIENCIA */}
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">

              <div className="flex items-center gap-3 mb-6">

                <Briefcase className="text-blue-600" />

                <h2 className="text-2xl font-black text-gray-900">
                  Experiencia
                </h2>
              </div>

              <div className="space-y-5">

                <div className="border border-gray-100 rounded-2xl p-5">

                  <div className="flex justify-between items-start">

                    <div>
                      <h3 className="font-bold text-gray-900">
                        Consultor Automotriz Premium
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        AutoElite Group
                      </p>
                    </div>

                    <span className="text-sm text-gray-400">
                      2021 - Actualidad
                    </span>
                  </div>
                </div>

                <div className="border border-gray-100 rounded-2xl p-5">

                  <div className="flex justify-between items-start">

                    <div>
                      <h3 className="font-bold text-gray-900">
                        Ejecutivo Comercial
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Luxury Motors
                      </p>
                    </div>

                    <span className="text-sm text-gray-400">
                      2018 - 2021
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* REVIEWS */}
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">

              <div className="flex items-center gap-3 mb-6">

                <MessageSquare className="text-blue-600" />

                <h2 className="text-2xl font-black text-gray-900">
                  Opiniones
                </h2>
              </div>

              <div className="space-y-5">

                <div className="border border-gray-100 rounded-2xl p-5">

                  <div className="flex items-center justify-between">

                    <h4 className="font-bold text-gray-900">
                      María González
                    </h4>

                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                    Excelente experiencia. Muy profesional y rápido.
                  </p>
                </div>

                <div className="border border-gray-100 rounded-2xl p-5">

                  <div className="flex items-center justify-between">

                    <h4 className="font-bold text-gray-900">
                      José Ramírez
                    </h4>

                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                      <Star className="text-yellow-400 fill-yellow-400" size={16} />
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                    Encontró exactamente el vehículo que necesitaba.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DERECHA */}
          <div className="space-y-6">

            {/* BADGES */}
            <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">

              <h2 className="text-xl font-black text-gray-900 mb-5">
                Logros
              </h2>

              <div className="space-y-4">

                <div className="flex items-center gap-3">

                  <div className="bg-blue-100 p-3 rounded-2xl">
                    <Award className="text-blue-600" size={18} />
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 text-sm">
                      Top Seller
                    </p>

                    <p className="text-xs text-gray-500">
                      Más de 1,000 ventas
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">

                  <div className="bg-green-100 p-3 rounded-2xl">
                    <CheckCircle className="text-green-600" size={18} />
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 text-sm">
                      Verificación completa
                    </p>

                    <p className="text-xs text-gray-500">
                      Identidad confirmada
                    </p>
                  </div>
                </div>
              </div>
            </div>

    
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfilVendedor