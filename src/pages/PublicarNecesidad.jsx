import { useState } from 'react'

import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  CheckCircle,
  Car,
  Home,
  Monitor,
  Wrench,
  Shirt,
  Dumbbell,
  ShoppingBag,
  MoreHorizontal,
  Upload,
} from 'lucide-react'

import { Link } from 'react-router-dom'

const categorias = [
  {
    id: 'vehiculos',
    label: 'Vehículos',
    icon: Car,
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80',
  },
  {
    id: 'propiedades',
    label: 'Propiedades',
    icon: Home,
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80',
  },
  {
    id: 'tecnologia',
    label: 'Tecnología',
    icon: Monitor,
    img: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80',
  },
  {
    id: 'servicios',
    label: 'Servicios',
    icon: Wrench,
    img: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&q=80',
  },
  {
    id: 'ropa',
    label: 'Ropa',
    icon: Shirt,
    img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80',
  },
  {
    id: 'deportes',
    label: 'Deportes',
    icon: Dumbbell,
    img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80',
  },
  {
    id: 'hogar',
    label: 'Hogar',
    icon: ShoppingBag,
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80',
  },
  {
    id: 'otros',
    label: 'Otros',
    icon: MoreHorizontal,
    img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&q=80',
  },
]

const placeholders = {
  vehiculos:
    'Ejemplo: Busco Toyota Corolla 2022 automático en buenas condiciones.',
  propiedades:
    'Ejemplo: Busco apartamento de 2 habitaciones en Santo Domingo.',
  tecnologia:
    'Ejemplo: Necesito laptop para diseño gráfico con 16GB RAM.',
  servicios:
    'Ejemplo: Necesito diseñador web para ecommerce.',
  ropa:
    'Ejemplo: Busco suplidor de ropa deportiva al por mayor.',
  deportes:
    'Ejemplo: Necesito equipo completo para gimnasio.',
  hogar:
    'Ejemplo: Busco muebles modernos para sala.',
  otros:
    'Describe exactamente lo que necesitas.',
}

const pasos = [
  'Categoría',
  'Detalles',
  'Presupuesto',
  'Archivos',
  'Preview',
]

