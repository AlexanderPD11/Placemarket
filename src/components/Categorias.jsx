import { Car, Home, Monitor, Wrench, Shirt, Dumbbell, ShoppingBag, MoreHorizontal } from 'lucide-react'

const categorias = [
  { icon: Car, label: "Vehículos", sub: "Autos, Motos, Repuestos" },
  { icon: Home, label: "Propiedades", sub: "Alquiler, Ventas, Terrenos" },
  { icon: Monitor, label: "Tecnología", sub: "Laptops, Smartphones, Gadgets" },
  { icon: Wrench, label: "Servicios", sub: "Hogar, Legal, Digital" },
  { icon: Shirt, label: "Ropa", sub: "Moda, Calzado, Accesorios" },
  { icon: Dumbbell, label: "Deportes", sub: "Equipos, Ropa, Suplementos" },
  { icon: ShoppingBag, label: "Hogar", sub: "Muebles, Deco, Electrodomésticos" },
  { icon: MoreHorizontal, label: "Otros", sub: "Todo lo demás" },
]

function Categorias() {
  return (
    <section id="categorias" className="py-24 px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-black text-gray-900">Categorías populares</h2>
            <p className="text-gray-500 mt-1">Expertos en todos los sectores listos para ofertar.</p>
          </div>
          <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">
            Ver todo →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categorias.map((cat) => {
            const Icon = cat.icon
            return (
              <div key={cat.label} className="border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-blue-100 transition cursor-pointer group">
                <div className="bg-blue-50 w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition">
                  <Icon className="text-blue-600" size={20} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm">{cat.label}</h4>
                <p className="text-gray-400 text-xs mt-1">{cat.sub}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Categorias