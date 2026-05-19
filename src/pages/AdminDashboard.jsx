import { Link } from 'react-router-dom'
import { ShoppingBag, Users, DollarSign, Bell, HelpCircle, TrendingUp, ShoppingCart, Shield, Flag } from 'lucide-react'

const stats = [
  { label: 'Total Usuarios', value: '12,450', sub: 'Compradores 8.2k • Vendedores 4.2k', cambio: '+12.4%', positivo: true, icon: Users },
  { label: 'Ingresos por Creditos', value: '$ 45,200', sub: 'Meta mensual: $ 50,000', cambio: '+8.1%', positivo: true, icon: DollarSign },
  { label: 'Solicitudes Activas', value: '84', sub: null, cambio: '-5.2%', positivo: false, icon: ShoppingCart },
  { label: 'Ventas Hoy', value: '1,230', sub: '24 nuevas hoy', cambio: '+15%', positivo: true, icon: TrendingUp },
]

const transacciones = [
 { nombre: 'Paquete Premiu...', usuario: 'Juan Perez', tiempo: 'Hace 5 min', monto: '$ 120.00', estado: 'Exito', estadoColor: 'bg-green-100 text-green-600' },
{ nombre: 'Paquete Basico 100', usuario: 'Maria Garcia', tiempo: 'Hace 12 min', monto: '$ 35.00', estado: 'Exito', estadoColor: 'bg-green-100 text-green-600' },
{ nombre: 'Paquete Empren...', usuario: 'Roberto S.', tiempo: 'Hace 45 min', monto: '$ 75.00', estado: 'Pendiente', estadoColor: 'bg-yellow-100 text-yellow-600' },
{ nombre: 'Paquete Premiu...', usuario: 'Luisa V.', tiempo: 'Hace 1 hora', monto: '$ 120.00', estado: 'Exito', estadoColor: 'bg-green-100 text-green-600' },
]

const verificaciones = [
  { nombre: 'AutoRepuestos SAC', inicial: 'A' },
  { nombre: 'TechStore Lima', inicial: 'T' },
]

const alertas = [
  { tipo: 'warning', texto: '5 transacciones en revision por seguridad (Posible fraude).' },
  { tipo: 'info', texto: 'Copia de seguridad semanal completada con exito.' },
  { tipo: 'success', texto: 'Certificado SSL renovado automaticamente.' },
]

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg"><ShoppingBag size={16} /></div>
            <div>
              <span className="font-black text-gray-900 text-sm block">Placemarket</span>
              <span className="text-xs text-gray-400">Panel Administrativo</span>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4">
          {[
            { label: 'Dashboard', icon: TrendingUp, activo: true, ruta: '/admin' },
            { label: 'Usuarios', icon: Users, activo: false, ruta: '/admin' },
            { label: 'Finanzas', icon: DollarSign, activo: false, ruta: '/admin/ingresos' },
            { label: 'Reportes', icon: ShoppingCart, activo: false, ruta: '/admin/ingresos' },
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
              <p className="text-sm font-bold text-gray-900">Carlos Mendez</p>
              <p className="text-xs text-gray-400">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-black text-gray-900">Dashboard General</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2">
              <input type="text" placeholder="Buscar usuarios, transacciones o reportes..." className="text-sm outline-none w-64" />
            </div>
            <div className="relative">
              <Bell size={20} className="text-gray-400" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
            <HelpCircle size={20} className="text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="bg-blue-50 p-2 rounded-xl"><Icon size={18} className="text-blue-600" strokeWidth={1.5} /></div>
                  <span className={`text-xs font-bold ${stat.positivo ? 'text-green-500' : 'text-red-500'}`}>{stat.cambio}</span>
                </div>
                <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">{stat.label}</p>
                <p className="text-3xl font-black text-gray-900">{stat.value}</p>
                {stat.sub && <p className="text-xs text-gray-400 mt-1">{stat.sub}</p>}
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="font-black text-gray-900">Tendencia de Ventas (Ultimos 30 dias)</h2>
                <p className="text-xs text-gray-400 mt-0.5">Desempeno de compra de paquetes de creditos</p>
              </div>
              <select className="border border-gray-200 rounded-xl px-3 py-1.5 text-sm outline-none">
                <option>Ultimo mes</option>
                <option>Ultima semana</option>
              </select>
            </div>
            <div className="h-40 flex items-end justify-between gap-1 px-4">
              {[30, 45, 35, 60, 75, 55, 80, 65, 70, 85, 60, 90].map((h, i) => (
                <div key={i} className="flex-1 bg-blue-100 rounded-t-lg relative group" style={{ height: `${h}%` }}>
                  <div className="absolute inset-x-0 bottom-0 bg-blue-600 rounded-t-lg transition-all" style={{ height: '60%' }}></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2 px-4">
              <span>01 OCT</span>
              <span>10 OCT</span>
              <span>20 OCT</span>
              <span>30 OCT</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="font-black text-gray-900 mb-4">Ultimas Transacciones</h2>
            <div className="space-y-3">
              {transacciones.map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-blue-50 p-1.5 rounded-lg shrink-0"><ShoppingBag size={14} className="text-blue-600" /></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-gray-900 truncate">{t.nombre}</p>
                    <p className="text-xs text-gray-400">{t.usuario} • {t.tiempo}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs font-bold text-gray-900">{t.monto}</p>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${t.estadoColor}`}>{t.estado}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full text-center text-blue-600 text-xs font-semibold mt-4 hover:underline">Ver historial completo</button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="font-black text-gray-900 flex items-center gap-2 mb-4">
              <Shield size={18} className="text-blue-600" strokeWidth={1.5} /> Verificaciones Pendientes
            </h2>
            <div className="space-y-3">
              {verificaciones.map((v, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">{v.inicial}</div>
                  <p className="flex-1 text-sm text-gray-700">{v.nombre}</p>
                  <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-blue-700 transition">Revisar</button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="font-black text-gray-900 flex items-center gap-2 mb-4">
              <Flag size={18} className="text-blue-600" strokeWidth={1.5} /> Alertas de Sistema
            </h2>
            <div className="space-y-3">
              {alertas.map((a, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${a.tipo === 'warning' ? 'bg-yellow-400' : a.tipo === 'info' ? 'bg-blue-400' : 'bg-green-400'}`}></span>
                  <p className="text-xs text-gray-600">{a.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard