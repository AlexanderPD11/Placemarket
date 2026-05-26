import VendorLayout from '../../layouts/VendorLayout'
import {
  Wallet,
  TrendingUp,
  CheckCircle2,
  Plus,
  Tag,
  Shield,
  Eye,
  BarChart2,
  Headphones,
  ChevronDown
} from 'lucide-react'

const stats = [
  { title: 'Créditos disponibles', value: '1,250', sub: '+12%', subColor: 'text-green-500', icon: Wallet, iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
  { title: 'Ofertas enviadas', value: '84', sub: '+5%', subColor: 'text-green-500', icon: Tag, iconBg: 'bg-orange-50', iconColor: 'text-orange-500' },
  { title: 'Ofertas ganadas', value: '26', sub: '+18%', subColor: 'text-green-500', icon: CheckCircle2, iconBg: 'bg-green-50', iconColor: 'text-green-500' },
  { title: 'Contactos desbloqueados', value: '18', sub: '+6 este mes', subColor: 'text-green-500', icon: TrendingUp, iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
]

const activity = [
  { icon: Tag, iconBg: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Oferta enviada: Toyota Corolla 2022', sub: 'Hace 15 minutos • Sector Automotriz', valor: '-5 créditos', valorColor: 'text-gray-500', accion: null },
  { icon: CheckCircle2, iconBg: 'bg-green-100', iconColor: 'text-green-600', title: 'Solicitud ganada: Diseño de logo corporativo', sub: 'Hace 2 horas • Servicios Profesionales', valor: '+$450.00', valorColor: 'text-green-600', accion: null },
  { icon: Plus, iconBg: 'bg-orange-100', iconColor: 'text-orange-600', title: 'Nueva solicitud de contacto: Reparación Hogar', sub: 'Ayer • Servicios para el Hogar', valor: null, valorColor: null, accion: 'Ver detalle' },
]

const insights = [
  { label: 'Electrónica', porcentaje: 42, color: 'bg-blue-600' },
  { label: 'Hogar', porcentaje: 28, color: 'bg-blue-400' },
  { label: 'Automotriz', porcentaje: 18, color: 'bg-blue-300' },
]

const proBeneficios = [
  { icon: Shield, label: 'Prioridad en solicitudes' },
  { icon: Eye, label: 'Perfil destacado 2.5x más visual' },
  { icon: BarChart2, label: 'Estadísticas avanzadas' },
  { icon: Headphones, label: 'Soporte 24/7 dedicado' },
]

const barras = [45, 80, 55, 120, 90, 160, 130]
const dias = ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB', 'DOM']
const maxBarra = Math.max(...barras)

function VendorDashboard() {
  return (
    <VendorLayout>
      <div className="p-8">

        {/* HEADER */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm px-8 py-6 flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-black text-gray-900">
              Bienvenido de nuevo, Carlos
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Aquí tienes un resumen de tu actividad comercial.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="border border-gray-200 text-gray-700 px-4 py-2 rounded-2xl text-sm font-semibold hover:border-gray-300 transition">
              Recargar créditos
            </button>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-2">
              <Plus size={14} />
              Upgrade PRO
            </button>

            <div className="w-10 h-10 bg-gray-300 rounded-full shrink-0"></div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${stat.iconBg} p-2.5 rounded-xl`}>
                    <Icon size={18} className={stat.iconColor} strokeWidth={1.5} />
                  </div>

                  <span className={`text-xs font-bold ${stat.subColor}`}>
                    {stat.sub}
                  </span>
                </div>

                <p className="text-sm text-gray-500 font-medium mb-2">
                  {stat.title}
                </p>

                <p className="text-3xl font-black text-gray-900">
                  {stat.value}
                </p>
              </div>
            )
          })}
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">

            {/* CHART */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-black text-gray-900">
                    Actividad de ofertas
                  </h2>
                  <p className="text-sm text-gray-400 mt-0.5">
                    Rendimiento semanal
                  </p>
                </div>

                <button className="flex items-center gap-2 border border-gray-200 text-gray-600 px-3 py-2 rounded-xl text-sm font-medium hover:border-gray-300 transition">
                  Últimos 7 días
                  <ChevronDown size={14} />
                </button>
              </div>

              <div className="flex items-end gap-2 h-48">
                {barras.map((h, i) => {
                  const altura = Math.round((h / maxBarra) * 100)
                  const esMaximo = h === maxBarra

                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className={`w-full rounded-t-xl transition-all duration-500 ${esMaximo ? 'bg-blue-600' : 'bg-blue-100'}`}
                        style={{ height: `${altura * 1.8}px` }}
                      />
                    </div>
                  )
                })}
              </div>

              <div className="flex justify-between mt-3">
                {dias.map((d, i) => (
                  <span
                    key={d}
                    className={`flex-1 text-center text-xs ${barras[i] === maxBarra ? 'text-blue-600 font-bold' : 'text-gray-400'}`}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTIVITY */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              <h2 className="text-lg font-black text-gray-900 mb-6">
                Actividad reciente
              </h2>

              <div className="space-y-4">
                {activity.map((item, i) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={i}
                      className="flex items-center gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0"
                    >
                      <div className={`w-10 h-10 ${item.iconBg} rounded-xl flex items-center justify-center shrink-0`}>
                        <Icon size={18} className={item.iconColor} strokeWidth={1.5} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-900 truncate">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {item.sub}
                        </p>
                      </div>

                      {item.valor && (
                        <span className={`text-sm font-bold shrink-0 ${item.valorColor}`}>
                          {item.valor}
                        </span>
                      )}

                      {item.accion && (
                        <button className="text-blue-600 text-sm font-semibold hover:underline shrink-0">
                          {item.accion}
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                RECOMENDADO
              </span>

              <h3 className="text-2xl font-black mt-4 leading-tight">
                Hazte PRO SELLER
              </h3>

              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Multiplica tus posibilidades de ganar solicitudes con beneficios exclusivos diseñados para profesionales.
              </p>

              <div className="space-y-3 mt-5">
                {proBeneficios.map((item) => {
                  const Icon = item.icon

                  return (
                    <div key={item.label} className="flex items-center gap-2 text-sm text-gray-300">
                      <Icon size={14} className="text-blue-400 shrink-0" strokeWidth={1.5} />
                      {item.label}
                    </div>
                  )
                })}
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold mt-6 hover:bg-blue-700 transition">
                Mejorar mi cuenta
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-black text-gray-900 mb-1">
                Market Insights
              </h3>

              <p className="text-xs text-gray-400 mb-5">
                Sectores con más demanda esta semana en tu región:
              </p>

              <div className="space-y-4">
                {insights.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-gray-700">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-blue-600">
                        {item.porcentaje}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div
                        className={`${item.color} h-1.5 rounded-full transition-all duration-500`}
                        style={{ width: `${item.porcentaje}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm font-semibold mt-5 hover:border-blue-400 hover:text-blue-600 transition">
                Ver reporte completo
              </button>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center mt-10 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            © 2025 Placemarket. Empowering Professional Commerce.
          </p>

          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-blue-600 transition">
              Términos
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Privacidad
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Centro de Ayuda
            </a>
          </div>
        </div>

      </div>
    </VendorLayout>
  )
}

export default VendorDashboard