export default function NosotrosPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">Nuestra <span className="text-orange-400">Historia</span></h1>
                    <p className="text-xl opacity-90 max-w-3xl mx-auto">
                        Desde 2015, hemos sido el lugar favorito para las mejores hamburguesas,
                        alitas crujientes y camarones frescos de la ciudad
                    </p>
                </div>
            </section>

            {/* Historia del Restaurante */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-blue-900 mb-6">Una Pasión por el Sabor</h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Danilo´s Burger nació de la pasión de Danilo por crear
                                    la hamburguesa perfecta. Todo comenzó en un pequeño local con
                                    una gran visión: servir comida de calidad a precios justos.
                                </p>
                                <p>
                                    Nuestras hamburguesas se hacen con carne 100% angus, nuestras alitas
                                    se marinan 24 horas y nuestros camarones llegan frescos cada mañana.
                                    Cada detalle importa en Danilo´s Burger.
                                </p>
                                <p>
                                    Hoy somos el lugar favorito de familias, estudiantes y trabajadores
                                    que buscan sabor auténtico y un ambiente acogedor. ¡Ven y forma
                                    parte de nuestra historia!
                                </p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg p-8 text-center">
                            <div className="text-6xl mb-4">🍔</div>
                            <h3 className="text-2xl font-semibold text-white mb-2">Desde 2015</h3>
                            <p className="text-white opacity-90">Más de 8 años sirviendo sonrisas</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nuestro Chef */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-blue-900 mb-4">Nuestro Chef Principal</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            El maestro detrás de cada sabor que conquista paladares
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-blue-200">
                            <div className="text-center">
                                <div className="text-8xl mb-4">👨‍🍳</div>
                                <h3 className="text-2xl font-bold text-blue-900 mb-2">Chef Danilo</h3>
                                <p className="text-orange-500 font-semibold mb-4">Chef Principal y Fundador</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-2xl font-semibold text-blue-900">Pasión por la Perfección</h4>
                            <div className="space-y-3 text-gray-600">
                                <p>
                                    Chef Danilo tiene más de 15 años de experiencia en cocinas de
                                    restaurantes americanos y mexicanos, especializándose en parrilla
                                    y técnicas de cocción perfecta.
                                </p>
                                <p>
                                    Su secreto: "La carne debe hablar por sí sola. Nosotros solo
                                    la ayudamos a brillar con el fuego correcto y los condimentos justos."
                                </p>
                                <p>
                                    Bajo su dirección, Danilo´s Burger ha ganado el premio "Mejor Hamburguesa"
                                    de la ciudad tres años consecutivos.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                                    <div className="text-2xl font-bold text-orange-500">15+</div>
                                    <div className="text-sm text-gray-600">Años de Experiencia</div>
                                </div>
                                <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                                    <div className="text-2xl font-bold text-orange-500">3</div>
                                    <div className="text-sm text-gray-600">Premios Consecutivos</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Valores */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-blue-900 mb-4">Nuestros <span className="text-orange-500">Valores</span></h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Los principios que nos hacen únicos en cada hamburguesa que servimos
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 border-2 border-blue-200 rounded-lg hover:border-orange-400 transition-all">
                            <div className="text-5xl mb-4">🥩</div>
                            <h3 className="text-xl font-semibold text-blue-900 mb-3">Calidad Premium</h3>
                            <p className="text-gray-600">
                                Solo usamos carne 100% angus, vegetales frescos del día y
                                ingredientes de la más alta calidad.
                            </p>
                        </div>

                        <div className="text-center p-6 border-2 border-blue-200 rounded-lg hover:border-orange-400 transition-all">
                            <div className="text-5xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold text-blue-900 mb-3">Servicio Rápido</h3>
                            <p className="text-gray-600">
                                Entendemos que tu tiempo es valioso. Tu comida estará lista
                                en menos de 15 minutos, sin prisa pero sin pausa.
                            </p>
                        </div>

                        <div className="text-center p-6 border-2 border-blue-200 rounded-lg hover:border-orange-400 transition-all">
                            <div className="text-5xl mb-4">💰</div>
                            <h3 className="text-xl font-semibold text-blue-900 mb-3">Precios Justos</h3>
                            <p className="text-gray-600">
                                Creemos que la buena comida debe ser accesible para todos.
                                Calidad premium a precios que te van a sorprender.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipo */}
            <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">Nuestro <span className="text-orange-400">Equipo</span></h2>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                            Un grupo de apasionados que hacen la magia posible cada día
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center bg-blue-700/50 rounded-lg p-6">
                            <div className="text-4xl mb-3">👩‍🍳</div>
                            <h4 className="font-semibold mb-1 text-orange-400">María López</h4>
                            <p className="text-sm opacity-75">Especialista en Alitas</p>
                        </div>

                        <div className="text-center bg-blue-700/50 rounded-lg p-6">
                            <div className="text-4xl mb-3">🍤</div>
                            <h4 className="font-semibold mb-1 text-orange-400">José Ramírez</h4>
                            <p className="text-sm opacity-75">Maestro de Mariscos</p>
                        </div>

                        <div className="text-center bg-blue-700/50 rounded-lg p-6">
                            <div className="text-4xl mb-3">🛎️</div>
                            <h4 className="font-semibold mb-1 text-orange-400">Ana Torres</h4>
                            <p className="text-sm opacity-75">Gerente de Servicio</p>
                        </div>

                        <div className="text-center bg-blue-700/50 rounded-lg p-6">
                            <div className="text-4xl mb-3">🔥</div>
                            <h4 className="font-semibold mb-1 text-orange-400">Miguel Santos</h4>
                            <p className="text-sm opacity-75">Maestro Parrillero</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-400">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">¿Listo para probar el mejor sabor?</h2>
                    <p className="text-xl text-white mb-8 opacity-90">
                        Ven a conocernos y descubre por qué somos el lugar favorito de la ciudad
                    </p>
                    <button className="bg-blue-900 text-orange-400 px-8 py-3 rounded-lg text-lg font-bold hover:bg-blue-800 transition-colors shadow-lg">
                        Hacer Pedido
                    </button>
                </div>
            </section>
        </main>
    )
}