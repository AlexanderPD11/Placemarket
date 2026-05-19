import { FileText, Inbox, Trophy } from 'lucide-react'

const steps = [
  {
    number: "01",
    title: "Publica tu necesidad",
    description: "Describe lo que buscas, tu presupuesto y condiciones.",
    icon: FileText,
    color: "bg-indigo-50",
    iconColor: "text-indigo-500"
  },
  {
    number: "02",
    title: "Recibe ofertas",
    description: "Los vendedores compiten enviándote sus mejores propuestas.",
    icon: Inbox,
    color: "bg-purple-50",
    iconColor: "text-purple-500"
  },
  {
    number: "03",
    title: "Elige la mejor oferta",
    description: "Compara, negocia y cierra el trato con quien te convenza.",
    icon: Trophy,
    color: "bg-pink-50",
    iconColor: "text-pink-500"
  }
]

function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900">
            ¿Cómo funciona?
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Tres pasos para conseguir lo que necesitas al mejor precio
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className={step.color + " rounded-2xl p-8 text-center"}>
                <div className="flex justify-center mb-4">
                  <Icon className={step.iconColor} size={48} strokeWidth={1.5} />
                </div>
                <span className="block text-indigo-400 font-black text-lg">{step.number}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2">{step.title}</h3>
                <p className="text-gray-500 mt-3">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks