import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, LayoutDashboard, Wallet, Tag, Bell, Settings, MessageSquare, Search } from 'lucide-react'

const menuItems = [
  { label: 'Dashboard', path: '/vendor-dashboard', icon: LayoutDashboard },
  { label: 'Solicitudes', path: '/muro', icon: ShoppingBag },
  { label: 'Créditos', path: '/creditos', icon: Wallet },
  { label: 'Ofertas', path: '/mis-ofertas', icon: Tag },
  { label: 'Mensajes', path: '/mensajes', icon: MessageSquare },
  { label: 'Notificaciones', path: '/notificaciones', icon: Bell },
  { label: 'Configuración', path: '/configuracion', icon: Settings },
]

function VendorLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f7f8fc] flex">
      <aside className="w-60 bg-white border-r border-gray-100 min-h-screen px-5 py-7 flex flex-col shrink-0 fixed left-0 top-0 bottom-0 z-20">
        <Link to="/" className="flex items-center gap-3 mb-8 px-2">
          <div className="bg-blue-600 text-white p-2 rounded-xl">
            <ShoppingBag size={18} />
          </div>
          <h2 className="font-black text-xl text-blue-600">Placemarket</h2>
        </Link>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 flex items-center gap-2 mb-6">
          <Search size={15} className="text-gray-400 shrink-0" />
          <input type="text" placeholder="Buscar..." className="bg-transparent outline-none text-sm flex-1 text-gray-700" />
        </div>

        <nav className="space-y-1 flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.label}
                to={item.path}
                end={item.path === '/vendor-dashboard'}
                className={({ isActive }) =>
                  `w-full px-4 py-3 rounded-2xl flex items-center gap-3 text-sm font-medium transition ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                  }`
                }
              >
                <Icon size={18} strokeWidth={1.5} />
                {item.label}
              </NavLink>
            )
          })}
        </nav>

        <div className="mt-6 bg-blue-600 rounded-2xl p-5 text-white">
          <p className="text-xs uppercase tracking-wide text-blue-200 font-bold">LIMITED ACCESS</p>
          <h3 className="text-sm font-black mt-2 mb-4 leading-tight">Upgrade to PRO SELLER</h3>
          <button className="w-full bg-white text-blue-600 py-2.5 rounded-xl text-xs font-bold hover:bg-blue-50 transition">
            Upgrade Now
          </button>
        </div>
      </aside>

      <main className="flex-1 ml-60 min-h-screen ">
       <div className="px-10 py-10">
        {children}
        </div>
      </main>
    </div>
  )
}

export default VendorLayout