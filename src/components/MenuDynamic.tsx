'use client'
import { useState, useEffect } from 'react'
import { supabase, MenuItem } from '@/lib/supabase'
import { trackMenuView } from '@/lib/gtag'

export default function MenuDynamic() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState<string>('todos')
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetchMenuItems()
    }, [])

    const fetchMenuItems = async () => {
        try {
            setLoading(true)
            setError(null)

            const { data, error } = await supabase
                .from('menu_items')
                .select('*')
                .eq('available', true)
                .order('featured', { ascending: false })
                .order('category', { ascending: true })
                .order('name', { ascending: true })

            if (error) {
                console.error('Error fetching menu:', error)
                setError('Error al cargar el menú')
                return
            }

            setMenuItems(data || [])
        } catch (error) {
            console.error('Error:', error)
            setError('Error de conexión')
        } finally {
            setLoading(false)
        }
    }

    const handleItemClick = (itemName: string) => {
        trackMenuView(itemName)
    }

    // Estado de carga
    if (loading) {
        return (
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
                        Nuestro <span className="text-orange-500">Menú</span>
                    </h2>
                    <div className="flex justify-center items-center py-16">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500 mx-auto mb-4"></div>
                            <span className="text-xl text-blue-900 font-medium">Cargando menú delicioso...</span>
                            <p className="text-gray-600 mt-2">Preparando las mejores opciones para ti</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    // Estado de error
    if (error) {
        return (
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
                        Nuestro <span className="text-orange-500">Menú</span>
                    </h2>
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">😔</div>
                        <h3 className="text-2xl font-bold text-red-600 mb-2">¡Ups! Algo salió mal</h3>
                        <p className="text-gray-600 mb-6">{error}</p>
                        <button
                            onClick={fetchMenuItems}
                            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                        >
                            🔄 Intentar de nuevo
                        </button>
                    </div>
                </div>
            </section>
        )
    }

    // Sin items disponibles
    if (menuItems.length === 0) {
        return (
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
                        Nuestro <span className="text-orange-500">Menú</span>
                    </h2>
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🍽️</div>
                        <h3 className="text-2xl font-bold text-blue-900 mb-2">Menú en preparación</h3>
                        <p className="text-gray-600 mb-6">Estamos preparando deliciosas opciones para ti</p>
                        <button
                            onClick={fetchMenuItems}
                            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                        >
                            🔄 Actualizar
                        </button>
                    </div>
                </div>
            </section>
        )
    }

    // Obtener categorías únicas
    const categories = ['todos', ...new Set(menuItems.map(item => item.category))]

    // Filtrar items por categoría
    const filteredItems = selectedCategory === 'todos'
        ? menuItems
        : menuItems.filter(item => item.category === selectedCategory)

    // Agrupar por categoría para mostrar
    const itemsByCategory = filteredItems.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = []
        }
        acc[item.category].push(item)
        return acc
    }, {} as Record<string, MenuItem[]>)

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
                    Nuestro <span className="text-orange-500">Menú</span>
                </h2>

                {/* Contador de items */}
                <div className="text-center mb-8">
                    <p className="text-gray-600">
                        <span className="font-semibold text-blue-900">{filteredItems.length}</span> opciones deliciosas disponibles
                    </p>
                </div>

                {/* Filtros de categoría */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => {
                        const categoryCount = category === 'todos'
                            ? menuItems.length
                            : menuItems.filter(item => item.category === category).length

                        return (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all capitalize flex items-center space-x-2 ${selectedCategory === category
                                    ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                                    : 'bg-white text-blue-900 border-2 border-blue-200 hover:border-orange-400 hover:shadow-md'
                                    }`}
                            >
                                <span>{category}</span>
                                <span className={`text-xs px-2 py-1 rounded-full ${selectedCategory === category
                                    ? 'bg-white/20 text-white'
                                    : 'bg-blue-100 text-blue-600'
                                    }`}>
                                    {categoryCount}
                                </span>
                            </button>
                        )
                    })}
                </div>

                {/* Items destacados */}
                {selectedCategory === 'todos' && (
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-blue-800 mb-6 text-center flex items-center justify-center">
                            <span className="text-4xl mr-3">⭐</span>
                            Especialidades de la Casa
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {menuItems
                                .filter(item => item.featured)
                                .map((item) => (
                                    <div
                                        key={`featured-${item.id}`}
                                        className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-2xl transition-all border-2 border-orange-300 hover:border-orange-500 cursor-pointer transform hover:scale-105 group"
                                        onClick={() => handleItemClick(item.name)}
                                    >
                                        <div className="text-7xl mb-4 group-hover:animate-bounce">{item.emoji}</div>
                                        <h4 className="text-xl font-bold text-blue-900 mb-3">{item.name}</h4>
                                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                                        <div className="text-3xl font-bold text-orange-500 mb-4">Q{item.price}</div>
                                        <div className="flex justify-center">
                                            <span className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                                ⭐ DESTACADO
                                            </span>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}

                {/* Menú por categorías */}
                {Object.entries(itemsByCategory).map(([category, items]) => (
                    <div key={category} className="mb-16">
                        <h3 className="text-2xl font-bold text-blue-800 mb-8 capitalize flex items-center">
                            <span className="text-3xl mr-3">{items[0]?.emoji}</span>
                            <span>{category}</span>
                            <span className="ml-3 text-lg font-normal text-gray-500 bg-blue-100 px-3 py-1 rounded-full">
                                {items.length} opciones
                            </span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all border-2 border-blue-200 hover:border-orange-400 cursor-pointer group"
                                    onClick={() => handleItemClick(item.name)}
                                >
                                    {item.image_url ? (
                                        <img
                                            src={item.image_url}
                                            alt={item.name}
                                            className="w-20 h-20 mx-auto mb-4 rounded-full object-cover border-4 border-orange-200 group-hover:border-orange-400 transition-colors"
                                        />
                                    ) : (
                                        <div className="text-6xl mb-4 group-hover:animate-pulse">{item.emoji}</div>
                                    )}
                                    <h4 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-orange-600 transition-colors">
                                        {item.name}
                                    </h4>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-col items-center space-y-3">
                                        <div className="text-2xl font-bold text-orange-500">Q{item.price}</div>
                                        {item.featured && (
                                            <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                                                ⭐ Popular
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Botón de actualización */}
                <div className="text-center mt-12">
                    <button
                        onClick={fetchMenuItems}
                        className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg flex items-center space-x-2 mx-auto"
                    >
                        <span>🔄</span>
                        <span>Actualizar Menú</span>
                    </button>
                </div>
            </div>
        </section>
    )
}