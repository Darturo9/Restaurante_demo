'use client'
import Link from 'next/link'
import { trackWhatsAppClick } from '@/lib/gtag'  // 🔥 AGREGAR ESTA LÍNEA

export default function Footer() {
    const handleWhatsAppClick = () => {
        // 🔥 AGREGAR TRACKING
        trackWhatsAppClick('footer')

        const phoneNumber = "50255580173"
        const message = "¡Hola! Me gustaría hacer un pedido en Danilo´s Burger 🍔"
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
        window.open(whatsappUrl, '_blank')
    }

    return (
        <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo y descripción */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-2xl">🍔</span>
                            <span className="text-xl font-bold">
                                Danilo´s <span className="text-orange-400">Burger</span>
                            </span>
                        </div>
                        <p className="text-blue-100 mb-4 max-w-md">
                            Las mejores hamburguesas, alitas crujientes y camarones frescos.
                            Desde 2015 sirviendo felicidad en cada bocado.
                        </p>

                        {/* 🔥 AGREGAR BADGE DE ANALYTICS */}
                        <div className="mt-4 inline-flex items-center bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                            <span className="mr-1">📊</span>
                            <span>Analytics Activado</span>
                        </div>
                    </div>

                    {/* Enlaces */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-orange-400">Navegación</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-blue-100 hover:text-orange-400 transition-colors">Inicio</Link></li>
                            <li><Link href="/menu" className="text-blue-100 hover:text-orange-400 transition-colors">Menú</Link></li>
                            <li><Link href="/nosotros" className="text-blue-100 hover:text-orange-400 transition-colors">Nosotros</Link></li>
                            <li><Link href="/contacto" className="text-blue-100 hover:text-orange-400 transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-orange-400">Contacto</h3>
                        <div className="space-y-2 text-blue-100">
                            <p>📍 6a Calle 3-45, Zona 1</p>  {/* 🔥 ACTUALIZAR DIRECCIÓN */}
                            <p>📞 +502 2234-5678</p>  {/* 🔥 ACTUALIZAR TELÉFONO */}
                            <button
                                onClick={handleWhatsAppClick}
                                className="text-green-400 hover:text-green-300 transition-colors block"
                            >
                                💬 WhatsApp: +502 5558-0173  {/* 🔥 ACTUALIZAR WHATSAPP */}
                            </button>
                            <p>✉️ pedidos@danilosburger.com</p>
                            <p>⏰ Lun-Dom: 11:00-23:00</p>
                        </div>


                    </div>
                </div>

                <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
                    <p>&copy; 2024 Danilo´s Burger. Todos los derechos reservados. | Alitas, Camarones y Más</p>
                </div>
            </div>
        </footer>
    )
}