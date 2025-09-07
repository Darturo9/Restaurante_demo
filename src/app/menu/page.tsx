'use client'
import { useState } from 'react'

const menuData = {
    hamburguesas: [
        {
            name: "Burger Clásica",
            description: "Carne de res angus, queso cheddar, lechuga, tomate y salsa especial",
            price: "$12.99",
            image: "🍔"
        },
        {
            name: "Burger BBQ",
            description: "Doble carne, queso americano, cebolla caramelizada y salsa BBQ",
            price: "$15.99",
            image: "🍔"
        },
        {
            name: "Burger Mexicana",
            description: "Carne de res, guacamole, jalapeños, queso pepper jack",
            price: "$14.99",
            image: "🍔"
        },
        {
            name: "Burger Veggie",
            description: "Hamburguesa de quinoa y vegetales con aguacate",
            price: "$11.99",
            image: "🥬"
        }
    ],
    alitas: [
        {
            name: "Alitas BBQ",
            description: "12 alitas crujientes bañadas en salsa BBQ casera",
            price: "$15.99",
            image: "🍗"
        },
        {
            name: "Alitas Buffalo",
            description: "Alitas picantes con salsa buffalo y dip de queso azul",
            price: "$16.99",
            image: "🍗"
        },
        {
            name: "Alitas Honey Mustard",
            description: "Alitas glaseadas con miel y mostaza, suaves y dulces",
            price: "$15.99",
            image: "🍗"
        }
    ],
    camarones: [
        {
            name: "Camarones Empanizados",
            description: "Camarones jumbo empanizados con salsa tártara casera",
            price: "$18.99",
            image: "🍤"
        },
        {
            name: "Camarones al Coco",
            description: "Camarones rebozados en coco con salsa agridulce",
            price: "$19.99",
            image: "🍤"
        },
        {
            name: "Camarones a la Plancha",
            description: "Camarones frescos con ajo, limón y hierbas",
            price: "$17.99",
            image: "🍤"
        }
    ],
    bebidas: [
        {
            name: "Cerveza Artesanal",
            description: "Selección de cervezas locales e importadas",
            price: "$4.99",
            image: "🍺"
        },
        {
            name: "Malteada Clásica",
            description: "Vainilla, chocolate o fresa con crema batida",
            price: "$5.99",
            image: "🥤"
        },
        {
            name: "Refresco Natural",
            description: "Limonada, naranjada o agua de jamaica",
            price: "$3.99",
            image: "🥤"
        }
    ]
}

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState('hamburguesas')

    const handleWhatsAppClick = () => {
        const phoneNumber = "50255580173"
        const message = "¡Hola! Me gustaría hacer un pedido del menú de Danilo´s Burger 🍔"
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
        window.open(whatsappUrl, '_blank')
    }

    const categories = [
        { id: 'hamburguesas', name: 'Hamburguesas', icon: '🍔' },
        { id: 'alitas', name: 'Alitas', icon: '🍗' },
        { id: 'camarones', name: 'Camarones', icon: '🍤' },
        { id: 'bebidas', name: 'Bebidas', icon: '🥤' }
    ]

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero del Menú */}
            <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">Nuestro <span className="text-orange-400">Menú</span></h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Hamburguesas artesanales, alitas crujientes, camarones frescos y más.
                        Todo preparado con amor y los mejores ingredientes
                    </p>
                </div>
            </section>

            {/* Filtros de Categorías */}
            <section className="py-8 bg-blue-900 sticky top-16 z-40 shadow-lg">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${activeCategory === category.id
                                    ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white'
                                    : 'bg-blue-800 text-blue-100 hover:bg-blue-700'
                                    }`}
                            >
                                <span>{category.icon}</span>
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contenido del Menú */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all border-2 border-blue-200 hover:border-orange-400"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="text-4xl">{item.image}</div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-semibold text-blue-900">
                                                {item.name}
                                            </h3>
                                            <span className="text-2xl font-bold text-orange-500">
                                                {item.price}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">¿Ya decidiste qué pedir?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Haz tu pedido ahora y disfruta en casa o ven a visitarnos
                    </p>
                    <button
                        onClick={handleWhatsAppClick}
                        className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-3 rounded-lg text-lg font-bold hover:from-orange-400 hover:to-orange-300 transition-all shadow-lg"
                    >
                        Pedir Ahora
                    </button>
                </div>
            </section>
        </main>
    )
}