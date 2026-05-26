import VendorLayout from '../../layouts/VendorLayout'
import { useState } from 'react'

import {
  Search,
  Plus,
  Send,
  Paperclip,
  Image,
  ShoppingBag,
  ShieldCheck,
  MoreVertical,
} from 'lucide-react'

const conversaciones = [
  {
    id: 1,
    nombre: 'Juan Perez',
    iniciales: 'JP',
    mensaje: 'Aceptarias $15,000 por la Hilux?',
    hora: '10:45 AM',
    activo: true,
    color: 'bg-blue-600',
  },
  {
    id: 2,
    nombre: 'Maria Garcia',
    iniciales: 'MG',
    mensaje: 'Me interesa el Toyota Corolla...',
    hora: 'Ayer',
    activo: false,
    color: 'bg-purple-500',
  },
  {
    id: 3,
    nombre: 'Carlos Ruiz',
    iniciales: 'CR',
    mensaje: 'El pago sera por transferencia.',
    hora: 'Lun',
    activo: false,
    color: 'bg-green-500',
  },
  {
    id: 4,
    nombre: 'Elena Torres',
    iniciales: 'ET',
    mensaje: 'Gracias por la informacion.',
    hora: '2 Oct',
    activo: false,
    color: 'bg-orange-500',
  },
]

const mensajes = [
  {
    id: 1,
    propio: false,
    texto:
      'Hola, vi tu propuesta sobre la Hilux. Me interesa mucho, pero mi presupuesto maximo es de $15,000. Estarias dispuesto a bajar un poco el precio?',
    hora: '10:45 AM',
    iniciales: 'JP',
    color: 'bg-blue-600',
  },
  {
    id: 2,
    propio: true,
    texto:
      'Hola Juan. Gracias por tu interes. La camioneta esta en excelentes condiciones y el precio ya esta bastante ajustado. Podria bajar hasta $15,250 como ultimo precio.',
    hora: '10:48 AM',
  },
  {
    id: 3,
    propio: false,
    texto:
      'Entiendo. Me podrias enviar una foto del motor y del interior? Si todo esta bien, cerramos en $15,250 hoy mismo.',
    hora: '10:50 AM',
    iniciales: 'JP',
    color: 'bg-blue-600',
  },
]

