import VendorLayout from '../../layouts/VendorLayout'

import {
  Bell,
  Tag,
  Wallet,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Clock3,
  Filter,
} from 'lucide-react'

const notificaciones = [
  {
    id: 1,
    tipo: 'oferta',
    titulo: 'Tu oferta fue vista',
    descripcion:
      'Carlos Rodríguez revisó tu propuesta para Desarrollo de App de Delivery.',
    tiempo: 'Hace 5 min',
    icon: Tag,
    color: 'bg-blue-50 text-blue-600',
    leida: false,
  },
  {
    id: 2,
    tipo: 'mensaje',
    titulo: 'Nuevo mensaje recibido',
    descripcion:
      'Juan Pérez respondió a tu negociación activa sobre Toyota Hilux 2022.',
    tiempo: 'Hace 18 min',
    icon: MessageSquare,
    color: 'bg-purple-50 text-purple-600',
    leida: false,
  },
  {
    id: 3,
    tipo: 'credito',
    titulo: 'Créditos descontados',
    descripcion:
      'Se descontaron 12 créditos por enviar una oferta premium.',
    tiempo: 'Hoy, 10:32 AM',
    icon: Wallet,
    color: 'bg-orange-50 text-orange-600',
    leida: true,
  },
  {
    id: 4,
    tipo: 'exito',
    titulo: 'Oferta aceptada',
    descripcion:
      'Tu propuesta fue aceptada. Ya puedes continuar la conversación con el comprador.',
    tiempo: 'Ayer',
    icon: CheckCircle2,
    color: 'bg-green-50 text-green-600',
    leida: true,
  },
  {
    id: 5,
    tipo: 'premium',
    titulo: 'Nueva solicitud premium disponible',
    descripcion:
      'Hay una oportunidad destacada que coincide con tus categorías de interés.',
    tiempo: 'Hace 2 días',
    icon: Sparkles,
    color: 'bg-yellow-50 text-yellow-600',
    leida: true,
  },
]

const resumen = [
  {
    label: 'No leídas',
    value: '2',
    icon: Bell,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    label: 'Ofertas',
    value: '14',
    icon: Tag,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    label: 'Mensajes',
    value: '8',
    icon: MessageSquare,
    color: 'bg-green-50 text-green-600',
  },
  {
    label: 'Créditos',
    value: '5',
    icon: Wallet,
    color: 'bg-orange-50 text-orange-600',
  },
]

function Notificaciones() {
  return (
    <VendorLayout>
      {/* HEADER */}

      <div className="mb-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              Notificaciones
            </h1>

            <p className="text-base text-gray-500 mt-3">
              Mantente al tanto de ofertas, mensajes, créditos y oportunidades.
            </p>
          </div>

          <button className="border border-gray-200 bg-white px-5 py-3 rounded-2xl text-sm font-bold text-gray-700 hover:border-blue-400 hover:text-blue-600 transition flex items-center gap-2">
            <Filter size={16} />
            Filtrar
          </button>
        </div>
      </div>

      {/* NOTIFICACIONES */}

      <div className="bg-white border border-gray-100 rounded-[32px] shadow-sm overflow-hidden">
        <div className="px-7 py-5 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-gray-900">
              Actividad reciente
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Últimos movimientos importantes de tu cuenta.
            </p>
          </div>

          <button className="text-blue-600 text-sm font-bold hover:underline">
            Marcar todo como leído
          </button>
        </div>

        <div>
          {notificaciones.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.id}
                className={`
                  px-7
                  py-6
                  flex
                  items-start
                  gap-5
                  border-b
                  border-gray-100
                  last:border-0
                  transition
                  ${item.leida ? 'bg-white' : 'bg-blue-50/40'}
                `}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}
                >
                  <Icon size={20} />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-black text-gray-900">
                      {item.titulo}
                    </h3>

                    {!item.leida && (
                      <span className="bg-blue-600 w-2.5 h-2.5 rounded-full"></span>
                    )}
                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed mt-1">
                    {item.descripcion}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-gray-400 mt-3">
                    <Clock3 size={13} />
                    {item.tiempo}
                  </div>
                </div>

                <button className="text-gray-400 hover:text-blue-600 transition">
                  <AlertCircle size={18} />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </VendorLayout>
  )
}

export default Notificaciones