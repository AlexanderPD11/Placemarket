import { Mail, ArrowRight } from 'lucide-react'

function CTA() {
  return (
    <section id="registro" className="py-24 px-6 bg-indigo-600">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-black text-white">
          ¿Listo para cambiar la forma en que compras y vendes?
        </h2>
        <p className="text-indigo-200 mt-4 text-lg">
          Únete a la lista de espera y sé de los primeros en acceder cuando lancemos.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center bg-white rounded-full px-6 py-4 w-full sm:w-96 gap-3">
            <Mail className="text-indigo-400" size={20} strokeWidth={1.5} />
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 outline-none text-gray-900 text-lg bg-transparent"
            />
          </div>
          <button className="flex items-center gap-2 bg-white text-indigo-600 font-bold px-8 py-4 rounded-full text-lg hover:bg-indigo-50 transition shadow-lg whitespace-nowrap">
            Quiero unirme
            <ArrowRight size={20} strokeWidth={2} />
          </button>
        </div>
        <p className="text-indigo-300 text-sm mt-6">
          Sin spam. Sin compromisos. Solo te avisamos cuando estemos listos.
        </p>
      </div>
    </section>
  )
}

export default CTA