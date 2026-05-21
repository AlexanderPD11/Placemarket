import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Search, Plus, Send, Paperclip, Image } from 'lucide-react'

const conversaciones = [
  { id: 1, nombre: 'Juan Perez', iniciales: 'JP', mensaje: 'Aceptarias $15,000 por la Hilux?', hora: '10:45 AM', activo: true, color: 'bg-blue-500' },
  { id: 2, nombre: 'Maria Garcia', iniciales: 'MG', mensaje: 'Me interesa el Toyota Corolla...', hora: 'Ayer', activo: false, color: 'bg-purple-500' },
  { id: 3, nombre: 'Carlos Ruiz', iniciales: 'CR', mensaje: 'El pago sera por transferencia.', hora: 'Lun', activo: false, color: 'bg-green-500' },
  { id: 4, nombre: 'Elena Torres', iniciales: 'ET', mensaje: 'Gracias por la informacion.', hora: '2 Oct', activo: false, color: 'bg-orange-500' },
]

const mensajes = [
  { id: 1, propio: false, texto: 'Hola, vi tu publicacion de la Hilux. Me interesa mucho, pero mi presupuesto maximo es de $15,000. Estarias dispuesto a bajar un poco el precio?', hora: '10:45 AM', iniciales: 'JP', color: 'bg-blue-500' },
  { id: 2, propio: true, texto: 'Hola Juan. Gracias por tu interes. La camioneta esta en excelentes condiciones y el precio ya esta bastante ajustado. Podria bajar hasta $15,250 como ultimo precio.', hora: '10:48 AM' },
  { id: 3, propio: false, texto: 'Entiendo. Me podrias enviar una foto del motor y del interior? Si todo esta bien, cerramos en $15,250 hoy mismo.', hora: '10:50 AM', iniciales: 'JP', color: 'bg-blue-500' },
]

function CentroMensajes() {
  const [mensaje, setMensaje] = useState('')

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="bg-white border-b border-gray-100 px-8 py-3 flex items-center justify-between shrink-0">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg"><ShoppingBag size={16} /></div>
          <div>
            <span className="font-black text-gray-900 block text-sm">Placemarket</span>
            <span className="text-xs text-gray-400">Centro de Negocios</span>
          </div>
        </Link>
        <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2 w-64">
          <Search size={14} className="text-gray-400" />
          <input type="text" placeholder="Buscar mensajes o tratos..." className="bg-transparent text-sm outline-none flex-1" />
        </div>
      <div className="bg-yellow-50 border border-yellow-200 px-4 py-2 rounded-full">
  <p className="text-xs text-yellow-700 font-medium">⚠️ A partir de aquí el vendedor se comunica directamente contigo</p>
</div>
      </nav>

      <div className="flex flex-1 overflow-hidden" style={{ height: 'calc(100vh - 64px)' }}>
        <aside className="w-64 border-r border-gray-100 flex flex-col shrink-0">
          <div className="p-4 border-b border-gray-100">
            <div className="flex flex-col gap-1 mb-4">
              {['Mensajes', 'Mis Ofertas', 'Ventas', 'Favoritos'].map((item, i) => (
                <button key={item} className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition text-left flex items-center gap-2 ${i === 0 ? 'bg-blue-50 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
                  {i === 0 && <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">3</span>}
                  {item}
                </button>
              ))}
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Conversaciones Recientes</p>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversaciones.map((conv) => (
              <div key={conv.id} className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 transition ${conv.activo ? 'bg-blue-50 border-r-2 border-blue-600' : ''}`}>
                <div className={`w-10 h-10 ${conv.color} rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0`}>{conv.iniciales}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-bold text-gray-900">{conv.nombre}</p>
                    <span className="text-xs text-gray-400">{conv.hora}</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">{conv.mensaje}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-100">
            <button className="w-full border-2 border-dashed border-gray-200 text-gray-400 py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:border-blue-400 hover:text-blue-600 transition">
              <Plus size={16} /> Nueva Conversacion
            </button>
          </div>
        </aside>

        <main className="flex-1 flex flex-col">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=100&q=80" alt="Toyota Hilux" className="w-12 h-12 rounded-xl object-cover" />
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-black text-gray-900">Negociacion: Toyota Hilux 2022</h2>
                  <span className="bg-green-100 text-green-600 text-xs font-bold px-2 py-0.5 rounded-full">ACTIVO</span>
                </div>
                <p className="text-xs text-gray-400">Chat con <span className="text-blue-600 font-semibold">Juan Perez</span> • $15,500 USD</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            <div className="text-center">
              <span className="bg-gray-100 text-gray-400 text-xs px-4 py-1.5 rounded-full">NEGOCIACION INICIADA - 09:30 AM</span>
            </div>

            {mensajes.map((msg) => (
              <div key={msg.id} className={`flex items-start gap-3 ${msg.propio ? 'flex-row-reverse' : ''}`}>
                {!msg.propio && (
                  <div className={`w-9 h-9 ${msg.color} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0`}>{msg.iniciales}</div>
                )}
                <div className={`max-w-lg ${msg.propio ? 'items-end' : 'items-start'} flex flex-col`}>
                  <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.propio ? 'bg-blue-600 text-white rounded-tr-sm' : 'bg-gray-100 text-gray-700 rounded-tl-sm'}`}>{msg.texto}</div>
                  <span className="text-xs text-gray-400 mt-1">{msg.hora}</span>
                </div>
                {msg.propio && <div className="w-9 h-9 bg-gray-300 rounded-full shrink-0"></div>}
              </div>
            ))}

           <div className="flex justify-center">
  <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm text-center max-w-sm">
    <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
      <ShoppingBag size={18} className="text-blue-600" />
    </div>
    <p className="font-bold text-gray-900 text-sm mb-1">Propuesta de Precio Recibida</p>
    <p className="text-2xl font-black text-blue-600 mb-3">$15,250.00 USD</p>
    <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-3 mb-3">
      <p className="text-xs text-yellow-700 leading-relaxed">
        ⚠️ Placemarket no interviene en el proceso de pago ni entrega. Coordina directamente con el vendedor.
      </p>
    </div>
    <div className="flex gap-2">
      <button className="flex-1 bg-blue-600 text-white py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition">Contactar Vendedor</button>
      <button className="flex-1 border border-gray-200 text-gray-600 py-2 rounded-xl text-sm font-semibold hover:border-gray-300 transition">Rechazar</button>
    </div>
  </div>
</div>
          </div>

          <div className="px-6 py-4 border-t border-gray-100 shrink-0">
            <div className="flex items-center gap-3 mb-3">
              <button className="text-gray-400 hover:text-blue-600 transition"><Plus size={20} /></button>
              <button className="text-gray-400 hover:text-blue-600 transition"><Image size={20} /></button>
              <button className="text-gray-400 hover:text-blue-600 transition"><Paperclip size={20} /></button>
            </div>
            <div className="flex items-center gap-3">
              <input type="text" value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Escribe tu mensaje o propuesta aqui..." className="flex-1 border border-gray-200 rounded-full px-5 py-3 text-sm outline-none focus:border-blue-400 transition" />
              <button className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition shrink-0"><Send size={16} /></button>
            </div>
            <p className="text-xs text-gray-400 text-center mt-2">Presiona Enter para enviar • Shift+Enter para nueva linea</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default CentroMensajes