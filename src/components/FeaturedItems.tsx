'use client'
import { useState, useEffect } from 'react'
import { supabase, MenuItem } from '@/lib/supabase'
import { trackMenuView } from '@/lib/gtag'

export default function FeaturedItems() {
    const [featuredItems, setFeaturedItems] = useState<MenuItem[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetchFeaturedItems()
    }, [])

    const fetchFeaturedItems = async () => {
        try {
            setLoading(true)
            setError(null)

            const { data, error } = await supabase
                .from('menu_items')
                .select('*')
                .eq('available', true)
                .eq('featured', true)
                .order('name', { ascending: true })

            if (error) {
                console.error('Error fetching featured items:', error)
                setError('Error al cargar especialidades')
                return
            }

            setFeaturedItems(data || [])
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

    const handleViewFullMenu = () => {
        window.location.href = '/menu'
    }

    // Estado de carga
    if (loading) {
        return (
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
                        Nuestras <span className="text-orange-500">Especialidades</span>
                    </h2>
                    <div className="flex justify-center items-center py-8">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-orange-500 mx-auto mb-3"></div>
                            <span className="text-lg text-blue-900 font-medium">Cargando...</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    // Estado de error
    if (error) {
        return (
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
                        Nuestras <span className="text-orange-500">Especialidades</span>
                    </h2>
                    <div className="text-center py-8">
                        <div className="text-4xl mb-3">😔</div>
                        <h3 className="text-xl font-bold text-red-600 mb-2">¡Ups! Algo salió mal</h3>
                        <p className="text-gray-600 mb-4 text-sm">{error}</p>
                        <button
                            onClick={fetchFeaturedItems}
                            className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors"
                        >
                            🔄 Reintentar
                        </button>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
                    Nuestras <span className="text-orange-500">Especialidades</span>
                </h2>

                {featuredItems.length > 0 ? (
                    <>
                        {/* 🔥 GRID COMPACTO DE ESPECIALIDADES */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
                            {featuredItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all border-2 border-orange-200 hover:border-orange-400 cursor-pointer transform hover:scale-105 group"
                                    onClick={() => handleItemClick(item.name)}
                                >
                                    {/* 🔥 EMOJI MÁS PEQUEÑO */}
                                    <div className="text-4xl mb-3 group-hover:animate-pulse">{item.emoji}</div>

                                    {/* 🔥 TÍTULO COMPACTO */}
                                    <h3 className="text-lg font-bold text-blue-900 mb-2 leading-tight">{item.name}</h3>

                                    {/* 🔥 DESCRIPCIÓN REDUCIDA */}
                                    <p className="text-gray-600 mb-3 text-xs leading-relaxed line-clamp-2">
                                        {item.description}
                                    </p>

                                    {/* 🔥 PRECIO DESTACADO */}
                                    <div className="text-xl font-bold text-orange-500 mb-3">Q{item.price}</div>

                                    {/* 🔥 BADGE COMPACTO */}
                                    <div className="flex justify-center">
                                        <span className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                                            ⭐ ESPECIAL
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 🔥 CALL TO ACTION COMPACTO */}
                        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
                            <h3 className="text-xl font-bold mb-3">¿Quieres ver más opciones?</h3>
                            <p className="text-blue-100 mb-4 text-sm">
                                Explora todo nuestro menú completo
                            </p>
                            <button
                                onClick={handleViewFullMenu}
                                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-lg text-sm font-bold hover:from-orange-400 hover:to-orange-300 transition-all shadow-lg hover:scale-105"
                            >
                                🍽️ Ver Menú Completo
                            </button>
                        </div>
                    </>
                ) : (
                    // Sin especialidades disponibles
                    <div className="text-center py-12">
                        <div className="text-5xl mb-4">🍽️</div>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">Especialidades en preparación</h3>
                        <p className="text-gray-600 mb-4 text-sm">Estamos preparando nuestras mejores opciones</p>
                        <button
                            onClick={handleViewFullMenu}
                            className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors"
                        >
                            Ver Menú Completo
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}