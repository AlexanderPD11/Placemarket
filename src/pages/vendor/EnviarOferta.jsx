import VendorLayout from '../../layouts/VendorLayout'
import { Link } from 'react-router-dom'

import {
  ArrowLeft,
  Upload,
  Wallet,
  ShieldCheck,
  Clock3,
  Send,
  Info,
  Paperclip,
  CheckCircle2,
} from 'lucide-react'

function EnviarOferta() {
  return (
    <VendorLayout>

      {/* HEADER */}
      <div className="mb-10">

        <Link
          to="/solicitud/1"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition mb-5"
        >
          <ArrowLeft size={16} />
          Volver a la solicitud
        </Link>

        <div className="flex items-end justify-between">

          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">
              Enviar oferta
            </h1>

            <p className="text-base text-gray-500 mt-3">
              Presenta una propuesta clara y profesional para aumentar tus posibilidades.
            </p>
          </div>

          <div className="bg-blue-50 text-blue-600 px-5 py-3 rounded-2xl text-sm font-bold flex items-center gap-2">
            <Wallet size={16} />
            1,250 créditos disponibles
          </div>

        </div>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-3 gap-8">

        {/* FORM */}
        <div className="col-span-2 bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">

          <div className="mb-8">
            <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold">
              PROPUESTA COMERCIAL
            </span>

            <h2 className="text-3xl font-black text-gray-900 mt-5">
              Detalles de tu oferta
            </h2>

            <p className="text-gray-500 mt-3 leading-relaxed">
              Explica qué incluye tu propuesta, precio, tiempo de entrega y cualquier condición importante.
            </p>
          </div>

          <div className="space-y-6">

            {/* MENSAJE */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Mensaje para el comprador
              </label>

              <textarea
                rows={7}
                placeholder="Ej: Hola, puedo desarrollar tu aplicación de delivery incluyendo app móvil, panel administrativo, pasarela de pagos y soporte inicial..."
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-400 resize-none text-sm text-gray-700"
              />
            </div>

            {/* PRICE + TIME */}
            <div className="grid grid-cols-2 gap-5">

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Precio ofertado
                </label>

                <div className="relative">
                  <span className="absolute left-4 top-4 text-gray-400 font-bold">
                    RD$
                  </span>

                  <input
                    type="number"
                    placeholder="85000"
                    className="w-full border border-gray-200 rounded-2xl pl-14 pr-4 py-4 outline-none focus:border-blue-400 text-sm font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Tiempo estimado
                </label>

                <select className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-400 text-sm bg-white">
                  <option>3 días</option>
                  <option>5 días</option>
                  <option>1 semana</option>
                  <option>2 semanas</option>
                  <option>1 mes</option>
                  <option>Más de 1 mes</option>
                </select>
              </div>

            </div>

            {/* CONDITIONS */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Condiciones adicionales
              </label>

              <input
                type="text"
                placeholder="Ej: 50% inicial, 50% contra entrega / Incluye 2 revisiones"
                className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-blue-400 text-sm"
              />
            </div>

            {/* FILES */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Archivos de apoyo
              </label>

              <button className="w-full border border-dashed border-gray-300 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-blue-400 hover:bg-blue-50/40 transition">
                <Upload size={28} className="text-blue-600" />

                <p className="font-bold text-gray-900 mt-3">
                  Subir propuesta, portafolio o documento
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  PDF, DOCX, JPG o PNG
                </p>
              </button>
            </div>

            {/* INFO */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex gap-3">
              <Info className="text-blue-600 shrink-0" size={20} />

              <p className="text-sm text-blue-700 leading-relaxed">
                Tu información de contacto permanecerá protegida hasta que el comprador acepte o desbloquee tu propuesta.
              </p>
            </div>

          </div>

        </div>

        {/* SUMMARY */}
        <div className="space-y-6">

          <div className="bg-white border border-gray-100 rounded-[32px] p-7 shadow-sm sticky top-8">

            <h2 className="text-2xl font-black text-gray-900">
              Resumen
            </h2>

            <div className="space-y-5 mt-6">

              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">
                  Solicitud
                </span>

                <span className="font-bold text-gray-900 text-sm">
                  Delivery App
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">
                  Créditos requeridos
                </span>

                <span className="font-black text-blue-600">
                  12
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">
                  Saldo actual
                </span>

                <span className="font-black text-gray-900">
                  1,250
                </span>
              </div>

              <div className="border-t border-gray-100 pt-5 flex items-center justify-between">
                <span className="text-gray-900 font-bold">
                  Saldo después
                </span>

                <span className="font-black text-gray-900">
                  1,238
                </span>
              </div>

            </div>

            <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold mt-8 hover:bg-blue-700 transition flex items-center justify-center gap-2">
              Enviar oferta
              <Send size={18} />
            </button>

          </div>

          <div className="bg-white border border-gray-100 rounded-[32px] p-6 shadow-sm">

            <div className="flex gap-3">

              <ShieldCheck size={22} className="text-blue-600 shrink-0" />

              <div>
                <h4 className="font-black text-gray-900">
                  Protección Placemarket
                </h4>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  Mantén la negociación dentro de la plataforma para proteger tu inversión de créditos.
                </p>
              </div>

            </div>

          </div>

          <div className="bg-white border border-gray-100 rounded-[32px] p-6 shadow-sm">

            <div className="flex gap-3">

              <Clock3 size={22} className="text-blue-600 shrink-0" />

              <div>
                <h4 className="font-black text-gray-900">
                  Consejo rápido
                </h4>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  Las ofertas con precio claro, tiempo definido y explicación detallada reciben mejores respuestas.
                </p>
              </div>

            </div>

          </div>

          <div className="bg-white border border-gray-100 rounded-[32px] p-6 shadow-sm">

            <div className="flex gap-3">

              <Paperclip size={22} className="text-blue-600 shrink-0" />

              <div>
                <h4 className="font-black text-gray-900">
                  Archivos recomendados
                </h4>

                <ul className="text-sm text-gray-500 mt-2 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600" />
                    Portafolio o casos previos
                  </li>

                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600" />
                    Propuesta técnica
                  </li>

                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600" />
                    Cronograma estimado
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>

    </VendorLayout>
  )
}

export default EnviarOferta