function PublicarNecesidad() {
  const [paso, setPaso] = useState(1)

  const [form, setForm] = useState({
    categoria: 'vehiculos',
    ubicacion: '',
    presupuestoMin: '',
    presupuestoMax: '',
    urgencia: 'Flexible',
    descripcion: '',
    archivos: [],
  })

  const actualizar = (campo, valor) => {
    setForm({
      ...form,
      [campo]: valor,
    })
  }

  const progreso = Math.round((paso / 5) * 100)

  return (
    <div className="min-h-screen bg-slate-50">

      {/* NAVBAR */}

      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-3">

            <div className="bg-blue-600 text-white p-2 rounded-2xl">
              <ShoppingBag size={18} />
            </div>

            <div>

              <h2 className="font-black text-gray-900">
                Placemarket
              </h2>

              <p className="text-xs text-gray-500">
                Marketplace inteligente
              </p>

            </div>

          </Link>

          <div className="w-10 h-10 rounded-2xl bg-gray-200" />

        </div>

      </nav>

      {/* CONTENT */}

      <div className="max-w-5xl mx-auto px-6 py-14">

        {/* BACK */}

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition mb-8"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>

        {/* HEADER */}

        <div className="mb-12">

          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold">

            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />

            Nueva solicitud

          </span>

          <h1 className="text-5xl font-black text-gray-900 mt-6 leading-tight">
            Publica lo que necesitas.
          </h1>

          <p className="text-xl text-gray-500 mt-4 max-w-3xl leading-relaxed">
            Describe lo que buscas y recibe ofertas competitivas
            de vendedores reales.
          </p>

        </div>

        {/* PROGRESS */}

        <div className="bg-white border border-gray-200 rounded-[32px] p-8 shadow-sm mb-10">

          <div className="flex items-center justify-between mb-5">

            <div>

              <p className="text-sm font-semibold text-blue-600">
                Progreso del formulario
              </p>

              <p className="text-gray-500 mt-1">
                Paso {paso} de 5 · {pasos[paso - 1]}
              </p>

            </div>

            <div className="text-3xl font-black text-gray-900">
              {progreso}%
            </div>

          </div>

          <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden">

            <div
              className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-500"
              style={{ width: `${progreso}%` }}
            />

          </div>

        </div>

        {/* PASO 1 */}

        {paso === 1 && (

          <div className="bg-white border border-gray-200 rounded-[32px] p-8 shadow-sm mb-10">

            <h2 className="text-3xl font-black text-gray-900 mb-2">
              Selecciona una categoría
            </h2>

            <p className="text-gray-500 mb-8">
              Esto nos ayuda a mostrar tu solicitud a los vendedores correctos.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

              {categorias.map((cat) => {

                const Icon = cat.icon

                return (

                  <button
                    key={cat.id}
                    onClick={() => actualizar('categoria', cat.id)}
                    className={`
                      overflow-hidden
                      rounded-3xl
                      border
                      transition-all
                      text-left
                      bg-white
                      shadow-sm
                      hover:shadow-xl
                      hover:-translate-y-1

                      ${
                        form.categoria === cat.id
                          ? 'border-blue-500 ring-4 ring-blue-100'
                          : 'border-gray-200'
                      }
                    `}
                  >

                    <div className="h-36 overflow-hidden">

                      <img
                        src={cat.img}
                        alt={cat.label}
                        className="w-full h-full object-cover"
                      />

                    </div>

                    <div className="p-5">

                      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4">

                        <Icon className="text-blue-600" size={22} />

                      </div>

                      <h3 className="font-bold text-gray-900">
                        {cat.label}
                      </h3>

                    </div>

                  </button>

                )

              })}

            </div>

          </div>

        )}

        {/* PASO 2 */}

        {paso === 2 && (

          <div className="bg-white border border-gray-200 rounded-[32px] p-8 shadow-sm mb-10">

            <h2 className="text-3xl font-black text-gray-900 mb-8">
              Describe tu necesidad
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

              <div>

                <label className="block text-sm text-gray-600 mb-2">
                  Ubicación
                </label>

                <div className="relative">

                  <MapPin
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    type="text"
                    placeholder="Ciudad, Provincia"
                    value={form.ubicacion}
                    onChange={(e) =>
                      actualizar('ubicacion', e.target.value)
                    }
                    className="
                      w-full
                      border
                      border-gray-200
                      rounded-2xl
                      pl-12
                      pr-5
                      py-4
                      outline-none
                      focus:border-blue-400
                    "
                  />

                </div>

              </div>

            </div>

            <div>

              <label className="block text-sm text-gray-600 mb-2">
                Descripción
              </label>

              <textarea
                rows={8}
                placeholder={placeholders[form.categoria]}
                value={form.descripcion}
                onChange={(e) =>
                  actualizar('descripcion', e.target.value)
                }
                className="
                  w-full
                  border
                  border-gray-200
                  rounded-3xl
                  px-5
                  py-5
                  outline-none
                  focus:border-blue-400
                  resize-none
                "
              />

            </div>

          </div>

        )}

        {/* PASO 3 */}

        {paso === 3 && (

          <div className="bg-white border border-gray-200 rounded-[32px] p-8 shadow-sm mb-10">

            <h2 className="text-3xl font-black text-gray-900 mb-8">
              Presupuesto y prioridad
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

              <div>

                <label className="block text-sm text-gray-600 mb-2">
                  Presupuesto mínimo
                </label>

                <input
                  type="number"
                  placeholder="10,000"
                  value={form.presupuestoMin}
                  onChange={(e) =>
                    actualizar('presupuestoMin', e.target.value)
                  }
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                    focus:border-blue-400
                  "
                />

              </div>

              <div>

                <label className="block text-sm text-gray-600 mb-2">
                  Presupuesto máximo
                </label>

                <input
                  type="number"
                  placeholder="50,000"
                  value={form.presupuestoMax}
                  onChange={(e) =>
                    actualizar('presupuestoMax', e.target.value)
                  }
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-2xl
                    px-5
                    py-4
                    outline-none
                    focus:border-blue-400
                  "
                />

              </div>

            </div>

            <div>

              <label className="block text-sm text-gray-600 mb-4">
                Nivel de urgencia
              </label>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {[
                  'Flexible',
                  'Moderado',
                  'Urgente',
                ].map((item) => (

                  <button
                    key={item}
                    onClick={() => actualizar('urgencia', item)}
                    className={`
                      border
                      rounded-3xl
                      p-5
                      text-left
                      transition-all

                      ${
                        form.urgencia === item
                          ? 'border-blue-500 bg-blue-50 ring-4 ring-blue-100'
                          : 'border-gray-200'
                      }
                    `}
                  >

                    <h3 className="font-bold text-gray-900">
                      {item}
                    </h3>

                  </button>

                ))}

              </div>

            </div>

          </div>

        )}

        {/* PASO 4 */}

        {paso === 4 && (

          <div className="bg-white border border-gray-200 rounded-[32px] p-8 shadow-sm mb-10">

            <h2 className="text-3xl font-black text-gray-900 mb-2">
              Archivos e imágenes
            </h2>

            <p className="text-gray-500 mb-8">
              Agrega referencias visuales para mejorar las ofertas.
            </p>

            <div className="border-2 border-dashed border-gray-300 rounded-[32px] p-16 text-center bg-gray-50">

              <div className="w-20 h-20 rounded-3xl bg-blue-50 flex items-center justify-center mx-auto mb-6">

                <Upload
                  size={36}
                  className="text-blue-600"
                />

              </div>

              <h3 className="text-2xl font-black text-gray-900">
                Arrastra archivos aquí
              </h3>

              <button className="mt-8 bg-blue-600 text-white px-6 py-4 rounded-2xl hover:bg-blue-700 transition">
                Seleccionar archivos
              </button>

            </div>

          </div>

        )}

        {/* PASO 5 */}

        {paso === 5 && (

          <div className="bg-white border border-gray-200 rounded-[32px] p-8 shadow-sm mb-10">

            <h2 className="text-3xl font-black text-gray-900 mb-8">
              Vista previa
            </h2>

            <div className="bg-gray-50 rounded-[32px] p-8">

              <h3 className="text-2xl font-black text-gray-900 mb-4">
                {
                  categorias.find(
                    c => c.id === form.categoria
                  )?.label
                }
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {form.descripcion}
              </p>

            </div>

          </div>

        )}

        {/* ACTIONS */}

        <div className="flex justify-between items-center">

          {paso > 1 ? (

            <button
              onClick={() => setPaso(paso - 1)}
              className="
                flex
                items-center
                gap-2
                border
                border-gray-200
                bg-white
                text-gray-700
                px-6
                py-4
                rounded-2xl
              "
            >

              <ArrowLeft size={18} />

              Anterior

            </button>

          ) : (
            <div />
          )}

          {paso < 5 ? (

            <button
              onClick={() => setPaso(paso + 1)}
              className="
                flex
                items-center
                gap-2
                bg-blue-600
                text-white
                px-8
                py-4
                rounded-2xl
                hover:bg-blue-700
              "
            >

              Siguiente

              <ArrowRight size={18} />

            </button>

          ) : (

            <button
              className="
                flex
                items-center
                gap-2
                bg-blue-600
                text-white
                px-8
                py-4
                rounded-2xl
                hover:bg-blue-700
              "
            >

              Publicar necesidad

              <CheckCircle size={18} />

            </button>

          )}

        </div>

      </div>

    </div>
  )
}

export default PublicarNecesidad