'use client'
import { useState } from 'react'

export default function ContactoPage() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        fecha: '',
        hora: '',
        personas: '',
        mensaje: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert('¡Gracias! Tu pedido ha sido enviado. Te contactaremos pronto.')
        console.log('Datos del formulario:', formData)
    }

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">Contacto & <span className="text-orange-400">Pedidos</span></h1>
                    <p className="text-xl opacity-90 max-w-3xl mx-auto">
                        ¿Tienes hambre? Contáctanos o haz tu pedido ahora mismo.
                        Estamos listos para servirte el mejor sabor
                    </p>
                </div>
            </section>

            {/* Información de Contacto */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {/* Información */}
                        <div className="text-center p-6 border-2 border-blue-200 rounded-lg hover:border-orange-400 transition-all">
                            <div className="text-4xl mb-4">📍</div>
                            <h3 className="text-xl font-semibold text-blue-900 mb-2">Ubicación</h3>
                            <p className="text-gray-600">
                                Av. de las Hamburguesas 456<br />
                                Colonia Centro<br />
                                Ciudad, CP 12345
                            </p>
                        </div>

                        <div className="text-center p-6 border-2 border-blue-200 rounded-lg hover:border-orange-400 transition-all">
                            <div className="text-4xl mb-4">📞</div>
                            <h3 className="text-xl font-semibold text-blue-900 mb-2">Teléfono</h3>
                            <p className="text-gray-600">
                                Pedidos: (555) BURGER-1<br />
                                WhatsApp: (502) 55580173<br />
                                General: (555) 123-4569
                            </p>
                        </div>

                        <div className="text-center p-6 border-2 border-blue-200 rounded-lg hover:border-orange-400 transition-all">
                            <div className="text-4xl mb-4">⏰</div>
                            <h3 className="text-xl font-semibold text-blue-900 mb-2">Horarios</h3>
                            <p className="text-gray-600">
                                Lun - Jue: 11:00 - 23:00<br />
                                Vie - Sáb: 11:00 - 24:00<br />
                                Domingo: 12:00 - 22:00
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formulario de Pedidos */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-blue-900 mb-4">Hacer un <span className="text-orange-500">Pedido</span></h2>
                            <p className="text-xl text-gray-600">
                                Completa el formulario y nos pondremos en contacto contigo para confirmar tu pedido
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-200">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Información Personal */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="nombre" className="block text-sm font-medium text-blue-900 mb-2">
                                            Nombre Completo *
                                        </label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            required
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            placeholder="Tu nombre completo"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                            placeholder="tu@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="telefono" className="block text-sm font-medium text-blue-900 mb-2">
                                        Teléfono *
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefono"
                                        name="telefono"
                                        required
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                {/* Detalles del Pedido */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <label htmlFor="fecha" className="block text-sm font-medium text-blue-900 mb-2">
                                            Fecha de Entrega *
                                        </label>
                                        <input
                                            type="date"
                                            id="fecha"
                                            name="fecha"
                                            required
                                            value={formData.fecha}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="hora" className="block text-sm font-medium text-blue-900 mb-2">
                                            Hora Preferida *
                                        </label>
                                        <select
                                            id="hora"
                                            name="hora"
                                            required
                                            value={formData.hora}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        >
                                            <option value="">Selecciona una hora</option>
                                            <option value="11:00">11:00 AM</option>
                                            <option value="11:30">11:30 AM</option>
                                            <option value="12:00">12:00 PM</option>
                                            <option value="12:30">12:30 PM</option>
                                            <option value="13:00">1:00 PM</option>
                                            <option value="19:00">7:00 PM</option>
                                            <option value="19:30">7:30 PM</option>
                                            <option value="20:00">8:00 PM</option>
                                            <option value="20:30">8:30 PM</option>
                                            <option value="21:00">9:00 PM</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="personas" className="block text-sm font-medium text-blue-900 mb-2">
                                            Número de Personas *
                                        </label>
                                        <select
                                            id="personas"
                                            name="personas"
                                            required
                                            value={formData.personas}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        >
                                            <option value="">¿Para cuántos?</option>
                                            <option value="1">1 persona</option>
                                            <option value="2">2 personas</option>
                                            <option value="3">3 personas</option>
                                            <option value="4">4 personas</option>
                                            <option value="5">5 personas</option>
                                            <option value="6+">6 o más personas</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="mensaje" className="block text-sm font-medium text-blue-900 mb-2">
                                        Detalles del Pedido
                                    </label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        rows={4}
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        placeholder="Describe qué quieres pedir: hamburguesas, alitas, camarones, bebidas, etc."
                                    ></textarea>
                                </div>

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-3 rounded-lg text-lg font-bold hover:from-orange-400 hover:to-orange-300 transition-all shadow-lg"
                                    >
                                        Enviar Pedido
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Métodos de Entrega */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-900 mb-6">Opciones de <span className="text-orange-500">Entrega</span></h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    <strong>🏪 Recoger en Tienda:</strong> Listo en 15 minutos.
                                    Llama y recoge sin esperas.
                                </p>
                                <p>
                                    <strong>🚗 Delivery:</strong> Entregamos en un radio de 5km.
                                    Tiempo estimado: 30-45 minutos.
                                </p>
                                <p>
                                    <strong>🛵 Servicio Express:</strong> Para pedidos urgentes,
                                    entrega en 20 minutos (costo adicional).
                                </p>
                            </div>

                            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg border-2 border-orange-200">
                                <h3 className="font-semibold text-blue-900 mb-2">💡 Consejos para tu Pedido</h3>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Ordena con tiempo en horas pico (12-2pm, 7-9pm)</li>
                                    <li>• Delivery gratis en pedidos mayores a $25</li>
                                    <li>• Aceptamos efectivo y todas las tarjetas</li>
                                    <li>• Combos especiales disponibles</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg h-64 lg:h-96 flex items-center justify-center">
                            <div className="text-center text-white">
                                <div className="text-4xl mb-2">🗺️</div>
                                <p className="font-semibold">Ubicación</p>
                                <p className="text-sm opacity-90">(Aquí iría el mapa real)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}