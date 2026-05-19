import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, CheckCircle, Clock, Users, TrendingUp, History } from 'lucide-react'

const paquetes = [
  {
    id: 'basico',
    nombre: 'BASICO',
    precio: '$10.00',
    descripcion: 'Ideal para empezar a vender.',
    recomendado: false,
    beneficios: [
      { icon: CheckCircle, texto: '10 Creditos' },
      { icon: Clock, texto: 'Vigencia 30 dias' },
      { icon: Users, texto: 'Soporte estandar' },
    ]
  },
  {
    id: 'profesional',
    nombre: 'PROFESIONAL',
    precio: '$45.00',
    descripcion: 'Maximiza tu visibilidad mensual.',
    recomendado: true,
    beneficios: [
      { icon: CheckCircle, texto: '50 Creditos' },
      { icon: CheckCircle, texto: 'Insignia de Profesional' },
      { icon: TrendingUp, texto: 'Prioridad en busquedas' },
      { icon: Users, texto: 'Soporte prioritario' },
    ]
  },
  {
    id: 'empresarial',
    nombre: 'EMPRESARIAL',
    precio: '$120.00',
    descripcion: 'Potencia ilimitada para negocios.',
    recomendado: false,
    beneficios: [
      { icon: CheckCircle, texto: '150 Creditos' },
      { icon: CheckCircle, texto: 'Creditos sin vencimiento' },
      { icon: TrendingUp, texto: 'Maxima visibilidad global' },
      { icon: Users, texto: 'Gestor de cuenta dedicado' },
    ]
  }
]

const historial = [
  { fecha: '24 Mayo, 2025', descripcion: 'Compra Paquete Profesional', cantidad: '+50 Creditos', estado: 'COMPLETADO', positivo: true },
  { fecha: '21 Mayo, 2025', descripcion: 'Publicacion de Producto Destacado', cantidad: '-5 Creditos', estado: 'COMPLETADO', positivo: false },
  { fecha: '18 Mayo, 2025', descripcion: 'Renovacion Automatica Producto', cantidad: '-2 Creditos', estado: 'COMPLETADO', positivo: false },
  { fecha: '15 Mayo, 2025', descripcion: 'Compra Paquete Basico', cantidad: '+10 Creditos', estado: 'COMPLETADO', positivo: true },
]
function TiendaCreditos() {
  const [seleccionado, setSeleccionado] = useState('profesional')

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg"><ShoppingBag size={16} /></div>
          <span className="font-black text-gray-900">Placemarket</span>
        </Link>
        <div className="flex gap-6 text-sm">
          <a href="#" className="text-gray-400">Dashboard</a>
          <a href="#" className="text-gray-400">Mis Productos</a>
          <a href="#" className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">Tienda de Creditos</a>
          <a href="#" className="text-gray-400">Mensajes</a>
        </div>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-3xl font-black text-gray-900">Tienda de Creditos</h1>
            <p className="text-gray-500 mt-1">Adquiere creditos para destacar tus productos y aumentar tus ventas.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-center min-w-48">
            <div className="flex items-center gap-2 justify-center mb-1">
              <ShoppingBag size={16} className="text-blue-600" />
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Saldo Actual</p>
            </div>
            <p className="text-3xl font-black text-blue-600">125 Creditos</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-black text-gray-900">Selecciona un Paquete de Creditos</h2>
          <button className="text-blue-600 text-sm font-semibold hover:underline">Ver tutorial de uso</button>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-12">
          {paquetes.map((paquete) => (
            <div key={paquete.id} className={`bg-white rounded-2xl p-6 border-2 transition-all relative ${seleccionado === paquete.id ? 'border-blue-600 shadow-lg' : 'border-gray-100 shadow-sm'}`}>
              {paquete.recomendado && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  RECOMENDADO
                </div>
              )}
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">{paquete.nombre}</p>
              <p className="text-4xl font-black text-gray-900 mb-1">{paquete.precio} <span className="text-sm font-normal text-gray-400">USD</span></p>
              <p className="text-sm text-gray-500 mb-6">{paquete.descripcion}</p>
              <button
                onClick={() => setSeleccionado(paquete.id)}
                className={`w-full py-3 rounded-full text-sm font-semibold mb-6 transition ${seleccionado === paquete.id ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-gray-200 text-gray-600 hover:border-blue-400'}`}
              >
                Comprar ahora
              </button>
              <div className="border-t border-gray-100 pt-4 space-y-3">
                {paquete.beneficios.map((b, i) => {
                  const Icon = b.icon
                  return (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon size={14} className="text-blue-600" strokeWidth={2} />
                      {b.texto}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
            <History size={18} className="text-blue-600" />
            <h2 className="text-lg font-black text-gray-900">Historial Reciente</h2>
          </div>
          <div className="divide-y divide-gray-50">
            <div className="grid grid-cols-4 px-6 py-3 text-xs font-bold text-gray-400 uppercase tracking-wide">
              <span>Fecha</span>
              <span>Descripcion</span>
              <span>Cantidad</span>
              <span>Estado</span>
            </div>
            {historial.map((item, i) => (
              <div key={i} className="grid grid-cols-4 px-6 py-4 items-center">
                <span className="text-sm text-gray-600">{item.fecha}</span>
                <span className="text-sm text-gray-600">{item.descripcion}</span>
                <span className={`text-sm font-bold ${item.positivo ? 'text-green-500' : 'text-red-500'}`}>{item.cantidad}</span>
                <span className="bg-green-100 text-green-600 text-xs font-bold px-3 py-1 rounded-full w-fit">{item.estado}</span>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 text-center border-t border-gray-100">
            <button className="text-blue-600 text-sm font-semibold hover:underline">Ver todo el historial</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TiendaCreditos