import { Mail, Globe, ShoppingBag } from 'lucide-react'

const Instagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

const Facebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                <ShoppingBag size={16} />
              </div>
              <span className="font-black text-gray-900">Placemarket</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              La plataforma de marketplace inverso más eficiente del mercado. Cambiamos la forma en que el mundo compra y vende.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition"><Globe size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition"><Facebook /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Plataforma</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-600 transition">Cómo publicar</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Vendedores Premium</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Seguridad</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Créditos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Compañía</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-600 transition">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Prensa</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Contacto</a></li>
              <li><a href="#" className="hover:text-blue-600 transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Recibe las mejores ofertas en tu correo.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 transition"
              />
              <button className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition">
                <Mail size={16} />
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © 2025 Placemarket. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-blue-600 transition">Privacidad</a>
            <a href="#" className="hover:text-blue-600 transition">Términos</a>
            <a href="#" className="hover:text-blue-600 transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer