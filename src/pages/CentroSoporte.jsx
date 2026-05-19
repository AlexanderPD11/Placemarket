import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Bell, Settings, Users, DollarSign, TrendingUp, HelpCircle, Plus, Paperclip, Send } from 'lucide-react'

const tickets = [
  { id: 1, titulo: 'Error en compra de creditos', badge: 'ALTA', badgeColor: 'bg-red-100 text-red-600', usuario: 'Juan Perez', rol: 'Vendedor', tiempo: 'Hace 15 min', activo: true },
  { id: 2, titulo: 'Producto no recibido', badge: 'MEDIA', badgeColor: 'bg-yellow-100 text-yellow-600', usuario: 'Maria Garcia', rol: 'Comprador', tiempo: 'Hace 1 hora', activo: false },
  { id: 3, titulo: 'Cambio de correo electronico', badge: 'BAJA', badgeColor: 'bg-blue-100 text-blue-600', usuario: 'Carlos Ruiz', rol: 'Vendedor', tiempo: 'Hace 3 horas', activo: false },
  { id: 4, titulo: 'Error en pasarela de pago', badge: 'ALTA', badgeColor: 'bg-red-100 text-red-600', usuario: 'Elena Torres', rol: 'Comprador', tiempo: 'Hace 5 horas', activo: false },
]

const mensajesTicket = [
  { propio: false, nombre: 'Juan Perez', hora: '10:42 AM', texto: 'Hola, intente comprar el paquete de 100 creditos pero el pago se proceso y no aparecen en mi cuenta. Adjunto el comprobante de pago de mi banco. Por favor revisen esto pronto, tengo una subasta activa que termina hoy.', archivo: 'pago_referencia_829.pdf' },
]

