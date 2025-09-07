'use client'

export default function Home() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5551234567"
    const message = "¡Hola! Me gustaría hacer un pedido en Danilo´s Burger 🍔"
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  const handleMenuClick = () => {
    window.location.href = '/menu'
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Danilo´s <span className="text-orange-400">Burger</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            Las mejores hamburguesas artesanales, alitas crujientes y camarones frescos en un solo lugar
          </p>
          <div className="space-x-4">
            <button
              onClick={handleMenuClick}
              className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-3 rounded-lg text-lg font-bold hover:from-orange-400 hover:to-orange-300 transition-all shadow-lg"
            >
              Ver Menú
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="border-2 border-orange-400 text-orange-400 px-8 py-3 rounded-lg text-lg font-bold hover:bg-orange-400 hover:text-white transition-all"
            >
              Pedir Ahora
            </button>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Nuestras <span className="text-orange-500">Especialidades</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Burger Clásica",
                description: "Carne de res angus, queso cheddar, lechuga, tomate y salsa especial",
                price: "$12.99",
                image: "🍔"
              },
              {
                name: "Alitas BBQ",
                description: "12 alitas crujientes bañadas en nuestra salsa BBQ secreta",
                price: "$15.99",
                image: "🍗"
              },
              {
                name: "Camarones Empanizados",
                description: "Camarones jumbo empanizados con salsa tártara casera",
                price: "$18.99",
                image: "🍤"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-xl transition-all border-2 border-blue-200 hover:border-orange-400">
                <div className="text-6xl mb-4">{item.image}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="text-2xl font-bold text-orange-500">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">¿Por qué <span className="text-orange-400">Danilo´s Burger</span>?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-700/50 rounded-lg p-6 border border-blue-600">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-semibold mb-2 text-orange-400">Ingredientes Frescos</h3>
              <p className="text-blue-100">Preparamos todo diariamente con ingredientes de la más alta calidad</p>
            </div>
            <div className="bg-blue-700/50 rounded-lg p-6 border border-blue-600">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-orange-400">Servicio Rápido</h3>
              <p className="text-blue-100">Tu comida lista en tiempo récord sin comprometer el sabor</p>
            </div>
            <div className="bg-blue-700/50 rounded-lg p-6 border border-blue-600">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2 text-orange-400">Sabor Único</h3>
              <p className="text-blue-100">Recetas secretas que han conquistado miles de paladares</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">¿Tienes hambre?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Haz tu pedido ahora y disfruta de la mejor comida en minutos
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-blue-900 text-orange-400 px-8 py-3 rounded-lg text-lg font-bold hover:bg-blue-800 transition-colors shadow-lg"
          >
            Pedir Ahora
          </button>
        </div>
      </section>
    </main>
  );
}