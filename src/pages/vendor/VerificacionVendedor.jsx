import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ShoppingBag,
  Shield,
  CheckCircle,
  Star,
  User,
  MessageCircle,
  Settings,
  Bell,
  Search,
  Camera,
  FileText,
  Upload,
  Phone,
  Globe,
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

const niveles = [
  {
    id: 1,
    nombre: 'Verificado',
    descripcion: 'Basico para expertos locales',
    beneficios: [
      'Insignia "Verificado"',
      '20 ofertas mensuales',
      'Acceso al muro de solicitudes',
    ],
    requisitos: [
      'Cedula / DNI / Pasaporte',
      'Selfie de verificacion facial',
    ],
    color: 'blue',
  },
  {
    id: 2,
    nombre: 'Pro',
    descripcion: 'Para profesionales de alto volumen',
    beneficios: [
      'Insignia dorada "Pro"',
      'Ofertas ilimitadas',
      'Prioridad de busqueda',
    ],
    requisitos: ['Completar Nivel 1', 'WhatsApp y Redes Sociales'],
    color: 'yellow',
  },
  {
    id: 3,
    nombre: 'Premium',
    descripcion: 'Empresas y agencias verificadas',
    beneficios: [
      'Insignia "Premium"',
      'Maxima visibilidad',
      'Soporte prioritario',
    ],
    requisitos: ['Completar Nivel 2', 'Documentacion legal'],
    color: 'purple',
  },
]