function CentroSoporte() {
  const [respuesta, setRespuesta] = useState('')
  const [filtro, setFiltro] = useState('Todos')

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-56 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg"><ShoppingBag size={16} /></div>
            <div>
              <span className="font-black text-gray-900 text-sm block">Placemarket</span>
              <span className="text-xs text-gray-400">Admin</span>
            </div>
          </div>
        </div>
        <div className="p-4 border-b border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Soporte</p>
          <p className="text-xs text-gray-400 mb-4">Cola de atencion global</p>
          {[
            { label: 'Tickets Abiertos', count: 12, activo: true },
            { label: 'Mis Asignados', count: null, activo: false },
            { label: 'En Espera', count: null, activo: false },
            { label: 'Resueltos', count: null, activo: false },
            { label: 'Archivo', count: null, activo: false },
          ].map((item) => (
            <button key={item.label} className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium mb-1 transition ${item.activo ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}>
              <span>{item.label}</span>
              {item.count && <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">{item.count}</span>}
            </button>
          ))}
        </div>
        <div className="p-4 flex-1">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Equipos</p>
          {[
            { label: 'Pagos y Creditos', color: 'bg-orange-400' },
            { label: 'Verificacion', color: 'bg-green-400' },
          ].map((eq) => (
            <div key={eq.label} className="flex items-center gap-2 px-3 py-2 text-sm text-gray-500 mb-1">
              <span className={`w-2 h-2 rounded-full ${eq.color}`}></span>
              {eq.label}
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div>
              <p className="text-xs font-bold text-gray-900">Carlos Mendez</p>
              <p className="text-xs text-green-500">● Sistema Operativo</p>
              <p className="text-xs text-gray-400">SLA de respuesta: 98.4%</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="w-72 bg-white border-r border-gray-100 flex flex-col shrink-0">
        <div className="p-4 border-b border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-black text-gray-900">Centro de Soporte</h2>
            <button className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
              <Plus size={16} />
            </button>
          </div>
          <p className="text-xs text-gray-400 mb-4">Gestiona incidencias de usuarios.</p>
          <div className="flex gap-2">
            {['Todos', 'Alta', 'Media', 'Baja'].map((f) => (
              <button
                key={f}
                onClick={() => setFiltro(f)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${filtro === f ? 'bg-gray-900 text-white' : 'border border-gray-200 text-gray-500 hover:border-gray-400'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
          {tickets.map((ticket) => (
            <div key={ticket.id} className={`p-4 cursor-pointer hover:bg-gray-50 transition ${ticket.activo ? 'bg-blue-50 border-r-2 border-blue-600' : ''}`}>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 shrink-0">
                  {ticket.usuario.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-bold text-gray-900 truncate">{ticket.titulo}</p>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${ticket.badgeColor}`}>{ticket.badge}</span>
                  </div>
                  <p className="text-xs text-gray-500">{ticket.usuario} • {ticket.rol}</p>
                  <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span> {ticket.tiempo}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <main className="flex-1 flex flex-col">
        <div className="px-6 py-4 border-b border-gray-100 bg-white flex justify-between items-center shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="text-xs text-gray-400">Ticket</p>
              <p className="font-black text-gray-900">#TK-4829</p>
              <span className="text-xs text-gray-400">ID: 992813</span>
            </div>
            <p className="text-sm text-gray-600">Asunto: Error en compra de creditos</p>
          </div>
          <div className="flex gap-2">
            <button className="border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold hover:border-gray-300 transition">Escalar</button>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">Resolver</button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {mensajesTicket.map((msg, i) => (
            <div key={i} className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 shrink-0">JP</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-bold text-gray-900">{msg.nombre}</p>
                  <span className="text-xs text-gray-400">{msg.hora}</span>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 text-sm text-gray-700 leading-relaxed mb-2">
                  {msg.texto}
                </div>
                {msg.archivo && (
                  <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 w-fit">
                    <div className="bg-gray-100 p-1.5 rounded-lg">
                      <Paperclip size={14} className="text-gray-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">{msg.archivo}</p>
                      <p className="text-xs text-gray-400">1.2 MB</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className="text-center my-4">
            <span className="text-xs text-gray-400 bg-gray-100 px-4 py-1.5 rounded-full">ADMIN ASIGNADO: CARLOS (SOPORTE NIVEL 1)</span>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-gray-100 bg-white shrink-0">
          <div className="flex gap-3 mb-3">
            <button className="flex items-center gap-1 border border-gray-200 text-gray-500 px-3 py-1.5 rounded-full text-xs font-medium hover:border-blue-400 transition">
              Plantillas rapidas
            </button>
            <button className="flex items-center gap-1 border border-gray-200 text-gray-500 px-3 py-1.5 rounded-full text-xs font-medium hover:border-blue-400 transition">
              <Paperclip size={12} /> Adjuntar archivos
            </button>
          </div>
          <div className="flex items-center gap-3">
            <textarea
              value={respuesta}
              onChange={(e) => setRespuesta(e.target.value)}
              placeholder="Escribe tu respuesta aqui para resolver la incidencia de Juan..."
              rows={3}
              className="flex-1 border border-gray-200 rounded-2xl px-4 py-3 text-sm outline-none focus:border-blue-400 transition resize-none"
            />
            <button className="bg-blue-600 text-white px-5 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition flex items-center gap-2 shrink-0">
              <Send size={16} /> Enviar Respuesta
            </button>
          </div>
        </div>
      </main>

      <aside className="w-64 bg-white border-l border-gray-100 flex flex-col shrink-0">
        <div className="p-5 border-b border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">Detalle del Usuario</p>
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-gray-200 rounded-2xl mx-auto mb-2"></div>
            <p className="font-black text-gray-900">Juan Perez</p>
            <p className="text-xs text-blue-600 font-semibold">Vendedor Verificado</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-xs text-gray-400 mb-1">Reputacion</p>
              <p className="font-black text-green-600">4.8 / 5.0</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-xs text-gray-400 mb-1">Creditos</p>
              <p className="font-black text-gray-900">25 disp.</p>
            </div>
          </div>
        </div>
        <div className="p-5 flex-1">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Ultimas Transacciones</p>
          <div className="space-y-3">
            {[
              { nombre: 'Compra Creditos (Falla)', monto: '$49.99', color: 'bg-red-50', icono: '🔴' },
              { nombre: 'Venta Exitosa #821', monto: '$120.00', color: 'bg-green-50', icono: '🟢' },
            ].map((t, i) => (
              <div key={i} className={`${t.color} rounded-xl p-3`}>
                <p className="text-xs font-bold text-gray-900">{t.nombre}</p>
                <p className="text-sm font-black text-gray-900 mt-1">{t.monto}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-5 border-t border-gray-100">
          <button className="w-full border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm font-semibold hover:border-blue-400 hover:text-blue-600 transition">
            Ver Perfil Completo
          </button>
        </div>
      </aside>
    </div>
  )
}

export default CentroSoporte