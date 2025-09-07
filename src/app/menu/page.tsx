import MenuDynamic from '@/components/MenuDynamic'
import { Suspense } from 'react'

// 🔥 FORZAR RENDERIZADO DINÁMICO
export const dynamic = 'force-dynamic'

export default function MenuPage() {
    return (
        <main className="min-h-screen">
            {/* Header de la página menú */}
            <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 text-white py-20 mt-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">
                        Nuestro <span className="text-orange-400">Menú</span>
                    </h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Hamburguesas artesanales, alitas crujientes, camarones frescos y más.
                        Todo preparado con amor y los mejores ingredientes
                    </p>
                </div>
            </section>

            {/* Menú dinámico con Suspense */}
            <Suspense fallback={
                <div className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-center items-center py-16">
                            <div className="text-center">
                                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500 mx-auto mb-4"></div>
                                <span className="text-xl text-blue-900 font-medium">Cargando menú...</span>
                            </div>
                        </div>
                    </div>
                </div>
            }>
                <MenuDynamic />
            </Suspense>
        </main>
    )
}