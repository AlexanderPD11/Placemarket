import { Link } from 'react-router-dom'
import { ShoppingBag, Search, DollarSign, ShoppingCart, TrendingUp, Users, HelpCircle, FileText, Download } from 'lucide-react'

const transacciones = [
  { id: '#TR-882192', iniciales: 'RM', nombre: 'Ricardo Mendoza', paquete: 'Pro', paqueteColor: 'bg-blue-100 text-blue-600', metodo: 'Visa **** 4242', fecha: '12 Oct, 2023 14:20', estado: 'Completado', estadoColor: 'text-green-500' },
  { id: '#TR-882193', iniciales: 'SL', nombre: 'Sofia Lopez', paquete: 'Empresarial', paqueteColor: 'bg-purple-100 text-purple-600', metodo: 'Transferencia', fecha: '12 Oct, 2023 15:05', estado: 'Pendiente', estadoColor: 'text-gray-400' },
  { id: '#TR-882194', iniciales: 'AH', nombre: 'Adrian Herrera', paquete: 'Basico', paqueteColor: 'bg-gray-100 text-gray-600', metodo: 'Mastercard **** 1102', fecha: '12 Oct, 2023 16:42', estado: 'Completado', estadoColor: 'text-green-500' },
]

function ReporteIngresos() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg"><ShoppingBag size={16} /></div>
            <div>
              <span className="font-black text-gray-900 text-sm block">Placemarket</span>
              <span className="text-xs text-gray-400">Administrador</span>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4">
          {[
            { label: 'Dashboard', icon: TrendingUp, activo: false, ruta: '/admin' },
            { label: 'Ingresos', icon: DollarSign, activo: true, ruta: '/admin/ingresos' },
            { label: 'Vendedores', icon: Users, activo: false, ruta: '/admin' },
            { label: 'Paquetes', icon: ShoppingCart, activo: false, ruta: '/admin' },
            { label: 'Configuracion', icon: HelpCircle, activo: false, ruta: '/admin' },
          ].map((item) => {
            const Icon = item.icon
            return (
              <Link key={item.label} to={item.ruta} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium mb-1 transition ${item.activo ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}>
                <Icon size={16} strokeWidth={1.5} />
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div>
              <p className="text-sm font-bold text-gray-900">Admin User</p>
              <p className="text-xs text-green-500 font-medium">● online</p>
            </div>
          </div>
          <button className="w-full mt-3 border border-gray-200 text-gray-600 py-2 rounded-xl text-xs font-semibold hover:border-red-300 hover:text-red-500 transition">
            Cerrar Sesion
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900">Reporte Detallado de Ingresos</h1>
            <p className="text-gray-500 mt-1">Gestion y analisis de ventas de creditos en tiempo real.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 border border-gray-200 text-gray-600 px-4 py-2 rounded-xl text-sm font-semibold hover:border-blue-400 transition">
              <FileText size={16} /> Exportar PDF
            </button>
            <button className="flex items-center gap-2 border border-gray-200 text-gray-600 px-4 py-2 rounded-xl text-sm font-semibold hover:border-blue-400 transition">
              <Download size={16} /> Exportar Excel
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm mb-6 flex gap-4 items-center">
          <div className="flex items-center gap-2 flex-1 border border-gray-200 rounded-xl px-4 py-2">
            <Search size={16} className="text-gray-400" />
            <input type="text" placeholder="Buscar por vendedor o ID..." className="text-sm outline-none flex-1" />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Rango:</span>
            <input type="date" className="border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none" />
            <span>/</span>
            <input type="date" className="border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none" />
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition">Filtrar</button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: 'Ingresos Totales', value: '$125,430.00', cambio: '+12.5% vs mes pasado', positivo: true },
            { label: 'Ventas Totales', value: '1,240', cambio: '-2.1% vs mes pasado', positivo: false },
            { label: 'Ticket Promedio', value: '$101.15', cambio: '+4.3% vs mes pasado', positivo: true },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <p className="text-sm text-blue-600 font-semibold mb-2">{stat.label}</p>
              <p className="text-3xl font-black text-gray-900">{stat.value}</p>
              <p className={`text-xs font-semibold mt-1 ${stat.positivo ? 'text-green-500' : 'text-red-500'}`}>
                {stat.positivo ? '↑' : '↓'} {stat.cambio}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="font-black text-gray-900 mb-4">Distribucion por Paquete</h2>
            <div className="flex items-center gap-6">
              <div className="relative w-32 h-32 shrink-0">
                <svg viewBox="0 0 36 36" className="w-32 h-32 -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#EEF2FF" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#2563EB" strokeWidth="3" strokeDasharray="45 55" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#16A34A" strokeWidth="3" strokeDasharray="35 65" strokeDashoffset="-45" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="20 80" strokeDashoffset="-80" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-lg font-black text-gray-900">1.2k</p>
                  <p className="text-xs text-gray-400">Ventas</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Basico', porcentaje: '45%', color: 'bg-blue-600' },
                  { label: 'Pro', porcentaje: '35%', color: 'bg-green-500' },
                  { label: 'Empresarial', porcentaje: '20%', color: 'bg-yellow-400' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
                    <span className="text-sm text-gray-600 flex-1">{item.label}</span>
                    <span className="text-sm font-bold text-gray-900">{item.porcentaje}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-black text-gray-900">Tendencia de Ingresos Semanal</h2>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">Actualizado ahora</span>
            </div>
            <div className="h-28 flex items-end justify-between gap-2">
              {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full bg-blue-600 rounded-t-lg" style={{ height: `${h}%` }}></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              {['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'].map((d) => (
                <span key={d} className="flex-1 text-center">{d}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="font-black text-gray-900">Detalle de Transacciones</h2>
            <span className="text-xs text-gray-400">Mostrando 240 resultados</span>
          </div>
          <div className="divide-y divide-gray-50">
            <div className="grid grid-cols-6 px-6 py-3 text-xs font-bold text-gray-400 uppercase tracking-wide">
              <span>ID Transaccion</span>
              <span>Vendedor</span>
              <span>Paquete</span>
              <span>Metodo</span>
              <span>Fecha</span>
              <span>Estado</span>
            </div>
            {transacciones.map((t) => (
              <div key={t.id} className="grid grid-cols-6 px-6 py-4 items-center">
                <span className="text-sm text-gray-600 font-mono">{t.id}</span>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">{t.iniciales}</div>
                  <span className="text-sm text-gray-700">{t.nombre}</span>
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full w-fit ${t.paqueteColor}`}>{t.paquete}</span>
                <span className="text-sm text-gray-500">{t.metodo}</span>
                <span className="text-xs text-gray-500">{t.fecha}</span>
                <span className={`text-sm font-bold flex items-center gap-1 ${t.estadoColor}`}>
                  <span className="w-2 h-2 rounded-full bg-current"></span>
                  {t.estado}
                </span>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center">
            <button className="border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm hover:border-blue-400 transition">Anterior</button>
            <div className="flex gap-2">
              {[1, 2, 3].map((n) => (
                <button key={n} className={`w-8 h-8 rounded-full text-sm font-semibold ${n === 1 ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-100'}`}>{n}</button>
              ))}
            </div>
            <button className="border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm hover:border-blue-400 transition">Siguiente</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ReporteIngresos