function CentroMensajes() {
  const [mensaje, setMensaje] = useState('')

  return (
    <VendorLayout>
      {/* HEADER */}

      <div className="mb-8">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">
          Centro de Mensajes
        </h1>

        <p className="text-base text-gray-500 mt-3">
          Gestiona conversaciones desbloqueadas y negociaciones activas.
        </p>
      </div>

    
      {/* CHAT */}

      <div className="bg-white border border-gray-100 rounded-[32px] shadow-sm overflow-hidden h-[76vh] flex">

        {/* CONVERSACIONES */}

        <aside className="w-80 border-r border-gray-100 flex flex-col shrink-0">

          <div className="p-5 border-b border-gray-100">

            <div className="relative mb-5">
              <Search
                size={17}
                className="absolute left-4 top-3.5 text-gray-400"
              />

              <input
                type="text"
                placeholder="Buscar mensajes..."
                className="w-full border border-gray-200 rounded-2xl pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              {['Mensajes', 'Mis Ofertas', 'Ventas', 'Favoritos'].map((item, i) => (
                <button
                  key={item}
                  className={`text-xs font-semibold px-3 py-2 rounded-xl transition text-left flex items-center gap-2 ${
                    i === 0
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {i === 0 && (
                    <span className="bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                      3
                    </span>
                  )}

                  {item}
                </button>
              ))}
            </div>

            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mt-5">
              Conversaciones recientes
            </p>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversaciones.map((conv) => (
              <button
                key={conv.id}
                className={`w-full flex items-center gap-3 px-5 py-4 cursor-pointer hover:bg-gray-50 transition text-left ${
                  conv.activo ? 'bg-blue-50 border-r-2 border-blue-600' : ''
                }`}
              >
                <div
                  className={`w-11 h-11 ${conv.color} rounded-2xl flex items-center justify-center text-white text-sm font-bold shrink-0`}
                >
                  {conv.iniciales}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center gap-2">
                    <p className="text-sm font-bold text-gray-900 truncate">
                      {conv.nombre}
                    </p>

                    <span className="text-xs text-gray-400 shrink-0">
                      {conv.hora}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 truncate mt-0.5">
                    {conv.mensaje}
                  </p>
                </div>
              </button>
            ))}
          </div>

      
        </aside>

        {/* AREA CHAT */}

        <main className="flex-1 flex flex-col min-w-0">

          {/* TOP CHAT */}

          <div className="px-7 py-5 border-b border-gray-100 flex items-center justify-between shrink-0">

            <div className="flex items-center gap-4">

              <img
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=100&q=80"
                alt="Toyota Hilux"
                className="w-14 h-14 rounded-2xl object-cover"
              />

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="font-black text-gray-900">
                    Negociación: Toyota Hilux 2022
                  </h2>

                  <span className="bg-green-100 text-green-600 text-xs font-bold px-2 py-1 rounded-full">
                    ACTIVO
                  </span>

                  <ShieldCheck size={15} className="text-blue-600" />
                </div>

                <p className="text-xs text-gray-400 mt-1">
                  Chat con{' '}
                  <span className="text-blue-600 font-semibold">
                    Juan Perez
                  </span>{' '}
                  • $15,500 USD
                </p>
              </div>
            </div>

            <button className="w-11 h-11 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-500 hover:border-blue-400 hover:text-blue-600 transition">
              <MoreVertical size={18} />
            </button>
          </div>

          {/* MENSAJES */}

          <div className="flex-1 overflow-y-auto px-7 py-7 space-y-5 bg-[#fafafa]">

            <div className="text-center">
              <span className="bg-gray-100 text-gray-400 text-xs px-4 py-1.5 rounded-full">
                NEGOCIACIÓN INICIADA - 09:30 AM
              </span>
            </div>

            {mensajes.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${
                  msg.propio ? 'flex-row-reverse' : ''
                }`}
              >
                {!msg.propio && (
                  <div
                    className={`w-9 h-9 ${msg.color} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0`}
                  >
                    {msg.iniciales}
                  </div>
                )}

                <div
                  className={`max-w-xl ${
                    msg.propio ? 'items-end' : 'items-start'
                  } flex flex-col`}
                >
                  <div
                    className={`px-5 py-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.propio
                        ? 'bg-blue-600 text-white rounded-tr-sm'
                        : 'bg-white border border-gray-100 text-gray-700 rounded-tl-sm'
                    }`}
                  >
                    {msg.texto}
                  </div>

                  <span className="text-xs text-gray-400 mt-1">
                    {msg.hora}
                  </span>
                </div>

                {msg.propio && (
                  <div className="w-9 h-9 bg-gray-300 rounded-full shrink-0"></div>
                )}
              </div>
            ))}

            {/* PROPUESTA */}

            <div className="flex justify-center">
              <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm text-center max-w-md">

                <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag size={20} className="text-blue-600" />
                </div>

                <p className="font-black text-gray-900 text-sm mb-1">
                  Propuesta de precio recibida
                </p>

                <p className="text-3xl font-black text-blue-600 mb-4">
                  $15,250.00 USD
                </p>

                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-4">
                  <p className="text-xs text-blue-700 leading-relaxed">
                    Esta propuesta forma parte de una conversación desbloqueada dentro de Placemarket.
                  </p>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition">
                    Aceptar
                  </button>

                  <button className="flex-1 border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm font-semibold hover:border-gray-300 transition">
                    Rechazar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* INPUT */}

          <div className="px-7 py-5 border-t border-gray-100 shrink-0 bg-white">

            <div className="flex items-center gap-3 mb-3">
              <button className="text-gray-400 hover:text-blue-600 transition">
                <Plus size={20} />
              </button>

              <button className="text-gray-400 hover:text-blue-600 transition">
                <Image size={20} />
              </button>

              <button className="text-gray-400 hover:text-blue-600 transition">
                <Paperclip size={20} />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="text"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Escribe tu mensaje o propuesta aquí..."
                className="flex-1 border border-gray-200 rounded-full px-5 py-3 text-sm outline-none focus:border-blue-400 transition"
              />

              <button className="bg-blue-600 text-white w-11 h-11 rounded-full flex items-center justify-center hover:bg-blue-700 transition shrink-0">
                <Send size={16} />
              </button>
            </div>

            <p className="text-xs text-gray-400 text-center mt-2">
              Presiona Enter para enviar • Shift+Enter para nueva línea
            </p>
          </div>
        </main>
      </div>
    </VendorLayout>
  )
}

export default CentroMensajes