import VendorLayout from '../../layouts/VendorLayout'

import {
  User,
  ShieldCheck,
  Bell,
  Lock,
  CreditCard,
  Globe,
  Save,
  Camera,
  Mail,
  Phone,
} from 'lucide-react'

function Configuracion() {
  return (
    <VendorLayout>

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-4xl font-black text-gray-900 tracking-tight">
          Configuración
        </h1>

        <p className="text-base text-gray-500 mt-3">
          Administra tu cuenta, privacidad, seguridad y preferencias.
        </p>

      </div>

      <div className="grid grid-cols-12 gap-8">

        {/* SIDEBAR */}

        <div className="col-span-3">

          <div className="bg-white border border-gray-100 rounded-[32px] p-5 shadow-sm sticky top-8">

            <div className="space-y-2">

              {[
                {
                  icon: User,
                  label: 'Perfil',
                  active: true,
                },
                {
                  icon: ShieldCheck,
                  label: 'Seguridad',
                },
                {
                  icon: Bell,
                  label: 'Notificaciones',
                },
                {
                  icon: CreditCard,
                  label: 'Pagos',
                },
                {
                  icon: Globe,
                  label: 'Preferencias',
                },
              ].map((item) => {

                const Icon = item.icon

                return (

                  <button
                    key={item.label}
                    className={`
                      w-full
                      flex
                      items-center
                      gap-3
                      px-4
                      py-3
                      rounded-2xl
                      text-sm
                      font-semibold
                      transition

                      ${
                        item.active
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                      }
                    `}
                  >

                    <Icon size={18} />

                    {item.label}

                  </button>

                )
              })}

            </div>

          </div>

        </div>

        {/* CONTENT */}

        <div className="col-span-9 space-y-8">

          {/* PERFIL */}

          <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">

            <div className="flex items-start justify-between gap-6 mb-8">

              <div>

                <h2 className="text-2xl font-black text-gray-900">
                  Información del perfil
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                  Actualiza la información visible para compradores y clientes.
                </p>

              </div>

              <button
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-blue-50
                  text-blue-600
                  flex
                  items-center
                  justify-center
                  hover:bg-blue-100
                  transition
                "
              >

                <Camera size={20} />

              </button>

            </div>

            <div className="grid grid-cols-2 gap-6">

              <div>

                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Nombre completo
                </label>

                <input
                  type="text"
                  defaultValue="Alexander Paulino"
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

                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Empresa
                </label>

                <input
                  type="text"
                  defaultValue="Placemarket Studio"
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

                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Correo electrónico
                </label>

                <div className="relative">

                  <Mail
                    size={17}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    type="email"
                    defaultValue="alexander@email.com"
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

              <div>

                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Teléfono
                </label>

                <div className="relative">

                  <Phone
                    size={17}
                    className="absolute left-4 top-4 text-gray-400"
                  />

                  <input
                    type="text"
                    defaultValue="+1 (809) 000-0000"
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

          </div>

          {/* SEGURIDAD */}

          <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">

            <div className="flex items-center gap-3 mb-6">

              <div className="bg-blue-50 w-11 h-11 rounded-2xl flex items-center justify-center">
                <Lock size={18} className="text-blue-600" />
              </div>

              <div>

                <h2 className="text-2xl font-black text-gray-900">
                  Seguridad
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Protege tu cuenta y controla accesos.
                </p>

              </div>

            </div>

            <div className="space-y-5">

              <div className="flex items-center justify-between border border-gray-100 rounded-2xl p-5">

                <div>

                  <p className="font-bold text-gray-900">
                    Cambiar contraseña
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Actualiza tu contraseña periódicamente.
                  </p>

                </div>

                <button className="border border-gray-200 px-5 py-2 rounded-xl text-sm font-semibold hover:border-blue-400 hover:text-blue-600 transition">
                  Editar
                </button>

              </div>

              <div className="flex items-center justify-between border border-gray-100 rounded-2xl p-5">

                <div>

                  <p className="font-bold text-gray-900">
                    Autenticación en dos pasos
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    Agrega una capa adicional de seguridad.
                  </p>

                </div>

                <button className="bg-green-50 text-green-600 px-4 py-2 rounded-xl text-sm font-bold">
                  Activo
                </button>

              </div>

            </div>

          </div>

          {/* NOTIFICACIONES */}

          <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">

            <div className="flex items-center gap-3 mb-6">

              <div className="bg-purple-50 w-11 h-11 rounded-2xl flex items-center justify-center">
                <Bell size={18} className="text-purple-600" />
              </div>

              <div>

                <h2 className="text-2xl font-black text-gray-900">
                  Preferencias de notificación
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Elige cómo deseas recibir alertas y novedades.
                </p>

              </div>

            </div>

            <div className="space-y-5">

              {[
                'Nuevas ofertas y oportunidades',
                'Mensajes y conversaciones',
                'Recargas y movimientos de créditos',
                'Promociones y novedades',
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center justify-between border border-gray-100 rounded-2xl p-5"
                >

                  <p className="font-semibold text-gray-700">
                    {item}
                  </p>

                  <button className="w-14 h-8 bg-blue-600 rounded-full relative">

                    <div className="w-6 h-6 bg-white rounded-full absolute top-1 right-1"></div>

                  </button>

                </div>

              ))}

            </div>

          </div>

          {/* SAVE */}

          <div className="flex justify-end">

            <button
              className="
                bg-blue-600
                text-white
                px-7
                py-4
                rounded-2xl
                font-bold
                hover:bg-blue-700
                transition
                flex
                items-center
                gap-2
              "
            >

              Guardar cambios

              <Save size={18} />

            </button>

          </div>

        </div>

      </div>

    </VendorLayout>
  )
}

export default Configuracion