function VerificacionVendedor() {
  const [nivelActivo, setNivelActivo] = useState(1)

  const [completados, setCompletados] = useState([])

  const [form, setForm] = useState({
    cedula: '',
    nombre: '',
    instagram: '',
    facebook: '',
    whatsapp: '',
    sitioWeb: '',
    rnc: '',
  })

  const actualizar = (campo, valor) => {
    setForm({ ...form, [campo]: valor })
  }

  const completarNivel = (nivel) => {
    if (!completados.includes(nivel)) {
      setCompletados([...completados, nivel])
    }

    if (nivel < 3) {
      setNivelActivo(nivel + 1)
    }
  }

  const progreso = (completados.length / 3) * 100

  return (
    <div className="min-h-screen bg-[#f6f8fc] flex">
      {/* SIDEBAR */}
      <aside className="w-[270px] bg-white border-r border-gray-100 hidden lg:flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-blue-600 p-2.5 rounded-2xl">
              <ShoppingBag size={18} className="text-white" />
            </div>

            <div>
              <h1 className="font-black text-gray-900 text-lg">
                PlaceMarket
              </h1>

              <p className="text-xs text-gray-400">
                Seller Dashboard
              </p>
            </div>
          </Link>
        </div>

        <div className="p-4 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-600 hover:bg-gray-50 transition">
            <User size={18} />
            Perfil
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-600 hover:bg-gray-50 transition">
            <ShoppingBag size={18} />
            Mis Ofertas
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-600 hover:bg-gray-50 transition">
            <MessageCircle size={18} />
            Mensajes
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-blue-50 text-blue-600 font-semibold">
            <Shield size={18} />
            Verificacion
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-600 hover:bg-gray-50 transition">
            <Settings size={18} />
            Configuracion
          </button>
        </div>

        <div className="mt-auto p-5">
          <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-[28px] p-6 text-white">
            <p className="text-sm opacity-80 mb-2">
              Nivel actual
            </p>

            <h3 className="text-3xl font-black mb-4">
              {completados.length === 0
                ? 'Sin verificar'
                : completados.length === 1
                ? 'Verificado'
                : completados.length === 2
                ? 'Pro'
                : 'Premium'}
            </h3>

            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full"
                style={{ width: `${progreso}%` }}
              />
            </div>

            <p className="text-xs mt-4 opacity-80 leading-relaxed">
              Completa los niveles de seguridad para aumentar tu confianza y
              visibilidad dentro de PlaceMarket.
            </p>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1">
        {/* TOPBAR */}
        <div className="bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-gray-900">
              Centro de Verificacion
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Completa tu perfil profesional y desbloquea nuevas ventajas.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center bg-gray-50 px-4 py-2.5 rounded-2xl w-[260px]">
              <Search size={16} className="text-gray-400" />

              <input
                type="text"
                placeholder="Buscar..."
                className="bg-transparent outline-none text-sm ml-2 w-full"
              />
            </div>

            <button className="relative">
              <Bell size={20} className="text-gray-600" />

              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-blue-600" />
            </button>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-gray-900">
                  Alexander Paulino
                </p>

                <p className="text-xs text-gray-400">
                  Seller Account
                </p>
              </div>

              <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                AP
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8">
          {/* HERO */}
          <div className="mb-10">
            <div className="inline-flex items-center bg-blue-100 text-blue-600 text-xs font-bold px-4 py-2 rounded-full mb-5">
              CENTRO DE VERIFICACION
            </div>

            <h1 className="text-5xl font-black text-gray-900 leading-tight">
              Eleva tu perfil al{' '}
              <span className="text-blue-600">
                siguiente nivel
              </span>
            </h1>

            <p className="text-gray-500 text-lg mt-4 max-w-3xl leading-relaxed">
              Aumenta la confianza de tus clientes y desbloquea funciones
              exclusivas completando los niveles de seguridad.
            </p>
          </div>

          {/* PROGRESO */}
          <div className="bg-white border border-gray-100 rounded-[30px] p-7 mb-10 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex items-center gap-4 min-w-[280px]">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                  <Shield size={24} className="text-blue-600" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400 font-bold">
                    Estado de cuenta
                  </p>

                  <h2 className="text-2xl font-black text-gray-900">
                    Nivel:{' '}
                    {completados.length === 0
                      ? 'Sin verificar'
                      : completados.length === 1
                      ? 'Verificado'
                      : completados.length === 2
                      ? 'Pro'
                      : 'Premium'}
                  </h2>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs uppercase font-bold text-gray-400">
                    Progreso total
                  </p>

                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-gray-500">
                      {Math.round(progreso)}%
                    </span>

                    <span className="text-blue-600 text-xs font-bold uppercase">
                      Proximo hito
                    </span>

                    <span className="font-black text-gray-900">
                      Nivel {Math.min(completados.length + 1, 3)}
                    </span>
                  </div>
                </div>

                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all"
                    style={{ width: `${progreso}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* NIVELES */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-7">
            {niveles.map((nivel) => {
              const activo = nivelActivo === nivel.id
              const completado = completados.includes(nivel.id)

              return (
                <div
                  key={nivel.id}
                  onClick={() => setNivelActivo(nivel.id)}
                  className={`bg-white rounded-[30px] border p-8 transition-all cursor-pointer relative ${
                    activo
                      ? 'border-blue-500 shadow-xl scale-[1.01]'
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  {nivel.id === 2 && (
                    <div className="absolute top-6 right-6 bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full tracking-wide">
                      RECOMENDADO
                    </div>
                  )}

                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8">
                    {nivel.id === 1 && (
                      <Shield
                        size={22}
                        className="text-blue-600"
                      />
                    )}

                    {nivel.id === 2 && (
                      <Star
                        size={22}
                        className="text-yellow-500"
                      />
                    )}

                    {nivel.id === 3 && (
                      <CheckCircle
                        size={22}
                        className="text-purple-600"
                      />
                    )}
                  </div>

                  <h2 className="text-4xl font-black text-gray-900 mb-2">
                    {nivel.nombre}
                  </h2>

                  <p className="text-gray-500 mb-8">
                    {nivel.descripcion}
                  </p>

                  <div className="space-y-4 mb-8">
                    {nivel.beneficios.map((b, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle
                          size={18}
                          className="text-blue-600 mt-0.5"
                        />

                        <p className="text-sm text-gray-700">
                          {b}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-5 mb-8">
                    <p className="text-xs uppercase font-bold text-gray-400 mb-4">
                      Requisitos
                    </p>

                    <div className="space-y-3">
                      {nivel.requisitos.map((r, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-500" />

                          {r}
                        </div>
                      ))}
                    </div>
                  </div>

                  {nivel.id === 1 && (
                    <button
                      onClick={() => completarNivel(1)}
                      className="w-full bg-[#07112b] hover:bg-black transition text-white py-4 rounded-2xl font-semibold"
                    >
                      Iniciar Nivel 1
                    </button>
                  )}

                  {nivel.id === 2 && (
                    <button
                      disabled={!completados.includes(1)}
                      onClick={() => completarNivel(2)}
                      className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl font-semibold disabled:opacity-50"
                    >
                      Desbloquear Pro
                    </button>
                  )}

                  {nivel.id === 3 && (
                    <button
                      disabled={!completados.includes(2)}
                      onClick={() => completarNivel(3)}
                      className="w-full bg-gray-100 text-gray-400 py-4 rounded-2xl font-semibold disabled:cursor-not-allowed"
                    >
                      Disponible tras Nivel 2
                    </button>
                  )}
                </div>
              )
            })}
          </div>

          {/* FORMULARIO */}
          <div className="mt-10 bg-white border border-gray-100 rounded-[30px] shadow-sm overflow-hidden">
            {/* NIVEL 1 */}
            {nivelActivo === 1 && (
              <div className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">
                    <Shield size={24} className="text-white" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-black text-gray-900">
                      Nivel 1 — Verificado
                    </h2>

                    <p className="text-gray-500">
                      Verifica tu identidad para comenzar a ofertar.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Numero de Cedula
                    </label>

                    <div className="relative">
                      <FileText
                        size={16}
                        className="absolute left-4 top-4 text-gray-400"
                      />

                      <input
                        type="text"
                        value={form.cedula}
                        onChange={(e) =>
                          actualizar('cedula', e.target.value)
                        }
                        placeholder="000-0000000-0"
                        className="w-full border border-gray-200 rounded-2xl pl-11 pr-4 py-4 outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre Completo
                    </label>

                    <div className="relative">
                      <User
                        size={16}
                        className="absolute left-4 top-4 text-gray-400"
                      />

                      <input
                        type="text"
                        value={form.nombre}
                        onChange={(e) =>
                          actualizar('nombre', e.target.value)
                        }
                        placeholder="Como aparece en tu documento"
                        className="w-full border border-gray-200 rounded-2xl pl-11 pr-4 py-4 outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  <div className="border-2 border-dashed border-gray-200 rounded-3xl p-8 text-center hover:border-blue-400 transition cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                      <Upload
                        size={24}
                        className="text-blue-600"
                      />
                    </div>

                    <p className="font-semibold text-gray-900 mb-1">
                      Foto frontal de cedula
                    </p>

                    <p className="text-sm text-gray-500">
                      JPG, PNG o PDF
                    </p>
                  </div>

                  <div className="border-2 border-dashed border-gray-200 rounded-3xl p-8 text-center hover:border-blue-400 transition cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                      <Camera
                        size={24}
                        className="text-blue-600"
                      />
                    </div>

                    <p className="font-semibold text-gray-900 mb-1">
                      Selfie con documento
                    </p>

                    <p className="text-sm text-gray-500">
                      Verificacion facial
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => completarNivel(1)}
                  className="bg-blue-600 hover:bg-blue-700 transition text-white px-7 py-4 rounded-2xl font-semibold flex items-center gap-2"
                >
                  Enviar Verificacion
                  <ArrowRight size={18} />
                </button>
              </div>
            )}

            {/* NIVEL 2 */}
            {nivelActivo === 2 && (
              <div className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-yellow-500 flex items-center justify-center">
                    <Star size={24} className="text-white" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-black text-gray-900">
                      Nivel 2 — Pro
                    </h2>

                    <p className="text-gray-500">
                      Aumenta tu credibilidad conectando tus redes.
                    </p>
                  </div>
                </div>

                <div className="space-y-5 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Instagram
                    </label>

                    <div className="relative">
                      <div className="absolute left-4 top-4 text-gray-400">
                        <Instagram />
                      </div>

                      <input
                        type="text"
                        placeholder="@tunegocio"
                        value={form.instagram}
                        onChange={(e) =>
                          actualizar('instagram', e.target.value)
                        }
                        className="w-full border border-gray-200 rounded-2xl pl-11 pr-4 py-4 outline-none focus:border-yellow-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Facebook
                    </label>

                    <div className="relative">
                      <div className="absolute left-4 top-4 text-gray-400">
                        <Facebook />
                      </div>

                      <input
                        type="text"
                        placeholder="facebook.com/tunegocio"
                        value={form.facebook}
                        onChange={(e) =>
                          actualizar('facebook', e.target.value)
                        }
                        className="w-full border border-gray-200 rounded-2xl pl-11 pr-4 py-4 outline-none focus:border-yellow-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      WhatsApp
                    </label>

                    <div className="relative">
                      <Phone
                        size={16}
                        className="absolute left-4 top-4 text-gray-400"
                      />

                      <input
                        type="text"
                        placeholder="809-000-0000"
                        value={form.whatsapp}
                        onChange={(e) =>
                          actualizar('whatsapp', e.target.value)
                        }
                        className="w-full border border-gray-200 rounded-2xl pl-11 pr-4 py-4 outline-none focus:border-yellow-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Sitio Web
                    </label>

                    <div className="relative">
                      <Globe
                        size={16}
                        className="absolute left-4 top-4 text-gray-400"
                      />

                      <input
                        type="text"
                        placeholder="https://tunegocio.com"
                        value={form.sitioWeb}
                        onChange={(e) =>
                          actualizar('sitioWeb', e.target.value)
                        }
                        className="w-full border border-gray-200 rounded-2xl pl-11 pr-4 py-4 outline-none focus:border-yellow-400"
                      />
                    </div>
                  </div>
                </div>

                <button
                  disabled={!completados.includes(1)}
                  onClick={() => completarNivel(2)}
                  className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-7 py-4 rounded-2xl font-semibold flex items-center gap-2 disabled:opacity-50"
                >
                  Subir a Nivel Pro
                  <ArrowRight size={18} />
                </button>
              </div>
            )}

            {/* NIVEL 3 */}
            {nivelActivo === 3 && (
              <div className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center">
                    <CheckCircle size={24} className="text-white" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-black text-gray-900">
                      Nivel 3 — Premium
                    </h2>

                    <p className="text-gray-500">
                      Agrega documentos legales para maxima confianza.
                    </p>
                  </div>
                </div>

                <div className="space-y-5 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      RNC de empresa
                    </label>

                    <div className="relative">
                      <FileText
                        size={16}
                        className="absolute left-4 top-4 text-gray-400"
                      />

                      <input
                        type="text"
                        placeholder="000-00000-0"
                        value={form.rnc}
                        onChange={(e) =>
                          actualizar('rnc', e.target.value)
                        }
                        className="w-full border border-gray-200 rounded-2xl pl-11 pr-4 py-4 outline-none focus:border-purple-400"
                      />
                    </div>
                  </div>

                  <div className="border-2 border-dashed border-gray-200 rounded-3xl p-8 text-center hover:border-purple-400 transition cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mx-auto mb-4">
                      <Upload
                        size={24}
                        className="text-purple-600"
                      />
                    </div>

                    <p className="font-semibold text-gray-900 mb-1">
                      Registro Mercantil
                    </p>

                    <p className="text-sm text-gray-500">
                      Sube documentacion legal
                    </p>
                  </div>
                </div>

                <button
                  disabled={!completados.includes(2)}
                  onClick={() => completarNivel(3)}
                  className="bg-purple-600 hover:bg-purple-700 transition text-white px-7 py-4 rounded-2xl font-semibold flex items-center gap-2 disabled:opacity-50"
                >
                  Subir a Premium
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>

          {/* BENEFICIOS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white rounded-3xl p-6 border border-gray-100">
              <Shield className="text-blue-600 mb-4" size={22} />

              <h3 className="font-black text-gray-900 mb-2">
                Privacidad de Datos
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                Tus documentos estan protegidos y cifrados.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-100">
              <CheckCircle
                className="text-blue-600 mb-4"
                size={22}
              />

              <h3 className="font-black text-gray-900 mb-2">
                Revision Rapida
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                Verificamos solicitudes en menos de 24 horas.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-100">
              <FileText
                className="text-blue-600 mb-4"
                size={22}
              />

              <h3 className="font-black text-gray-900 mb-2">
                Auditoria Humana
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                Nuestro equipo revisa cada solicitud manualmente.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-100">
              <Shield className="text-blue-600 mb-4" size={22} />

              <h3 className="font-black text-gray-900 mb-2">
                Comunidad Segura
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                Manteniendo PlaceMarket libre de fraude.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default VerificacionVendedor