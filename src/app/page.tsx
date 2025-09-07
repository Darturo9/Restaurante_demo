'use client'

import InstallPWA from '@/components/InstallPWA'
import FeaturedItems from '@/components/FeaturedItems'  // 🔥 CAMBIAR A SOLO DESTACADOS
import { trackWhatsAppClick } from '@/lib/gtag'

export default function Home() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick('hero_section')

    const phoneNumber = "50255580173"
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
      {/* Hero Section con imagen de fondo */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url("/images/burger-hero.jpg")'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 text-center space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
            Danilo´s <span className="text-orange-400">Burger</span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto drop-shadow-lg">
            Las mejores hamburguesas artesanales, alitas crujientes y camarones frescos en un solo lugar
          </p>
          <div className="space-x-4">
            <button
              onClick={handleMenuClick}
              className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-3 rounded-lg text-lg font-bold hover:from-orange-400 hover:to-orange-300 transition-all shadow-2xl hover:scale-105"
            >
              Ver Menú
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="border-2 border-orange-400 text-orange-400 px-8 py-3 rounded-lg text-lg font-bold hover:bg-orange-400 hover:text-white transition-all backdrop-blur-sm bg-white/10"
            >
              Pedir Ahora
            </button>
          </div>
        </div>
      </section>

      {/* 🔥 SOLO ESPECIALIDADES DE LA CASA */}
      <FeaturedItems />

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

      <InstallPWA />
    </main>
  );
}